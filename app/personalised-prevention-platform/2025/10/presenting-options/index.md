---
title: "Presenting options"
description: "Presented with useful and relevant opportunities, do people feel encouraged to take up activities?"
date: 2025-10-01
author: Mat Johnson and Roz Strachan
tags:
- prototyping
---


Hello! We’ve undergone a mild rebrand. We’re now known as the Weight Management team, still under Personalised Prevention Services.

Before this we were the [Personalised Prevention Platform (PPP).](/personalised-prevention-platform/)

Our underlying thinking remains the same:

1. We can reach the right people.
2. We can encourage people to act to improve their health.
3. We can help people to discover services that meet their needs.
4. We can understand enough about the user to suggest what might be effective.
5. We have permission for a life-long dialogue.

But we’ll be focusing on just one part of the prevention journey to start with: weight management.

Our [previous post](/personalised-prevention-platform/2025/04/onboarding-users/) talked about how we've been exploring how we introduce our service to users, and find out a bit about them, through an “onboarding” process.

In this post let’s look at the next stage: presenting useful and relevant options.

## Why present options?

Everyone we have spoken to told us they believed they could be doing more to maintain their health.

> [!NOTE]
> However they remained largely unaware of the range of help **already available** to them.

We’re seeing this in findings across personalised prevention services (PPS).

We’re confident that any given individual can be presented with a range of options that could be well suited to them. For example:

* apps people use by themselves, for example Active 10
* in-person group programmes, for example an exercise class
* regular community events, for example Parkrun

We wanted to test how we might present next steps in a clear and actionable manner.

Our prototypes were rooted in four underlying themes:

### 1. What’s the value of presenting a range of options?

There are limits to personalisation, especially in prevention. We can’t create the perfect path for each person &ndash; and we shouldn’t try to. The best approach is helping people choose what works for them from relevant opportunities.

Can we provide:

* enough choice that each person finds at least one thing they want to try?
* a small enough selection that people don't feel overwhelmed?

### 2. What’s the minimum viable information about an activity we can use?

It’s not news to state that service directories represent “hard yards”. The underlying work of assembling and maintaining information about services (of all shapes and sizes) has been repeatedly “discovered”. However it’s also not news to state that we need this information to underpin all sorts of transformational capabilities.

We need to work out where and how we’ll get information about the services we want to show users in a pilot area.

We’ve made some interesting experimental inroads with some help from the AI Health Coach team (thank you!), asking can algos and agents:

* rapidly assemble a “starter for 10” of relevant local services based on set criteria?
* represent a more sophisticated “automated link checker” maintenance approach to changes in information?

Looking forwards, we need to bear in mind that other services might find the type of information we’re collating valuable too. How do we design our data for re-use as agnostically as possible?

On top of this, it’s critical to acknowledge that the mechanics of some next steps could be complex, even if their central proposition is not. For example any given option could have multiple:

* eligibility criteria
* channels of delivery
* ways to join &ndash; such as a choice of memberships
* ways to use &ndash; such as access to different features based on membership

It follows that rather than attempt to recreate and maintain lots of complex content, we need to be able to do “just enough”. We must start lean in terms of how much information we display, and aim to meet essential needs first.

What is just enough for someone to:

* understand the proposition?
* know how to start?
* be engaged?

### 3. How well does filtering work?

If we acknowledge personalisation can only go so far, logically we need to create mechanisms to allow users explore beyond the initial set of options we present.

Do people understand the connection between the:

* questions we’ve asked?
* results themselves?
* available filters in the results listing?

How easy is it for the user to explore all available options?

## How we tested presenting options

### Expanding the prototype user journey

We extended our user journey into how presenting options might work. We continued to iterate our onboarding segment, swapping out chunks to try variants or different approaches.

{% from "nhsuk/components/images/macro.njk" import image as nhsukImage %}
{{ nhsukImage({
  classes: "app-media--full-width",
  src: "user-journey-iterations@2x.png",
  alt: "Screen grabs displaying 3 iterations of our user journey. Each journey is shown from left to right. Each iteration appears below the previous.",
  caption: "3 iterations of our user journey"
}) }}

[Open a large version of this image (4.5mb)](user-journey-iterations-xlarge.jpg)

### Listing options

