---
title: User roles 
description: Looking at user roles and permissions
date: 2025-07-07
tags:
  - service
  - workflows
  - users
  - permissions
  - service design
---

Following on from the workshop and design work we did around [workflows and approvals](/select-people-for-invitation/workflows/), we looked more closely at what user roles we would need in the service.

## Research

User research told us that safety and accuracy are paramount (ensuring the right people will be invited and will receive the correct invitation), and that the users needed the service to retain a 2-step approval process.

## Flexible approach

Whilst we have a good understanding of the current ways of working, we don't know the exact shape and size of future teams of users.

Therefore, flexibility became a key design consideration. We listed a number of principles that would give us the flexibility to support the current users but also future users:

- users can belong to 1 or more teams
- users can have 1 or more roles per team
- iterations need to be approved before being executed (either dry or live run)
- a user cannot request approval from themself (even if they have the "approve" role)
- output files cannot be released to NHS Notify until the summary report has been approved

## Breakdown of tasks

We broke down the tasks required in the end-to-end journey and based on what we'd learned in research, looked at where they could be grouped against a single role, and where a separation of roles would be required.

| Task                                         | No role | Read | Write | Approve | Release | Admin |
| -------------------------------------------- | ------- | ---- | ----- | ------- | ------- | ----- |
| Contact SPI team                             | yes     | yes  | yes   | yes     | yes     | yes   |
| View how to guide                            | yes     | yes  | yes   | yes     | yes     | yes   |
| View release notes                           | yes     | yes  | yes   | yes     | yes     | yes   |
| Access SPI                                   | no      | yes  | yes   | yes     | yes     | yes   |
| Open a campaign and view details             | no      | yes  | yes   | yes     | yes     | no    |
| Create or edit a campaign                    | no      | no   | yes   | no      | no      | no    |
| Request approval for an iteration            | no      | no   | yes   | no      | no      | no    |
| Approve an iteration                         | no      | no   | no    | yes     | no      | no    |
| Send an iteration for dry run                | no      | no   | yes   | no      | no      | no    |
| Send an iteration for live run               | no      | no   | yes   | no      | no      | no    |
| View summary report                          | no      | yes  | yes   | yes     | yes     | no    |
| Approve or reject a summary report           | no      | no   | no    | yes     | no      | no    |
| Release output files to NHS Notify           | no      | no   | no    | no      | yes     | no    |
| Manage users within a team (future use case) | no      | no   | no    | no      | no      | yes   |

## An example of how we thought about separation of roles

We should not group "approving" and "releasing output files" into 1 role because the person approving the summary report might not also be the person who gives the go ahead to release the files to NHS Notify. There are often other operational considerations e.g. NHS Notify capacity, time we want invites to begin, capacity in downstream systems etc.

In other words, approving that the invitation configuration looks correct is not the same as saying we're ready for invitations to start flowing.

## How this design is flexible

The design to allow users multiple roles provides a great degree of flexibility in team design e.g.:

- the approver could also be the releaser if required, but they don't have to be
- a user could have different roles in different teams e.g. in team 1 they could be "approver" and "releaser" but in team 2 they might only have the "read" role
- it will be easy to add new roles in the future to support new features or changes to the service.
