---
title: "Slots, sessions, schedules and clinics: a screening matryoshka"
date: 2026-09-01
tags:
  - clinics
  - appointments
author: Anna Hepburn and Mat Johnson
description: Designing a nesting model to describe capacity in software.
---

{% from "nhsuk/components/images/macro.njk" import image as nhsukImage %}

As we visit and talk to Breast Screening Offices (BSOs) about their ways of working, and how they use the National Breast Screening System (NBSS), we’re starting to work out how we can design to meet their needs and alleviate pain points in their existing software workflows.

In previous posts [Anna](/cohort-to-clinic/2026/08/manic-mondays/) and [Kathryn](/cohort-to-clinic/2026/05/what-we-learned-about-clinics-and-appointments/) have detailed some of the software challenges faced by BSOs, and we have a goal:

> [!NOTE]
> “Reducing the amount of repetitive, manual work involved in getting clinics set up in future would save BSOs a considerable amount of time and effort.”

Looking at underlying patterns and working out what BSOs actually want and need to do (sometimes despite the software), has led us to design a model we can utilise when creating new software.

Our model is designed to:

* take advantage of familiar concepts and language
* support established (or desired) ways of working while avoiding current limitations
* be flexible enough to meet the variety of local needs
* avoid assumptions about how a BSO organises their capacity

Our structure uses four nested levels, from the smallest to the largest: slots, sessions, schedules and clinics.

## 1: Slots

A slot is the short unit of time used to carry out a screening appointment, for example, six minutes. It’s also our atomic unit.

Slots can be repurposed, for example a BSO might need to:

* block out staff breaks
* combine slots to create longer blocks of time for special appointments
* hold slots as spare capacity for rebooking or self-referrals

A slot becomes an appointment when a participant is booked into it.

{{ nhsukImage({
  classes: "app-media--full-width",
  src: "slot-prototype@2x.png",
  alt: "A prototype screengrab",
  caption: "A prototype component we’re testing for managing slots"
}) }}
 
## 2: Sessions

A session represents one “clinic day” of slots.

Common slot patterns can be captured in session templates for easy reuse. For example, a template might:

* set aside 6 slots in the middle of the day for a staff lunch break
* reserve four slots at the end of the day for additional capacity, separate from automated batch appointments
* contain some double slots for special appointments

We’re mindful that using templates should not create fixed, unchangeable instances: users must still be able to adjust individual slots.

{{ nhsukImage({
  classes: "app-media--full-width",
  src: "template-prototype@2x.png",
  alt: "A prototype screengrab",
  caption: "A prototype component we’re testing for clinic session templates"
}) }}
   
## 3: Schedules

A schedule is a block of confirmed time and capacity, usually agreed as a rota, containing sessions. Each schedule has a start date and an end date, for example a 6 week block of confirmed capacity.

{{ nhsukImage({
  src: "schedule-prototype@2x.png",
  alt: "A prototype screengrab",
  caption: "A prototype component we’re testing for schedules"
}) }}
 
## 4: Clinics

At the top level, a clinic is a container for multiple schedules.

A clinic is where a BSO unit (for example, a screening van) and a location (for example, a hospital car park) is associated with ongoing schedules.

Thus: **clinics** contain **schedules**, contain **sessions**, contain **slots** - and slots become appointments.

{{ nhsukImage({
  src: "structure@2x.png",
  alt: "Diagram showing: a clinic containing schedules, containing sessions, containing slots",
  caption: "An example of the nested elements of our model"
}) }}

## Next steps

We believe this nested model provides a clear, flexible, and efficient way to create and manage clinic capacity.

Users can set up structures in advance, add capacity when rotas are confirmed and make changes at the right level, from an individual slot to a complete schedule, reducing repetitive day-by-day work while retaining precise control.

We’re building an interactive prototype for users to build out an empty clinic and set up their capacity. As part of that we’ll be testing out this model.
