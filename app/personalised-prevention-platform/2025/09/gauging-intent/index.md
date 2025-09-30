---
title: "Gauging intent"
description: "Presented with useful and relevant options, do people feel encouraged to take up activities?"
date: 2025-09-02
author: Mat Johnson and Roz Strachan
tags:
- prototyping
---

A central piece of our proposition (and that of prevention strategy in general) is the idea of a cycle.

{% from "nhsuk/components/images/macro.njk" import image as nhsukImage %}
{{ nhsukImage({
  classes: "app-media--full-width",
  src: "stages-highlighted.png",
  alt: "Diagram of a prevention cycle showing stages of information provided, risks explained, support to improve, taking action, maintaining. Find support, taking action, and maintain are highlighted",
  caption: "The segments of the cycle we’ve been exploring"
}) }}

So far we’ve explored a user’s very first contact with our service &ndash; [introducing and onboarding,](/personalised-prevention-platform/2025/04/onboarding-users/) followed by [presenting opportunities.](/personalised-prevention-platform/2025/09/presenting-opportunities/) At this point we have one goal. We want to understand just enough about someone to suggest relevant opportunities that meet their needs.

Next we need to be able to support people in maintaining their activities.

A big challenge for us is to figure out which (if any) opportunities a user intends to take up, now that we’ve presented them. We need to be able to do this in order to:

* check in with someone in a structured and personalised way &ndash; we approach the user with a “subject”
* match feedback to options in order to improve our recommendations to all users
* provide feedback to services themselves
* get a better picture of outcomes

How can we know if a user has:

* downloaded and started to use an app?
* attended a community event?
* used a public facility?

In the abstract this seems farily straightforward. We show the user options, they pick one, then we check in later to see how it’s going. Easy right?

Not so fast!

Let’s take Parkrun as an example opportunity. A potential user journey could be:

1. noticing Parkrun in the listing
2. reading more in the details and getting interested
3. clicking through to the Parkrun site to find out more
4. getting engaged and registering with Parkrun
5. attending their first event

From point 3, we have no idea of what the user does next. The click through does not represent “starting” or “choosing”, we can only infer it represents a desire to find out a bit more about something before making a decision.

---

Guess what? It’s not news to state (see previous post about presenting opportunities) that “things are not joined up”. There is no consistent underlying capability that allows us to rely on “knowing via tech” what a user has decided (or not) to do next.

---

## Can we gauge intent?

## How we tested

### Details of a particular option

For pages showing details, we moved from:

* a blocking approach requiring a declaration of intent

to:

* a non-blocking approach to getting clues to intent

{% from "nhsuk/components/images/macro.njk" import image as nhsukImage %}
{{ nhsukImage({
  classes: "app-media--full-width",
  src: "service-detail-iterations@2x.png",
  alt: "Screen grabs displaying 2 iterations of a details page from left to right.",
  caption: "2 iterations of our details page"
}) }}

## What we learnt

### Intent is the next big challenge



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
* To create an interface that requires a declaration means you must remove all other ways to continue, creating friction in exactly the wrong place.
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

Wouldn't it be good if, as we introduce users to the interface surfaces and tools that make up this dialogue, they didn't have to do a ton of planning and entering of information in order to even get set up? You know the vibe right?

The vibe we want is akin to tripping on a paving stone then catching yourself - oh look, it's all here and it makes sense! We’re going for people who aren’t necessarily highly motivated, so we need to always be extremely mindful of _friction._ How can we work really hard so our users don’t have to?

And so when we're initiating our conversation, the first sally in our dialogue, wouldn't it be nice if we had an idea of what we wanted to talk about? What if we were able to talk about the things we'd made the user aware of? What if we could have an idea of what was interesting to them, what they might be considering doing?
