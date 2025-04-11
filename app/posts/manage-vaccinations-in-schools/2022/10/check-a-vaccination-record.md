---
title: Check a vaccination record
date: 2022-10-17
related:
  items:
    - text: Service design ideas for a measles outbreak
      href: https://app.mural.co/invitation/mural/nhsdigital8118/1665477929936?sender=u4f2227392499e7dce8f43480&key=6d3efeb2-b59f-4bd1-be39-88a01bbc0db8
screenshots:
  items:
    - Start page
    - Vaccination record
    - Expanded vaccination
    - Routine vaccinations
    - Full record for a 20 year old
    - Australian record – up to date example
    - Australian record – not up to date example
    - NHS app – vaccinations showing in medicines
    - NHS covid pass – COVID-19 vaccinations
---

When we were [mapping service design ideas for a measles outbreak](https://app.mural.co/invitation/mural/nhsdigital8118/1665477929936?sender=u4f2227392499e7dce8f43480&key=6d3efeb2-b59f-4bd1-be39-88a01bbc0db8) in Mural, we identified a need for viewing a vaccination record.

## Measles scenario

Consider the scenario:

- there is a measles outbreak in your child’s school
- you’ve received information from the school about the outbreak

One of the first things a parent needs to do is:

- check if their child has had their vaccinations
- book an appointment for any catch-up

> As a parent
> I need to see if my child has had all of their MMR vaccinations
> So that I can understand their vulnerability if they get measles
> And so that I can book a vaccination appointment

Current options for checking your child’s vaccination record:

- the red book
- calling your GP
- the NHS app, if dependants have been added and if vaccinations will be shown there. (This is inconsistent, presumably based on GP IT. Sometimes it is shown under immunisations, at other times under medicines, and often only as far back as 2010ish.)

## What a vaccination record service might look like

With this need, we wanted to create a hypothetical vaccination record service, to explore if it could meet the right needs.

2 pages:

- a start page to describe the service
- a record page to show what vaccinations someone has had

### Record not history

We chose to use ‘vaccination record’ instead of ‘vaccination history‘ because we know some people’s records will be incomplete, and ‘history’ suggests a comprehensive list.

### Assumptions

The record would include travel vaccinations, users would expect to see all vaccinations.

You can check other people’s vaccination records, if you have proxy access (for example children and people you care for). ‘Check a vaccination record’, not ‘Check your vaccination record’.

### Findings through experimentation

What vaccinations were routine will be based on someone’s age. Any logic that considers missed vaccinations needs to know about when routines changed. A recent example – the HPV vaccine is now offered to both boys and girls.

The importance of missed vaccinations will vary based on the vaccine, person and clinical factors. Consider the vaccine itself, the person’s age, time since missed vaccination, immunosuppression, etc. For example, a BCG vaccination is rarely given to anyone over the age of 16 because there is little evidence it works very well in adults.

It seemed helpful in the initial design to indicate that a vaccination was routine by noting the schedule (for example 8 weeks, 12 weeks).

As part of this experiment we identified the common vaccination brands given for routine vaccinations.

### Questions

- Do we show an overall status, for example ‘up to date’?
- Do we include contraindications?
- How do we add callouts for upcoming routine vaccinations?
- How do we add callouts for upcoming missed vaccinations?
- How do we indicate the difference between routine, travel and outbreak vaccinations? Do we need to?
- Can people add missing vaccinations themselves?
- How do we indicate vaccinations that are in the record but were not via the primary source, for example when someone tells a doctor they’ve had a vaccination already?
