---
title: Accessibility audit of BCSS
description: Looking at how we carried out a high level audit of BCSS
date: 2025-04-07
tags:
  - bowel screening
  - Accessibility
---

This week our UCD team have been looking at the accessibility and usability of the bowel cancer screening system (BCSS).
Accessibility concerns with the current system have been raised often as one of the main reasons why we should look to modernise BCSS. The project team have requested an official accessibility audit in the hopes that the feedback can help propel the work forward, however it seems like this could take a while so in the meantime our UCD team have attempted a high level audit to see what we can highlight early on.

## How we did it

- We worked as a group of 3-4 people mostly to and also looked att some things individually
- We referred to the GOV.UK guide on [how to carry out a basic accessibility check](https://www.gov.uk/government/publications/doing-a-basic-accessibility-check-if-you-cant-do-a-detailed-one/doing-a-basic-accessibility-check-if-you-cant-do-a-detailed-one#technology) for guidance on how to start and how to structure a high level audit
- We used the test system to access the screens and code instead of the live system as we are unable to get access to the live version, (this is due to the training and sign off needed for access)
- We used windows own voice over settings to get a brief indicator of how a screenreader may interact with BCSS
- We used the browser developer tools to look at snippets of code to check how things were labelled, the font sizes, and what size interactive elements were
- We used the basic browser tools to zoom in and out so we could see how the system responds
- We referred to an online resource to check the colour contrast of certain sections and elements

## Issues we had

Knowing where to start for a high level audit was difficult as we knew we couldn’t cover everything but wanted to make sure we got the most important parts, referring to the GOV.UK guide was really helpful in pointing us in the right direction.

The BCSS test system can be a bit clunky and difficult to get into, it is also fairly slow.

We were unsure how to format the information, considering this was a high level audit and we were not making detailed recommendations we eventually decided it would be best to create a page in confluence with a simple table describing the issues we found and how they can affect the users of the system.

## What we found

Here are a few of the top level findings that stood out to us as problamatic and things that could hopefully be resolved in the future (we have recorded everything else in confluence, contact Lasara Denton or Stephen Nicola for a link):

- The headings, general text sizes and page titles don’t meet best practice standards or accessibility standards; the body font is very small and there is lots of inconsistencies in font sizes in general, the page headings are not descriptive and the page title seems to be the same for every page.

- When we looked at the code we could see that a lot of things had not been labelled correctly like headings, input fields and selects.

- We could use the keyboard to navigate the page to a degree but it did not always work how we expected and some clickable elements were skipped over.

- Most of the clickable elements that we looked at like buttons, radios and checkboxes were very small and do not meet the minimum size of 24x24.

- When we zoomed into the screen to 400% the information on the system did not react responsively and instead we had to scroll horizontally to see all of the content on the page.

## What's next?

We will be sharing this information with our wider team which hopefully will help stimulate the conversations around modernisation and the push for accessibility improvements for BCSS.
