---
title: How we're designing the user interface content 
description: Our approach to content design and testing
date: 2025-04-16
tags:
  - service
  - content
  - user research
---

## Background 

Before this service was built, campaigns were created with configuration files (JSON format) and largely used technical language. Initially, much of this terminology was copied into the user interface but we simplified the language as we built the service and continue to iterate. 

Our goal is to empower all users – both current expert users, and potential new non-expert users. This aligns to our metric of making SPI easier to understand and simplifying the experience.

## Challenges

Our current SPI users, the Operational team, are experts, so they are comfortable with the technical language used. They are also a small group of users to test with. The team consists of:

- Delivery lead
- Delivery support
- Technical lead
- Technical support

During user research sessions, our expert users confirmed our hypothesis that a lot of the language would not make sense to any new users coming on board.

From the outset, we've been working on making the content clearer for novice users and we’re continually updating the content to align with new features, technical updates, and insights from user research sessions. 

## How we track content changes

To get the service ready as a minimum viable product (MVP), we created a content board in Mural. This helps us to:

- track and share content changes
- keep a record of ideas, feedback and decisions

We've continued using the Mural board as our main content document. At each stage or release, we add a new block to show the latest updates.

To keep everything accurate, we take screenshots from the live SPI environment and highlight any new or changed content in red. We then cross-check these against what's live in SPI, so we always have a single, up-to-date source of truth.

[![zoomed out view of a Mural board with screen shots](SPI-content-mural.png)](SPI-content-mural.png)

## Mural board and content process

As we've progressed through MVP, Core (Alpha) and Smart (Beta) the content has continued to evolve.

We update it regularly based on:

- user research sessions
- new features
- technical updates
- releases

Example of insights from user research:

- Is a routing plan and a routing ID the same thing?
- The consensus was that the descriptions under filter rules could be shortened
- Agreement that less is more for these descriptions and they should be as plain English as possible (they just want to see in layman's terms)
- Example rules need to be updated and made more visible

Insights from user research are added to a spreadsheet, organised by section, and prioritised so we can make sure they're actioned. Example:

[![Snippet of a spreadsheet capturing content actions](SPI-content-spreadsheet.png)](SPI-content-spreadsheet.png)

We then draft the required content changes in a Word document. This gives the UCD, SPI, and clinical teams a chance to review and give feedback before anything is finalised. Example:

[![Snippet of a word document showing content changes](SPI-content-word-document.png)](SPI-content-word-document.png)

## Other ways we gathered insights

In addition to user research sessions, we also invite users to share their content feedback asynchronously. This is particularly useful for technical terminology, as it gives users time to consider their answers, rather than responding immediately during a user research session. Example:

[![Example of user feedback on content and terminology](SPI-content-asynchronous.png)](SPI-content-asynchronous.png)

We collate the answers anonymously, which helps users feel more comfortable giving honest feedback. Example: 

[![Example of user feedback collated in a Mural board](SPI-content-collate-results.png)](SPI-content-collate-results.png)

We then sort the feedback into 'suggested alternatives' and 'difficulty to explain' ratings. Example:

[![Example of user feedback with scored difficulty ratings](SPI-content-difficulty-rating.png)](SPI-content-difficulty-rating.png)

## Content insights

We structure user research sessions to focus on specific parts of SPI, which helps us gather targeted feedback on how content is working.

One key insight is that the language the Operational team uses day-to-day often doesn’t match the technical terms in SPI.

### Example 1: 'Copying iterations'

We originally used the term 'duplicating iterations', but users told us that 'copy' or 'clone' felt more natural. These are phrases they're familiar with from everyday tasks, like 'copy and paste' or 'copy a file'. Based on this, we're updating the language to reflect the way they talk:

[![Screen shot showing why we changed the phrase duplicate iterations to copy iterations](SPI-content-copying-iterations.png)](SPI-content-copying-iterations.png)

### Example 2: 'Iteration'

While our expert users understand the term 'iteration', they pointed out it's more of a developer word, not one they use internally. Instead, they talk about 'creating another file', 'events', or refer to specific activities like 'Monday comms'. They felt that 'iteration' isn't the clearest choice, especially for new users. We're now exploring alternative terms that better reflect their language and workflows.

## Inline support content 

Alongside updating specific terminology, we've also added inline support content in SPI to help users as they work. This support appears directly next to the task, so users don't need to leave SPI to get help or look something up.

For example, we've added guidance to explain:

- what a filter rule is
- how to choose a clear, helpful name for a rule
- how to write a useful description 

This helps users understand what they're doing and why it matters, especially when setting up rules that others might need to read or reuse later:

[![Example of a screen showing inline help](SPI-content-inline-example2.png)](SPI-content-inline-example2.png)

We also use inline content to help users understand what they need to input in blank fields. This includes:

- short hints or examples inside the field (placeholder text)
- help text above the field that explains what's expected
- tips on how the information will be used, so users know why it matters

This kind of support is especially useful when the field requires something specific, like a naming convention, format, or a value that affects how a rule works. By adding this guidance, we reduce guesswork and help users feel more confident as they fill things in:

[![Example of a screen showing inline help](SPI-content-inline-example.png)](SPI-content-inline-example.png)

In addition to the inline support, we've developed detailed guidance documentation to help novice users self-serve. This allows users to access step-by-step instructions and clear explanations whenever they need extra help, without needing to ask for assistance. 

You can [read more about how we're approaching guidance here](/select-people-for-invitation/user-guidance/). 

## Button consistency

We recently reviewed the buttons in SPI to ensure they are consistent and align with NHS and GDS standards, including accessibility. 

We looked at the entire user journey, making content updates such as:

- using verbs at the start of button labels, like 'Check', 'Save', and 'Add'
- writing button text in sentence case
- making button content clearer and more instructional
- adding extra confirmation steps for critical actions, such as 'Are you sure you want to delete?'

This was done alongside a design review, which included updates like rounded corners and optimising button placement. 

## Future content

As we begin research with local regions, who will be novice users, we'll need to simplify the content even further. 

This is part of the wider strategy to create 'a more joined-up prevention and vaccination offer'. We've planned user research sessions with ICBs, PCNs, and GPs, as well as workshops, to help shape and refine the future content in SPI. 