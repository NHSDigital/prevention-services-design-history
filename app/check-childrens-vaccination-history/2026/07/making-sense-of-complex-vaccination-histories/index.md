---
title: "Making sense of complex vaccination histories: what we’ve learned so far"
description: What we learned from testing MMR dose schedule designs with SAIS teams, including where our labelling helped clinicians and where it signalled more confidence than the data justified.
date: 2026-07-28
author: Ben Dawson and Martin Wright
---

## The problem

We know from previous research that MMR vaccination records can be hard for SAIS (school age immunisation service) nurses to trust. By the time a child is of school age, their vaccination history can be patchy and incomplete, with records spread across GP practices, CHIS (child health information service) and SAIS teams. As they get older, a child’s records may have picked up coding errors, migration failures, transcription errors, or may simply be missing.

In previous posts we’ve described this data quality problem as the [“Bermuda triangle” of vaccination data](/check-childrens-vaccination-history/2026/04/mapping-childhood-vaccination-data-flows/): vaccination records go into and move between systems but don’t reliably come out the other side intact. Additional vaccination locations like hospitals, clinics and other countries widen the triangle further, emphasising the need for a resilient, robust system that accepts missing, errored or duplicated data as a quality of the system, rather than an exception to be designed around.

The next phase of our project brings in vaccination records from GP surgeries via the NHS Immunisations FHIR API, and helps to solve some of the problems with incomplete records, but it also increases the volume of conflicting and duplicate records and schedule ambiguity that Mavis has to show to clinicians.

Before we began this new phase we wanted to test whether the underlying design was robust enough to support it, particularly where records of doses don’t fit the expected schedule.

An out-of-schedule dose isn’t necessarily a mistake. A child might have been vaccinated early for travel to a high-incidence country, or late because of a missed appointment. What matters is whether we can show this clearly enough for a clinician to make a judgement, without hiding information or implying a decision has already been made for them.

## What we did

We tested early designs for the MMR dose schedule in our Mavis prototype, including a vaccination record table, an encounters table, labelling out-of-schedule records, showing duplicate records and exploring what clinicians might expect if they need to report a problem.

We ran research sessions with 9 SAIS users from two organisations, one of which spans several regional teams, across a range of roles: senior and junior immunisation nurses, programme managers, a team lead and a clinical lead.

| What we included                                            | What we wanted to learn                                                                                                                 |
| ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Showing schedule information as part of vaccination history | Can schedule calculation support clinical decision making?<br>Does it negatively interact with suspected duplicates or missing records? |
| Splitting the vaccination record from encounters            | Does separating administered doses from all clinical encounters help or fragment understanding?                                         |
| Collapsing simple duplicates into a new view                | Does removing duplicated information from the record make it easier to understand?                                                      |
| Report a problem with a record                              | What do users expect from a “report a problem” feature?                                                                                 |

## What we learned

### ‘Out of schedule’ labelling was genuinely useful

Across sessions, showing which doses were out of schedule, and why, was consistently understood and valued. One nurse told us:

> Oh, I like that it’s telling you why that’s out of schedule, that’s new, it’s giving you a clear view.

![The vaccination record table in Mavis, with columns for dose, vaccination date, age and source. The first row is tagged ‘Out of schedule’, with the reason ‘Given before age 12 months’ underneath.](vaccination-record-out-of-schedule.png 'The vaccination record table, showing an out-of-schedule dose alongside the reason it falls outside the schedule.')

This helped with more than comprehension. It supported clinical decisions directly, and it gave staff something concrete to work from in conversations with parents. This is a good, clean validation of an idea we’ve suspected for a while: showing clinicians the full picture, rather than a cleaned-up version of it, is better for their needs.

### But ‘out of schedule’ needed more precision than we anticipated

Showing a child’s age in whole months created a false sense of precision. Nurses read ‘11 months’ as precisely that, rather than an approximation, and a dose given a single day before a child’s first birthday was routinely missed as being only marginally early. As one clinician put it:

> Obviously, the human body doesn’t automatically reject any vaccines before the child turns one. It’s just a point imposed by the schedule.

Adding date of birth to the record helped, but didn’t solve this issue. Nurses were still doing the eligibility calculations in their head, based on the date of birth and the vaccination date information, which was adding workload.

One way to address this would be to show something like ‘given 1 day before 1st birthday’ directly, rather than leaving that calculation to the reader. This fits with what we’ve learned previously from clinicians about age precision for MMR. Age to the day is useful for making a clinical decision and discussing with parents, particularly when a dose is marginally out of schedule. In this context, the NHS convention of displaying the child’s age in whole months is not informative or supportive of clinical decisions and conversations.

![A single row of the vaccination record table, with the age ‘11 months’ circled in red beside an ‘Out of schedule’ tag reading ‘Given before age 12 months’.](date-precision.png 'Age shown in whole months. ‘11 months’ gives no indication of how close the dose was to the 12-month threshold.')

### An important link was going unnoticed

No one, in any session, clicked the vaccination date link to open the vaccination detail page without prompting. When prompted, the page made, in one participant’s words, “all the difference” to understanding the record.

The link, labelled with the date and time of the record, wasn’t signalling that it led anywhere useful. This is a small thing with definite consequences, and it’s likely a problem with the convention rather than something specific to this table, since it was overlooked even by experienced users. We’re going to look into this in more detail, as it has implications across Mavis, and maybe other services too.

### Duplicates were understood, but ‘then what?’

Simple duplicates were noticed and understood quickly, and being able to click through to see their details was appreciated. ‘Echo’ records – where a record comes back to us duplicated, with the same patient, same vaccination but with slightly different dates – were a different story: they were consistently misread as clinical incidents rather than data quality issues, which caused alarm that wasn’t warranted.

