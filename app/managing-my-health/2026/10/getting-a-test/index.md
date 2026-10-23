---
title: Exploring a ‘Get a test’ journey in the NHS App
description: There are already many ways to get a test through the NHS App, but they’re organised around NHS services rather than what people need. We’re proposing a single place to start.
date: 2026-10-26
tags:
  - information architecture
  - NHS App
  - testing
author:
  - Frankie Roberto
opengraphImage:
  src: /managing-my-health/2026/10/getting-a-test/choosing-a-test.png
  alt: NHS App screen asking ‘Which test do you need to get?’, with a list of tests including blood pressure, bowel screening, chlamydia, HIV and hepatitis C.
---

In our work on [how we help people get more from their test results](/managing-my-health/2026/07/helping-users-do-more-with-results/), we’ve spoken to many teams who help people get tests, and [looked at how their results appear in the NHS App](/managing-my-health/2026/08/examples-of-results/). We’ve also spoken to people about their experience of testing.

We want to make sure we’re thinking broadly about how this all fits together for the person getting the test. So we sketched how the whole experience could join up better in the NHS App.

This is an early idea, not a decision. We’re sharing it to start a conversation with the NHS App teams and others working on testing.

## How people get a test today

The NHS App already provides many ways for people to get a test. But they’re spread across different parts of the app and different NHS services, rather than being grouped together.

Today, someone who needs a test might:

- get a message which links to a third-party service to book a test
- go to the ‘Health A to Z’ section, find a condition in the conditions A to Z, then follow links from the condition page to various NHS.UK finders and external services
- go to the same ‘Health A to Z’ section, but find a test in the tests and treatments A to Z instead, then follow links from the test page to similar finders and services
- use ‘Find services near you’ to choose a service, then go to an NHS.UK finder (for example, for a sight test)
- go to ‘Appointments’, then ‘Book an appointment’, then either ‘Ask about a health problem’ or ‘Check for GP appointments’ – which, depending on the GP practice, may let them book an appointment for a test or ask for one via triage

There’s also a ‘Test results’ section, but this is for viewing results rather than getting a test. It also currently separates GP-ordered results from hospital-ordered results (for people with access to Patients Know Best).

This means there’s no obvious place in the app for people who know they need a test to quickly get one. They have to be invited by a message, navigate GP triage, or find the information within the various NHS.UK content pages via the A to Zs.

## Building on earlier ideas

Another team explored renaming the ‘Test results’ section to ‘Tests and results’ and adding a new area for home-ordered tests, so that it would contain:

- GP-ordered tests
- hospital-ordered tests
- home-ordered tests and results

The third area would let people see results from home-ordered tests, and order new home test kits.

This would give home-ordered test a place in the app. It also puts getting a test next to test results, where many people already look.

We wanted to see if we could build on this to cover all the ways people get a test, not just home test kits.

## Organising around the user need, not the organisation

People should not need to know which part of the NHS provides a test before they can find out how to get one.

Instead, the app could provide a single ‘Get a test’ journey which brings together the options for a particular test or testing need. We could present these in a way that helps people see the benefits of each one – such as how soon they could get tested, or how far they’d need to travel – and choose the one that suits them best.

