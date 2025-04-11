---
title: Choosing what’s available offline
date: 2023-01-23
related:
  items:
    - text: Original pull request
      href: https://github.com/nhsuk-archive/manage-childrens-vaccinations-prototype/pull/24
    - text: Uploaded banner pull request
      href: https://github.com/nhsuk-archive/manage-childrens-vaccinations-prototype/pull/27
screenshots:
  items:
    - Dashboard with offline sessions
    - School session
    - School session is available offline
    - Child list is available offline
    - Child is available offline
    - You are working offline banner
    - Help working offline
    - Offline vaccination saved
    - Online vaccination saved
    - You have offline changes
    - Your offline changes have been saved
    - School session not available offline
---

We’ve iterated the [offline designs from the original design spike](/manage-vaccinations-in-schools/2023/01/offline-spike/), moving away from magical implicit offline functionality, to an explicit offline choice.

Our hypothesis around this is that:

- users will expect some degree of control over what is offline
- they will need clarity about what is and is not available
- they are more likely to trust the service if they’ve done the thing
- this process will be familiar to users who already prepare for offline sessions (such as spreadsheets or preparing a file for MOIRA)

## Making a session available offline

On each session page there’s a section and button to save the session offline. This status is also reflected on the dashboard.

We do not know how long a session should be kept offline, but we might want to use logic such as until the date of the session plus X days. Or alternatively, as soon as it is uploaded, it is no longer available offline.

Once offline, the child list and child record pages have an indicator showing they are available offline.

## When working offline

We still show a banner, but we’ve simplified it and used a blue colour to match the offline statuses used elsewhere.

A help page explains what you can and cannot do while offline, we have used a do and don’t list. We need to see if this meets user’s expectations.

Any sessions not saved offline are unavailable.

## When going back online

When a user goes back online, any offline changes are automatically uploaded and a green success banner is shown at the top. This banner persists until dismissed.

Any records that have the status ‘Saved offline’ will be updated to ‘Saved’.
