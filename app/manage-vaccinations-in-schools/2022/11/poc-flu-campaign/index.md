---
title: "Point of care: Record a flu vaccination"
date: 2022-11-23
screenshots:
  items:
    - Flu campaign
    - Child details
    - Record flu vaccination
    - Has the vaccine been given?
    - Check and confirm
    - "If vaccine not given: Why not given?"
    - Confirm the vaccine was not given
    - Record saved
    - Child details after vaccination
    - Child details after vaccination refused
    - Updated flu campaign page
tags:
  - prototype
  - flu vaccine
---

We started with a flu point of care (POC) journey because we:

- have seen examples of flu POC systems
- had a strong starting point with the consent designs

In this design we have assumed the user:

- has access to good internet
- has a pre-populated list of people to vaccinate

We know that many POC users will not have reliable internet, and we need to think about how to support them.

## List of children

The designs show an MVP list of students who’ve been approved for vaccination. We believe this list is created during a SAIS triage of answers to health questions – but we need to do research to confirm this.

We expect users to need to:

- filter the list
- see lists of children that have not yet been seen, and those that have been seen already
- use pagination for long lists
- have the list broken down by class or year group
- get details for children not approved for vaccination

All students have the screening status ‘Approved’. We do not know what the alternatives would be, for example someone with severe allergies or someone who has asthma.

When a child has been seen, their status will change to ‘Vaccinated’ or ‘Vaccine not given’.

## Child details

We play back the information given during the consent process (child and parent or guardian details).

We need to validate what SAIS teams need to see at point of care.

We show a summary of the screening process, with a link to see all the answers to the screening questions, as answered in the consent journey, and checked by triage. We do not know if there’s a clinical need to see the full questions and answers at point of care.

The vaccinator might need to see the screening questions when answers contain important details.

After a vaccination has been recorded or not given, we show the details of the event, which can be changed.

## Recording the flu vaccination

### A default vaccine

The vaccine details have been predetermined by the campaign and by the answers given [when the SAIS nurse signs in for the day](/manage-vaccinations-in-schools/2022/11/poc-prepare-the-day/).

We’re using sensible defaults as decided by the user, but also giving the option to change them. We believe there might be a need to change these details – for example if a child is having a flu injection rather than a nasal spray.

### Vaccination site is known

We only need to ask for the vaccination site if the child has had an injected vaccine.

When we ask if the flu vaccination has been given, we default to the nasal spray. We know that it must be given nasally. We do not need to ask for the vaccination site.

### When the vaccination is not given

Users still need to record that the vaccine was not given, and why.

Reasons include:

- the vaccination was refused
- they were too unwell
- they had contraindications

We’ve seen these reasons in other POCs, but our list might not be exhaustive.

### Check and confirm

After telling us if the child has had the vaccine, we ask users to check and confirm their answers.

On this screen we include a number of defaults to minimise what they need to fill in:

- date defaults to today
- time defaults to now
- vaccinator defaults to the name given by the user when they signed in
- location defaults to the campaign location
