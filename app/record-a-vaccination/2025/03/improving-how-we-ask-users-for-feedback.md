---
title: Improving how we ask users for feedback
date: 2025-03-27
---

We’ve been exploring how to improve the way that we ask users for feedback, with the aim to get a higher volume of feedback with reduced friction for our users.

## The issue

Since fully launching the service in September 2024 we have had a banner underneath the header which states that this is a new service in ‘beta’, and which invites users to give us feedback to help improve it.

![Screenshot showing a white banner directly beneath a blue header which has a 'Beta' label and the text 'This is a new service - your feedback (opens in a new tab) will help improve it.'](feedback-banner.png "Existing feedback banner")

The link opens a page in a separate tab, which is hosted via Qualtrics, and includes a short survey with 2 questions and the option for users to leave their email address.

However, despite having had 8,000 users recording over 1 million vaccinations, we have only had 185 feedback forms submitted, a 2% response rate.

The low response rate, and the opt-in nature of who has chosen to follow the link to give feedback, also means that the data from the ‘satisfaction’ question in the survey may not be representative of the wider user base.

## Our hypothesis

Our hypothesis is that if we design a feedback mechanism that is integrated within the service, shown only at appropriate moments, and is quick to answer, then we will get a much higher response rate.

## Initial designs

We first considered when to prompt users for feedback. Unlike a public-facing transactional service where there might be a natural 'end' point, our users are likely using the service continually.

Whilst there are different features of the service we could ask for feedback on, such as reporting or managing users, we decided to focus initially on the core ‘recording a vaccination’ process.

As we want the service to be as intuitive as possible for new users, our first thought was to prompt for feedback just after users record their very first vaccination.

We designed a few options.

We could ask a single closed question:

![Screenshot showing a white box with a blue order containing the text 'You just recorded your first vaccination. How was it?' with buttons labelled 'Easy', 'Ok' and 'Hard'](feedback-closed-question.png)

Or a single open question:

![Screenshot showing a white box with a blue order containing the text 'You just recorded your first vaccination. How was it?' with a text box and a button labelled 'Send feedback'](feedback-open-question.png)

Or combine them together:

![Screenshot showing a white box with a blue order containing the text 'You just recorded your first vaccination. How was it?' with radio buttons labeled 'East', 'OK' and 'Hard', a text box labelled 'Can you provide more detail?' and a button labelled 'Send feedback'](feedback-combined-question.png)

## User research

As part of some other usability research that had been planned, we showed the designs to 6 users to gauge their response.

In general, the users were able to understand and use the designs.

They gave us some more context on whether they’d feel able to give feedback whilst running a vaccination clinic. This ranged from:

> “I think it’s a good idea to get feedback in the moment”

to

> “If there was a queue of people it might be tricky”

One user suggested it was too soon to give feedback after recording just 1 vaccination, and that they’d rather wait until they had recorded a few.

We also had some feedback on the wider notion of giving feedback.

One user commented “I have a poor perception of giving feedback generally within the NHS”.

Another user suggested that any issues would be raised with their manager instead. And one user suggested that their organisation would usually prefer to collate all their feedback and send it together with ‘one voice’.

## What we did

We think this design concept is promising enough to trial it in our live service.

We have refined the designs into a 2 step process, with the first question having 5 single button answers:

![Screenshot showing a white box with a blue order containing the text 'You just recorded your 5th vaccination. How was your experience of recording vaccinations?' with buttons labelled 'Very easy', 'Easy', 'Ok', 'Difficult' and 'Very difficult'](iterated-question.png)

Then, when a user presses a button we’d record their answer and show an optional follow-up free-text question:

![Screenshot showing a white box with a blue order containing the text 'Thank you. Do you want to tell us more?', a text box labelled 'Feedback (optional)', a button labelled 'Send feedback' and a link labelled 'Close'](iterated-open-question.png)

We’ve also tweaked the wording, and have added a checkbox to allow users to indicate that they are happy for us to contact them about their feedback.

## Future considerations

We still need to decide:

* how to store the data technically
* what extra data, such as organisation type or vaccine type, to save alongside the anonymous ratings to enable additional analysis
* after how many vaccinations we show the prompt, for example 5 then 100, 500, 1000
* whether this metric could become a key performance indicator (KPI) for the service
