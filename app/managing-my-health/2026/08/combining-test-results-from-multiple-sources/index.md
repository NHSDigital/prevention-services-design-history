---
title: Combining test results from multiple sources
description: What we learned about combining data from different systems into one easy-to-view feed at a hackathon.
date: 2026-08-04
tags:
  - data
  - GP results
  - NHS App
  - prototyping
  - test results
author:
  - Matt Dooner
  - Frankie Roberto
  - Christian Sutter
---

During a two-day hackathon with multiple teams working on the NHS App, we explored one of the key technical hypotheses in our alpha: can we combine test results from different NHS data sources into one easy-to-view feed?

The short answer is yes – and we have two working prototypes to show for it.

## Why we joined the hackathon

The hackathon was arranged by the NHS App’s Health Information team, bringing together multiple teams working on different parts of the app to consider the user journey holistically. 

Users currently find test results in different areas of the NHS App, depending on where the data comes from. As we [discovered](/managing-my-health/2026/07/helping-users-do-more-with-results/), this inconsistency could lower users’ confidence in a stressful moment. Organising results by source, rather than by what the user needs, makes the experience confusing and disjointed.

The number of test result sources available in the NHS App is expected to grow. Without a more coherent technical approach, users may increasingly need to navigate multiple areas of the app to find related results. 

The hack gave us two focused days to test whether we could [do the hard work to make things simple](https://www.gov.uk/guidance/government-design-principles#do-the-hard-work-to-make-it-simple).

## Four teams, one exam question

The cross-team approach combined insights and expertise from several teams in different parts of NHS England, helping us consider the technical, design and service aspects from several angles. This type of working is collaborative, and it bridges the boundaries between teams. It was great!

The exam question seemed simple but hid underlying complexity: **How might we help users find and understand test results from multiple sources in the NHS App?**

## The data is similar enough to combine

Before writing any code, the group mapped the data fields available from each source against a common set of information a user needs: test name, date, result value, reference range, unit, and so on.

![A Mural canvas showing a field-by-field comparison of available data across IM1 EMIS, IM1 TPP, GP Connect, Home Test, PDM and NHS Online Results sources.](data-mapping.png "Data field mapping across sources produced during the hack. The exercise showed that despite different underlying formats, the data is similar enough in structure and meaning to be normalised into a common model.")

The mapping showed that despite different underlying formats, the data is similar enough to be normalised into a common structure. 

Next, we set out to build prototypes to try to prove it in practice.

## What we built

We split into two sub-teams.

One focused on user-centred design, building a web prototype in the NHS Prototype Kit to explore how a combined results feed might look and feel for users — including early work on categorising results by type rather than by source.

![A prototype screen titled ‘Tests and results’, showing a list of results grouped by month. Each result card displays a result-type tag such as ‘Imaging’, a red dot for unread status, the test name, and the date. A filter control at the top shows ‘Showing 20 results’.](web-prototype.png "The web prototype showing a combined, filterable test results list grouped by date. Results are tagged by type rather than by data source.")

The other started by mapping out the existing architectural landscape: identifying where data feeds originate, what format they use, and where in the architecture combining them would be most feasible. From that, we identified the most realistic short-to-medium term opportunity and built a technical prototype around it.

![Architecture diagram showing a proposed test adapter sitting between the NHS App and multiple data sources including PFS API, GPC Adapter, HomeTest Adapter and PDM Adapter. A Test Adapter BFF feeds into the NHS App. A separate box shows internal app services: Cache, Matches, Routing and Enrichment.](architecture-diagram.png "One possible architecture for a test results adapter, sketched during the hack. The diagram shows the adapter sitting between the NHS App and the various upstream data sources, with internal services handling matching, routing and enrichment.")

### The technical prototype

To create a single, coherent feed, we built an adapter. This adapter acts as a translator, combining data from several different NHS systems into one unified list.

We combined results from two main areas:
1. GP records: data from a user’s general practice system (which could be one of two sources).
2. Patient Data Manager (PDM): a source for test results not ordered by the user’s GP, like home-testing or self-reporting.

There are two GP data feeds depending on a user’s GP system. The NHS App PFS API already handles EMIS data in a compact, device-friendly format. GP Connect (used by Medicus practices) returns FHIR STU3 bundles, which the adapter transforms into the same format. Only one GP source applies per user. PDM results are converted to the same format and appended to the GP results, producing a single unified list.

The adapter transforms all incoming results – whether from GP records or another source – into one consistent structure, meaning that what we show the user can be more consistent too.

## Rejecting raw FHIR

We made a key architectural decision: instead of exposing the raw data directly into the NHS App, we chose to use the existing NHS App PFS API as our target format for all sources. This approach ensures we maintain a stable and efficient system.

This decision was driven by two main considerations:

1. Simplicity and stability: trying to transform complex data formats directly within the app (the frontend) is technically impractical and could lead to errors. Using the established API keeps the system stable and reliable.
2. Efficiency and performance: raw data formats (like FHIR) contain a lot of extra information. Sending this large volume of data over mobile connections can be slow and expensive for users. By using the API, we only send the necessary, streamlined data.

## Categorise by result type, not source

We initially tagged each result with its data source (eg GP or home-test) so users could see where the information came from. However, during day two we changed our approach.

The Health Information team shared insights from research they conducted a few years ago, showing that users think about what a test was and when it was done more than where it happened.

We shifted our focus to categorising results by type (eg, blood, health measurements, or lifestyle) instead of the source. We felt this would be more meaningful from a user’s perspective, making it easier to find a specific result from a long list.

## What we didn't cover

The hack was time-limited. A few things were left open.

### Matching data

As we learned in our discovery, a single test result can appear to be duplicated when it’s present in two sections of the app. That’s an issue we’d like to solve but couldn’t in the hackathon.

The adapter appends results from PDM to the GP list but doesn’t yet try to identify related results across sources. This is the logical next step for our alpha.

### Where the adapter should live

We prototyped this as a standalone service. An alternative was to integrate the logic directly into the existing NHS App PFS API. Both approaches are workable. 

The final choice depends on team ownership and deployment constraints, and needs input from other teams. We’re considering operating models towards the end of the alpha, so we can come back to this later.

### Notifications for test results

Users can receive push notifications for new messages in the app, but not test results currently. This is a possibility we explored in [an early sketch of enhanced test results](/managing-my-health/2026/07/enhanced-test-results-sketch/), but it was out-of-scope for the hackathon. It’s a hypothesis we’ll explore in the coming weeks, with help from the Messages & Notifications team’s latest research.

## Key outcomes

We learned a lot inside two days of focused work, and the collaborative nature of the hackathon shared those insights around the room too. 

Everyone reflected on how good it was to work together, in person, across teams that are usually apart. It reminded a couple of the team about how [teams across government have collaborated to improve services before](https://designnotes.blog.gov.uk/2023/12/15/working-as-a-community-to-iterate-the-task-list-pattern/). 

We also formed stronger relationships in those two days, which will help us collaborate on improving the NHS App for users in the near future.

## What’s next

The hack confirmed that combining feeds is technically feasible. The next question is how to match data across sources, and how the adapter eventually integrates with the NHS App – both hypotheses we're validating in alpha.