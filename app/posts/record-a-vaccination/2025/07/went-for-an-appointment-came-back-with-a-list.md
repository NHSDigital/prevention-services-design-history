---
title: "Went for an appointment
...came back with a list"
description: "Creating patient lists in RAVS"
date: 2025-07-11
---

We wanted to add ‘appointments’ into RAVS to reflect how the majority of vaccinators work.

But there are a huge number of appointment systems out there, so integrating with them all was out of the question.

We thought about what was useful about appointments and how we could deliver the benefits without integrations or duplicating what appointment systems already do and so... ‘Lists’ were born!

## The benefits of appointments

When we reflected on what we'd heard from users in terms of ’what’s so good about appointments?’, the mosts compelling reason was being able to see a list of everyone they had to see, how many they had left and who had been vaccinated.

And we could do that, allow them to have structured lists of patients. Maternity clinics & Staff vaccinations (where the patients are already known and there isn’t always a specified time for the appointment) make up 40% of RAVS activity.

Today RAVS works like so, a vaccinator looks up a patient, vaccinates them, and then looks up the next one and so on.


## So how's it different?

Lists would be different - the vaccinator is choosing the patient from a much smaller list of known users they’ve input themselves, and RAVS is ready to provide the details.

But how to get the patient NHS numbers into RAVS was the challenge - by template or free text boxes, individually or by the 100s? Every option’s got shortcomings.

And it’s not only a completely new concept for RAVS; adding large sets of data doesn’t have a lot of precedent in NHS or GOV design patterns, so we were designing new ground.

In the end we decided a template would be too fiddly and instead designed a journey which asks vaccinators a few questions about when and where the vaccinations will be done, before they copy and paste NHS numbers from their booking system into a box in RAVS.

## How to make a List

So far so simple, but we wanted to go further and simplified the design by:
- Removing a 'check' page in favour of in-page error messages for non-existant NHS numbers
- Showing everything in one list, rather than separate lists for Awaiting and Recorded
- Applying search to one list at a time
- Moving ‘delete list’ to the bottom of the page help visual clutter
- Iterating the content, with particular focus to the add NHS numbers page
Finally, we re-named the section to better describe a list of patients, their NHS numbers, a date and a location

We didn’t set out to do this - remember we thought we wanted appointments. But Lists keeps things simple and achieves the vast majority of what an appointment does.

![Lists Home](lists-home.png)

![Choose site](lists-choose-site-or-team.png)

![Choose date](lists-choose-date.png)

![Add NNHS numbers](lists-add-nhs-numbers.png)

![Loading](lists-loading.png)

![List view](lists-list-view.png)
