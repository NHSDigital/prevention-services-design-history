---
title: Adding multiple triage notes
date: 2023-11-08
screenshots:
  items:
    - Patient record needing triage
    - Patient record with triage notes
---

[The previous design for triaging patients](/manage-vaccinations-in-schools/2023/03/first-pass-at-triage/) provided a form field to add notes, but with no space to indicate who created the note and when they added it.

During the model office, different users wanted to add subsequent notes later in the triage process. Without the ability to add multiple notes, they would append their notes to an existing triage note, sometimes adding their initials and a date.

Relying on ad hoc methods like this makes it likely that earlier notes would get lost. The nurses we spoke to asked for notes to show who had written them and when.

## Adding a triage note

The design for adding a note is similar to how it was previously.

The name of the panel where a triage outcome can be recorded has been re-titled ‘Is it safe to vaccinate [patient’s full name]? so that it aligns with the title we use when recording a vaccination outcome (‘Did [patient’s full name] get the vaccine?’).

The triage outcome options are now labelled:

- Yes, it’s safe to vaccinate
- No, do not vaccinate
- No, delay vaccination to a later date
- No, keep in triage

The field to enter a note is now shown below triage outcome options instead of above, and we indicate that this is an optional field.

Once this information is submitted, a ‘Triage notes’ panel appears on a patient’s record. Each note is shown alongside the user who added it and the date and time it was added, in reverse chronological order.
