---
title: Prototype updates after round one
description: Building out more of the journey and expanding mammography sections
date: 2025-01-15
screenshots:
  items:
    - text: "Clinic list"
      src: clinics_list.png
      caption: Clinic list now shows 'special appointments'
    - text: "Clinic appointment"
      src: clinics_event.png
      caption: Appointment view now shows screening history and adds a pre-screening question
    - text: "Medical information"
      src: clinics_events__medical-information.png
    - text: "Medical information complete"
      src: clinics_events__medical-information_complete.png
    - text: "Imaging / mammography"
      src: clinics_events__imaging.png
    - text: "Screening complete"
      src: clinics_events_screening_complete.png
      caption: Once screening is complete, medical information and images are added as tabs to the appointment
    - text: "Clinics attended not screened reason"
      src: clinics_attended-not-screened-reason.png
tags:
  - alpha
  - prototype
  - initial screening
---

## Expanding our prototype

Our [first prototype](/manage-breast-screening/2024/12/first-alpha-prototype/) only had a few pages, and was put together very quickly. For our second round we’ve concentrated on filling out some the service, and expanding on the mammography sections.

We worked on these areas:

- Putting the focus on the appointment rather than the participant
- Adding screening history
- Adding historic clinics
- Adding a ‘workflow’ for mammographers
- Adding an image capture page
- Adding an exit page

## Thinking about how we collect medical information

In screening, mammographers only have 5 to 8 minutes to screen each woman – this is very little time to assess, take medical history, and take the mammograms. In our first round of usability testing mammographers expressed concern about the potentially lengthy form and their ability to complete it in time.

For most of the medical history questions, we only need detail where the answer is affirmative. For example, if there is no history of breast cancer in the woman’s family, we don’t need to ask more about it. But if there is, then we need to capture detail about the history.

Similarly, if a pre-appointment questionnaire was sent to the woman – if she answered no to all questions, ideally there would be no further questions. Only where she answers yes would the mammographer follow up.

We want to explore how we can show all the questions that need to be asked, but in a way that quick to complete for the common case. Only where the answer is ‘yes’ for a question should we prompt further. As a first attempt, we’ve tried a summary list where each item starts off incomplete – but with a single button that can answer all remaining items in one go. This attempts to optimise for fewest clicks where no further information is needed.

![A gif video of the medical information page. The page starts with a summary list with 10 rows including breast implants, implanted medical devices, pregnancy, and all are shown as 'incomplete'. There is a button at the bottom labelled 'Answer all incomplete as No / None' that when pressed changes the answers to all the rows to 'No' or 'None' ](manage-mark-incomplete-as-none.gif 'Testing a single button as a way to mass-answer questions')

## Changing how mammogram information is captured

In the current National Breast Screening Service (NBSS), admin staff need to record the number of images taken, which views they were, if any were repeats, and the reason for the repeat. The mammogram machines know much of this information and it’s recorded in the metadata, but it’s not available to NBSS.

We’d like to explore extracting this information from the metadata so that the task for the mammographer would be to confirm everything is correct, and mark any repeats. They wouldn’t need to record the number of images or which view they were because we already know that.

For this prototype, we’ve started by simulating images loading one by one, each with some placeholder information.

![A screenshot of a page showing mammogram images. 4 mammograms are shown - for each there is a summary list stating the side (left or right), the view, whether it's a repeat, and any comment, together with change links. ](clinics_events__imaging.png 'Mammograms shown with key information')