For listings, we gradually moved from hard coded selections matched to participants’ local areas, to an API returning only national services derived from the [Better Health](https://www.nhs.uk/better-health/) website.

This enabled us to:

* continue to test our “local is high value” hypotheses
* test a real dataset with real filters

{% from "nhsuk/components/images/macro.njk" import image as nhsukImage %}
{{ nhsukImage({
  classes: "app-media--full-width",
  src: "results-listing-iterations@2x.png",
  alt: "Screen grabs displaying 3 iterations of a results listing from left to right.",
  caption: "3 iterations of our results listing"
}) }}

### Details of a particular option

For pages showing details, we moved from:

* minimal and highly atomic content
* zero imagery

to:

* looser content retaining a strong structure
* minimal imagery

{% from "nhsuk/components/images/macro.njk" import image as nhsukImage %}
{{ nhsukImage({
  classes: "app-media--full-width",
  src: "service-detail-iterations@2x.png",
  alt: "Screen grabs displaying 2 iterations of a details page from left to right.",
  caption: "2 iterations of our details page"
}) }}

## What we learnt

### Blend national and local

Since [discovery](/personalised-prevention-platform/2025/03/discovery-summary/) we’ve continuously proved that presenting a blend of national and local has real value for people. Throughout our sessions people asked if the options were real (they all were), and then make notes to look them up afterwards.

“National” and “local” are false distinctions, very visible to us, as we operate within organisational structures.

But where a thing “comes from” is irrelevant. You can be interested in Active 10, interested in your local Parkrun, and interested in the public gym in your local park.

### Strike a balance between needs and wants

Earlier onboarding prototypes included goal and priority setting segments, along with asking about barriers &ndash; things that could get in the way.

We tested removing these segments, instead asking a series of questions directly mapped to filters in the results listing, for example:

![A question page asking 'how do you like to be taught or coached?' alongside a column of filters displaying the same](example-filter-question@2x.png 'Onboarding questions mapped to filters')

This reductive approach led to some good evidence.

Matching onboarding questions to listing view filters didn’t seem to cause any overt issues, and generally people understood how to change the initial set of options presented.

However, reliance on preference alone means any recommendation aspect is negated. We’re in pure service finder territory, and we’ve left no room for the unexpected or left-field that might spark engagement.

Some people told us they were basing their preferences on past experience &ndash; but that past experience was rooted in activities that had lapsed. So arguably we have a risk of presenting similar or identical options to those that may have failed the user in the past.

We’ve proven that we need to become more opinionated in the options we present. These options must be mapped to a user’s declared goals, priorities, barriers, and preferences, but also weighted by “systemic” opinion.

### Continuously assess the relationship between volume, variety, and granularity

Generally people understood the connection between our onboarding questions, the initial set of options, and the associated filters.

With 18 services in our prototype API, one or two users combined preferences or filters that led to zero results. This led to immediate disengagement and in real life, dropoff.

There is a strong relationship between the volume and variety of information we hold, and the ability to filter (or “personalise”) a set of results. If you only have a few options to offer, you can only offer so much granular control in your interface. This balance needs to be continuously assessed, particularly at lower volumes.

Our 18 services represent a generic baseline that we know to be suitable for all geographic areas and a wide range of people. In our pilot we expect to layer local offerings on top of this baseline, and so our volume and variety increases. With an idea of that increase, we get a better idea of how much granularity we can introduce.

Having a localised layer also allows us to make sure there are no “dead ends”. If our base selection is generic, then a minimum set of options would include all relevant generic options. For example a user’s priority to “exercise or move more” would at the absolute minimum return the Active 10 and Couch to 5k apps.

### “Being engaging” can be quite simple

Unsurprisingly the early presentation of options was not very engaging, with users often mentioning how unexciting they were.

![A service result listing before and after the addition of a logo](logo-addition@2x.png 'Small visual tweaks had marked effect')

What was surprising was how effective deliberately small tweaks were. The addition of a only small amount of imagery &ndash; in some cases only a logo &ndash; along with a looser content structure alleviated any further comment.

---

## What’s next?

In prototype land, we continue along our user journey &ndash; checking in with people to see if any of our options are of interest to them, and introducing the basic elements to help with our “life-long dialogue”.

In pilot land, we’re starting to assemble the user journey for onboarding and presenting opportunities, distilled and iterated from various prototypes.


