---
title: Rule library
description: An easier way to add rules
date: 2025-03-04
tags:
  - service
  - prototype
  - content
  - user research
  - rules
---

## Exec summary
Overall the rule library was considered to add significant value, but we plan to revisit it in the future as we believe there are some improvements that we can make - in particular to do with rules involving ages and dates.

## What are rules?
As shown in the diagram on the [brief description of this service](/what-is-this-service/), the way SPI works is by removing people from an initial dataset (the cohorts of eligible people), so that the people remaining are the ones we want to contact at that particular time.

The way we remove people from an invitation group is by applying "rules" such as:
- don't invite people who are resident in a care home (because they have alternative vaccination arrangements)
- don't invite people outside of certain ICBs (because we're inviting where there is good appointment capacity)
- don't invite people who are too old or too young (usually people outside of the elgible age range shouldn't be in our base cohorts in the first place, but sometimes PDS records are corrected inbetween the cohorts being generated and the invitations being sent, so someone might have initially appeared eligible, but in fact they aren't)

Rules are also used to define which message content and communication channels should be used, e.g.
- send people under 16 version 1
- send people over 16 version 2
- send people with a braille preference the braille letter

## How do users add rules without the library
We initially designed the service with a highly flexible interface for constructing rules. This was so that for the MVP it was possible to construct any type of rule that was required. Feedback confirmed what we suspected, which is that although the flexibility is useful (and was the right thing to do for MVP), it is also relatively complicated.

![UI for building a rule](addrule1.jpg)

As can be seen in the image below the lists of options available for configuring rules are lengthy, and detailed knowledge is required to know which operators to use with which attributes to acheive the desired outcome. Additionally the syntax for comparators, though powerful, isn't always discoverable or intuitve e.g. for dates it's possible to use advanced features like offsets.

![UI for building a rule, showing long list of attributes](addrule2.png)

## How can users add rules using the library
The idea of the library was that it could potentially have 3 benefits:
1. a quick way to add frequently used rules
2. confidence that rules are constructed correctly and will work as expected
3. a way to learn about how rules are constructed, and the ability to copy a library rule as the basis to create a custom rule​

We worked with the current users to understand which rules would be most useful to them in the library. We then came up with a simple design for choosing rules from the library.

![List of library rules](library1.png)

After a rule has been chosen, the user is taken to the normal "rule builder" page, with the values pre-populated. They will need to adjust some parameters e.g. in this case the "\~X\~" which represents the number of years.

![The rule builder with the library values prepopulated](library2.png)

This approach was found to work reasonably well and allowed us to release value quickly by reusing screens and building on functionality which already exists. Users found it clear how to select rules from the library, though some usability issues were noted around having to manually find the right parts of strings to update on the pre-populated "rule builder" page.

Overall the rule library value was considered to add significant value, but we plan to revisit it in the future as we believe there are some improvements that we can make - in particular to do with rules involving ages and dates.
