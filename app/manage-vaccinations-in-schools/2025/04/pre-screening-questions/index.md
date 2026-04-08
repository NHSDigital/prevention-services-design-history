---
title: Asking pre-screening questions
date: 2025-04-10
screenshots:
  items:
    - Original design with radio buttons (for HPV)
    - Updated design with checkboxes (for HPV)
    - text: Updated design with checkboxes (for MenACWY)
      caption: In this example, a nurse has manually checked all pre-screening questions prior to administering the first vaccination in the session.
    - text: Updated design with checkboxes (for Td/IPV)
      caption: In this example, a nurse is now ready to administer the second vaccination. The first question appears pre-selected because it was checked for the previous MenACWY vaccination.
tags:
  - user research
---

Before administering a vaccine, a nurse needs to ask the child a number of pre-screening questions.

These are separate from the health questions asked during the consent process, and are asked to ensure that no contraindications are present on the day of vaccination. This is the last opportunity for any new information to be given before vaccinating a child.

The nurse needs to confirm that the child:

- is feeling well
- is not pregnant (only asked for HPV and Td/IPV)
- is not taking any medication which would prevent vaccination (only asked for MenACWY and Td/IPV)
- has no allergies which would prevent vaccination
- has not already had the vaccination
- knows what the vaccination is for, and is happy to have it

## Radio buttons versus checkboxes

There are 2 possible ways we could ask pre-screening questions:

- show each question followed by Yes/No radio buttons
- show a checkbox alongside each question

We originally chose to use radio buttons as these are clearer, and also consistent with how we ask similar questions elsewhere in the service.

However, on an already long and complex page, these took up considerable space and required a little more effort to answer. We updated the design to use checkboxes.

## Pre-screening questions when multiple vaccines are being administered

When multiple vaccines are being administered, most if not all pre-screening questions will be the same. A nurse will typically ask pre-screening questions for all the vaccines before proceeding. Not only is this quicker, but it also reduces the chance of a child refusing the second vaccination after completing the first.

Because of this, we decided to pre-select the checkboxes for pre-screening questions for each subsequent vaccination being recorded for a child in a session. However, there is a balance to be struck, between making the vaccination journey efficient, and ensuring it is safe.

Two of the questions are about the child’s current state (if they are feeling well and if they are pregnant) and the answers would apply to both vaccines. However, the remaining questions are vaccine-specific and the answers could potentially be different for each vaccine. It could therefore be considered a clinical risk to pre-check answers to these questions.

We considered using a single set of questions covering all vaccines (for example, “Do you know what the vaccinations are for, and are you happy to have them?”). However, this would present problems if the answer was different for each vaccination.

We updated the design to only pre-select the 2 checkboxes which ask about the child while leaving the others unchecked.

| Question                                                              | Programmes      | Can be pre-checked |
| --------------------------------------------------------------------- | --------------- | ------------------ |
| Child is feeling well                                                 | All             | Yes                |
| Child is not pregnant                                                 | HPV, Td/IPV     | Yes                |
| Child is not taking any medication<br>which would prevent vaccination | MenACWY, Td/IPV | No                 |
| Child has no allergies which<br>would prevent vaccination             | All             | No                 |
| Child has not already had the vaccination                             | All             | No                 |
| Child knows what the vaccination<br>is for, and is happy to have it   | All             | No                 |

## Asking if a child is pregnant

We originally displayed the pregnancy question for relevant vaccines when a child’s sex was female or unknown. However, this value can be unreliable (sometimes it is used to record the child’s sex, sometimes used to record the child’s gender).

We updated the design to always display this question for the relevant vaccines regardless of the child’s sex.
