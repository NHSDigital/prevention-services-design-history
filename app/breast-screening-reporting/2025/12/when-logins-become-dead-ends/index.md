---
title: When logins become dead ends, and how to avoid them
description:
date: 2025-07-01
---

Lost or difficult logins stop staff being able to use the data they need. How might we prevent this?

## The reality of viewing data

Breast screening data is rightly kept secure behind logins. In theory, lots of data is already available, mostly in the form of raw numbers. But during our research we heard again and again from staff who were unable to access various systems and platforms due to login issues.

They told us that:

- logging in to one data platform had been so challenging they had now given up
- infrequently used logins are easily lost, and some of the data they need is only published annually, six monthly or quarterly
- they search through emails trying to find access details
- they ask colleagues to print out data they should be able to access for themselves
- authorisation expires between logins, requiring the process to be repeated
- busy environments, juggling multiple tasks, with multiple systems open and lots of interruptions means access needs to be simple
- they had applied for access to a data product or platform and never heard back

We also heard from long standing breast screening programme leaders:

> If they have to log in, we’ve lost them
> -- Breast screening data expert

> Even those with access enabled have trouble finding the URL. When they do find it the interface appears buggy and tells them they don't have access. They had to learn what to ignore on the way in
> -- Former screening director

> BSIS is great at giving information back to users but it’s too hard to access so most haven't explored it.
> -- Former screening director

## Learning from the past

Part of our work in creating a new generation of data tools has to be to ensure that the people who need data can access it with as little friction as possible.

Work has been done to improve login issues across the NHS, with smart cards and other methods, but what might this mean for our data users?

We are currently looking at how to replace Breast Screening Information System (BSIS) reports with new products in the Federated Data Platform (FDP) so we looked at access to this platform for various users.

## Making access easier

There are two main categories when it comes to accessing the platform:

1. Users with nhs.net email addresses
2. Users with nhs.uk or other email addresses

Mapping the four main FDP access journeys was enough to show us that we needed to find ways to reduce the steps users take.

The longest journey looked like this:

It would only be this complex for a small minority of users, but still that was too many for our liking.

## Reducing steps for our users

By working with the helpful NHS FDP team at Arden and GEM who will set up our users in the background, we were able to cut the following stages that would have affected all our future users.

## Access for people with an nhs.net email

That means that for users with an nhs.net email address, if they are already logged into email or another service in their browser, they will be instantly logged in to FDP data products with no further steps as shown below.

Image caption: FDP access journey for nhs.net email addresses

If they aren’t already logged in, they will have to authenticate using an app like Microsoft Authenticator, which is standard in the NHS and therefore a familiar process to most staff.

Image caption: FDP access journey for nhs.net email addresses who haven’t logged in today

## Access for people with an nhs.uk or other approved email address

The simplest journey for people with this type of email address looks very similar to the second journey above. The difference is that they will be authenticating themselves via a system in the background called Okta and Microsoft Authenticator, and will need to enter a specific Okta password.

Image caption: FDP access journey using Okta for non-nhs.net email addresses

## Okta setup

This last journey is for users who do not yet have Okta set up (Okta is a technology used to securely identify users for access to systems). They may also need to download and set up Microsoft Authenticator. Both processes are already well supported by NHS IT in the form of clear instructions and help desk assistance, and we will ask breast screening data users to complete these steps before their first login. This is partly so that the setup is not confused with login and it will be clear which journey is one-off and which will be required for each login.

All subsequent logins will only require authentication with a sign-in code, which is about as easy as it gets to access secure systems today.

Image caption: Okta setup prior to access for non-nhs.net email addresses

## What’s next

We will:

- test with a selection of staff with different email addresses in different Trusts to see if they have the easy experience we expect
- make any adjustments needed based on what we observe
- write up easy to understand guidance specific to breast screening users with the goal of ensuring a smooth login in, first and every time
