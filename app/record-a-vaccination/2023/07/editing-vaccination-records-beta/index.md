---
title: Editing vaccination records (beta)
date: 2023-07-17
---

## Iterating the editing vaccination records workflow

Following [alpha sprint three: editing vaccination records](/record-a-vaccination/2023/05/sprint-three-editing-vaccination-records), we revisited the editing workflow to make the process of editing, viewing and approving records simple and efficient for users based on their permissions.

Through prototyping, we considered:

- What edits can users make? For example, can they change the patient’s details, eligibility and pre-screening responses?
- How should we group or categorise edited records for users to review and approve?
- Who has control over editing and deleting records?
- How long should records be available to edit?

## Supporting users to edit records

### Records list

We updated the records list to align with the appointment list pattern, allowing users to search, sort, and filter it quickly to find the records they need to edit.

Users highlighted they would typically search for the patient’s record(s) and would expect the list to feature the patient’s details in the first column (as opposed to the vaccinator who had created the record).

However, they understood they could reorder the fields depending on how they wanted to view the information.

![Records list](5j2btspdgmlfv9g8a0brnhj0v7sg.png)

### Editable fields within a record

Users expected most data presented in the record to be editable, except for the following:

- Patient’s name, date of birth, address and NHS number.
- Screening information (not shown): in the patient's absence, users would not expect to be able to edit screening information retrospectively.

They also expected to change the vaccines to those available on the day and highlighted that capturing the reason for making the edit should be mandatory.

![Editable fields within a record](vdehseo0l4jtxdkki3ee2gknke6t.png)

### System feedback

We featured a success message to inform the user they had successfully submitted a record for approval.

However, some users added that they want to see which records are pending approval in the list to “confirm I have actually made the change.”

![Success message](7xp09z34jvl7wf298jrzzmxv3p1x.png)

### Making edits to multiple records

We also designed a way for users to make universal changes to multiple records. For example, if the user had selected the incorrect vaccine across several records.

Users found this valuable and time-saving but needed clearer guidance about this capability and when it could and couldn’t be used.

However, when asked about the ability to make multiple edits to multiple records, users felt this was a highly unlikely scenario and would not need this level of functionality.

> Batch editing would save loads of time.

![Making edits to multiple records screen](uack3e2zwx21fh23w92cplcvr2ur.png)

## Supporting users to approve records

### Edits list

We designed an ‘edits to review list’ to enable staff with the authority to approve edits to perform three actions: ‘reject’, ‘review’ or ‘accept’ single or multiple edits to records submitted by their team.

Users found this valuable and easier to track and audit than their current process — whereby they receive emails from team members explaining why they need to action edits.

> It’s a really good audit trail.

![Edits list](0cro1euvqd4hj442ln9sselw4yfd.png)

### Single view

For speed, the list allowed users to perform the three actions without clicking into the detailed record. However, we learned that users would need to view and understand the reason for the edit first to perform these actions confidently.

> You’re not wasting your time going back in and out of the record.

### Multiple view

Different-coloured tags helped system administrators visually distinguish between bundles of records and single records, as well as between multiple edits and single edits.

We learned that users would feel less comfortable and confident ‘rejecting’, ‘reviewing’ or accepting’ edits in the multiple view list without clearly understanding why.

Several users suggested retraining may be required for those who make many edits to records.

![Multiple view section of edit list](zae9wdq5rj8w8lx6b1kzamusqpjo.png)

### Reviewing an edited record or records in detail

To help approvers understand the reason for the edit, we designed a screen which presented the details submitted by their team.

Users found the reasons for rejected edits useful for auditing purposes and confirmed that this would be useful to flag if the reason for the edit was suspicious.

If a record was rejected, we also learnt that we would need to consider how to resolve this to prevent back-and-forth messages between the person who had made the amends and the approver. For example, what happens to a rejected record? Who is responsible for resolving the rejected edit?

Users also expressed a preference for resolving rejected records outside of the system, which leads us to consider integrating with Teams or email software.

In a scenario where an approver was tasked with reviewing multiple edits to a record or records, users preferred to action them individually (not together) because they felt resolving multiple edits at the same time would be complicated.

![Reviewing edits to multiple records screen](fou9vu3tc18dboy94pum7el9tako.png)

## Usability score and summary

Using a seven-point rating scale, **users scored the workflow 6.8 out of 7 (very confident)**, finding it easy to navigate and user-friendly.

Most healthcare settings viewed the ability to track and view edits to records in one place favourably but unnecessary for those with small teams with editing authority.
