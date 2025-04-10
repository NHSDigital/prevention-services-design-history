---
title: Adding a session
date: 2023-01-24
related:
  items:
    - text: Prototype pull request
      href: https://github.com/nhsuk-archive/manage-childrens-vaccinations-prototype/pull/28
screenshots:
  items:
    - Add session from dashboard
    - What type of session?
    - Which school is it at?
    - Which routine vaccine is being given?
    - When is the session?
    - Check and confirm details
    - Session created
    - Session page without any children
---

These are first pass designs for creating a school-based routine vaccination session.

We have assumed that users will want to create sessions within the service. Alternatively they might want to upload a calendar or spreadsheet from a separate system.

When creating a session we ask:

- what type of session (routine, clinic or mop-up)
- where is it (which school)
- what type of vaccine
- when is it (date and time)

<video src="https://user-images.githubusercontent.com/319055/214082009-6aa3980b-32bf-4ab8-add1-2123fbc45551.mov" control muted></video>

## Session times

We do not know how important start and end times are for users. We currently ask if it’s a morning, afternoon or all day session. Users might need to specify actual times.

## Other types of sessions

We need to do more user research to understand the needs around catch-up clinics and mop-up school sessions.

## Adding children

How lists of children will end up in our service is still one of the biggest unknowns.

For now, all sessions are created without any children.

## Permissions

We haven’t considered who would have permission to add and edit sessions.

For example, we might not want bank staff to do this.

## Design notes

When selecting a school, it should use a school autocomplete.

We’ve purposefully left out:

- situations where other types of vaccine might be given (for example MMR)
- any situation that is not a school session or clinic (for example home visits)