This is already the principle behind NHS.UK. For example, the [chlamydia page](https://www.nhs.uk/conditions/chlamydia/) lists the options for getting a test, and links to find a sexual health clinic, find a pharmacy, and find free chlamydia home test kits for under 25s.

The NHS App could build on this approach. Because the user is logged in, and the app can use information such as their location, it could make the options more relevant and easier to act on. Depending on the test and the person’s circumstances, these might include:

- ordering a home test kit
- finding a nearby pharmacy, sexual health clinic, neighbourhood health centre or other service offering the test
- booking an appointment at a GP practice or another clinic
- using another appropriate NHS or third-party testing service

Over time, this could become increasingly personalised – for example, taking account of eligibility, invitations or previous activity, where appropriate – and offer more types of test with more options.

## Sketching the journey

To explore the idea, we sketched a prototype of how a ‘Get a test’ journey might work.

### Starting from Tests

In our sketch, we started by renaming the ‘Test results’ section to just ‘Tests’.

Within this section, we’ve added a ‘Get a test’ button at the top, followed by recent test results presented as a single combined feed.

![2 screens from the NHS App. The first is the home page, with a ‘Tests’ link in place of ‘Test results’. The second is the Tests section, with a ‘Get a test’ button at the top, followed by a list of recent test results, a banner promoting a free hepatitis C test kit, and a link to hospital test results provided by Patients Know Best.](get-a-test.png 'The ‘Tests’ section, with a ‘Get a test’ button above recent test results.')

### Choosing a test

The first question asks which test you’d like to get. As well as a list of tests, there are options for ‘Other’ and ‘I’m not sure’, so that people who don’t know the name of the test they need are not left stuck.

![NHS App screen asking ‘Which test do you need to get?’, with a list of tests including blood pressure, bowel screening, breast screening, cervical screening, chlamydia, COVID-19, HIV, hepatitis C, kidney function and pregnancy. HIV is selected, and there’s a Continue button at the bottom.](choosing-a-test.png 'Choosing which test to get.')

### Before you continue

Next is a page with things people should know before getting a test. This is still a placeholder, but it might include advice to contact their GP, call 111 or call 999 if they have symptoms or need urgent help, rather than waiting for a test.

![NHS App screen titled ‘Before you continue’, with placeholder text: ‘Some content here to re-route people if they have symptoms or other urgent reasons to contact a doctor’. There’s a Continue button at the bottom.](before-you-continue.png 'A placeholder page for things people should know before getting a test.')

### Choosing how to get the test

The main page of the journey shows the different ways to get the chosen test. These vary by test. For example, they might include:

- walk-in locations nearby
- ordering a home test kit
- booking an appointment

![NHS App screen asking ‘How do you want to get the HIV test?’, with 3 groups of options. ‘Order a self-test kit’ says the kit will arrive by post within 7 days. ‘Walk in’ lists 2 sexual health clinics with their opening status. ‘At your GP’ offers to book a GP appointment, with appointments from tomorrow.](test-options.png 'The different ways to get the chosen test.')

### Details for the chosen option

The next pages depend on the option chosen. For example, people might:

- confirm the address to send a home test kit to
- see the location and opening times of a walk-in site
- choose from available appointment slots

![3 NHS App screens, one for each option. ‘Order a self-test kit’ explains the kit will arrive by post within 7 days, and you’ll take a sample at home and post it back. ‘Kingsgate Sexual Health Clinic’ shows the clinic’s address, a map, phone number and opening times. ‘Get the test at your GP’ lists available appointment times with a nurse, with 9:10am selected. Each screen has a Continue button.](test-option-details.png 'Details for ordering a self-test kit, walking in to a clinic, and booking an appointment at your GP.')

### Checking and confirming

Finally, a summary page lets people check what they’ve chosen before confirming, followed by a confirmation page. Once they close this, people return to the ‘Tests’ page, which shows the status of their upcoming test.

![3 NHS App screens. ‘Check the details’ summarises the test, how to get it (a self-test kit) and the delivery address, with a ‘Confirm and submit order’ button. ‘HIV self-test kit ordered’ says it will arrive in the post within 7 days, and that the kit will include instructions on how to take a small blood sample. The Tests section now shows the HIV self-test kit as ‘Awaiting dispatch’ above the list of test results.](check-and-confirm.png 'Checking the details, the confirmation page, and the order showing in the Tests section.')

## Starting small

The important first step is creating a coherent place to start.

We could start with a small number of common tests where there’s a clear user need and existing routes we can bring together. At first, some options might use existing NHS.UK finders, embedded web journeys or links to other services.

Over time, we could add more tests and routes, and more of the journey could happen directly within the app. For example, people could order a test kit or book an appointment within the app, and then see the status of that order or appointment.

## One journey, many ways in

A ‘Get a test’ journey would not need to be the only way people come across testing in the app. It mainly serves the need ‘I know I need a test, help me get one’.

Messages, invitations, campaigns and health information can continue to help people recognise that they need a test. Those routes could then take people into the same ‘Get a test’ journey, so people end up in the same place however they start.

## Related work

This is related to, but not dependent on, the idea of [combining test results from multiple sources](/managing-my-health/2026/08/combining-test-results-from-multiple-sources/) – GP practices, hospitals, home test kits and other NHS data sources – into a single feed. The 2 ideas complement each other.

Both ideas also follow the precedent set by the NHS App teams, who did the hard work of going from 4 inboxes, separated by the source of the data, to a single combined inbox.

## What happens next

We’re working with other teams on the whole experience of testing, from getting a test to getting the result.

We’re collaborating with the NHS App teams on some research to explore these ideas in more detail.
