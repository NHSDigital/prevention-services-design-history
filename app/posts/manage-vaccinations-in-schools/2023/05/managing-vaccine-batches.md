---
title: Managing vaccine batches
date: 2023-05-31
screenshots:
  items:
    - Dashboard
    - Manage vaccines
    - Edit batch
    - Which batch did you use?
    - "Which batch did you use: Batch selected"
    - "Which batch did you use: Batch not in list"
---

We’ve made 2 changes to the way vaccine batches are managed to match the processes of SAIS teams:

1. Managing vaccines has moved from the school session level to the top level dashboard
2. We do not immediately default to a batch during vaccination, instead we ask first

## Managing batches

SAIS teams do not manage batches on a campaign or school session level. Instead they have a vaccine store which they use for all sessions or clinics.

From research we found that teams receive their batch numbers by email when they order. The batch numbers are reconfirmed on delivery, and each vaccine has a batch number and expiry on the box.

Batches are in the order of 500 doses. Some teams use methods to group batches together, for example packs of ten grouped with elastic bands, on specific fridge shelves. They try to avoid mixing batches.

We’ve observed paper sheets being used as a way of managing:

- vaccines taken out
- vaccines brought back
- wastage.

Stock was not managed digitally.

Teams can:

- add batches at point of order
- add them at point of delivery
- forget to add them

## Asking about batches

When teams go to sessions they may take one batch or many batches. We’ve heard that they try to use up older batches first, and any vaccines that were previously taken out but not used.

Our original design defaulted to a specific batch which we tried to infer from the school session, on the assumption that a batch was known beforehand. However, nurses will not know the batch numbers until they leave on the day – it depends who is collecting the vaccines and the fridges they get them from.

Instead of inferring the batch from a school session, we now need to list all the batches appropriate to the vaccine type and ask which the nurses are using. We will ask which batch they used at the point of their first vaccination of the session.

We do not want to have to ask this question for every vaccination because this is repetitive. If they are using a single batch there’s an option to default to it. When a default is set, the question is not asked.

### Missing batches

Sometimes a team will not have the batch number on the digital system. We do not want this to prevent the nurses from giving and recording vaccinations in the service.

If a batch is missing, we allow users to add the batch they have (including when offline).

## Design notes

When batches expire they should automatically be removed from the list.

When stock runs out, nurses need to be able to remove them. We’ve added ‘Move to archive’ to do this – that marks the batch as inactive (but is kept within the system as it’s needed for historic records).

We have not yet designed a view or filter for historic batches.

When listing batches order them by expiry date (oldest first).

There are other details about a batch that we have not included, such as dose and route (intramuscular, nasal, etc). This is because we can infer these details from the vaccine brand itself.
