---
title: "Presenting next steps"
description: "Presented with useful and relevant options, do people feel encouraged to take up activities?"
date: 2025-09-01
author: Mat Johnson
tags:
- prototyping
---


Hello! We’ve undergone a mild rebrand. We’re now known as the Weight Management team, still under Personalised Prevention Services.
{.nhsuk-body-l}

Prior to this we were the [Personalised Prevention Platform (PPP).](/personalised-prevention-platform/)

A lot of our underlying thinking remains the same:

1. we can reach the right people
2. we can encourage people to act to improve their health
3. we can help people to discover services that meet their needs
4. we can understand enough about the user to suggest what might be effective
5. we have permission for a life-long dialogue

Our thin steel thread is a prevention journey for weight management.

Our [previous post](/personalised-prevention-platform/2025/04/onboarding-users/) talked about how we've been exploring how we introduce our service to users, and find out a bit about them, through an “onboarding” process.

In this post let’s look at the next stage: presenting next steps.

## Why present next steps?

Everyone we have spoken to told us they believed they could be doing more to maintain their health.

> [!NOTE]
> However they remained largely unaware of the range of help **already** available to them.

We are confident that any given individual can be presented with a range of options that could be well suited to them. For example:

* solo self-directed apps
* in-person group programmes
* regular community events

We wanted to test how we might present next steps in a clear and actionable manner.

Our prototypes were rooted in four underlying themes:

### 1. What’s the value of presenting a range of opportunities?

