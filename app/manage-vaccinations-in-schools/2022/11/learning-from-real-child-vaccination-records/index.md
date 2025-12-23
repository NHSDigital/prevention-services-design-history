---
title: Learning from real vaccination records of 3 kids
date: 2022-11-29
screenshots:
  items:
    - The red book
    - Das Impfbuch (German vaccinations book)
    - Data extract from a CHIS system (CarePlus)
    - Data extract from a GP practice system (EMIS)
    - GP practice vaccinations record in the NHS app
    - A snippet from the consolidated record
tags:
  - user research
---

## How vaccinations are recorded

Children’s vaccinations are recorded and duplicated in multiple places, such as:

- records kept by the parents/guardians (e.g. [the red book](#the-red-book) or [the German equivalent](#das-impfbuch-german-vaccinations-book))
- GP practice systems
- the IT systems of child health information services (CHIS)

The GP vaccination records are commonly available to patients via the NHS app.

We wanted to better understand:

- how well data is being shared between GP practices and the local CHIS
- how well data is being shared between between school aged immunisation services (SAIS) and CHIS
- how a child’s vaccination data follows them when they move around the country

## Designing with data

[To design effectively, we needed a deep understanding of real service data](https://www.gov.uk/service-manual/design/designing-with-data-an-introduction). We looked at getting analytical access to anonymous versions of GP and CHIS vaccination records, but realised that getting that access would be a lengthy process.

To allow us to learn while the access to anonymous mass data was being sorted out, we decided to look at (anonymous) records belonging to team members and their children.

## Looking at individual records

One team member with 3 kids (2 primary school age, 1 secondary school age):

- obtained copies of their kids’ vaccinations records from their GP and their local CHIS
- dug out their own paper-based records (several red books, and having lived abroad, a German ‘Impfbuch’)
- donated anonymised versions of the source data to the team
- reconciled everything to create a single, master vaccination record for each child

To avoid medical jargon and acronyms, the reconciled vaccination record included [the vaccine names from NHS.UK](https://www.nhs.uk/conditions/vaccinations/nhs-vaccinations-and-when-to-have-them/) alongside the record entries from the GP, CHIS and red book records records.

[The reconciled record looked like this](#a-snippet-from-the-consolidated-record).

### How to request CHIS records

1. Find out who your local CHIS is, from your GP or local school aged immunisation team
2. Find a contact for them
3. Submit a written request for the data
4. Verify your identity

## Covered scenarios

The vaccination records included:

- vaccinations given in many settings
  - at GP practices
  - in school by SAIS teams
  - in hospital by hospital teams
  - at home by hospital teams
  - at community pharmacies
  - at vaccination centres
- vaccinations done abroad and then digitised in England
- vaccination data moving between regions and different GP practices
- NHS-funded and privately funded vaccinations
- vaccinations given for a variety of reasons
  - routine
  - travel vaccinations
  - extra vaccines for at-risk children
  - early doses and boosters given as part of outbreak response
  - as part of clinical trials

## Findings

### Statistics

According to the records, the 3 children had collectively received 67 vaccinations to date.

| Source    | Present & accurate | Incomplete or with errors | Missing | Total |
| --------- | ------------------ | ------------------------- | ------- | ----- |
| Red book  | 62 (93%)           | 0 (0%)                    | 5 (7%)  | 67    |
| GP record | 53 (79%)           | 5 (7%)                    | 9 (13%) | 67    |
| CHIS      | 57 (85%)           | 5 (7%)                    | 5 (7%)  | 67    |

### Missing records

#### From the red book

The 5 vaccinations missing from the red books were all seasonal flu given in school, when the parents (and the red books) weren’t present.

For 2 chickenpox vaccinations, (easily lost) vaccination slips were tucked into the books, instead of being handwritten in.

#### From GP records

9 vaccinations were missing from the GP records:

- 3 flu vaccinations given in school (although these were present in the CHIS records)
- 2 chickenpox vaccinations given privately at a community pharmacy (Boots)
- 2 extra polio doses given at a vaccination centre several days before the GP records were pulled. They were present within the CHIS records, so it is possible that either the CHIS hadn’t yet shared the data with the GP practice, or the GP practice hadn’t imported them yet.
- 2 vaccines that were given as part of a medical trial. The trial was double blind with one placebo given for every two vaccinations, so the children could have received placebos. These vaccinations were only recorded in the red book. Unless the parents ever contact the study authors, they may never find out what was administered.

#### From CHIS records

5 vaccinations were missing from the CHIS records:

- 1 tick-borne encephalitis travel vaccination given at the GP practice
- 2 chickenpox vaccinations given at a community pharmacy (see above)
- 2 vaccines that were given as part of a medical trial (see above)

### Errors or incomplete records

#### In the GP records

5 records contained errors:

- 2 6-in-1 vaccinations were recorded as 5-in-1 vaccinations, so the HepB part wasn’t captured.
- 1 chickenpox 2nd dose was incorrectly coded as 1st dose
- 2 doses of the tick-borne encephalitis (TBE) travel vaccine were incorrectly recorded as Japanese encephalitis, so despite the same vaccine brand being given 3 times, the digital record looked like this:
  - 1st dose of Japanese encephalitis vaccine
  - 2nd dose of tick-borne encephalitis vaccine
  - 3rd dose of Japanese encephalitis vaccine

It was possible to catch and investigate these discrepancies because the vaccine brand name was recorded in the red book.

Such errors in recording will make it much harder to automate answering questions like

- am I up to date with my vaccinations?
- what level of protection do I have against this disease right now?

#### In the CHIS records

CHIS records inherited the same 5 errors from the GP records (see above).

The CHIS’s ‘venue’ field was wrongly showing as the GP in many cases:

- for a COVID-19 vaccination that happened at a vaccination centre
- for vaccinations that happened abroad or at an out-of-area GP. This may have been caused by manual re-keying of that information at the children’s current GP practice
- for some SAIS vaccines, despite them being given in school
- for routine vaccinations that were administered in the home by hospital nurses (it’s unclear how the records would have been reported to the GP)

#### Vaccine product name not appearing on GP and CHIS printouts

The red book records the vaccine product names (e.g. ‘Infanrix hexa’). The GP and CHIS printouts, and the NHS app, didn’t show the vaccine product name (but perhaps this information is still stored in the source systems).

Without the vaccine product name, it would have been impossible to spot some of the mistakes in the digital recording, nor be in a position to correct them.

#### Vaccine metadata often missing

All GP records contained the date and vaccine type, but some additionally included:

- manufacturer
- batch number
- injection site
- expiry date

There wasn’t an obvious pattern for this information being present or absent, although newer records were more likely to have this metadata.

CHIS recorded batch numbers for only a handful of vaccinations.

### What was confusing or unexpected

#### Jargon-heavy language

The vaccine names in the GP records (e.g. ‘1st dipht tet acell pertus, haem influ b, inactiv polio vacc’) were cryptic and full of medical jargon. They required Googling to recognise and understand. Mapping the GP names across to [much the simpler language used on NHS.UK](https://www.nhs.uk/conditions/vaccinations/nhs-vaccinations-and-when-to-have-them/) helped enormously with the analysis.

#### Vaccinations recorded across multiple CHIS and GP entries

A single 6-in-1 vaccine injection appears to be recorded as:

- three entries in CHIS records
- two entries in the GP records.

#### Phantom red book records

The red books had 2 ‘phantom’ flu jab recorded on days when a SAIS team was supposed to come to the child’s school, but those jabs were absent from the GP and CHIS records. It’s unclear whether:

- the red book entries were wrong (perhaps if there was confusion as to whether the child was actually vaccinated on that day or not, or some other miscommunication between the parents and the school), or
- the digital records had gone missing for some reason.

#### Understanding deviations from routine schedules

The records showed the 2nd MMR dose being given ahead of schedule at 2 years, instead of at 3 years 4 months. After lots of Googling and reflection, the parents eventually remembered that the deviation happened in response to a local measles outbreak. This explanation wasn’t captured anywhere, and would eventually be lost in the mists of time.
