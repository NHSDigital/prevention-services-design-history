---
title: Asking users to sync their offline changes
date: 2023-03-30
screenshots:
  items:
    - You’re back online
    - Syncing your changes
    - Synced successfully
    - Sync errored
    - text: Sync errored – try again later
      caption: When the website is unavailable
---

Following our investigation into [automatic and manual offline syncing](/manage-vaccinations-in-schools/2023/03/manual-offline-syncing/), we’ve designed the user journey for users to sync their changes manually.

> The main issue with automatic syncing is recovering from errors. Errors can occur due to invalid data being submitted, from downstream APIs rejecting the data, or from server errors.
>
> When the syncing is in the background, surfacing these errors can be difficult. The user could be interrupted from their current context. Or they might never notice them to begin with.

When sync was automatic we also found that users did not see the large green banner. Even when we made it really big.

## You’re back online

We’ve found that banners do not work, banner blindness means people don’t see them.

When users are back online we will show them a full page interstitial that they cannot miss. We will ask them if they want to sync their changes now.

We have not designed the journey if they say ‘No’ at this point.

We also need to think about the intermittent connection scenario – where they may be going online and offline repeatedly – we do not want to spam them with this message. Perhaps a ‘do not show me this message for [X time]’ type of option.

## Syncing your changes

Upon pressing ‘Sync your changes’, we show a syncing page with an animation. This may artificially show for longer than is necessary to sync to give the right user impression that something has happened successfully. And to avoid any flashing of content.

On success, we summarise the number of changes synced based on school name, date and count of children.

We have not designed what batch or vaccine changes would look like when synced.

## Syncing with errors

The error scenarios we’ve considered are:

- you are back online, but the website is returning a 500 error
- you have attempted to sync but there was a conflict

## Conflict resolution

When there is a conflict, we will still sync all changes, so that data is not stored solely on the nurse’s device.

Changes with a conflict will go into a support queue for review and manual resolution.

We have chosen to avoid the complexity of designing user based conflict resolution for all the types of conflict that could occur.

Later we might know what the common types of conflict are and the simple fixes for them – then we might move this from a support process to a user one.
