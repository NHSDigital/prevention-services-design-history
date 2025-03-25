---
title: "Asking fewer better questions "
date: 2025-03-25
---

For the first 2 months of 2025, the UCD team's main focus was on streamlining the record journey in our service.

The reason we prioritised this work is that users have told us that parts of the current journey are repetitive.

And within our design team, we'd also been critiquing our current journey and discussing what could be improved. We wanted to:

* move to a 1 thing per page approach and make our questions more conversational, following the [NHS Digital service manual guidance on how to write good questions](https://service-manual.nhs.uk/content/how-to-write-good-questions-for-forms)
* align our designs more closely with the [NHS design system](https://service-manual.nhs.uk/design-system), using tried and tested components and patterns


## What we did

This has been a big piece of work and it's not finished yet. It has involved:

* desk research
* prototyping
* multiple rounds of user research
* lots of lively discussion within the UCD team and with our wider product team

There will be other posts about different aspects of the work. But this one is about how we set about asking fewer and better questions in the record journey.

This work followed from [an earlier design sprint where we'd explored the idea of "sessions"](https://design-history.prevention-services.nhs.uk/record-a-vaccination/2024/11/design-sprint-sessions/), allowing users to set up a vaccination clinic of sorts where certain parameters could be fixed. We may well come back to the idea of sessions but for now we wanted to look at improving the core vaccination journey rather than adding a new feature to the service.

## What data we capture and why

We started with desk research looking at the key requirements for capturing vaccination data.

We wanted to understand:

* what is the minimum vaccination data that has to be captured when you record a vaccination, as mandated by NHS England
* what other data do we currently capture and how important is this to our users

## How people answer the questions in our current journey

We were lucky to have a data analyst join our team while we were doing this work. This meant we were able to get really useful insights into how users are currently answering questions.

It helped us:

* understand what proportion of users might be affected if we dropped certain questions
* decide how to present certain questions based on the answers users most often give

## Prototyping the new journey

After mapping out a few different ideas for journeys in Mural, where we dropped some questions and reordered the remaining ones, we soon moved to creating a new journey in the prototyping kit.

This forced us to move to concrete designs and think hard about the words.

## Documenting our decisions

In parallel, we decided to document our design decisions in a slide deck. We were making so many decisions in conversations between the 3 designers working on the journey that we thought we should put some of this in writing so we could present our thinking back to the wider team.

### Agreement on dropping some questions
We came up with a list of things we (designers) suggested dropping from the record journey and shared our plan with our wider team.

Some things were uncontroversial. There was consensus that we don't need to:

* ask for both the date of vaccination and the date the patient was assessed for a vaccination (since these would happen on the same date)
* ask twice which vaccine product was being given
* capture different clinical roles – we currently have 3 separate questions asking the user to confirm the name of the clinician who assessed the patient, who obtained consent and who gave the vaccination
* explicitly ask if the patient had been given the vaccine, since other questions (such as where did you give the injection) already confirm this

### Reformatting questions

While we had set out to drop as many questions as possible, it turned out that there was possibly more scope to ask better questions than to drop questions altogether.

We ended up simplifying several questions so they could be answered in fewer steps by the majority of users. Here are a couple of examples.

1. In the current journey we ask users to select the date of vaccination using a fiddly date picker. We know from data that 80% of the time users select today's date. So in the new streamlined journey we've made it easier for the majority of users to answer this question by asking "Is the vaccination today?" and offering "Today" as the top radio answer.

Only the 20%  who do not select today have to go on to enter a date. We've also changed our design for date entry to the more accessible NHS date input component.

![Screenshots showing before and after for the vaccination date question](vaccination-date-before-after.png)

2. In the current journey when it comes to consent, we ask first if consent was given and then who consented. So all users have to answer a minimum of 2 questions on consent.

We know from data that 98% of the time users select that the patient themselves gave consent.

![Screenshots showing before and after for the consent question](consent-before-and-after.png)

In the new journey, we simplified the question to "Who is giving consent?", presenting the name of the patient as the top answer – making it quicker to answer for the 98%.


### Some proposals caused concern

We proposed removing 2 optional free text comment boxes from the journey because they didn't have a defined use. Data entered in these boxes is not sent to other services but just saved locally within Record a vaccination. We’d heard from at least 1 user that they thought information entered here would be sent to the patient's GP so this feature could be misleading.

However, because the comment boxes were used by up to 10% of users, there was concern in our team that we might inadvertently cause problems for users by removing them.

Another question that we proposed removing from the current journey is one that asks users if the vaccination was given. If the user selects no, no vaccination record is created and no data about the fact that the vaccination was not given is recorded or sent to any other systems.

We thought this question was redundant since a vaccination not given was not recorded. However some of our team were concerned that we should be doing more to address user needs around being able to record vaccinations not given.

To address these concerns, we agreed to delve more into the need for free text boxes and recording vaccinations not given as part of user research on the new journey.

## User research

We carried out a round of user research with 10 sessions in total, speaking to people in a range of roles across a range of settings.

### The new streamlined journey was straightforward

All users we able to click through the steps of recording a vaccination without hesitation and with minimum prompting. Perhaps the most striking thing was the lack of comments we received about how different the new journey was from the current journey.

We had anticipated that some users might react negatively to the 1 question per screen approach as the new journey has more screens than the current one but this was not commented on.

### Users wanted the option of adding free text notes or comments

Even if it was not something they often needed, users told us they wanted this option to be available for some scenarios. For example, if they wanted to log something out of the ordinary such as a vaccination given outside the guidelines.

### Vaccinations not given

We heard lots of different things about vaccinations not given. For some settings it was not considered important or useful to record a vaccination not given. But in others, it was considered really important as it could help identify problems with vaccination uptake or  determine follow-up actions such as inviting patients to attend again.

## Where we are now

We've added a free text comments box to the end of the streamlined journey but made it clear in the interface that any text entered will not be shared with the patient's GP. We plan to monitor how this used with a view that it might still be something we remove or change in future.

We've started exploring some designs for recording vaccinations not given but this is proving challenging. The Record a vaccination service is just 1 touchpoint in an end-to-end vaccination journey – and a "vaccination not given" does not sit neatly within it.

Data on vaccinations not given is most useful when linked to invitation, booking and appointment systems and Record a vaccination is not currently integrated with any of those.

The problem space for "vaccinations not given" stretches beyond our service. In order to solve the whole problem, we'll need to look beyond our service and our team.

## What next

We are planning how and when we'll roll out the new record journey to users.

We are developing further features of the streamlined journey, including:

* a separate  journey to allow users to record several vaccinations for 1 patient
* a repeat journey to allow users to record consecutive vaccinations of the same type, for example if a site was running a clinic doing just flu vaccinations
* an edit and delete journey to allow users to change or delete a vaccination record

