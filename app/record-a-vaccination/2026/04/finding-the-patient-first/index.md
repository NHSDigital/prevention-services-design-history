---
title: Finding the patient first
description: Why we’ve changed the order of questions when recording vaccinations
date: 2026-04-09
tags:
  - questions
  - ordering
---

When we redesigned the interface for recording vaccinations to [ask fewer, better questions](/record-a-vaccination/2025/03/asking-fewer-better-questions/), we also changed the order in which the questions were asked.

We’ve since learnt from our [customer experience survey](/record-a-vaccination/2025/03/asking-fewer-better-questions/) and from [visiting London pharmacies](/record-a-vaccination/2025/12/london-pharmacy-research/) that some users have found one aspect of the new order to be frustrating.

To address this, we have now reordered the new interface, so that the patient’s details and vaccination history are shown earlier.

## Background

When we set out to redesign the recording interface back in late 2024, a lot of our thinking was about optimising for vaccination clinics for COVID-19, flu or pertussis, where a lot of patients would all be given the same vaccine by the same vaccinator in the same location.

Our [initial design sprint](/record-a-vaccination/2024/11/design-sprint-sessions/) explored the idea of setting up a ‘session’, in which all of the common questions would be answered. Once this was done, you’d then select or find the patient, and answer only the questions which could differ per person, such as how they consent and which arm the injection was in.

As this design developed, we de-scoped the concept of sessions for now, but kept the rough order of questions, with the common ones coming first.

Once the first vaccination has been recorded, we then ask users if they’d like to [record the same vaccination for another patient](/record-a-vaccination/2025/09/making-it-easier-to-record-next-vaccination/), and if so, we skip the common questions.

This diagram shows the flow:

![Diagram showing a flow with a first set of questions labelled ‘Find a patient and review history’, followed by ‘Vaccination date, location, vaccinator, vaccine type and batch’, then ‘Estimated due date (pregnancy), consent, injection site’, then ‘Check’ and ‘Done’. Then an arrow leads from the ‘Done’ screen to the group labelled ‘Find a patient’, and another arrow shows the ‘Vaccination date, location, vaccinator, vaccine type and batch’ group being skipped for the next patient.](question-order-before.png "The question order that we first launched with")

## Feedback

We tested the redesigned journey in user research sessions. Whilst we gained valuable feedback on some of the details, we did not observe any issues or hear any feedback on the order.

However, after launching the new interface and during [a period of dual running it with the old interface](/record-a-vaccination/2025/10/how-we-told-users-about-a-change-to-the-interface/), we started to receive feedback and user needs not previously discovered.

In particularly, some users mentioned that it was useful to check the patient details in order to make sure they are eligible for the vaccination. For example, one user said:

> You put all the data in… and then discover that the
patient wasn’t actually eligible for it!

This was news to us, as our previous research had indicated that checking eligibility was done verbally before even starting to prepare and record the vaccination.

The patient details and vaccination history we show also do not always give enough information to determine eligibility, as we do not show any health information such as whether a patient is immunosuppressed, they live in a care home, or are pregnant.

However, we’ve heard that the patient details can still be useful for helping to determine eligibility in some circumstances, as they:

- confirm the patient’s age, which some patients may not remember
- show whether the patient has already had the vaccine recently, which again some patients may not recall

In addition, we’ve heard that some clinicians prefer to check the patient’s age electronically rather than directly ask the patient.

There was also a separate need we’ve uncovered: some users are using RAVS to proactively check whether an eligible patient had had their vaccination yet, in order to be able to offer it to them if they have not. This is not something RAVS was specifically designed for, however opportunistic vaccination is part of the overall public health strategy, and we are keen to support this.

## What we changed

In response to the feedback, we’ve now changed the order so that the step of finding the patient and seeing their details now comes first, followed by the other questions.

![Diagram showing a flow with a first set of questions labelled ‘Vaccination date, location, vaccinator, vaccine type and batch’, followed by another set labelled ‘Find a patient and review history’, followed by ‘Estimated due date (pregnancy), consent, injection site’, then followed by a screen labelled ‘Check’ and one labelled ‘Done’. Then an arrow leads from the ‘Done’ screen to the group labelled ‘Find a patient’.](question-order-after.png "The new question order")

When a vaccination has been recorded, if the user selects the option to record the same vaccination for the next patient, they still skip the common questions (date, location, vaccinator, vaccine type and batch) in order to save time.

This change went live on 26 March 2026.

## Future considerations

We’ll monitor feedback on the re-ordered flow to check that it hasn’t introduced any new issues.

Moving the patient finding to the beginning also now makes it possible to display the patient’s name and details on more of the subsequent screens. This might be something we look at in future.
