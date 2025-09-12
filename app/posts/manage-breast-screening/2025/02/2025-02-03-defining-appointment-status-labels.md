---
title: Defining appointment status labels
description: Reviewing how to classify appointments so users can see and understand the status of each one.
date: 2025-02-03
---

## Why status labels are needed

Without actively noticing it, you probably encounter digital and physical status labels multiple times a day.

While browsing Rightmove you’ll see tags such as New, Reduced, No Chain, Under Offer and Sold STC. At an airport you’ll see a departure board with flight statuses including Go to Gate, Gate Closing, Boarding, Delayed or Cancelled.

Labels are used by system designers to instinctively help people quickly see if something is relevant to them and understand the possible actions they need to take.

In the Manage breast screening service, we had applied a selection of appointment statuses in the prototype:

- Scheduled
- Checked in
- Attended
- Attended not screened
- Did not attend

These tags appear on a clinic list, on the first page of the appointment workflow, and in a participant’s screening history. They may also be provided in future iterations as filters allowing users to refine the list of visible appointments.

They tested relatively well in initial user research sessions. However, further content design work was required to ensure that:

- each tag covers an absolute scenario (as each appointment can have only one status)
- user actions can trigger the appropriate status changes
- there is a logical linguistic flow between them
- the colours used for each label make sense

## Working through the scenarios

There were a lot of potential outcomes not covered in our initial tags.

For each status, we outlined the situation for when it would be seen, then wrote some words or phrases to be considered. There are no specific character restrictions for labels in the prototype but keeping them succinct was a primary consideration.

The preferred options for each scenario are marked in bold below.

### Scenario – participant invited to an appointment, but they’ve not confirmed

- **Invited**
- Invite sent

A straightforward status that we can label clearly and concisely.

### Scenario – participant indicated they will attend but has not yet arrived

They may also have physically arrived but not yet been checked in.

- **Confirmed**
- Scheduled
- Due
- Booked
- Invite accepted
- Expected

Users have indicated it’s useful to know if participants are likely to show up. We’ve included the ‘Invited’ and ‘Confirmed’ statuses, but this will rely on technical work within the appointment scheduling service to allow this data to be passed through effectively.

While this functionality is explored further, ‘Scheduled’ will be used as a suitable backup to cover both scenarios.

### Scenario – participant has arrived at the clinic

Confirmation of this could be through a self-service kiosk, or they could be checked in by one of the clinic team.

- **Checked in**
- Arrived
- Ready
- Ready for radiographer

This was deemed the clearest way to indicate the participant’s physical presence is confirmed.

### Scenario - mammographer has successfully taken the required images

- **Screened**
- Fully screened
- Attended
- Completed
- Imaging completed
- Finished

We went with the most succinct option that could not be confused with another scenario.

The ‘Completed’ status was a strong option, although it could be applied to various situations (an appointment where the participant does not get screened is theoretially ‘complete’).

### Scenario - mammographer began taking images but could not complete the process

This could be for a technical reason, because the participant asked them to stop, or for several other reasons.

- **Partially screened**
- Partial screening
- Incomplete
- Screening incomplete

While the first two options are both accurate, we selected one to match the past-tense verb style used in other labels. The others are correct but could feasibly be applied to other appointment scenarios (such as a participant withdrawing consent before screening starts).

### Scenario - participant attended their appointment but screening did not begin

This could be because they failed their ID check, because they withdrew consent, or for several other reasons.

- **Attended not screened**
- No screening performed
- Not screened

At 21 characters this is a bit lengthy for a label but is the most effective way of getting across the necessary information. It’s also the label used in the current service, so it’s something users will recognise and understand.

### Scenario - participant did not turn up and did not contact the clinic

- **Did not attend**
- Missed appointment
- Appointment missed
- Absent
- No show

‘Did not attend’ (or DNA) is a commonly used term across the NHS so is the obvious choice.

### Scenario - appointment is not going ahead

This is either because the clinic has determined that it can’t run (maybe due to staff illness or a technical reason), or because the participant has informed the clinic that they can’t make it.

- **Cancelled**
- Cancelled by participant
- Cancelled by clinic
- Postponed
- To be rescheduled

For the purposes of where this status will be seen, a simple ‘Cancelled’ message will suffice. Users do not need to see by whom or what needs to be done next.

## The final selection

- Invited
- Confirmed
- Checked in
- Screened
- Partially screened
- Attended not screened
- Did not attend
- Cancelled

### Using colour

To prevent visual styles from swaying user feedback on the words used for each status, we’re planning to test labels using neutral colours.

The following options have been identified from the [colours that can be applied to tags](https://service-manual.nhs.uk/design-system/components/tag#additional-colours) from NHS design system which have been added to the prototype.

![A mockup of screening appointments showing coloured status labels. The 'Invited' label is white, the 'Confirmed' label is light blue, and the 'Checked in' label is blue. 'Screened' is green, 'Partially screened' is orange, and there are three red labels, 'Attended not screened', 'Did not attend' and 'Cancelled'.](sem-status-label-colours.png 'All selected tags displayed as coloured labels')

We are proposing an ‘active’ blue for the checked in status as it stands out among the other statuses. In a live clinic environment, these are the most important participants for staff to be aware of.

The ‘Special appointment’ tag is sometimes applied when the participant has needs that require additional support from radiographers (such as a physical impairment).

As this is not part of the appointment status flow, it was not included as part of this review and will be considered separately. We do need to consider it within the colour selection though to ensure it does not conflict or overlap with anything being used elsewhere.

## Evolving the status quo

These labels are being actively tested in research.

To help the next stage of development we are looking to understand:

- Is there any difference in behaviour or understanding between admin teams and radiologists regarding status labels?
- Do users need to actively filter by appointment status? If so, why?
- What are the other scenarios that we’ve yet to consider or encounter?
- How this flows into the next stage in the process – other statuses such as ‘Reviewed’, ‘Checked’, ‘Cleared’ or ‘Recalled’ may be required once images have been looked at by a radiographer.

There are also plans to test some of the alternative options through a survey so we can check our preferences against those of our users. This will likely be done alongside other questions on the prototype that require quantitative feedback.
