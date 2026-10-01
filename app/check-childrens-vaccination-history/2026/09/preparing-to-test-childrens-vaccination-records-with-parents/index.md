---
title: Preparing to test children’s vaccination records with parents
description: How we designed a simple MMR vaccination status and careful wording to show parents their children’s records, without claiming more than the record can support.
date: 2026-09-30
author: Martin Wright
---

In our alpha, we’re investigating MMR vaccination history. Our next step is a controlled test where parents see their own children’s records, so we can test our assumptions with real data.

First, we had to design what they will see: a status that tells them whether anything needs to happen, and wording that describes what the record shows without claiming more than it can support.

## The status model

From our experience working with clinicians and parents through Mavis, we know the most important information is vaccination status: whether a child is up to date with their vaccinations or not, and what needs to happen next.

Determining status is a calculation. We use 3 pieces of data:

- the child’s date of birth
- the doses we have on record
- the vaccination schedule for their age

We looked across NHS and government services for a pattern that shows a simple answer calculated from several factors. NHS screening programmes, vehicle safety recalls and flood risk reports were the closest we found. All of them simplify a complex situation by sorting it into categories. We started with the same assumption: a red, amber and green model.

We assumed there was a middle ground between ‘green’ (everything is fine) and ‘red’ (something needs addressing). Amber was for doses that are due soon, or overdue in a way that isn’t yet a concern. For example, a child in the school year when the school immunisation service is likely to give the dose.

It quickly became clear that we couldn’t reliably identify amber from what we can see. To judge whether a dose is overdue in a way that matters, we would have needed to understand what is normal for each GP practice, child health information service (CHIS) and school age immunisation service (SAIS). We don’t have that knowledge, and getting it wrong could create demand where there shouldn’t be any. So we simplified the model, removing amber.

The model that remains has 2 states and no grey areas: based on the records we hold, either one or more doses are due, or nothing is due. It makes no judgement about the record itself: what might be missing, why, or what is normal locally. It’s as accurate as we can make it. Everything else is clinical judgement or local logistics, and belongs with people who can see the full picture of the child.

The model changes state on the day the schedule says a dose is due. There is no grace period and no idea of ‘overdue’. A child 1 day past the date and a 16-year-old with no records are in the same state.

## Making the status more informative for parents

We use our binary model to make decisions, for example, whether to invite a child to get vaccinated, but to ensure the parent takes the appropriate action, the language behind it has to be more nuanced.

It must give meaning to the record compared with the schedule in a way that helps the parent understand and act, without claiming anything the record can’t support.

There are 2 significant risks:

- showing a child as up to date when the record doesn’t support it, meaning they risk missing out on protection
- claiming a child is missing a dose that they have had, leading to unnecessary parental contact and risk of overvaccinating

We address the first risk through our status model and dose validity. A dose only counts if it meets the schedule’s rules, so a record that exists but doesn’t count won’t make a child up to date.

We address the second risk through our principle: the absence of a record is not the absence of a vaccination. The language, supported by the design, has to hold that line everywhere.

### Status wording

3 rules decide which status a parent sees:

- we hold every dose expected for the child’s age: **Up to date**
- 2 doses are expected and we hold none: **No record of any doses**
- anything else: **May be missing a dose**

On the page we don’t use ‘overdue’, ‘fully vaccinated’, ‘protected’ or ‘unprotected’. Each of these makes a claim about the child that the record can’t support.

We use ‘up to date’ instead of ‘fully vaccinated’. ‘Fully vaccinated’ is an absolute claim that we can’t stand by, especially as vaccination schedules can change and what was previously considered covered may no longer be so. ‘Up to date’ makes no claim about protection or coverage. It confirms that, based on the records we hold, nothing is due. ‘Up to date’ also matches language nurses and SAIS teams use.

‘May be missing a dose’ was a deliberate choice. ‘We do not have a record of a dose’ describes the record more precisely, but we were concerned it suggested the gap was ours to fix. ‘May be missing a dose’ prompts the parent to act, without claiming any certainty that the child missed a vaccination. ‘May be missing a dose’ also reflects clinician language, as they are used to dealing with records that are known to be unreliable.

Both warning statements prompt the parent to act. They differ in the size of the problem they describe:

- ‘May be missing a dose’ points to a gap at dose level
- ‘No record of any doses’ points to a gap in the whole record: either the record is missing or the vaccinations are, and both need addressing

We use ‘No record of any doses’ only when a child should have had both doses and we hold none. A younger child with no record is likely to be known to NHS services through other routine contact, so we treat their gap as a single missing dose. But both statements lead to the same resolution: speak to a clinician, usually at their GP surgery or SAIS.

The status is only the headline. Underneath it, we’re exploring supporting content that explains what the status means for the child’s age and what happens next.

### Why records may be missing

There’s no single complete record of children’s vaccinations, so when a dose appears to be missing we can’t be sure why. The child may genuinely not have had it. But we know from our research into data quality that the dose may have been given and isn’t showing because:

- the child’s GP practice changed systems and the record was lost, or split into separate measles, mumps and rubella entries that no longer count as an MMR dose
- the record didn’t follow the child when they moved GP practice or area
- the child moved in from abroad and their vaccination history was never shared
- the child’s overseas records were lacking details or were hard to interpret
- the vaccination date was recorded inaccurately, for example as the date the child registered with the practice, the date the record was entered, or the child’s date of birth
- the dose was given in hospital and never reached the child’s GP or CHIS record
- the child was vaccinated in a school, but it was never added to the child’s GP record
- the parent paid privately for single measles, mumps and rubella vaccines, which don’t count as MMR in most records
- a vaccination given recently hasn’t reached us yet

