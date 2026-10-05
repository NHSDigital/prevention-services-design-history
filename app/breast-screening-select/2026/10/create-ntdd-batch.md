---
title: Why we are considering changes to the batch creation screen
description: The rationale behind the simpler version of the next test due date screen we are about to test
date: 2026-10-05
tags:
  - live
  - ntdd batch
  - BS Select
author:
  - Arpana Ghagre
---
BS Select is part of the National breast screening system (NBSS), used by breast screening offices (BSOs) across the NHS breast screening programme. It's the tool BSO officers and administrators use to run the day-to-day operations of the screening programme — including creating batches of participants to invite for screening, based on things like age, screening due date, GP practice, and outcode.

The batches created in BS Select are used directly to invite participants to both static and mobile screening units. So if the criteria used to build a batch are wrong, it can affect who gets invited and when. BS Select works alongside NBSS and is a system BSO staff use every day.

We’re focusing on one screen within BS Select — the “Create NTDD Batch” screen — which is used to create batches of participants based on their recorded next test due date.

## Purpose of the screen
The "Create NTDD Batch" screen lets a BSO admin generate a batch of screening participants who are due (or overdue) their next screening appointment, based on their recorded "Next Test Due Date" (NTDD). The admin defines an age range and an "NTD End Date"; the system then selects everyone in that age range whose NTDD falls on or before that date (or who has no NTDD recorded at all).

It is one of a batch-creation methods in BS Select — the others being RI/SP (recall interval / safety period) batches and failsafe batches.

## Usability and data-quality issues identified

### Current screen and its problems

![The current "Create NTDD Batch" BS Select screen](/breast-screening-select/2026/10/BSS-NTDD-original.png)

### NTD End Date
Right now there's no limit on how far in the future the NTD End Date can be set. There's only a warning if it's more than 6 weeks away, but nothing stops the user going further. This means a batch could pick up women who were already screened in the last 12 months. Limiting the NTD End Date to 24 months (a parameter we can change later) would stop this from happening.

### Age Range complexity
The age range is worked out based on the NTD End Date the user types in. But the NTD End Date changes from batch to batch, depending on who’s being invited. Some BSOs use their own spreadsheets to work out the right age range or date-of-birth range to enter each time, despite there being a tool developed to aid calculation. This can lead to mistakes, such as women below the normal screening age being invited by accident.

### Redundant control: 'Include younger women' tick box
This tick box was added so that women who'd had an extra early screening round as part of the AgeX trial (below the normal age range) could still be included if they had a due NTDD and were over 49. The AgeX trial ended in 2020. The control has no live purpose but still occupies decision-making space on the form, adding cognitive load for no benefit.

### Redundant static field: "Call or Recall"
This has been hard-defaulted to "Both" since 2018 — BSOs can no longer split batches by call/recall status — yet it's still rendered on-screen as if it were meaningful configuration, which invites the question "should I be setting this?" when the answer is always no.

> [!IMPORTANT] Underlying Pattern
> Across all the above issues, the common thread is **the form asks the user to do work the system should be doing</b> (working out age ranges by hand, and figuring out which controls no longer matter)** and fails to enforce the constraints that actually matter</b> (age band, date horizon). This is a validation-and-defaults problem more than a layout problem — the visual structure of the form is reasonably clear; it's the business logic behind it that's under-specified.

## Proposed changes
The proposed redesign is expressed as seven acceptance criteria (AC1–AC7), each targeting one of the issues above:

![Changes AC1-AC7 shown on the "Create NTDD Batch" screen](/breast-screening-select/2026/10/BSS-NTDD-issues.png)

### Design rationale
- **Smart defaults over manual entry:** by pre-filling the normal screening age range, BSOs won't need to check a spreadsheet every time they create a batch. The fields can still be changed by hand if a BSO genuinely needs a different age range, but for most batches, no calculation is needed at all.
- **Progressive disclosure via removal, not hiding:** rather than greying out or collapsing the Date-of-Birth toggle, the AgeX tick box, and the Call/Recall field, the proposal is to remove them from the screen outright. Because none of them represent a live decision the user needs to make, keeping them — even in a disabled state — would still cost attention and invite "why is this here?".
- **Checking values when it matters most:** instead of just a soft warning when the date is first entered, the system now properly checks the values at the point the user clicks Count — right before it acts on them. This catches someone typing over the pre-filled age fields with the wrong numbers, or pushing the NTD End Date out too far, which is exactly what caused the mistakes.
- **Clearer wording in the info panel:** this change is small but matters — it tells the user the real rule the system is using, rather than leaving them to guess (which is how mistakes happened before).

## What the redesigned screen looks like

![Proposed "Create NTDD Batch" screen](/breast-screening-select/2026/10/BSS-NTDD-proposed-changes.png "The proposed screen is visually shorter, requires no external calculation to use correctly for the standard screening population, and prevents batches from being created with an invalid or outdated screening period.")

## Prototype design
A working prototype of the proposed screen has been built for usability testing:

![Prototype Screen](/breast-screening-select/2026/10/BSS-NTDD-proto.png)

### Why the prototype looks different from BS Select
The prototype was built using the NHS prototype kit, which comes with its own look and feel built in. This is different from how BS Select actually looks — the fonts, spacing, colours, and the way the form fields are styled are all different from what BSOs see in the real product today.

Making the prototype look exactly like BS Select would have meant rebuilding the whole look and feel of the NHS prototype kit from scratch — basically building a second design just for testing. The goal of this round of testing is to check the changes to what fields exist, what's pre-filled, and the new wording — not to test the interface.

## Next step: usability testing of the proposed solution
Before the proposed design is built, it should be validated with BSO admins — the primary users — to confirm the simplification actually reduces error and effort in practice, rather than just in theory.

### Research goals
The goal is to determine if the proposed design changes to the "Create NTDD Batch screen" cause BSOs usability or other issues.

Specifically:
- do participants notice changes in the information box
- do the new controls for selecting age range meet BSOs’ needs
- does the removal of the "include younger women" and "call or recall" elements pose barriers
- any differences between RI/SP and NTDD (including one of East of England) BSOs