We heard two different explanations of what to do next: report the problem and leave it to the source system to fix, or merge the records directly. We need to explore which of these routes is the correct one, and who should have the authority to merge records in the instance that is the necessary outcome, in future work.

### Source labelling told people less than they thought it did

The label “External source such as GP practice” was consistently read as meaning the GP, regardless of where the record actually came from. In reality this label can cover several distinct sources arriving via the NHS Immunisations FHIR API, and that provenance data exists, but it’s hidden behind the simplified label. We’re going to explore this finding further as provenance is a strong signal that clinicians use to assess how reliable a given record is likely to be.

### Teams don’t have time to check all records

In some areas, MMR (and now MMRV) vaccinations are delivered through standalone clinics rather than school sessions, as cohorts in larger cities can be considerably bigger than elsewhere. These teams check records across multiple systems where a child is flagged as missing a dose, but they don’t have time to check for potential duplicates and out-of-schedule doses on top of that. One clinical lead put it plainly:

> Going through whole school cohorts is unworkable if you have to check every child record for duplicates and out-of-schedule doses.

Our findings suggest that directing clinicians to children in their cohort who appear to be missing doses, and flagging those out-of-schedule doses, would help busy teams prioritise and allow them to focus their attention on those records where a clinical decision is needed.

### The encounters table was interesting, but not definitively useful

Nurses reached clinical conclusions from the vaccination record table alone, and didn’t consistently engage with the encounters table, even though they described it as ‘helpful’ when prompted. It seemed that it might be useful for spotting patterns of absence or refusal, but the scenario we tested was somewhat contrived and limited to a single child. It’s hard to know whether a clinician would be likely to check this, or pick up on routine absences if it’s not part of their typical workflow.

![The encounters table in Mavis, headed ‘4 encounters’, with columns for encounter date, age, outcome and source. Outcomes include ‘Vaccinated’, ‘Child absent’ twice, and ‘Consent refused’.](encounters-table.png 'The encounters table, showing all clinical encounters rather than only administered doses, including absences and refusals.')

Our instinct is that this may matter more for vulnerable children or those who’ve been missed by the system, but we need to test it against real data and in more realistic scenarios before deciding whether to keep it.

### MMR versus MMRV distinction mattered less than we expected

Nurses didn’t notice when presented with a record that had been miscoded as MMRV instead of MMR. Their primary concern was whether a child needed to catch up on a dose, not which product had been used. This is a genuine contrast with DTP (diphtheria, tetanus and polio), where the specific antigens matter a great deal to nurses (as we’ve found in related research on tetanus-containing vaccinations).

This distinction may be more important in other contexts such as investigating a clinical incident, or as MMRV becomes more widely used in these cohorts, so we wouldn’t treat this as settled.

### The record doesn’t decide, the clinician does

When something looked uncertain, the default response from the nurse was to check against other sources and call the parents rather than trust the records on screen. Clinicians are so familiar with data quality issues in vaccination records that they treat the record as a starting point. Investigating whether a child is missing doses, using CHIS lookups, calls to GP practices and parents alongside the vaccination record in Mavis.

However, the presence of a ‘Vaccinated’ label in Mavis had the opposite effect, carrying enough authority to halt any further investigation. Nurses didn’t investigate further when the system told them the child was up to date.

> Because he’s up to date we wouldn’t look into it.
> -- Senior immunisation nurse

This is a significant finding, and a risk. If the underlying data is uncertain but our label indicates certainty we may be shutting down investigation. The design challenge we’re left with is how to avoid signalling more confidence than the data justifies.

## What we tested and what was validated

| Tested                                                      | Result                                                         |
| ----------------------------------------------------------- | -------------------------------------------------------------- |
| Showing schedule information as part of vaccination history | Validated                                                      |
| Splitting the vaccination record from encounters            | Partially validated, needs more investigation with real data   |
| Collapsing simple duplicates into a new view                | Validated, for simple duplicates                               |
| Report a problem with a record                              | Validated as a concept, more work needed on how it should work |

## Open design questions

At the end of this phase of testing, we’re left with the following questions and challenges.

Some of these we think we can address through changes to Mavis’ user interface, or tweaks to the way Mavis works in the background, but others are trickier, and will involve a more holistic, service design-driven approach.

We plan to explore a range of design solutions to these challenges and ask clinicians to test these out in both prototypes and in environments which allow them to look at real vaccination record data. This will enable us to answer a range of open design questions, including questions about what users need in these areas:

- **Date precision.** Is it useful to show the age gap to the eligibility threshold directly, rather than age in whole months? Does that increase or reduce workload for clinicians?
- **The vaccination date link.** How do we cue people that this link is worth clicking?
- **Source labelling.** Can we surface more granular source information, so the clinician can see record ‘provenance’ without introducing more uncertainty?
- **Encounters table.** Do we keep exploring this concept? This provides more context which could support clinicians and potentially other staff investigating missed doses before they call parents, but we need to know when and whether this definitely adds value, rather than complexity.
- **Merging and scoring records.** Do we need a merge feature for all duplicates or a way for clinicians to ‘score’ records for quality?
- **Reporting a problem.** Who does this go to: CHIS, GPs, or the primary source? What does the report actually say, and what’s the best way to send it?
- **Flagging at session level.** Should we surface problematic records (children with duplicate records, out-of-schedule doses or ambiguous histories) ahead of a session so that nurses and team leads can prioritise rather than checking everyone? Who should be responsible for working through flagged records: nurses, team leads, admins? And when in the workflow should this happen?
