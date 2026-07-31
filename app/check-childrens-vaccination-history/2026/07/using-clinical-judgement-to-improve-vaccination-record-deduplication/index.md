---
title: Using clinical judgement to improve vaccination record deduplication
description: How we plan to use clinical expertise to evaluate duplicate vaccination records and determine a methodology for selecting a primary record.
date: 2026-07-31
---

In our alpha work on a [Check children’s vaccination history service](https://design-history.prevention-services.nhs.uk/check-childrens-vaccination-history/2026/03/what-is-check-childrens-vaccination-history/) we are learning how to collect, reconcile and display vaccination history to clinicians and parents, starting with MMR (and MMRV) vaccinations.

We want to create a service that allows all providers to have access to a shared vaccination history for all children, no matter what system they are using, and for parents to have access to that same record, no matter who vaccinated their children or where.

## Behind-the-scenes capabilities

In our service design, there are multiple behind-the-scenes capabilities that need to be in place before an accurate picture of history and vaccination status can be presented to a clinician or a parent:

![Diagram of the behind-the-scenes capabilities](./behind-the-scenes.png '**Figure 1:** The behind-the-scenes capabilities for the Check children’s vaccination history service')

We’re exploring each of these, and having sourced and standardised records, we’re currently looking at aspects of deduplication, identifying valid doses and calculating vaccination status.

## Solve in Mavis first, then generalise

We're incubating this work within the Mavis (Manage vaccinations in schools) team, where we have the benefit of daily experience working with clinicians, parents and vaccination data. We aim to learn how best to solve these problems locally in Mavis, before generalising them to help other teams, providers and systems.

We're taking exactly this approach to working out how to handle duplicate vaccination records.

## Reconciling data from multiple sources

SAIS teams using Mavis receive vaccination records through multiple routes:

- they get files of vaccination history from their local CHIS (Child Health Information Services) provider to upload into Mavis
- they get records of new vaccinations given in other settings such as GP practices, community pharmacies and hospitals via Mavis's integration with the Immunisation FHIR API
- they get records of older vaccinations given in other settings as these records are migrated to the Immunisation FHIR API

As a result, we now have about 4.4 million MMR records from CHIS and 4.5 million vaccination records from GP practices loaded into Mavis to inform clinicians running MMR catch-ups for school-age children.

However, as CHIS providers aim to collect vaccination records from GPs, inevitably there is duplication in the resulting combination.

This gives us a perfect opportunity to work through one of our first challenges: how to reconcile records from multiple sources.

## Awash with duplicates

The first step is to understand the extent of duplication between sources. The vast majority of people are supposed to receive two doses of MMR or MMRV. An analysis of MMR record duplication in Mavis shows that:

- 13.5% (about 665,000) of children in Mavis have one MMR record
- 35.8% (1.76 million) of children have two MMR records
- 35.2% (1.74 million) have four records
- 2.4% of children (or almost 120,000) had six or more records

![Screenshot of the MMR record duplication analysis](./all-children-by-number-records.png '**Figure 2:** Percentage of patients by number of MMR records, for all patients in Mavis')

This duplication makes it harder for clinicians to see what vaccinations a child has received, when, and what should happen next. While Mavis's vaccination status logic takes multiple records into account and helps support clinicians to make an assessment, they still have to review the records to understand why a status assessment has been made.

The same analysis showed that when MMR records are deduplicated by only counting one per patient per day:

- 7.1% (about 354,000) of children have one record
- 77.7% (3.87 million) of children have two records
- 0.2% (about 10,000) have four records
- 0.01% (or 325) have six or more

![Screenshot of the deduplicated MMR record analysis](./all-children-by-number-deduped-records.png '**Figure 3:** Percentage of patients by number of MMR records, for all patients in Mavis after same-day deduplication')

In other words, when we group together records of the same vaccination, given on the same day to the same child, the issue of duplication largely goes away.

## Picking a primary record

This grouping takes us part of the way to a duplication solution, but before the next stage in our behind the scenes capabilities (identifying valid doses) can take over, we still need to pick a record to represent the set. Only one of these duplicates can be considered a clinically valid dose, and by collapsing the set to a single record, we can simplify the experience for downstream systems and users.

This also fits with the [FHIR](https://fhir.hl7.org/) standard's approach to linking duplicates via a [Linkage resource](https://fhir.hl7.org/fhir/linkage.html), where multiple records of the same real-world event can be connected with a single record designated as the source.

However, while grouping a set of records for the same day is trivial, picking a record to represent this set is harder. In theory, the source record should be the one that is marked as the "primary source". In practice, this attribute is not always a reliable indicator. Other approaches we have heard in our research involve picking the earliest record, or even the most recent record.

## Learning from clinical judgements

We want to take a different approach.

We think there might be a better way to pick a primary record for a group that factors in the kind of assessment a clinician might make of a record's quality based on the completeness of the record and the values of the fields within the record.

In order to do this we are going to:

- group same-day duplicates together in Mavis's vaccination record for a patient
- present clinical users with an option to pick which record best represents a set of duplicates
- run research sessions with clinical users in which they pick a primary record and describe their rationale for the selection they make

This will give us a dataset of sets of same-day duplicates, each with a primary record to represent them.

This dataset can then be used to evaluate different approaches to selecting a primary record, whether that's using only the primary source field and a date of update, or whether it's a more nuanced evaluation of the completeness and reliability of the record.

In a future post, we will describe the findings of this work, and the result of evaluating different approaches for picking a primary record.
