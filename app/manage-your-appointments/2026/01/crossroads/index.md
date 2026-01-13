---
title: We’re at a crossroads
date: 2026-01-12
author: Jon Roobottom
opengraphImage:
  src: /manage-your-appointments/2026/01/crossroads/day-pattern.png
  alt: The select days screen from the NHS Manage Your Appointments service
---
Recently, we've been working on allowing people to edit more than one day at once. Sounds simple. Dear reader, prepare yourself for a shock: It isn't. In fact, it's sparked quite the debate in our team.

When a user creates a repeating availability pattern (for example, every weekday, 9 am to 5 pm for the next three months), Manage Your Appointments (MYA) doesn’t store that pattern anywhere. Instead, it splits that availability into separate days. Here's an example of how we store a single day:

```
'2026-01-01': {
  sessions: [
    {
      from: "09:00",
      until: "17:00",
      slotLength: 10,
      capacity: 1,
      services: […service IDs]
    }
  ]
}
```

In our example, MYA creates 90 records like so:

* 31 for January
* 28 for February
* 31 for March

Every day can have multiple sessions, each with its own start and end times, slotLength (the appointment length), capacity (how many vaccinations a site can perform at the same time) and any number of services.

This makes MYA very flexible. It's easy to add new sessions to single or multiple days. Days in the past are also easy to ignore. This means we can keep our interface clean as we're dealing with collections of single days.

However, editing multiple days is trickier. If a user wants to edit the availability they set up in our earlier example, there’s no link between days, so they have to edit them individually. 

We also know users want to be able to edit the “thing” they created. However, they can’t edit the repeating day pattern, as it is lost, so it's impossible to make quick adjustments, like removing every Tuesday, for example.

![The Select days screen](day-pattern.png 'When creating availability, users select a pattern of days. This doesn’t get stored so isn’t editable if the user wants to make updates.')

## Groups to the rescue?
We can recreate the links between days by using grouping logic. This works by comparing each session and grouping those with the same attributes, i.e., start and end times, slot length, capacity and services.

This is what Jonny, one of our developers, calls “putting a lasso around similar availability.”

For most of our users, who create repeating availability and don't alter days in the middle, these will appear precisely like the “thing” they made.

We [tested this over multiple rounds](/manage-your-appointments/2026/01/helping-users-cancel-or-edit-multiple-sessions/). Groups are suitable for simple cases, but not easy to navigate for more complex setups.

This also doesn’t allow editing of the day pattern.

![A screen showing groups of availability](all-availability.png 'We tested how easy users found it to edit groups of availability')

## Grouping might not meet our needs in the future
There are other scenarios where grouping might not be necessary for future requirements. 

One example is a scenario in which a site runs out of adult Flu vaccine. In this instance, they need to remove all adult Flu services from the upcoming availability. This _would_ be possible with groups; however, once the site reestablishes supply, it would be impossible to edit the orriginal availability in bulk. Rather, the site would have to create new availability just for adult Flu appointments. 

We also want to support working patterns in the future. For example, a site that has two vaccinators who work different hours. This becomes very hard to manage without some way to link days together.

## Repeating rules
What MYA does isn’t the typical way calendar-like systems handle repeating events. Most calendars use [repeating rules (RRULE)](https://www.rfc-editor.org/rfc/rfc5545). Both iCal and Outlook use this standard.

RRULE allows users to edit what they created, including the day pattern, because it stores the pattern. And it might offer some other benefits, like making it easier to add breaks. But, if you want to edit days in the middle of the rule, you have to add “exceptions.” These can get complicated, quickly.

We need a solution that offers the flexibility to edit single days and repeating availability.

## What's next
 MYA is at a crossroads, and we need to decide which road to take.

To the left is grouping logic. This approach might yield short-term gains, but it could also cause long-term pain when implementing [future features](/manage-your-appointments/2025/12/our-first-seasonal-vaccination-campai/). 

To the right is re-architecting MYA to use an RRULE-like solution and migrating live availability data. This probably means more work, but it could yield substantial benefits. 

We’re conducting a spike to understand the technical impact, and we plan to run a short design sprint to understand how users would benefit from a recurrence rules-based system.

*[MYA]: Manage Your Appointments