---
title: How Mavis determines children’s vaccination statuses
date: 2026-01-12
---

[[toc]]

## Introduction

SAIS teams bring two sets of information into Mavis:

- Lists of children who live, attend school or are registered with a GP within their coverage area
- All of the vaccination records for those children relevant to the school-age programmes

Mavis uses this vaccination history to work out the vaccination status of each child in the area for each programme, to show SAIS teams who to vaccinate.

Every school age child is then assigned one of these statuses:

- Not eligible (too young or old to be vaccinated by SAIS)
- Fully vaccinated
- If not fully vaccinated, one of the following eligible statuses depending on information received from parents:
  - Needs consent
  - Has refusal
  - Needs triage
  - Cannot vaccinate
  - Due [vaccination/nth dose]

Children’s statuses are constantly changing as vaccinations are recorded in Mavis, uploaded from CHIS or published to the Immunisation FHIR API.

Mavis also keeps a record of who was eligible for each programme at the start of the academic year, for reporting purposes.

---

## Children’s flu

### Eligibility criteria for the children’s flu vaccine

All children from age 2 to academic year 11 (or year 13 in SEND schools) are eligible for the children’s flu vaccine each year.

A very small number of children are eligible for a second dose one month later; if they are:

- under 9,
- in a clinical risk group or living in a household with someone who is immunosuppressed, and
- receiving their first ever flu vaccination

SAIS only vaccinate children from Reception upwards; 2 and 3 year olds are vaccinated by GPs or pharmacies. SAIS teams do not offer second doses.

Vaccinated
: Any child given one dose of flu after 1 September in a particular year

Eligible
: All other children in reception to year 11 (or year 13 and attending a SEND school)

Mavis typically sources information about schools from the Department for Education’s Get Information about Schools (GIAS) service, but SEND information is managed manually by SAIS teams and not sourced from GIAS.