Parents may know parts of the story that the record doesn’t. ‘May be missing a dose’ accepts that the system has a limited picture compared to parents who can refer to their own memories or written records, such as the Red Book. Whatever the reason, the next step is to speak to a clinician who can look at the fuller picture.

## Visual components

![A green success banner headed ‘Up to date’ with a tick, reading ‘Maya is up to date with MMR (measles, mumps and rubella) vaccinations’.](./status-up-to-date.png '**Figure 1:** The success banner, used for the ‘Up to date’ status')

![A yellow warning banner headed ‘May be missing a dose’, reading ‘Theo may be missing a dose of the MMR (measles, mumps and rubella) vaccine.’](./status-warning.png '**Figure 2:** The warning banner, used for the ‘May be missing a dose’ and ‘No record of any doses’ statuses')

Having 2 model states meant we could use existing components from the NHS design system. We show ‘Up to date’ with the success banner, and the other 2 statements with the warning banner.

### Using the vaccination schedule to give meaning

![A dose card reading ‘2nd dose usually given from 3 years 4 months’, with a red cross beside ‘Not given’ and the text ‘We do not have a record of this dose.’](./dose-missing-against-schedule.png '**Figure 3:** A missing dose shown against the schedule')

After showing the status, we show the doses themselves. We map these onto the schedule: which doses were given, and whether or not they count towards a vaccination status.

Vaccination records are only a record of what has happened. They don’t show what should have happened, or what is still to come. So we used the structure of the vaccination schedule and the child’s date of birth to work out which doses the child should have had for their age, and which are still to come, and we show both on the page. This means we can communicate the absence of records as clearly as the presence of records.

For doses a child isn’t old enough for yet, we show when they’re usually given, based on the schedule. For example, ‘1st dose usually given at 12 months’.

We show doses in a consistent shape in every situation:

- the schedule, with records slotted in against it where they exist
- a separate area for extra doses we can’t map to the schedule, which is a known reality of working with vaccination records

If a dose record is missing, we talk about the record, not the child. ‘We do not have a record of this dose’ is more specific and more honest than ‘this dose was missed’, and it better reflects the reality of vaccination record keeping. The outcome in both cases is the same: talk to a clinician and let them make a clinical judgement about the best next step for the child.

The dose detail and the status headline do different jobs. The dose detail stays strictly honest about the record. The status headline is worded to prompt the parent to act if necessary.

### Caveats

Every vaccination status includes caveats:

“This record shows the information we currently have. Recent vaccinations may not have reached us yet, and vaccinations given by another service or in another country may not be included.”

![Text reading ‘This record shows the information we currently have. Recent vaccinations may not have reached us yet, and vaccinations given by another service or in another country may not be included. If anything looks wrong or missing, contact help and support.’](./caveats.png '**Figure 4:** The caveats shown with every vaccination status, with a link to help and support')

We link to support for anyone who needs to question or update the information shown.

## Testing so far and what’s next

We tested these designs with a small sample of parents in a hallway-style usability test, using fictional records. This helped us refine the language and ensure that the records were understandable.

But it also confirmed our biggest assumption: the real test needs real vaccination records and real data. Parents could read the records, but found it hard to engage with the record of imaginary children: the stakes were too low, and the effort too high.

Parents assumed that NHS systems were joined up and their own child’s vaccination record would be accurate and complete, when, in reality, it may not be. With a fictional record, they had nothing to check it against, so this assumption went untested. This assumption was common amongst the parents we spoke to, but may not be amongst some groups such as families who have moved to England from abroad, where the inconsistencies are often more obvious.

The next phase of testing will involve observing parents reviewing their children’s real vaccination records in a carefully controlled way. The aim of this research is to understand whether parents can make sense of their child’s vaccination record as presented, including where that record contains gaps, errors or inconsistencies.

In testing with real records, we want to learn:

- whether parents understand what the status means for their child
- whether they take a proportionate next step
- whether the design creates contact with GPs or SAIS teams that didn’t need to happen
- whether parents read ‘May be missing a dose’ as ‘your child missed a dose’
- how parents who chose separate measles, mumps and rubella vaccines respond to being told an MMR dose may be missing
- what information parents need in order to understand their child’s vaccination history, and what would give them confidence that the record is accurate

The model is deliberately simple, and we think it is as accurate as it can be. What we don’t yet know is whether that simplicity translates into a workable service.

We’ve been deliberately conservative. Telling a parent their child is unprotected and should see their GP urgently would over-assert what the record shows. A GP talking to a 16-year-old with no MMR record might be far more direct. We want to find out whether we should move closer to that, even when the record alone can’t support it.

For school-age children, the next step directs parents to their GP or their SAIS. GPs are responsible for the record, but SAIS teams deliver school vaccinations and contact parents about record issues. Sending every parent to their GP would put demand in the wrong place.

This is an open question. We don’t know whether SAIS teams have capacity for these enquiries, and we suspect many parents don’t know what a SAIS is, or how to find and contact theirs.

## Expanding to more programmes

Clinicians and admin staff make sense of a child’s vaccination history using the whole record. They can see other vaccinations, and they can look in GP systems and CHIS records to put the history together. Our page can’t do that. For now it only sees MMR.

As we add more vaccination programmes, it will see more, but it still won’t see inside GP systems or CHIS records. That’s why every warning state points parents to a clinician. The page can tell a parent that something in the record needs looking at. Only someone with the full picture can say what it means for their child.

When we add more programmes, we’ll look again at whether a child’s wider vaccination history can help us:

- understand a missing MMR record: a child with all their other vaccinations is a very different signal from a child with none
- further refine the language
- get the parent and their child to the right outcome
