---
title: "Sprint three: managing appointments"
date: 2023-05-15
---

## Joining up with booking and calendar systems

Our discovery revealed a lack of integration between point-of-care (POC) and other booking or calendar systems. And difficulty finding patients through search.

Therefore, we identified a strong need for users to import or upload appointments from other systems into their POC system, when testing our prototypes in [sprint one: managing clinics](/record-a-vaccination/2023/04/sprint-one-managing-clinics).

## How users currently manage appointments

Currently, users access booking or calendar systems to schedule appointments and view patient bookings. To start recording vaccination event data in their POC systems, they either:

- export and print data as a pdf or CSV file from the booking or calendar system.
- view two computer screens side-by-side and copy and paste or key in relevant data.

These approaches require manual intervention, take unnecessary time and can lead to data errors.

> #### The term 'clinic'

> We discovered there are multiple definitions. A clinic could be a physical location like a large vaccination centre or hospital;. Or a designated space within a location where patients are vaccinated, for example, a ‘Covid-19 clinic'. While ‘managing clinics’ could imply tasks that involve managing staff.

> We simplified our language to avoid confusion, changing the name of the service from 'managing clinics' to ‘managing appointments.’

## Exploring how our service supports users

To examine what we could offer as service to help users manage appointments. We iterated our prototypes to identify user needs and if the following would benefit them:

- Importing or uploading appointment data required from commonly used booking and calendar systems.
- Aligning with staffing models that follow legal vaccine administration guidelines and allocating staff in distinct roles to the imported appointment lists.
- Identifying patients who need additional support in the upload/import scenario.

## Design iterations and testing

We continued with the table pattern we tested in sprint two, influenced by the school age immunisation service (SAIS) appointments list, to design a consistent approach to displaying vaccination records.

We allowed users to sync with and import appointment data from systems like the national booking service or upload files locally to make it easier to transfer appointment data into their point-of-care system.

### Table pattern

![Appointment list pattern](t1xfx1l0srdytqe5w80ivb24ecqs.png)

Through prototyping, we explored ways users could:

- Import an appointment list
- Assign clinic staff in different roles to imported appointments

## What we learnt

Following testing, we found:

### A lack of system integration means users record data using more than one system

We gathered further evidence following sprint two, confirming users either:

- export and print data as a pdf or CSV file from the booking or calendar system.
- view two computer screens side-by-side, copying and pasting or keying in relevant data to their POC systems to start recording data.

One user explained how their organisation had created a bespoke system to generate patient QR codes. The code was scanned by staff when the patient attended the clinic to identify them in the point-of-care system.

### Importing appointments will save time and effort

Users felt the ability to import appointments and select patients from a list would be highly beneficial and save time. However, we must consider how we handle clashes when importing multiple appointment lists simultaneously and how we keep lists in synch once imported.

Users want control over the time slots they allocate to appointments to suit the needs of their setting. They also expect appointment lists to handle multiple dates. They also expect to import the location assigned to the appointment list.

Overall, the importing appointments user journey we designed was easy to follow and matched users’ expectations.

### Appointment lists need to accommodate walk-in patients

Users who import appointment lists (typically system admins) expressed a need to:

- allocate ‘walk-in’ patients to free appointment slots.
- view key summary appointment statistics, like the total number of appointments on any given day.

### Assigning staff to appointment lists and vaccination records is unnecessary and burdensome.

Users highlighted it is frustrating and cumbersome to repeatedly select and record the roles of vaccinators and clinicians during each patient vaccination in their current POC systems. They expressed a need for the system to remember their choices, particularly for smaller settings, like community pharmacies where staff seldom change during a clinic.

Further user feedback highlighted the need for the system design to adapt across different vaccination protocols that impact appointments and vaccination data capture.

The need to accommodate potential last-minute changes to staff on the day implied further burden when assigning staff to appointment lists (for clinics).

### There are overlaps and differences between system permissions and user roles

Following user feedback, it became evident that we must investigate the differences and potential overlap between user permissions and clinical roles.
