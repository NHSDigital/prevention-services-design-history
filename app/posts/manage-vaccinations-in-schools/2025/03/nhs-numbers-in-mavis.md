---
title: How NHS numbers are used in Mavis
date: 2025-03-20
---

## Cohort records

SAIS teams initially upload records for their eligible cohort into Mavis. These can be sourced from CHIS systems, in which case NHS numbers will be present, or from Local Authorities or schools, in which case they will not.

Where records are uploaded without NHS numbers, Mavis performs an exact match NHS number lookup in PDS. When an NHS number can’t be found in PDS, this is flagged to the SAIS team to look up on the spine.

We believe that implementing more complex query logic can improve Mavis’s PDS match rate and  reduce this manual work - this work is currently at the top of our backlog.

## Consent responses

When parents fill out a consent response, Mavis does not ask for an NHS number. We made this design decision guided by research, during which parents told us that they didn’t know their child’s NHS number and might decide to go and hunt through paper documents to find it at this point. If even 10% of parents drop out of the consent journey because they intend to find out their child’s NHS number and then forget to return, this could have a significant impact on response rates.

Instead, Mavis performs an exact match NHS number lookup in PDS for all consent responses. Where an NHS number can’t be found, Mavis tries to get a match to the SAIS team’s cohort records based on demographic details (name, date of birth, postcode, school) instead. Where this also fails, a member of the SAIS team is prompted to manually match to the right cohort record.

Here, we had to make a trade off between parent pain points and staff pain points and concluded that the staff pain point was the least damaging to the service overall. We could potentially look at an A/B test to determine whether including an NHS number question affects response rates.

## Downstream reporting

NHS numbers are present in Mavis reports to CHIS and GPs, although they are not mandatory.
