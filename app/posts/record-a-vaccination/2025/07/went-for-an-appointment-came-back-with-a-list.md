---
title: "Went for an appointment
...came back with a list"
description: "Creating patient lists in RAVS"
date: 2025-07-11
---

We wanted to add ‘appointments’ into RAVS to reflect how the majority of vaccinators work…

But there are a huge number of appointment systems out there, so integrating with them all was out of the question.
So we thought about what was useful about appointments and how we could deliver the benefits without integrations or duplicating what appointment systems already do and so... ‘Lists’ were born!

When we questioned ’what’s so good about appointments?’, it became clear that just being able to see everyone in one place; that day’s patients who had been & gone, or those who were still due to come in for a vaccination later, it was simply handy for our users to see them all.

And we could do that, allow them to have structured lists of patients. Maternity clinics & Staff vaccinations (where the patients are already known & there isn’t always a specified time for the appointment) make up 40% of RAVS activity.

RAVS works in a pretty linear way right now - a vaccinator looks up a patient, vaccinates them, and then looks up the next one…& so on.

Lists would be different - the vaccinator is choosing the patient from a much smaller list of known users they’ve input themselves, and RAVS is ready to provide the details.
But how to get the patient NHS numbers into RAVS was the challenge - by template or free text boxes, individually or by the 100s? Every option’s got shortcomings.

And it’s not only a completely new concept for RAVS; adding large sets of data doesn’t have a lot of precedent in NHS or GOV design patterns, so we were designing new ground.

In the end we decided a template would be too fiddly/fraught and instead designed a journey which asks vaccinators a few questions about when & where the vaccinations will be done, before they cut&paste NHS numbers from their booking system into a box in RAVS.

So far so simple, but we crave simplicity, so we also simplified the design by:
- Removing a ‘check/confirm’ screen in favour of in-page error messages for non-existant NHS numbers
- Showing everything in one list, rather than separate lists for Awaiting and Recorded
- Applying Search to one list at a time
- Moving ‘delete list’ to the bottom of the page to simplify the top
- Reviewing and iterating the content, particularly on the add NHS numbers page
Finally, we re-named the section to better describe a list of patients, their NHS numbers, a date and a location

We didn’t set out to do this - remember we thought we wanted appointments(!). But Lists keeps things simple & achieves the vast majority of Appointments benefits.

![Lists home](Lists_home.png)

![Lists choose site or team](Lists_choose site or team.png)

![Lists choose date](Lists_choose date.png)












## Future
In future we still wish to integrate automatically with booking systems, but for now we hope ‘Lists’ will give us an understanding of whether users benefit from this sort of feature in RAVS.
