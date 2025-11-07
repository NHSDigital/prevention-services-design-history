---
title: Ending breast screening appointments
description: Capturing information when appointments cannot be completed.
date: 2025-11-10
author: Danny Chadburn
opengraphImage:
  src: /manage-breast-screening/2025/11/ending-breast-screening-appointments/cancel-or-reschedule.png
  alt: Screenshot of a form with reasons for cancelling and options for rescheduling the appointment
tags:
  - beta
  - prototype
  - screening
---

We've been looking at all the reasons why a breast screening appointment might not take place or be fully completed. 

Various journeys have been added to our prototype so the appropriate information can be captured for each scenario.

## Ideal and non-standard paths

A regular breast screening appointment will finish when the participant has had a set of four mammogram images taken.

But during each clinic there will be cancellations, appointments that need to stop partway through, and people who don't turn up at all. Each of these needs to be accounted for with reasons provided where possible. The recorded information can be used for rearranging appointments, or to make sure no future screening invites are sent. Appointment data may also be analysed to help assess the overall effectiveness of the screening programme.

The National Breast Screening System (NBSS) provides staff with options to record many of these reasons, but not in an efficient or logical way. We're looking to simplify the experience, reflect the latest guidance and eliminate the need for some paper-based processes.

### Exploring each scenario

Before drafting the journeys, we reviewed information created for breast screening offices (BSOs) that determines what they're being asked to collect. This included guidance on [opting out](https://www.gov.uk/government/publications/opting-out-of-breast-screening/guidance-on-opting-out-cease-from-breast-screening), marking participants who [attended a clinic but were not screened](https://www.gov.uk/government/publications/breast-screening-attended-not-screened/breast-screening-attended-not-screened-guidance), and [reporting equipment faults](https://www.gov.uk/government/publications/breast-screening-quality-assurance-for-mammography-and-radiography/guidance-for-breast-screening-mammographers).

We wanted to see how this matches the processes that clinic admin teams and mammographers actually follow. We spoke to people at numerous clinics and produced a map to identify gaps and see where improvements could be made.

![Screenshot of a digital whiteboard showing some of the reasons why an appointment might end prematurely](end-point-scenarios.png)

We're aiming to create as few routes as possible to capture the widest number of scenarios. If an appointment is not going to go ahead, it should be straightforward for users to stop it and take any necessary actions from there.

Analysis of the current journeys narrowed our focus to three situations where reasons to stop might be recorded:

1. Before the appointment begins
2. After the appointment starts
3. After the clinic ends

## 1. Stopping the appointment before it begins

This includes any time before check in (including the days and weeks leading up to the appointment), or after the participant has been checked in at the clinic reception.

Two [appointment statuses](/manage-breast-screening/2025/02/defining-appointment-status-labels/) can be triggered at this stage; `Cancelled` or `Attended not screened`. This is determined by whether they make contact before they arrive, or come to the clinic and a reason is given there.

Some scenarios for why a participant's appointment cannot be started may include:

* they do not want to be screened (opting out)
* they're unavailable and need to reschedule
* they're concerned about their breast implants
* they fail the ID check at reception
* the clinic can't support their needs
* a technical issue at the clinic

For each of these, admin teams would view the appointment then select 'Cancel or reschedule appointment'.

![Screenshot of the appointment view including a a link to cancel or reschedule](cancel-appointment-link.png)

They will first be asked to explain why. The options for the second question cover whether a participant is opting out of screening (either temporarily or permanently), and whether the appointment needs to be rescheduled.

![Screenshot of a form with reasons for cancelling and options for rescheduling the appointment](cancel-or-reschedule.png)

### Working to current constraints

If rescheduling is required, we're offering the option to rearrange it within or outside a 6-week window.

![Screenshot of a form providing options for rescheduling the appointment](reschedule-info.png)

This reflects the limitations of the current booking system. We're using this as a starting point, while working with colleagues rebuilding the screening invitation system to ensure any options provided here are in line with future functionality. 

## 2. Stopping the appointment after it starts

Once the mammographer conducting the screening has actively begun the appointment workflow, two statuses are possible; `Attended not screened` (ANS) and `Partial mammogram`.

The partial mammogram scenario covers any instance where at least one X-ray has been taken, but the appointment could not be concluded. This is a more complicated journey that we are tackling separately.

The reasons for a participant to be marked as `Attended not screened` include: 

* they decide to opt out
* they don't understand instructions given to them
* they fail the ID check in the mammogram room
* they've had a total bilateral mastectomy
* there are technical issues with equipment before any images are taken

At each stage of the workflow, an 'Appointment cannot proceed' link is available. When users select this they are asked for a reason. This list is very similar to the 'Cancel appointment' options, but has been adapted to include things that can only occur once the appointment has actually begun.

![Screenshot of a form with reasons for stopping the appointment after it has begun and options for rescheduling](appointment-cannot-proceed.png)

As well as actively stopping an appointment, users may reach an end point based on other information they enter into the service.

### Recent mammograms

For example, if the participant tells them about a mammogram that took place within the last 6 months, they would be advised not to go ahead.

![Screenshot of a conditional page that appears when a recent mammogram has been recorded](recent-mammogram.png)

### Withdrawn consent

If the participant does not consent to mammograms of breast implants, users would be given options for how to end the appointment.

![Screenshot of a conditional page that appears when consent to continue has not been given](no-consent.png)

### Bilateral mastectomy

If the participant tells the mammographer they have no breast tissue remaining due to a full double mastectomy, we will offer the user the option to end the appointment if no images need to be taken.

## 3. Handling outstanding appointments after the clinic ends

The only status chance that can be applied here is `Did not attend` (DNA). This is where the participant does not turn up for their appointment and does not make contact to actively cancel it. 

We've not yet designed the 'Close clinic' journey, but if any open appointments exist at the end of a clinic we need to tell users about any DNA statuses they are about to create.

There may be instances where participants have called to cancel but this information has yet to be entered into the system. We will be providing a way to make changes at this point before closing the clinic.

## Testing each outcome 

We're including scenarios that would trigger each of these journeys within our user testing.

We're specifically looking to find out if:

* we've captured all the reasons why an appointment needs to be cancelled or stopped
* users can mark that an appointment needs to be rescheduled
* users can opt out a participant
* there are any other conditional end points that we've missed

## Future plans 

We're starting to develop ideas for what happens to the output of this information. In future, tasks such as rescheduling or opting out could be automated, but for our pilot we need to provide clinic staff with the necessary details to enable any post-clinic actions.

An early thought is to generate a report following each clinic. This would summarise any appointments to rearrange, any support requirements that need to be added to a participant record, and a list of people who did not turn up that need to be contacted.