> [!NOTE]
> [Influenza: the green book, chapter 19](https://assets.publishing.service.gov.uk/media/6838317b5150d70c85aafab9/Green-book-chapter-19-influenza-28May2025.pdf)\
> PDF, 598 KB, 30 pages

### Future flu improvements

In the future, we could show eligibility for a second dose of the children’s flu vaccine.

To do this we would need to access:

- complete flu vaccination history for all vaccinations given to children under age nine (flu vaccination records dating back to 2019),
- Whether children are part of a clinically at-risk group, sourced from either:
- National data such as that used by Cohorting as a Service (CaaS)
- Asking about all the relevant clinically at-risk conditions on the parent consent form so that nurses can triage this to determine eligibility

As SAIS don’t give second doses, we have not prioritised this work.

---

## Human Papillomavirus (HPV)

### Eligibility criteria for the HPV vaccine

Young people are eligible for a single dose of HPV vaccine from the 1st September on the year that they enter year 8 until they turn 25. SAIS offer HPV vaccinations from year 8 to year 11.

Young people who are immune-compromised or HIV-positive are eligible for:

- a 2nd dose given 1 month after the 1st
- and 3rd dose given 3 months after the 2nd

With the course ideally completed within a year of the first dose.

Some young people have already received the HPV vaccine before year 8 in another country, as HPV vaccines are licensed from the age of 9. They do not need a dose in year 8.

Before September 2023, young people were eligible for two doses of HPV vaccine given at least 6 months apart. They are now in year 10 and above. Those who only had one dose at the time do not need any further doses.

Vaccinated
: Any child given a dose of an HPV vaccine at any age.

Eligible
: All other children between year 8 and year 11.

Mavis does not show eligibility for 2nd and 3rd doses of HPV. SAIS teams currently need to track this outside Mavis.

> [!NOTE]
> [Human papillomavirus (HPV): the green book, chapter 18a](https://assets.publishing.service.gov.uk/media/649032b6b32b9e000ca969a7/HPV-green-book-chapter-18a-June-2023.pdf)\
> PDF, 199 KB, 21 pages

### Future HPV improvements

In the future, we plan to:

- Show eligibility for 2nd and 3rd doses of HPV. Where a parent responds to a health question to say that their child is immune-suppressed, nurses will be able to select during triage that the child is due the three-dose course. The child’s eligibility status will be ‘eligible for 1st/2nd/3rd dose’ depending on vaccination records uploaded.
- Consider vaccination records where the child was less than 9 years of age at the time to be invalid
- Extend eligibility to young people in year 12 and 13 who can give their own consent

---

## Meningitis A, C, W and Y (MenACWY)

### Eligibility criteria for the MenACWY vaccine

Young people are eligible for a single dose of MenACWY vaccine from the 1st September on the year that they enter year 9 until they turn 25. SAIS offer MenACWY vaccinations from year 8 to year 11.

Some young people have already received the MenACWY vaccine before year 9, either in another country or as a travel vaccine. They do not need a dose in year 9.

MenACWY is a single dose course - vaccines protecting against Meningitis C given in the infant vaccination programme are not relevant.

Vaccinated
: Any child who has had a dose of the MenACWY vaccine over age 10.

Eligible
: All other children between year 9 and year 11.

> [!NOTE]
> [Meningococcal: the green book, chapter 22](https://assets.publishing.service.gov.uk/media/6849adb83a2aa5ba84d1df71/Meningococcal-green_book_chapter-22-10-6-25.pdf)\
> PDF, 256 KB, 16 pages

### Future MenACWY improvements

In the future, we plan to:

- Extend eligibility to young people in year 12 and 13 who can give their own consent

---

## 3-in-1 Teenage booster (Td/IPV)

### Eligibility criteria for the Td/IPV vaccine

The teenage booster is the last dose of a course of tetanus-toxoid containing vaccines (TTCV) given from infancy.

Before January 2026, the NHS schedule included three primary doses given at 8, 12 and 16 weeks, and 2 booster doses given at age 3 and in school year 9.

From January 2026, the schedule has changed to include an additional booster dose at 18 months, making the teenage booster the third booster (or dose 6). This is irrelevant for Mavis as affected children won’t be eligible for the teenage booster until 2038.

Different vaccines are given throughout the course:

- 3-dose primary course given at 8, 12 and 16 weeks:
  - Children born before 1 August 2017 received the 5-in-1 vaccine, which protects against diphtheria, tetanus, pertussis, polio and Haemophilus influenzae type b (Hib)
  - Children born on or after 1 August 2017 received the 6-in-1 vaccine, which also gives protection from Hepatitis B
- 1st booster (the 4-in-1 pre-school booster) given at 3 years 4 months protects against diphtheria, tetanus, pertussis and polio
- 2nd booster dose (the 3-in-1 teenage booster or Td/IPV) given in year 9 protects against diphtheria, tetanus and polio

If a child missed the routine doses they can still have the 6-in-1 for the primary course and the 4-in-1 booster up to age 10.

After age 10, they can have 3 doses of the 3-in-1 one month apart to complete their primary course, then 2 additional booster doses of the 3-in-1, the first at least a year after the primary course and the second at least 5 years after the first.

There is no maximum age for catch ups: adults of any age need to have received at least 5 valid TTCV doses.

Additional complexities:

- Many children move to England from countries where the 6 dose schedule is already routine and had a 4th dose of the 6-in-1 at 18 months. They still need the teenage booster in year 9 even though it is their sixth dose / third booster.
- Children who were aged 1 to 11 and living in London in 2022 or 2023 may have been given an additional booster dose of the 6-in-1, 4-in-1 vaccine or 3-in-1 (depending on their age at the time) in response to the London Polio outbreak. They still need the teenage booster in year 9 even though it is their sixth dose
- Young people who are pregnant may be given Tdap (protecting against Tetanus, Diphtheria and Pertussis). They still need the teenage booster for full protection against Polio.
- Children may be given additional doses of the 4-in-1 or 3-in-1 as a travel vaccine or in A&E if they have a tetanus-prone wound and their vaccination history cannot easily be confirmed. If they were given Td/IPV (not Tdap):
  - as their second booster and at least 5 years after the first booster, then they don’t need the teenage booster.
  - as their second booster but less than 5 years after their first or they had the 3-in-1 as their first booster, then they need the teenage booster, but 5 years after their first booster

This means that the number of doses a child has had and whether they need another dose now are not straightforwardly related. Children can need another dose now even if they have had 5, or they can have had only 3 or 4 doses but not be ready for another for several years.

SAIS teams typically give only one dose of the 3-in-1, to young people in year 9 to 11 who are eligible for one or more doses. Where young people need further doses, this is often a GP referral.

We have not yet designed or assured how we could store children’s entire TTCV history or use this to determine eligibility for a dose of Td/IPV in year 9, 10 or 11.

Currently, only doses of Td/IPV can be uploaded into Mavis.

Vaccinated
: Any child who has:

    - a dose of Td/IPV vaccination recorded directly into Mavis given after age 10
    - a dose of Td/IPV vaccination with dose sequence 5 given after age 10

Eligible
: All other children in year 9 to 11 are initially considered eligible for the teenage booster and sent a consent request, but during triage, a nurse can check their vaccination history in CHIS or their EPR and record if their vaccination needs to be delayed.

When recording vaccinations for Td/IPV, the default is dose 5, and nurses need to adjust this if a different dose is being given.

Mavis does not show eligibility for any subsequent doses after one dose is recorded in Mavis.

> [!NOTE]
> [Tetanus: the green book, chapter 30](https://assets.publishing.service.gov.uk/media/683dceaa81deb72cce2680fc/Tetanus-green_book-chapter-30-02-06-25.pdf)\
> PDF, 287 KB, 17 pages

### Future Td/IPV improvements

In the future, we plan to:

- Accept complete TTCV vaccination history for children (6, 5 and 4 in one)
- Show whether a young person is eligible for their primary doses, first, second or third booster.
- Show when further doses of Td/IPV will be required 5 years after the SAIS dose and prompt the SAIS team to take appropriate action such as notify the child’s GP
- Extend eligibility to young people in year 12 and 13 who can give their own consent

---

## Measles, Mumps, Rubella and Varicella (MMRV)

### Eligibility criteria for MMRV vaccination

Before January 2026, the NHS schedule included two doses of MMR at age 12 months and 3 years 4 months.

From January 2026, both the vaccine and the schedule changed; now, children are due two doses of MMRV (including protection against chickenpox) at 12 and 18 months.

Anyone of any age who has not received two doses of MMR is eligible for the vaccine as a catch up. If they were born before 1st Jan 2020, they are eligible for MMR, and if they were born on or after 1 Jan 2020 then they are eligible for MMRV.

In some countries, Measles, Mumps and Rubella vaccinations can be given individually rather than as a combined vaccine. Children who have received any doses of any single vaccine or non-MMR combined vaccine (such as MR) are still eligible for two doses of MMR. Children who have received two doses of MMRV do not need MMR.

SAIS teams can give catch-up MMR(V) vaccinations to children from Reception to year 11.

Fully vaccinated
: Any child who has both:

    - a dose of MMR or MMRV given on or after their first birthday
    - a dose of MMR or MMRV given from 15 months and at least 28 days after the first dose

Eligible for 2nd dose
: Any child who has

    - a dose of MMR or MMRV given on or after their first birthday
    - no other doses, or any other doses given before age 15 months or within 28 days of their first dose

Eligible for 1st dose
: Any other child between reception and year 11

> [!NOTE]
> [Measles: the green book, chapter 21](https://assets.publishing.service.gov.uk/media/69304d4acdec734f4dff41b1/Green-book-on-immunisation-measles-chapter-21.pdf)\
> PDF, 382 KB, 26 pages

### Future MMRV improvements

In the future, we plan to:

- Extend eligibility to young people in year 12 and 13 who can give their own consent
