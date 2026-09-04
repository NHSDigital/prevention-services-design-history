---
title: Closing a clinic
description: Making it easy for admin staff to close a clinic
date: 2026-09-01
author: Rebecca Cottrell
opengraphImage:
  src: /manage-breast-screening/2026/07/close-clinic/close-clinic-1.png
  alt: Close clinic page showing 'needs an outcome' section, with appointments in progress
tags:
  - beta
  - prototype
  - breast screening
---

We've designed the functionality to close a clinic. Once a clinic has ended, there are tasks to complete before it can be closed.

## Closing a clinic tasks

To close a clinic, all participants of that clinic need to have a final appointment outcome assigned. 

Successfully screened participants will have had the `screened` status assigned once their mammography is completed, but some participants may not have gone through with their screening appointment ([see our design history about ending breast screening appointments](/manage-breast-screening/2025/11/ending-breast-screening-appointments/)), or may not have turned up to the clinic. 

Appointment outcomes would usually be recorded for participants where screening didn't take place (`attended not screened`) or didn't turn up (`did not attend`). Where any final outcomes weren't recorded, the close clinic page allows them to be added. 

The design allows the admin user to review the current appointment statuses for all participants in that clinic, showing where:


* appointments are in progress
* participants were checked in, but the appointment has either not started or not been completed
* participants did not arrive for their appointment



## In progress appointments

The outlier here is `in progress` appointments: these can only be closed by the mammographer running the appointment and not by the person closing the clinic. This section should not normally appear as it suggest something has gone wrong, as no appointments should still be in progress when the clinic is being closed.

In this situation, the admin user would need to chase the mammographer to close the screening appointment. 

![Close clinic page showing 'needs an outcome' section, with appointments in progress](close-clinic-1.png)


## Checked in, not screened

For checked in but not screened, we know that the participant checked in at reception, but screening wasn't started, or was paused midway through – we don't know more than that. For those participants we suggest an appointment outcome of `attended not screened`. When `attended not screened` is recorded, further details need to be captured (for example, the reason why the screening did not happen, and whether the appointment should be rescheduled). These are captured in another flow. 

The admin user doesn't have to follow the suggested outcome; if they know more about the appointment, they could go into the appointment and perform actions there (eg undo check in, cancel or reschedule appointment). 

![Close clinic page showing checked in, not screened section](close-clinic-2.png)

## Did not check in 

For participants who were never checked in, it seems likely that they did not show up for their appointment, and we suggest an outcome of `did not attend`. 

It could be possible that participants did not check in, but did in fact complete their screening appointment. This could happen if there's a technical issue with the modality, for example, or if there is a connection problem and the screening takes place offline. When screening appointments were completed, we'd want to offer the ability to mark as `screened`.

![Close clinic page showing did not check in section](close-clinic-3.png)

## Bulk and individual actions and the ability to undo them

To make this as easy and simple as possible for the user, we allow participants in each category to have a status assigned in bulk. Participants can also have their status changed individually. 

These can also be undone – also in bulk, or individually, to allow individual statuses to be changed. 

![Mark all as attended not screened showing in-line actions, the ability to undo, and mark statuses individually](cc-bulk-actions.gif)

## A note about did not attend 

When a participant misses (`did not attend`) their screening appointment twice in one episode, they are not invited to future appointments until they are next scheduled for screening (usually in three years' time).  If a participant wants to attend screening, they'd need to phone the BSO and ask for an appointment. Unless they opt out of screening, they'd continue to be invited to future screening episodes. 

## Rescheduling appointments

Closing a clinic will capture (when needed) additional data about whether appointments should be rescheduled. We're still working out how appointment rescheduling happens, and we'll consider whether it should happen at this stage, or whether it happens elsewhere in Rubie to be handled at another time (for example, in a rescheduling task list). 

## Outcome recorded

Once all participants have an appointment status assigned, they're displayed in the outcome recorded section, and the clinic can be closed. 

![Outcome recorded list of participants](close-clinic-4.png)

## Close clinic page screenshot

![The full close clinic page, containing all the sections described above plus the button showing confirm and close clinic](close-clinic-page.png)


## Next steps and future iterations

We'll want to do some user research to find out how well this design meets user needs. 
