---
title: "Designing and testing a prototype for a digital lung cancer risk assessment"
description:
  "We have been working on a digital version of the lung health check. To understand whether users would want to complete the questionnaire digitally and how we might deliver it."
date: 2025-08-11
---

We have been working on a digital version of the lung health check. This is a questionnaire that assesses someone’s risk of getting lung cancer in the next 5 years. The lung cancer programme would like to introduce a digital service alongside the current phone service. We wanted to understand whether users would want to complete the questionnaire digitally and how we might deliver it. 

In 6 weeks our team:

- spoke to 5 suppliers who deliver the phone service
- designed and built a clickable prototype using the gov.uk prototype kit
- conducted research sessions with 16 participants
- engaged with subject matter experts (SMEs) from NHSE, DHSC, the lung cancer programme, and clinical experts

## What is a lung health check?

The [lung cancer screening programme](https://www.nhs.uk/tests-and-treatments/lung-cancer-screening/) is delivered in certain regions in England, it will be rolled out nationally by 2029. Currently, eligible participants are invited to complete a questionnaire over the phone. This is called the ‘lung health check’. Someone is eligible for a health check if they are: 

- aged between 55 and 74
- registered with a GP
- a current smoker, or they used to smoke

Participants are asked about their lifestyle, family and medical history. This information is used to calculate if the participant is at a higher risk of developing lung cancer or not. If someone is at a higher risk they’re invited to a CT scan. Lung cancer screening aims to find lung cancer early. Early diagnosis can make lung cancer more treatable and make treatment more successful.

## Understanding the current service

We spoke with programme managers and clinical experts from 4 third‑party providers of the phone service, and 1 hospital trust that runs the programme themselves:

- InHealth
- Medispace
- Alliance and Xyla
- Compleo
- University Hospitals of North Midlands

This helped us understand the end‑to‑end user journey. From when someone is identified as eligible, through to someone completing a pre‑assessment and potentially being invited for a CT scan. These discussions gave us important insights into the user experience and barriers to user participation.

A few of our team members also visited the InHealth call centre in Crewe. They listened to live phone calls and heard first‑hand how participants responded to certain questions and what questions people might struggle with.

Participants would often provide a wealth of information about themselves, giving any additional detail they thought might be relevant. But call handlers would only note down the information they needed for the risk calculation.

A digital service wouldn’t be able to collect detailed contextual information about participants. So we’d have to design our questions and guidance to help users provide us with only the relevant information for the risk calculation.

Each supplier kindly provided us with the scripts their call handlers use. These scripts include the questions in the lung health check along with guidance on what clarifications they can offer participants. They also included answers to frequently asked questions. These scripts provided an invaluable starting point for the guidance we used in our designs for the digital service.

## Learning from other services 

We reused patterns and designs from teams within Digital Prevention Services Portfolio (DPSP). This was a key reason we were able to get up and running so quickly. Some questions within the lung health check are standard in healthcare settings. For example, asking for someone’s height, weight, sex and gender.

We could reuse these patterns knowing that they had been thoroughly researched and tested with users. For height and weight we reused patterns from the Health Check online team, and for sex and gender we reused the pattern from 111 Online.

By working with the [Health Check Online](/nhs-health-check-online/) team we learnt that some user groups cannot use an automated BMI calculator. For example, people who have a limb difference or amputation, or an eating disorder. In the Health Check online service they direct users to go see their GP. For our prototype, as an interim design, we direct users to the phone service.

Our understanding is that the underlying risk calculation in the lung health check doesn’t have an alternative to the automated BMI check for these user groups. This is something we have fed back into the lung cancer screening programme. By collaborating with other services we’ve been able to highlight areas where our service could be more inclusive.

## Researching with users

Once we’d designed our first iteration of the lung health check questions we wanted to test it with users. To learn more about public attitudes and emotional responses to a digitised version of the health check. And whether people would want to complete the risk questions online.

Using the NHSE citizen panel we were able to schedule 16 research sessions within a couple of weeks. Sessions started with a few questions to understand participants’ background, health attitudes, and digital confidence. One of the key findings from this round was that participants would want to complete the questions online and would even prefer a digital over a phone service.

We then showed participants a few screens in Figma to test the clarity of our designs, to understand if they provided the right guidance to help participants confidently answer the questions.

## Iterating our designs 

One of the first questions in the journey asks users ‘Have you ever smoked?’. We initially designed a question with a yes or no answer. This was based on the risk calculator and phone service scripts.

Hint text explained that someone should ‘select ‘yes’ if you have smoked at least 100 cigarettes, or another form or tobacco, in your lifetime.’ The threshold of 100 cigarettes is what the programme currently uses to determine if someone should be considered a smoker or former smoker. If someone has smoked fewer than 100 cigarettes, they would not be considered eligible for the screening programme.

![Design for the ‘Have you ever smoked?’ question with hint text underneath. Participants can answer yes or no using radio buttons.](Have-you-ever-smokedV1.png "Our first design for the ‘Have you ever smoked?’ question.")

Feedback on this design was mixed but there were some key insights. One user initially thought that the hint text read ‘100 cigarettes a day’, and another said they weren’t sure they would be able to answer this question. We thought having the binary yes or no option was causing confusion. So, we redesigned the question and used the language that participants used during the sessions.

In the new design we changed the hint text to body text. This gave us more space to explain what types of smoking users should tell us about. For example, the lung health check does not include vaping when talking about smoking. We also heard from the phone service providers that some users don’t consider shisha or hookah as smoking. So it was important to call this out specifically.

Users are presented with 4 different options, rather than yes or no. We included a range of responses from someone who currently smokes, to someone who has never smoked. In the background, we’ll capture a ‘yes’ or ‘no’ response for the risk calculation, and if they are a current or former smoker.

We moved the hint text about the threshold of ‘fewer than 100 cigarettes’ so that it was underneath the response ‘Yes, but only a few times’. The hope is that this will be clearer for users who scan the text quickly.

We added ‘This includes social smoking’ as hint text because we heard participants use this phrase when talking about their smoking history.

One of our iterations of this screen included current smokers and former smokers under one option. The content read: ‘Yes I currently smoke or used to smoke regularly’. When we tested this with a participant they wanted to provide follow up information. Such as when they quit smoking and how long they had smoked for. It was important to them to separate themselves from being a current smoker. We redesigned the screen to separate these 2 options.

![Design for the question ‘Have you ever smoked?’. It includes content to describe what types of smoking are included, for example rolled cigarettes, pipes, and cigars. Users can choose from 4 options: 'Yes, I currently smoke', 'Yes, I used to smoke to regularly', 'Yes, but only a few times', and 'No, I have never smoked'.](Have-you-ever-smokedV3.png "The latest design for the 'Have you ever smoked?' question after multiple iterations.")

## Working in the open

Throughout the design process our team engaged with several SMEs. We had weekly catch ups with both our clinical safety officer and the lung cancer programme team. We also demonstrated our clickable prototype to InHealth and the Cancer Alliance and Professor Matt Callister, a respiratory consultant with expertise in the risk calculation.

Sharing our work in progress early and often meant that we received valuable feedback that we were able to incorporate quickly. Our SMEs gave us insight into questions users might struggle with, and how we might adapt our questions and in‑service guidance.

## What’s next?

We have started scoping what our minimum viable product (MVP) could look like. This includes how participants would be invited to the service, the questions they would be asked, and what their onward journey looks like.

Our priority will be clinically assuring our digital service. To make sure the service is safe we will be asking participants to complete the digital service and then complete the phone service. Participants will not be given their results until they’ve completed the phone service. In the background, we will compare the data to make sure we are seeing similar results between the digital and phone services.

We know that the name ‘lung health check’ is not well understood by most users. We will be doing further qualitative research to find a name which is clear and accurately describes the service.

Using the NHSE Citizen Panel meant that we were able to get feedback on our first iteration quickly. But participants from this panel are more likely to be engaged with the NHS and familiar with NHS online services. We are aware that we need to test with a broad range of users. Especially with those who are less likely to be engaged with NHS services.
