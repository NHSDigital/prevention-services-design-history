---
title: Finding the patient first
description: Why we’ve changed the order of questions when recording vaccinations
date: 2026-04-10
tags:
  - questions
  - ordering
image:
  src: /record-a-vaccination/2026/04/finding-the-patient-first/question-order-changes.png
  alt: Diagram showing two pages in a flow being moved to the start
  opengraphImage: true
---

When we redesigned the interface for recording vaccinations to [ask fewer, better questions](/record-a-vaccination/2025/03/asking-fewer-better-questions/), we also changed the order in which the questions were asked.

We’ve since learnt from our [customer experience survey](/record-a-vaccination/2025/03/asking-fewer-better-questions/) and from [visiting London pharmacies](/record-a-vaccination/2025/12/london-pharmacy-research/) that some users have found one aspect of the new order to be frustrating.

To address this, we have now reordered the new interface, so that the patient’s details and vaccination history are shown earlier.

## Background

When we set out to redesign the recording interface back in late 2024, our initial focus was on optimising the user journey for vaccination clinics, for example for flu, where several patients would all be given the same vaccine by the same vaccinator in the same location.

Our [initial design sprint](/record-a-vaccination/2024/11/design-sprint-sessions/) explored the idea of setting up a ‘session’, where you first set things that were likely to stay the same like the date, vaccinator and place. Once this was done, you’d find the patient, and only then answer questions which could differ per person, such as how they consented and which arm the injection was in.

As this design developed, we descoped the concept of sessions but kept the questions that were less likely to differ by patient at the start of the journey.

Once the first vaccination has been recorded, we then ask users if they’d like to [record the same vaccination for another patient](/record-a-vaccination/2025/09/making-it-easier-to-record-next-vaccination/), and if so, we skip the initial questions.

This diagram shows the flow:

![Diagram showing a flow with a first set of questions labelled ‘Find a patient and review history’, followed by ‘Vaccination date, location, vaccinator, vaccine type and batch’, then ‘Estimated due date (pregnancy), consent, injection site’, then ‘Check’ and ‘Done’. Then an arrow leads from the ‘Done’ screen to the group labelled ‘Find a patient’, and another arrow shows the ‘Vaccination date, location, vaccinator, vaccine type and batch’ group being skipped for the next patient.](question-order-before.png "The question order that we first launched with")

## Feedback

When we tested the redesigned journey, we did not observe any issues or hear any feedback on the order.

However, after launching the new interface and during [a period of dual running it with the old interface](/record-a-vaccination/2025/10/how-we-told-users-about-a-change-to-the-interface/), we discovered some new user needs.

In particular, some users mentioned that it is useful to check the patient's details in order to make sure they are eligible for the vaccination. For example, one user said:

> You put all the data in… and then discover that the
patient wasn’t actually eligible for it!

This was news to us, as our previous research had indicated that checking eligibility was done verbally before even starting to prepare and record the vaccination.

The patient details and vaccination history we show also do not always give enough information to determine eligibility, as we do not show any health information such as whether a patient is immunosuppressed, they live in a care home, or are pregnant.

We learned that the patient details can help determine eligibility in some circumstances, as they:

- confirm the patient’s age, which some patients may not remember
- show whether the patient has already had the vaccine recently, which again some patients may not recall

In addition, we’ve heard that some clinicians prefer to check the patient’s age electronically rather than directly ask the patient.

We also discovered that some users are using RAVS to proactively check whether an eligible patient has already had a vaccination, in order to offer it to them if they have not. This is not something RAVS was specifically designed for, however opportunistic vaccination is part of the overall public health strategy, and we are keen to support this.

## What we changed

In response to the feedback, we’ve changed the order so that the step of finding the patient and seeing their details now comes first, followed by the other questions.

This diagram shows the new flow:

![Diagram showing a flow with a first set of questions labelled ‘Vaccination date, location, vaccinator, vaccine type and batch’, followed by another set labelled ‘Find a patient and review history’, followed by ‘Estimated due date (pregnancy), consent, injection site’, then followed by a screen labelled ‘Check’ and one labelled ‘Done’. Then an arrow leads from the ‘Done’ screen to the group labelled ‘Find a patient’.](question-order-after.png "The new question order")

When a vaccination has been recorded, if the user selects the option to record the same vaccination for the next patient, they still skip the questions that are less likely to differ from one patient to the next (date, location, vaccinator, vaccine type and batch) in order to save time.

This change went live on 26 March 2026.

## Future considerations

We’ll monitor feedback on the reordered flow to check that it hasn’t introduced any new issues.

Now that we begin with the patient, it makes it possible to display the patient’s name and details on more of the subsequent screens. This might be something we look at in future.
