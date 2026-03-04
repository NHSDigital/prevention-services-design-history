---
title: "Partial results"
description: "An overview of how we improved the communication of partial or failed blood test results, focusing on clarity, reassurance, and clear next steps for users."
date: 2026-01-15
---

## The challenge

Blood tests are an essential component of the NHS Health Check service, with cholesterol levels playing a key role in assessing an individual’s risk of cardiovascular disease (CVD). Within the digital service, users are required to complete these tests at home using self-sampling blood test kits.

However, carrying out blood tests outside a clinical environment increases the likelihood of incomplete or inconclusive results, often due to human error. This makes it critical that we communicate clearly and effectively with users when results are invalid or partial, and that any required follow-up actions are presented in a way that is clear, accessible, and supportive.

## Discovery insights

Before moving into design, the UCD team agreed it would be valuable to run a short discovery phase led by user research. This gave us the opportunity to better understand how people interpret incomplete or failed results, as well as how similar scenarios are handled in other healthcare services. We also reviewed external examples and best practice to ensure our approach was informed by a wider context.

Key insights from this work included:

- Users want clarity — simple language, clear next steps, and reassurance are essential.
- Partial results cause confusion — without context, they can lead to anxiety or misinterpretation.
- Reassurance matters — users need to know failed tests are common and not dangerous.
- Clinicians are cautious — they worry partial results may mislead or overwhelm patients.
- Design must guide action — clear signposting is critical for trust and follow-through.

Based on these insights, we aimed to:

- Use plain English and visual hierarchy where appropriate
- Explain why tests fail and what happens next
- Offer clear follow-up options or opt-outs where possible
- Support users both emotionally and practically

## Other challenges and considerations

Blood test results represent only one part of the information presented to users. We therefore needed to carefully consider how to show incomplete or failed results alongside other health indicators — such as smoking and alcohol status, physical activity, and lifestyle assessments — without overwhelming users or obscuring what action they should take.

![Risk factors](risk-factors.png 'Figure 1: The other ‘health indicators’ a user is presented with')

There were also service constraints to account for. Blood test kits are managed by an external provider, with retests offered only under specific conditions. For MVP, some updates from the provider, such as kit status, are communicated outside of the service, making it difficult to deliver a fully seamless experience.

Failed or partial results are only shown within the service at the end state, once it has been confirmed that no further retesting is possible via the provider and the user must instead complete tests through their GP practice.

Additionally, cholesterol is a key input for calculating a user’s CVD risk score and heart age. When this data is missing, we are unable to present a complete assessment. This raised an important design question: how do we communicate that gap in a way that is clear, reassuring, and actionable?

![CVD risk and heart age](CVD-communicated.png 'Figure 2: CVD risk and heart age presented on results page where no blood tests failed')

## Collaborative problem solving

With the problem space clearly defined, the UCD team ran a collaborative workshop to kick off the design phase. The session helped align the team on priorities and provided a shared foundation for exploring possible approaches.

![Collaborative workshop](design-crit.png 'Figure 3: Screenshot of the mural board that formed the basis of the workshop')

During the workshop, we explored three potential options:

Option 1: Show partial or failed results directly on the main results overview page alongside other health indicators.

Option 2: Surface partial or failed results within the detailed results pages, with tailored follow-up actions, reducing cognitive load on the overview.

Option 3: Link from the overview page to a separate page containing more detailed information about partial or failed results.

![Design options](design-options.png 'Figure 4: Screenshot of the different design options')

## Workshop outcomes

The group agreed that a combination of Options 1 and 2 provided the best balance—keeping users informed without overwhelming them.

Key principles emerged:

- Reassure users that test failures are not their fault
- Clearly signpost required follow-up actions
- Avoid unnecessary technical explanations unless they add value

These outcomes were translated into five realistic scenarios for usability testing, allowing us to assess how different combinations of partial and failed results were understood. Follow-up actions were also added to the main overview page to make next steps more visible.

## Usability testing

Usability testing surfaced several consistent themes:

- Clarity and comprehension: Most users understood the concept of partial results and appreciated clear, plain-English explanations.
- Tone of voice: Messaging was seen as calm, reassuring, and appropriate for a health context.
- Motivation to act: Willingness to contact a GP varied and was influenced by perceived urgency, visual emphasis, and ease of follow-up.
- Information needs: Some users wanted reassurance that their GP could already see their results, while others asked for clearer calls to action.
- Emotional impact: Reactions ranged from mild frustration to reassurance, particularly when results were explained in context.

## Design iteration and refinement

Testing highlighted a key risk: when users received some positive results, the absence of a diabetes (HbA1c) result was easy to overlook. Several participants said they would likely stop at that point — especially if the visible results looked “good” — and would not take further action to contact their GP or arrange another blood test.

Given the importance of HbA1c in identifying risk of type 2 diabetes, this was a significant concern.

To address this, we made the missing diabetes result more prominent by using the Important component from the NHS design system. This increased visibility without introducing alarmist language. We also refined the content to be clearer, more direct, and more action-oriented, explicitly stating that a follow-up blood test was required and explaining why.

Before and after iterations showed clear improvements:

- Previously, the diabetes result appeared alongside other indicators with limited visual emphasis.
- In the updated version, it is clearly separated, prioritised, and framed as an important action.

As a result, we saw improvements in:

- Visibility: Users were far less likely to miss the missing result.
- Perceived importance: Visual hierarchy and language signalled that follow-up was necessary.
- Likelihood of action: Users better understood the need to contact their GP to complete their health check.

![Collaborative workshop](final.png 'Figure 5: Final design for partial results page')

## Next steps

Future iterations could further strengthen the experience by:

- Providing clearer confirmation of whether GPs can already see users’ results
- Exploring more direct follow-up pathways, such as clearer signposting or booking support
- Improving integration with external providers to reduce reliance on out-of-service communications

Overall, this work helped ensure that incomplete and partial results are handled in a way that is clear, compassionate, and action-focused — supporting users to complete their NHS Health Check with confidence and trust.
