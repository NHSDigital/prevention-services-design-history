---
title: "Went for an appointment
...came back with a list"
date: 2025-07-11
---


## What

We wanted to create appointments in RAVS to allow users to benefit from having structured lists of patient to reflect the way in which many already work. We could also shorten the recording time with the appointments having the same attributes such as the vaccine they will receive. This means no need to record vaccine, time, date etc. as it’s already known in RAVS. 

Unfortunately we not be able to integrate with booking systems anytime soon, given the technical effort, time differing data points across all systems in the market.

So, we decided to see if we could recreate something similar in RAVS, but with some manual entry by the user. 


## Approach

We first tried to be clever and allow the user to do more and get more 
We looked at many options including asking users to use a template to then upload a consistent set of data for each of their appointments.

We decided this could become difficult to explain and put the burden too far on to the user. Instead we asked them to answer a few questions and upload a ‘list’ of the NHS numbers they had from their booking system or elsewhere to let RAVS do the rest and create a view of the uploaded names. 


## Designs part 1

!Lists_home.png


## Outcome

We tested with users and found that adding NHS numbers was a particularly tricky task for our them.

This could’ve been due to many reasons. 

It’s a completely new concept and a new task in RAVS. Adding large sets of data doesn’t have a lot of precedent in NHS or GOV design patterns, so we were designing new ground.

We weren’t able to see or access their lists of patients for confidentiality reasons, so seeing how they might copy and paste patient data in anger wasn’t possible and providing them with a faux list didn’t solve the issue of being able to see theirs.  


## Iteration
To do a better job for our users we decided further simplicity was the best approach, then we can change and adapt if it is successful and users have more confidence. We reduced what the user needed to do further by:
- Removing the ‘check’ screen in favour of error messages on the page for erroneous NHS numbers
- Only showed 1 list instead of 2 tabs of Awaiting and Recorded on the list page
- The search then only applied to 1 list
- Moved ‘delete list’ to the bottom of the page to reduce how busy it was at the top
- Review and iterated the content, particularly on the add nHS numbers page

Finally, we renamed the section to better describe what the thing now was. A list of patients, their NHS numbers, a date and a location

We believe this will benefit a large cohort of our users, like staff vaccinations which account for 40%of our total vaccination records and maternity clinics
This is because there isn’t always a specified time for the appointment and current processes we know of use informal lists without a booking system.


## Designs part 2


## Future
In future we still wish to integrate automatically with booking systems, but for now we hope ‘Lists’ will give us an understanding of whether users benefit from this sort of feature in RAVS.
