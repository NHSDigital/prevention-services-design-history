---
title: Choosing where to start
description: The programme needs a safe way to create clinics and book breast screening appointments, for breast screening offices (BSOs) across the country to use.
date: 2026-06-11
tags:
  - clinics
  - appointments
  - product strategy
  - Rubie
author:
  - Elliot Hunter

---

We’re working on the clinic and appointment creation capability as part of the overall National Breast Screening System (NBSS) replacement.

The programme needs a safe way to create clinics and book breast screening appointments for breast screening offices (BSOs) across the country. This is a large and complex problem space, so choosing where to start was critical. To make that decision well, we first needed to understand the complexity involved in creating clinics and managing appointments at scale.

### The complexity of clinic creation

Breast screening appointment planning is inherently complex. Services need to run different types of clinics across static sites, mobile units and assessment clinics, each with its own rules and operational constraints. Planning must also account for where mobile units will be, so the right people can be invited at the right point in their screening cycle.

### Creating real appointments

The planning must be able to create real appointments by:
- creating and sending fixed-time slots  
- managing cancellations, non-attendance and rebooking  
- ensuring communications (invitations, reminders and confirmations) happen in the right sequence  
- accounting for individual needs such as accessibility requirements or language support  

This must be balanced against available capacity. Services need to:
- understand whether they have enough appointments to meet demand  
- optimise booking to reduce wasted slots  
- respond quickly to disruption such as staff sickness, equipment issues or changes to mobile unit schedules  

---

## The decision

Given this complexity, we made a deliberate choice to start at the point where planning becomes operational. Rather than beginning with long-term forecasting or demand modelling, we focused on the moment where batches of people, time windows and locations are transformed into real clinics and bookable appointment slots.

This area provides a clear, tangible outcome and allows us to test safely in real-world scenarios while delivering immediate value. It also aligns well, while remaining distinct from, the [Manage](/manage-breast-screening/) team’s focus on the clinical functions of the service.

By starting where plans become real, we can ground the system in practical use, learn quickly from services, and build confidently towards earlier stages of planning over time.

---

## Why we made this decision

### It’s the most constrained and time‑critical slice

There is currently no alternative to NBSS for creating mammography appointments. As a result, its retirement is a hard dependency for the programme. Starting here reduces that risk early.

### It reduces early integration complexity

By building a new national clinic and appointment capability, we avoid complex integrations with multiple local NBSS instances and can align with the work of the Manage team while developing core booking flows.

### Variation narrows at this stage

Whatever route BSOs take to plan rounds, they all need to create clinics and fill appointment slots. This makes a standard, reusable service more achievable.

### It’s where participants first experience the service

Invitations, appointment times and any future digital booking or communications are experienced directly by participants. Improvements here translate quickly into visible value and measurable operational impact.

### Adoption risk is lower

A single way to create and manage appointments helps all BSOs adopt the new approach.

### It creates a stronger data foundation

A reliable, national record of clinics and attendance supports better forecasting, planning and quality assurance.

---

## What we decided not to do

To keep focus and reduce risk, we are deliberately not tackling the following areas at this stage:

- **Early-stage population forecasting or policy-led upstream planning:** these remain in analysis and discovery while the service specification and policy landscape evolve.  
- **Changing the main digital communication channels:** such as invitation letters, to avoid introducing operational and clinic risk at this stage.  
- **Changing how batches are generated:** these workflows will be revisited once the system becomes fully national.  
- **Eliminating all local variation in BSO processes:** focus remains on supporting the core common workflow first.  
- **Designing for all appointment types beyond mammography:** expansion may follow later, but the immediate focus is core routine screening appointments.  

---

## What we’ll explore next

We want to be transparent that this is both a strategic choice and a bias. We are starting where we believe we can reach users quickly, deliver visible improvements and lay the foundations for measurable outcomes.

This does not mean this is where we know the most. We expect to uncover edge cases, local workflows and operational constraints, and will continue to adapt based on what we learn.
