---
title: "Went for an appointment
...came back with a list"
date: 2025-07-11
---


## What

We wanted to create appointments in RAVS to allow users to benefit from having structured lists of patient to reflect the way in which many already work.

We could also shorten the recording time with the appointments having the same attributes such as the vaccine they will receive. This means no need to record vaccine, time, date etc. as it’s already known in RAVS. 

Unfortunately we not be able to integrate with booking systems anytime soon, given the technical effort, time differing data points across all systems in the market.

So, we decided to see if we could recreate something similar in RAVS, but with some manual entry by the user. 


## Approach

We looked at many options including asking users to use a template to then upload a consistent set of data for each of their appointments.

We decided this could become difficult to explain and put the burden too far on to the user. Instead we asked them to answer a few questions and upload a ‘list’ of the NHS numbers they had from their booking system or elsewhere to let RAVS do the rest and create a view of the uploaded names. 


## Designs part 1

<img width="2120" height="1910" alt="appointments_home" src="https://github.com/user-attachments/assets/1acd2a46-65a5-4c2e-ac06-fc7363b4528e" />
<br>

<img width="2120" height="1530" alt="appointments_choose site" src="https://github.com/user-attachments/assets/efb8016e-23c5-4eb6-a194-ae861aff4183" />
<br>

<img width="2120" height="2228" alt="appointments_choose date" src="https://github.com/user-attachments/assets/762cef67-3b42-47b8-8a4b-3e2c1bbfc14f" />
<br>

<img width="2120" height="2102" alt="appointments_add nhs numbers" src="https://github.com/user-attachments/assets/b0587f4a-f4f6-464d-9c57-409a4fcbe3a4" />
<br>

<img width="2120" height="2102" alt="appointments_invalid numbers" src="https://github.com/user-attachments/assets/38610a65-69d5-4fd6-b3bb-34c5062dfc2c" />
<br>

<img width="2120" height="6130" alt="appointments_list view" src="https://github.com/user-attachments/assets/25d5a435-bf3c-4cd7-a6fb-09cc1b1a201a" />
<br>
<br>


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

<img width="1311" height="1002" alt="Lists_home" src="https://github.com/user-attachments/assets/6604fa28-c4c8-4050-9b5b-17bf7677f11c" />
<br>

<img width="1223" height="853" alt="Lists_choose site or team" src="https://github.com/user-attachments/assets/b5cdab6a-3edc-4518-abee-d080e01ab0fc" />
<br>

<img width="1334" height="1049" alt="Lists_choose date" src="https://github.com/user-attachments/assets/b0aa0885-627d-4908-90fd-3081ecc2723b" />
<br>

<img width="1310" height="1205" alt="Lists_Add NHS numbers" src="https://github.com/user-attachments/assets/3edc7e0f-523e-4512-b3d2-cbbe426d4101" />
<br>

<img width="1393" height="927" alt="Lists_loading" src="https://github.com/user-attachments/assets/f0a6d48c-618e-4216-bf27-292fd8e82ae9" />
<br>

<img width="5120" height="4584" alt="Lists_list view" src="https://github.com/user-attachments/assets/2b3211e4-b16b-42a4-97b9-0f7125e740ed" />
<br>
<br>

## Future
In future we still wish to integrate automatically with booking systems, but for now we hope ‘Lists’ will give us an understanding of whether users benefit from this sort of feature in RAVS.
