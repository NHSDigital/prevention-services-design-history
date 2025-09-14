---
title: "Sprint three: editing vaccination records"
date: 2023-05-08
---

## Solving problems for users

During our initial discovery, we uncovered several issues users and superusers face when dealing with vaccination record errors in some point-of-care (POC) systems.

Some users who record vaccination data cannot amend incorrect records. So, they have two options:

- Note the data down, delete the original and create a new record
- Ask a superuser for help (but it’s not always clear who this person is or how they can be contacted)

These limitations cause clinic delays, data quality issues and take time and resources to fix. They also impact the NHS’ ability to access accurate and timely national vaccination data.

## What users cannot do:

- change records if they accidentally enter the wrong location or vaccine in the system. Instead, they must delete the original record and re-record the data.
- correct any recorded data or missed data in error during the pre-screening, like discovering the patient is pregnant after the screening stage.
- record a dose on the patient’s return visit if the patient was initially refused a vaccination due to being on antibiotics.
- remove a duplicate record created by accident.

## The ‘superusers’ role

Instead, users escalate issues to superusers (or system administrators) to fix. Unfortunately, superusers cannot approve amends to multiple records — often creating bottlenecks and causing lots of work.

> We have pop-up hubs and community nursing teams. It's a common error selecting the wrong location (staff could be in different places each day of the week), and we have to correct it.
> -- System administrator

## Improving the way users can edit vaccination records

We looked at ways to support users and superusers to edit and approve vaccination records quickly and efficiently.

We also considered how our service could support workflows between users and superusers, alerting superusers of any changes to data and allowing them to efficiently manage the repetitive task of approving users' edits.

## Making the service simple to use

Through prototyping, we explored ways to:

- Create opportunities for users to check and amend records throughout the data capture journey (not just at the end) to prevent data entry errors
- Reduce the opportunity for error, for example, by reducing manual data entry and duplicate data collection
- Inform superusers when they need to amend a record, and why.
- Make it easier for superusers to locate, manage and approve amends to multiple records, from the same user or multiple users.
- Build ‘friction’ into our designs to help superusers stop and think before approving a change to a record or deleting a record entirely.

## Vaccination records list

We designed a vaccination records table list, similar to the appointments list. Users can sort by the date, time and name in the column heading and refine the results through a date picker and filters, which appear on the left-hand side of the table. This approach is consistent with the school age immunisation service (SAIS) designs.

The user can filter the table list to find, select and view specific or multiple records and edit or delete them.

If multiple records selected have one or more matching properties — the user can edit the matching properties in one go and update and save the record, saving time.

![Vaccination records list](5nvosw855hjcbetbhax2xnxul22x.png 'Vaccination records list')

## Prototyping

Our prototypes helped us to explore two scenarios where a superuser edits a single or multiple records, with or without an alert.

A super user receives a system alert that a user has edited some fields in a single record that require approval. They can review the record to accept or reject the proposed changes.

A vaccinator calls or emails a super user to confirm they have made a universal error to several records. The superuser searches for, finds and selects all the affected records to make a bulk amend.

![Superuser editing workflow screen](ozp0ompq758ztvuhcxketlv2sq0m.png 'Superuser editing workflow screen')

## What we learnt

Following testing, users confirmed:

- The ‘edit records’ user journey is straightforward and would improve data quality.
- Current POC systems do not send system error alerts. Instead, users notify them of errors by email or WhatsApp.
- Pinnacle’s POC system allows them to edit records.
- Some field labels could be more meaningful. For example, users suggested changing ‘cases for records’ to ‘original versus edited records’.
- Selecting the data columns on view would suit their different healthcare settings.
- Information like the NHS number is valuable and needs to be featured.
- Selecting and combining filters like the batch number, date, time, or vaccinator would help them quickly find a record of interest.
- When multiple records require approval, users prefer to accept or reject some or all of them together.
- The patient’s name or NHS number is typically used to search for a patient.
- Potential privacy concerns, explaining that patients could see other patients' names on screen. Pinnacle’s point-of-care system only displays the patient's initials to counteract this.
- The system should record a reason if a user deletes a record.
- To see consistent ordering of components on edit pages.

## Designing an editing workflow

Our observations and feedback revealed we would need to consider several aspects of the workflow, including:

- How should we group edited records for superusers to review? By the category of edit versus the reason for the edit?
- How will we define who has control over editing and deleting records? How long should a record be available to edit?
- What edits can users make? For example, can they change the patient’s details, eligibility, and pre-screening responses?

## Responsive design

A survey of POC users revealed they mostly use laptops, desktops, and tablets.

However, a small percentage of healthcare settings, particularly roving teams, record vaccination data on mobile devices. As such, we are developing our prototypes to be responsive in design, aligning with the NHS’s move to build accessible and mobile-first services.
