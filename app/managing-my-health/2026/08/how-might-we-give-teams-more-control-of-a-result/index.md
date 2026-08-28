--- 
title: How might we give teams more control of a test result?
description: We’re using research and testing to reduce risk and learn what works. Our riskiest assumption is technical in nature but could enable improvements to the way users experience test results.
date: 2026-08-27
tags:
  - experiments
  - hypotheses
  - GP results
  - NHS App
  - results
  - risky assumptions
  - test results
author:
  - Steve Messer
  - Matt Dooner
opengraphImage:
  src: /managing-my-health/2026/08/how-might-we-give-teams-more-control-of-a-result/match-a-result.png
  alt: A diagram showing how we might change the presentation and content for a test result in the NHS App. If we can identify the result in the test results feed and match it to one from a prevention service, we can apply the service’s content, change the presentation of the result and release it into the app. We’ll also look at how we can co-ordinate it with the message sent to the app.
---

During our alpha, we’re looking at whether we can support prevention services to give people test results in the app with the context they need, at the right time. We’re using research and testing to reduce risk and deepen our understanding of the problems and how to help solve them.

3 core hypotheses[^1] drive the work:

- Can messages and test results work together consistently?
- Can we give teams more control over the result, the content that explains it, when it’s shown, and the next step offered?
- Can this work across services in Digital Prevention Services that handle results differently?

Over a few workshops, we’ve iterated on these hypotheses and pulled out the risky assumptions[^2]. We’re not working on all of those at once, and have focused on the _riskiest_ assumptions first.

## Initial thinking on a solution

Our initial thinking is to change the way a test result is presented in the NHS App, replacing clinical descriptions and indecipherable titles with reassuring content. You can [see examples of what that looks like now](/managing-my-health/2026/08/examples-of-results/) and read about the other problems uncovered in a [discovery](/managing-my-health/2026/07/helping-users-do-more-with-results/).

There are many ways to change how results are delivered and experienced in the app. Some involve changing NHS software and systems, others involve trying to change the wider technical landscape. We decided to start building something that improves the system as it exists now, as it’s smaller and quicker. [A thin slice](https://dafyddvaughan.uk/blog/2026/modernising-the-vehicle-logbook-by-delivering-value-early/#:~:text=slice%20the%20problem%20thin) is a good place to start.

## Riskiest assumption

Baked into that solution is our riskiest assumption – and it’s a technical one. Here’s an example of how one prevention service works to give you some context.

In cervical screening, the test results feed surfaces results directly from the lab. It’s possible for the lab or GP practice to add content before the result reaches the user, but in most cases users get results as they come from the lab.

The [Cervical Screening Management System (CSMS)](https://digital.nhs.uk/services/screening-services/cervical-screening-management-system) receives a copy of the result too, and uses NHS Notify to send a message to the user with the information they need to feel assured. 

In order to give a team control over a result in the test results feed, we need to be able to identify a specific result. 

![A diagram showing how we might change the presentation and content for a test result in the NHS App. If we can identify the result in the test results feed and match it to one from a prevention service, we can apply the service’s content, change the presentation of the result and release it into the app. We’ll also look at how we can co-ordinate it with the message sent to the app.](match-a-result.png "A simple diagram showing how systems fit together to deliver test results to the NHS App. If we can identify a specific test result, we might be able to change what is shown.")

Multiple systems add data to the test results feed, each using different data formats, and there isn’t much consistency in how standards are applied. In theory this makes it hard to match a result in the feed with one held by a service. 

But we think there’s an opportunity to help users do more with their results, so we want to find out how hard it really is.

## Analysing data

We analysed 3 months of anonymised data from the NHS App logging which test results had been viewed in the app. We asked 3 questions of the data.

- Are results for one test type recorded differently?​
- Can we understand the quality of data at scale?​
- What attributes can we use to match the patient record with results from services?​

### What we learned

A quick analysis taught us a lot about what results look like and whether we could give teams more control over them. We focused on cervical screening results instead of other screening services because we are partnering with them in the alpha.

- Cervical and HPV test results make up 1% of views for all test results, with 9 different test result titles.
- 71% of cervical and HPV test results have [SNOMED coding](https://digital.nhs.uk/services/terminology-and-classifications/snomed-ct), and use 1 of 4 codes. ​
- 29% remain uncoded. We don’t know why some of the results are coded and others aren’t.​
- One result title – `Hum papill vir DNA dtctn assay` – is likely a READ term surfaced by [EDIFACT](https://digital.nhs.uk/developer/guides-and-documentation/our-api-technologies#edifact) or [MESH](https://digital.nhs.uk/developer/guides-and-documentation/our-api-technologies#mesh). This is an example of what a user has to find in their list of test results.​

### What does this mean for our assumption?

We drew a few conclusions based on the limited analysis.

- We think it’s possible to enhance cervical screening test results for a large proportion of relevant users using the NHS App.
- The number of coded results was higher than we thought, which makes it more feasible to identify and match results. 
- ​Uncoded results need another approach, like fuzzy matching or human review. This is less reliable, introduces operational concerns, and may mean we fall back to the current experience gracefully for some users. ​

This helped us learn more but it doesn’t completely de-risk the assumption. It informed our next step: a technical experiment. 

#### Limitations with the data

​Due to the way the analytics software records events, there may be some double-counting. Therefore the percentages we show may not reflect activity accurately.​

The dataset covers one GP IT supplier only, not journeys where the user’s surgery uses 1 of 2 other GP IT systems. So our analysis doesn’t cover test results at national scale and we’re wary of the sample size.​

We’re hoping to get access to [OpenSAFELY](https://digital.nhs.uk/data-and-information/data-tools-and-services/data-services/opensafely) to run statistical analysis on pseudonymised patient data securely. It would help us learn more, more quickly and cheaply, compared to running a pilot.

## The experiment

Now that we’ve learned what the data in the test results feed looks like, we’ve started exploring what data and metadata a service holds. Our first technical experiment will attempt to match a record from a service with a record in the test results feed.

From looking at the app’s source code, we know we can change the way a result is presented in the app. If we can match these two records, we should be able to give prevention services control of the content in a test result. (Our [early sketch](/managing-my-health/2026/07/enhanced-test-results-sketch/) shows what that might look like.)

This is our first experiment and we’re making a start on it with colleagues in Cervical Screening and clinical assurance. It underpins how our initial solution will work. Anything we learn will feed back into our understanding of how to solve the problem.

[^1]: It’s easy to get lost with the terminology, especially as words can be used interchangeably with different meanings. We’ve grounded ourselves in Jeff Gothelf’s definition: _Hypotheses are statements that combine our assumptions about outcomes, user benefits, and features. They are structured to test whether a specific aspect of our service proposition is true._
[^2]: Again, we’re using Jeff Gothelf’s definition: _Riskiest assumptions are the assumptions within your hypotheses that, if incorrect, would cause the entire idea to fail. Identifying these is crucial because they help you focus on what you need to learn first to validate or invalidate your hypothesis._