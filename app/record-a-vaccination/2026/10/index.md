---
title: A pilot to support maternity vaccination uptake
description: As part of an early public beta, we are piloting a new area of RAVS that helps healthcare professionals manage vaccinations for pregnant patients. The aim is to make the vaccination process easier and improve vaccine uptake in pregnancy care.
date: 2026-10-09
tags:
  - maternity
  - vaccinations
---

As part of an early public beta, we are piloting a new area of RAVS that helps healthcare professionals manage vaccinations for pregnant patients. The aim is to make the vaccination process easier and improve vaccine uptake in pregnancy care.

This work builds on an alpha phase, which included an initial prototype and a period of research. Since then, we have been taking those learnings forward to design, build and test the service with users ahead of the pilot.

[Add image here]

The pilot will see maternity staff in a small group of trusts using this new area of RAVS in their day-to-day roles. We'll learn from their experience before rolling out the new functionality to other trusts across the country.  

## Current challenges

In developing this pilot, we have spoken to people across 11 trusts to learn more about how they currently manage and vaccinate patients who are pregnant.

This research has shown that the process can be complex. Staff use multiple digital platforms to manually move data from between systems, which makes it difficult to understand and then improve vaccine uptake. For example, when trusts send invitations to patients, they often manually add contact details to a separate messaging tool.  

We've also found that each Trust has its own ways of working. Even where trusts use the same digital systems, the process of managing data and vaccinating patients can be very different. Staff adapt the systems they have to their specific settings and needs.  

## Showing eligibility status

For this first version, we want to help staff see who has been vaccinated and who is eligible for the main vaccinations in pregnancy: RSV and pertussis.

Trusts add a list of pregnant patients by uploading a CSV file that contains just two columns: ‘NHS number and ‘Due date’. The service connects to the Personal Demographics Service (PDS) API to match patient data, and the Immunisation FHIR API to check the vaccination information we currently hold about those patients.  

[Add image here]

Once that process is complete, the staff member who uploaded the list of patients receives an email notification.  

The whole team can then see a table that for each patient that shows:

- name and NHS number
- estimated due date and number of weeks pregnant
- eligibility status for RSV and pertussis

[Add image here]

Maternity staff can then apply filters to their list of pregnant patients. For example, they can filter patients who are 28 weeks pregnant and eligible for RSV. This allows them to understand which patients are ready for each vaccination during its recommended vaccination window.  

Finally, in this first version, trusts can export either a full or filtered list of patients to another CSV file. Staff can then use that list for a range of tasks, which includes sending invitations or learning about vaccination uptake.  

## Future maternity plans in RAVS

Through this initial pilot, we expect to learn quickly and make improvements. We’re already working to remove some of its limitations at launch, which includes making it easier to add patients to the service.  

Our research sessions so far have shown that trusts would find it useful to see eligibility information about the flu vaccine, alongside pertussis and RSV. The team is already working on this.  

We’ve also started speaking to maternity staff about sending invitations and reminders directly from RAVS.  

Currently, some trusts manually add contact details to yet another system before they can send invitations. Others do not have any messaging system at all and rely on their walk-in service to engage with patients.  

It seems likely that invitations and reminders in this maternity area of RAVS will make the process of communicating with patients easier. And as a result, that could have a positive effect on vaccination uptake.  

## Watch the training video

We created written guidance and a [training video](https://guide.ravs.england.nhs.uk/maternity/training-video/) for trusts taking part in the pilot. While the video is to help staff use this new area of RAVS, it gives you a good overview and demo of how this first version works.
