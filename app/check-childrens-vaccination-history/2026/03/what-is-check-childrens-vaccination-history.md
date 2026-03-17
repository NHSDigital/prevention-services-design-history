---
title: What is check children's vaccination history?
description: An introduction to our alpha project exploring how to collect, reconcile and display vaccination history to clinicians and parents
date: 2026-03-17
---

Check children's vaccination history is an alpha project exploring how to collect, reconcile and display vaccination history to clinicians and parents.

## The problem

No single system holds a complete vaccination record for a child. Records are spread across GP systems, CHIS (Children's Health Information Service), SAIS (School Age Immunisation Service) teams and other systems. Each captures a different part of the picture, and each has blind spots.

Data flows between providers and systems are meant to fill the gaps, but are unreliable and create new problems of their own.

The result is fragmented, inconsistent records that don't give a clear picture of vaccination coverage. Catch-up campaigns over-invite children who are already vaccinated. Parents lose trust. Children risk unnecessary repeat vaccination. And at a population level, patchy coverage data makes it hard to spot where genuine gaps are forming.

## What we are exploring

We're starting with MMR, using records already in Mavis (Manage vaccinations in schools). These records are predominantly historical records from CHIS. We'll be able to add GP records soon via the Immunisations FHIR API, when MMR history data has been migrated from DPS.

We want to understand the existing data quality problems before we add more sources and make them harder to unpick.

Our three aims are to:

* Understand common problems in MMR records from CHIS and GP systems
* Explore how to reconcile fragmented records into something coherent and reliable
* Work out how a consolidated record can best be used by local teams and national systems.

## Our approach

Start small, prototype, test and learn. We're limiting scope to MMR histories for a small number of child records in Mavis, focused on point-of-care decision support and informing parents.

We've started by recruiting CHIS leads to help us understand the data quality problems firsthand. Key questions we're exploring are what types of problems exist in MMR records and why, how errors are currently identified and handled, and what we should expect when GP and CHIS data is combined.

From there we'll:

* Bring in parents and families to understand when and why accurate vaccination history matters to them, and test prototypes with realistic data.
* Work with SAIS teams and clinicians to understand how to present vaccination history in a way that supports clinical decision-making.
* Talk to stakeholders across the NHS landscape, including teams working on vaccination history in the NHS App, to understand where this work fits and avoid duplicating effort.

The longer-term shape is: understand individual records deeply, prototype ways to cleanse and surface them, build feedback loops, then work out how a consolidated record can be shared more widely and extended to other vaccines.

## Design history

We'll use this design history to share what we find and what we build as the alpha progresses.