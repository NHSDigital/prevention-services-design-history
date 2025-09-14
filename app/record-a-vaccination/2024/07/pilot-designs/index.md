---
title: Designs used in the pilot
date: 2024-07-12
---

We ran an initial pilot of the service with 3 NHS Trusts in June 2024.

This pilot used a minimum viable set of features, aiming to learn from real-world usage of the service.

This page documents the design of the pilot service.

## Signing in

The sign-in flow used a 3rd party authentication service called [Okta](https://www.okta.com).

### Logged out view

![](jwit9g8q5a6bhi3qchdxp1qnkevy.png)

### Okta sign in

![](ss4lf8fu502r77rmysndtcvvf1pj.png)

### Your location

Once signed in, users need to select their location and care model.

![](m5y8ip4ylw2wy57rbho70f9pi9iy.png)

## Finding a patient

There were 3 ways to look up a patient: by NHS number, searching the national record using demographic data, or searching for patients added to the service locally.

### By NHS Number

![](l97ky3uxbae0drte4b6cockt8y1h.png)

### By Demographics

![](1gck1he08edp3ki96jq1kmv66xmi.png)

### By local records

![](87whrs8w1q1uj06mm4c4kncg2v6n.png)

## Patient details

Once found (or added), the patient details page had a 'Choose vaccines' button, leading to the flow for recording a vaccination.

![](cn5be0m6vakraw341x4olxvet1en.png)

## Recording a vaccination

The details of the vaccination were collected over 4 pages, followed by a 'check and confirm' page.

### Choosing a vaccine

![](dg2biaddekv8q5aek6891a3azh28.png)

### Assessing the patient

![](ankyxs9glkd1jnjwduwcv2nq67my.png)

### Recording consent

![](fekje172yxbqq03n7p0azehqb638.png)

### Vaccination details

![](gxy3ybtk5of14vzmw963731iv0j6.png)

### Check and confirm

![](bu039h3134ihx2k7rdgzhqwa8lu7.png)

## Managing vaccines

The vaccines and batches were managed from a page within a 'settings' section.

## Settings

![](9wawumj1po8sxocd1r9vk48y16ds.png)

### Vaccines page

![](unipj5zqwj102rwolidj5v6q861u.png)

### Add vaccine batches

![](9t62c2joeu9vojmfsgird2ersu6i.png)

### Under development

Some features, such as managing users and sites, were unavailable for the pilot. These pages showed an 'under development' message.

![](5nr4vb7ih5w6icuq608uvyuola1v.png)