Personalisation can only ever go so far &ndash; particularly in the case of [primary prevention.](http://localhost:8080/personalised-prevention/2025/07/definitions/) It is not realistic or desirable to assume that we can propose one perfect route for every individual &ndash; choice and agency must play a part.

Can we provide:

* enough choice for a user to find at least one interesting thing?
* a narrow enough selection to avoid overwhelm and choice paralysis?

### 2. What’s the minimum viable information about an activity we can use?

It is not news to state that directories of services represent “hard yards”. The underlying work of assembling and maintaining information about services (of all shapes and sizes) has been repeatedly “discovered”.

However it’s also not news to state that information such as this is required to underpin all kinds of transformational capabilities (not just a weight management journey).

In our case we need to work out how to establish a source of information about the options we might present to a user in a pilot area.

We’ve made some experimental inroads with some help from the AI Health Coach team (thank you!), asking can algos and agents:

* rapidly assemble a “starter for 10” of relevant local services based on set criteria?
* represent a more sophisticated “automated link checker” maintenance approach to changes in information?

Looking forwards we need to bear in mind that what we’re designing is not the only thing that such information provides value to. How do we design our data for re-use as agnostically as possible?

On top of this, it’s critical to acknowledge that the mechanics of some next steps could be complex, even if their central proposition is not. For example any given option could have multiple:

* eligibility criteria
* channels of delivery
* ways to join &ndash; such as a choice of memberships
* ways to use &ndash; such as access to different features based on membership

It follows that rather than attempt to recreate and maintain lots of complex content, we need to be able to do “just enough”. We must start lean in terms of how much information we display, and aim to meet essential needs first.

What is just enough for someone:

* to understand the proposition?
* to know how to start?
* to be engaged?

### 3. How well does filtering work?

If we acknowledge personalisation can only go so far, logically we need to create mechanisms to allow users explore beyond the initial set of options we present.

Do people understand the connection between the:

* questions we’ve asked
* results themselves
* available filters in the results listing?

How easy is it for the user to explore all available options?

### 4. Can we gauge intent?

A central piece of our proposition (and prevention strategy) is the idea of a feedback loop. We need to be able to check in and support people during their activities, playing the role of “interested friend”.

Yet again it is not news to state that “things are not joined up”. There is no consistent underlying capability that allows us to rely on “knowing via tech” what a user has decided (or not) to do next.

How can we know if a user has:

* downloaded and started to use an app?
* attended a community event?
* used a public facility?

## What we did

### Expanding the prototype user journey

We extended our user journey into how presenting next steps might work. We continued to iterate our onboarding segment, swapping out chunks to try variants or different approaches.

{% from "nhsuk/components/images/macro.njk" import image as nhsukImage %}
{{ nhsukImage({
  classes: "app-media--full-width",
  src: "user-journey-iterations@2x.png",
  alt: "Screen grabs displaying 3 iterations of our user journey. Each journey is shown from left to right. Each iteration appears below the previous.",
  caption: "3 iterations of our user journey"
}) }}

[Open a large version of this image (4.5mb)](user-journey-iterations-xlarge.jpg)

### Listings of next steps

For listings, we gradually moved from hard coded selections matched to participants’ local areas, to an API returning only national services derived from the [Better Health](https://www.nhs.uk/better-health/) website.

This enabled us to:

* continue to prove our “local is high value” hypotheses
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
* a blocking approach requiring a declaration of intent

to:

* looser content retaining a strong structure
* minimal imagery
* a non-blocking approach to getting clues to intent

{% from "nhsuk/components/images/macro.njk" import image as nhsukImage %}
{{ nhsukImage({
  classes: "app-media--full-width",
  src: "service-detail-iterations@2x.png",
  alt: "Screen grabs displaying 2 iterations of a details page from left to right.",
  caption: "2 iterations of our details page"
}) }}

## What we learnt

### Blend national and local

Since [discovery](/personalised-prevention-platform/2025/03/discovery-summary/) we’ve continuously proved that presenting a blend of national and local has real value to people. Throughout our sessions people asked if the options were real (they all were), and then make notes to look them up afterwards.

“National” and “local” are false distinctions, very visible to us, as we operate within organisational structures.

But where a thing “comes from” is utterly irrelevant to a user. You can be interested in Active 10, interested in your local Parkrun, and interested in the public gym in your local park.

### Strike a balance between needs and wants

Earlier onboarding prototypes included goal and priority setting segments, along with asking about barriers &ndash; things that could get in the way.

We removed these segments, instead asking a series of questions directly mapped to filters in the results listing, for example:

![A question page asking 'how do you like to be taught or coached?' alongside a column of filters displaying the same](example-filter-question@2x.png 'Onboarding questions mapped to filters')

This reductive approach led to some good evidence.

Matching onboarding questions to listing view filters didn’t seem to cause any overt issues, and generally people understood how to change the initial set of options presented.

However, reliance on preference alone means any recommendation aspect is negated. We’re in pure service finder territory, and we’ve left no room for the unexpected or left-field that might spark engagement.

Some people told us they were basing their preferences on past experience &ndash; but that past experience was rooted in activities that had lapsed. So arguably we have a risk of presenting similar or identical options to those that may have failed the user in the past.

We’ve proven that we need to become more opinionated in the options we present. These options must be mapped to a user’s declared goals, priorities, barriers, and preferences, but also weighted by “systemic” opinion.

### Continuously assess the relationship between volume, variety, and granularity

With 18 services in our prototype API, one or two users combined preferences or filters that led to zero results. This led to immediate disengagement and in real life, dropoff.

There is a strong relationship between the volume and variety of information we hold, and the ability to tune (or “personalise”) a set of results. If you only have a few options to offer, you can only offer so much granular control in your interface.

Our 18 services represent a generic baseline that we know to be suitable for all geographic areas and a wide range of people. In our pilot we expect to layer local offerings on top of this baseline, and so our volume and variety increases. With an idea of that increase, we get a better idea of how much granularity we can introduce.

Having a localised layer also allows us to practice ”no dead ends”. If our base selection is generic, then a minimum set of options would include all relevant generic options. For example a user’s priority to “exercise or move more” would at the absolute minimum return the Active 10 and Couch to 5k apps.

### “Being engaging” can be quite simple

Unsurprisingly the early presentation of options (above) was not engaging, with users often mentioning how unexciting they were.

What was surprising was how effective deliberately small tweaks were. The addition of a only small amount of imagery &ndash; in some cases only a logo &ndash; along with a looser content structure alleviated any further comment.

![A service result listing before and after the addition of a logo](logo-addition@2x.png 'Small visual tweaks had marked effect')

### Intent is the next big challenge

A big challenge for us is to figure out how and where in our overall prevention journey we can find out what a user is actually doing. We need to be able to do this in order to:

* check in with someone in a structured and personalised way &ndash; we approach the user with a “subject”
* match feedback to options in order to improve our recommendations to all users
* provide feedback to services themselves
* get a better picture of outcomes

In the simplest possible scenario, we show the user options, they pick one, then we check in later to see how it’s going. Easy right?

Not so fast!

Let’s take Parkrun as an example. A potential user journey could be:

1. noticing Parkrun in the listing
2. reading more in the details and getting interested
3. clicking through to the Parkrun site to find out more
4. getting engaged and registering with Parkrun
5. attending their first event

From point 3, we have no idea of what the user does next. The click through does not represent “starting” or “choosing”, we can only infer it represents a desire to find out a bit more about something before making a decision.

Remember, it would be unwise to attempt to replicate, host and maintain information about any possible option in its entirety.

There’s three potential ways to approach this:

1. Gain a commitment from the user that they are going to take up an option that we’ve presented.
2. Receive information back from services themselves.
3. Work to assemble clues and indications as to intent during the user journey.

---

We felt we needed to work to disprove the first approach in order to counter repeated querying moving forward.

![Two screenshots, one showing an 'I want to do this' button, and the other showing app links and a 'what do you think?' question](intent-iteration@2x.png 'From blocking to gathering clues')

We started with an initial “blocking” design, insisting on a commitment: “I want to do this”.

In sessions, there was inconsistency in users’ understanding of the interaction. When prompted to explain, answers varied from things like “it would launch the app, right?” to “it would display more details” (correct).

Here’s why such an approach like this isn't realistic and won’t work for users (or us):

* We’re asking for an **immediate** commitment from the user.
* That commitment is required before the user has access to all the information they may need.
* Demanding commitment this quickly creates unreliability at a key point, risking false positives.
* To create an interface that requires a declaration means you must remove all affordance to onward journeys, creating friction in exactly the wrong place.
* There is literally no user need here, we’re making the user do the work to join things up for us.

---

The second potential approach is the ideal: we receive information back from services themselves about usage.

A reporting approach benefits from being reliable and removes unnecessary work from the user to join things up. It’s definitely something to explore, particularly with options that offer online referral or registration.

However, we also must consider:

* informal or small scale community based options, for example a litter picking club
* services that don’t _want_ to report on an individual level, for example any service offering anonymity of any kind
* facilities which have zero registration or reporting, for example a public gym in a park

All these examples are completely viable &ndash; the lack of “being joined up” is not a reason to exclude them.

In short, this approach is strong and we’d likely consider it the best, but we need to be able to handle a range.

---

Finally we can work to assemble clues and indications as to someone’s during this onboarding journey.

Perhaps we can gain clues in the background by using analytics to:

* track and save result sets as the user explores options
* track visits into detail pages
* measure dwell time, scroll depth and so on in such pages
* track outbound clicks

We can also experiment more with providing opportunities for the user to communicate interest:

* favouriting or liking
* asking the user what they think of an option in-page
* include tools to send or share option details

Using multiple techniques puts us in the realm of probabilities and likelihoods. This is more realistic and reflective of what we know about people’s lived experiences. It also prevents us from building a dependency on false points of truth.


---

## What we’re doing next

Our next piece of work is around the first conversation we’ll have with a user after they’ve been presented options – the very first check in.

At the point of our first check in, someone has onboarded, potentially setting up some goals, barriers, and preferences along the way. Hopefully they’ve been presented with one or more options that are interesting and engaging.

Our next task is to engage the user and introduce a bit more of our interface for what we hope is an ongoing conversation. Importantly we need to jump the gap between presenting options and figuring out if something’s being started.
