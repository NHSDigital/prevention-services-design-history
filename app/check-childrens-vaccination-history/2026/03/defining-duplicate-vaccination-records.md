---
title: Defining duplicate vaccination records
description: Working definitions for what we mean by duplicate vaccination records, and why the team is agreeing language before designing solutions.
date: 2026-04-17
---

Check children's vaccination history draws on vaccination records from multiple systems. We know from our work with Manage vaccinations in schools (Mavis) that when you bring data together from different sources, you encounter duplicates – multiple records that may describe the same vaccination event.

Resolving duplicates accurately is important: having multiple redundant records can add friction when making sense of vaccination history, and an incorrect resolution could affect clinical decisions about whether a child needs vaccination.

Duplicates are an unavoidable feature of how vaccination data flows across the NHS, which we’ll explore in a future post.

## Why definitions matter

Without shared definitions, we risk designing and building solutions to different problems without realising it.

Shared definitions give us a common language for harder problems, like:
* how to detect duplicates
* how to resolve them
* who should be responsible for doing so.

Those problems require research, clinical input, and design exploration. Getting the language right first makes that work possible.

## Core definitions

**Vaccination event.** A patient received a dose of a vaccine on a date and time, in a place. It happened in the real world.

**Vaccination record.** A structured entry in a clinical system intended to document a vaccination event.

**Duplicates.** 2 or more vaccination records describing the same real-world vaccination event.

**Simple duplicates.** 2 or more vaccination records describing the same vaccination event, with a sufficient number of corroborating data fields. Simple duplicates can be confidently resolved by a programmatic decision, without human intervention.

For example: 2 records for the same child on the same date, showing the same vaccine, from the same provider. The records agree on enough core details that they can only plausibly describe 1 event.

**Resolvable duplicates.** 2 or more vaccination records that may describe the same vaccination event, where the available data is suggestive but not sufficient for a confident programmatic decision. Resolvable duplicates require human decisions, drawing on context outside the vaccination record such as clinical knowledge, local records, or direct enquiry.

For example: 2 records for the same child showing the same vaccine, recorded a few days apart. The different dates may reflect two vaccinations, or it may be an artefact of how the records were added or shared between systems. A clinician or local team weighs up what the records show, alongside what they know about how those systems behave, to reach a judgement.

**Unresolvable duplicates.** 2 or more vaccination records that may describe the same vaccination event, where the available data is insufficient to confirm or rule it out. These cannot be resolved by machine or human.

For example: 2 records for the same child showing the same vaccine in the same year, both labelled as dose 1. Each system has recorded what it saw as a first dose, but neither has visibility of the other. The records cannot settle whether this is 1 event recorded twice or 2 separate doses.

## Additional concepts

These are less settled than the core definitions. We're including them because they already come up in conversation, and a working definition is more useful than none.

**Confidence.** The degree of certainty that 2 or more records describe the same vaccination event. It might be used to inform decisions about when programmatic resolution is appropriate and when human review is needed.

**Tolerance.** The degree of uncertainty acceptable when resolving duplicates programmatically. The right level of tolerance is likely a policy question, shaped by the clinical risk of an incorrect resolution, rather than a purely technical one.

## Working definitions 

Not every project needs to agree on definitions. But in a domain where the data is imperfect and the decisions have clinical consequences, shared language established early makes harder conversations easier later. It reduces the risk of the team quietly solving different problems, and means disagreements surface as genuine differences of view rather than quirks of language.

The definitions above are working definitions. They may evolve as we learn more. Any change to them should be a conscious, collective decision rather than something that drifts quietly over time.
