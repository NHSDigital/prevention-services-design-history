---
title: Accessibility audit of BCSS
description: How the bowel team carried out a high level audit of the bowel cancer screening service (BCSS)
date: 2025-04-07
tags:
  - bowel screening
  - accessibility
---

This week the bowel UCD team reviewed the accessibility and usability of the bowel cancer screening system (BCSS).
Accessibility concerns with the current system are often raised as one of the main reasons to modernise BCSS. The project team requested an accessibility audit to use the results to accelerate the modernisation work. However, it seems like this audit could take a while so in the meantime the UCD team conducted a high level audit to highlight potential improvements early on.

## How we did it

- worked together in groups of 3 to 4 people and also looked at some things individually
- referred to GOV.UK guidance on [how to carry out a basic accessibility check](https://www.gov.uk/government/publications/doing-a-basic-accessibility-check-if-you-cant-do-a-detailed-one/doing-a-basic-accessibility-check-if-you-cant-do-a-detailed-one#technology) for advice on how to start and how to structure a high level audit
- used a BCSS test system to access the screens and code rather than the live system (access to the live system is difficult due to the training and sign off required)
- used the Windows default voice over settings to get a brief indicator of how a screenreader might interact with BCSS
- used the browser developer tools to look at snippets of code to check things like element labelling, font sizes, and the size of interactive elements
- used the basic browser tools to zoom in and out to see how the system responds
- referred to an online tool to check the colour contrast of certain sections and elements

## Issues we had

Knowing where to start for a high level audit was difficult. We knew we couldn’t cover everything but wanted to make sure we got the most important parts. Referring to the GOV.UK guide was really helpful in pointing us in the right direction.

The BCSS test system is clunky and difficult to get into. It is also fairly slow.

We were unsure how to format the information, considering this was a high level audit and we were not making detailed recommendations. We eventually decided it would be best to create a page in Confluence with a simple table describing the issues we found and how they can affect BCSS users.

## What we found

Here are a few of the top level findings that stood out to us as problematic and things that could hopefully be resolved in the future. We recorded everything else in Confluence so contact Lasara Denton or Stephen Nicola for a link).

1. The headings, general text sizes and page titles don’t meet best practice standards or accessibility standards. The body font is very small and there are lots of inconsistencies in font sizes in general. The page headings are not descriptive and the page title seems to be the same for every page.

2. When we looked at the code we could see that a lot of things had not been labelled correctly like headings, input fields and selects.

3. We could use the keyboard to navigate the page to a degree. However, it did not always work how we expected and some clickable elements were skipped over.

4. Most of the clickable elements that we looked at, like buttons, radios and checkboxes, were very small and do not meet the minimum size of 24x24.

5. When we zoomed into the screen to 400% the information on the system did not react responsively. Instead, we had to scroll horizontally to see all of the content on the page.

## What's next?

We will share this information with our wider team to hopefully help stimulate the conversations around modernisation and improving the accessibility of BCSS.
