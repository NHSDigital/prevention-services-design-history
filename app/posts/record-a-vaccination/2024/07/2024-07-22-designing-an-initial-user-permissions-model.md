---
title: Designing an initial user permissions model
date: 2024-07-22
---

In our initial pilot, all users were able to do all actions. There was also no functionality to add users to the service - this required a support request.

We know from previous research however that there is a variety of different roles that users have within their organisations.

We wanted to design a permissions model that would restrict users to only the actions that they need for their role, whilst remaining as simple as possible for users to understand and manage.

## Previous designs

Previously we designed and tested [a prototype with 6 role checkboxes](/managing-users-roles-and-permissions-beta).

This was then iterated into a version where there were 9 permission checkboxes instead.

This was further iterated into a version with more granular options using nested checkboxes:

![](c7fkv5qsygoed709oazusuc2yg9k.png)

## What we did

We decided to consider what the simplest options for permissions would be, based on the current features of the service.

This led us to a version with 3 permission levels:

- recorder
- administrator
- lead administrator

We used hint text to explain what features each level were able to do.

A separate question was added asking if the user was a registered clinician or not. This is separate from permission level as it is based on real world professional status, and it only affects whether that user can be selected as the clinician who assessed the patient.

![](unvzm49wimsqzyueqw17wzzlua3c.png)

On the Manage users index page, each user is listed and their permission level is shown.

![](u44rpyyt90kuuehy0zznjmzfuwdv.png)

Only lead administrators are able to see the Manage users page and add users or change their permission level. For all other users, this section is not shown within the navigation menu.

An error would be shown if a user tries to change the permission level of a lead administrator if there is only a single lead administrator. This is to avoid an organisation being left unable to add new users.

## Alternatives we considered

We also considered a version with three checkboxes for the 3 main features:

- record vaccinations
- manage vaccines
- manage users

However, whilst this was more flexible, it had the disadvantage of being harder to summarise on the page listing users. It would also mean that any upcoming features would likely require additional checkboxes, whereas with the permission level radios, those features could be included within one of the existing levels.

## Future considerations

When we roll out this feature, we will assign all the existing users from the pilot to be lead administrators, and ask the organisation leads to review this and set appropriate permission levels.

As our userbase expands, we will monitor how organisations use the permission levels to see if it matches our expectations, and if any further changes are needed.

We will also likely need to add a feature to allow users to be deactivated entirely, for example if they leave an organisation. In the short term, this will be handled manually by the help desk team.

Further ahead, if we start using [Care Identity](https://digital.nhs.uk/services/care-identity-service) as a single sign in service, then we may decide to also manage permission levels there instead.
