---
title: Consent for flu vaccination
date: 2025-09-04
screenshots:
  - title: "Screenshots: Initial journey"
    items:
      - id: email-invitation
        text: Email asking for parent to give or refuse consent
      - id: email-reminder
        text: Email reminding parent to give or refuse consent
      - id: start-page
        text: Start page
      - id: child-name
        text: What is your child’s name?
      - id: child-dob
        text: What is your child’s date of birth?
      - id: child-school-confirm
        text: Confirm your child’s school
      - id: child-school
        text: What school does your child go to?
      - id: parent
        text: About you
      - id: contact-preference
        text: If we need to contact you
        caption: Question shown if parent enters a phone number.
      - id: give-or-refuse-consent
        text: Do you agree to your child having the flu vaccination in school?
  - title: "Screenshots: Refuse consent"
    items:
      - id: refusal-reason
        text: Please tell us why you do not agree to your child having the flu vaccination
      - id: refusal-reason-details-already-given
        text: Where did the child get their vaccination?
        caption: Question shown if selected ‘Vaccine will be given elsewhere’.
      - id: refusal-reason-details-getting-elsewhere
        text: Where will the child get their vaccination?
        caption: Question shown if selected ‘Vaccine already received’.
      - id: refusal-reason-details-medical
        text: What medical reasons prevent the child from being vaccinated?
        caption: Question shown if selected ‘Medical reasons’.
      - id: consultation
        text: Would you like a member of the team to contact you to discuss alternative options?
        caption: This question is not shown if the reason for refusal is ‘Vaccine already received’ or ‘Vaccine will be given elsewhere’
      - id: check-answers-consent-refused
        text: Check and confirm refusal
      - id: check-answers-consultation
        text: Check and confirm follow up request
      - id: confirmation-consent-refused
        text: Confirmation of refusal
      - id: confirmation-consultation
        text: Confirmation of follow up request
  - title: "Screenshots: Give consent for the nasal spray"
    items:
      - id: home-address
        text: Home address
      - id: alternative
        text: If your child cannot have the nasal spray, do you agree to them having the injected vaccine instead?
      - id: health-question-asthma
        text: Has your child been diagnosed with asthma?
      - id: health-question-asthma-steroids
        text: Does your child take oral steroids for their asthma?
        caption: Only shown if a parent answers ‘Yes’ to ‘Has your child been diagnosed with asthma?’
      - id: health-question-asthma-admitted
        text: Has your child ever been admitted to intensive care because of their asthma?
        caption: Only shown if a parent answers ‘Yes’ to ‘Has your child been diagnosed with asthma?’
      - id: health-question-immune-system
        text: Does your child have a disease or treatment that severely affects their immune system?
      - id: health-question-immune-system-close-contact
        text: Is your child in regular close contact with anyone currently having treatment that severely affects their immune system?
      - id: health-question-egg-allergy
        text: Has your child ever been admitted to intensive care due to a severe allergic reaction (anaphylaxis) to egg?
      - id: health-question-anaphylaxis-nasal-flu
        text: Has your child had a severe allergic reaction (anaphylaxis) to a previous dose of the nasal flu vaccine, or any ingredient of the vaccine?
      - id: health-question-medical-conditions
        text: Does your child have any other medical conditions the immunisation team should be aware of?
      - id: health-question-aspirin
        text: Does your child take regular aspirin?
      - id: health-question-recent-flu-vaccination
        text: Has your child had a flu vaccination in the last 3 months?
      - id: health-question-bleeding
        text: Does your child have a bleeding disorder or are they taking anticoagulant therapy?
        caption: Shown if a parent has also given consent for the injected vaccine
      - id: health-question-anaphylaxis-injected-flu
        text: Has your child had a severe allergic reaction (anaphylaxis) to a previous dose of the injected flu vaccine, or any ingredient of the vaccine?
        caption: Shown if a parent has also given consent for the injected vaccine
      - id: health-question-support
        text: Does your child need extra support during vaccination sessions?
      - id: check-answers-consent-given-nasal
        text: Check and confirm (nasal spray)
      - id: check-answers-consent-given-nasal-and-alternative
        text: Check and confirm (nasal spray and alternative)
      - id: confirmation-consent-given-nasal
        text: Confirmation (nasal spray)
      - id: confirmation-consent-given-nasal-and-needs-triage
        text: Confirmation (nasal spray, health answers need triage)
  - title: "Screenshots: Give consent for the alternative injected vaccine"
    items:
      - id: home-address
        text: Home address
      - id: health-question-bleeding
        text: Does your child have a bleeding disorder or are they taking anticoagulant therapy?
      - id: health-question-anaphylaxis-injected-flu
        text: Has your child had a severe allergic reaction (anaphylaxis) to a previous dose of the injected flu vaccine, or any ingredient of the vaccine?
      - id: health-question-medical-conditions
        text: Does your child have any other medical conditions the immunisation team should be aware of?
      - id: health-question-recent-flu-vaccination
        text: Has your child had a flu vaccination in the last 3 months?
      - id: health-question-support
        text: Does your child need extra support during vaccination sessions?
      - id: check-answers-consent-given-alternative
        text: Check and confirm (alternative injection)
      - id: confirmation-consent-given-alternative
        text: Confirmation (alternative injection)
      - id: confirmation-consent-given-alternative-and-needs-triage
        text: Confirmation (alternative injection, health answers need triage)
tags:
  - flu vaccine
---

The children’s flu vaccine is offered yearly to all school-aged children (Reception to Year 11). Sessions run from the beginning of September every year.

The team did some design and research around the flu vaccination prior to the HPV pilot:

- [Parent consent journey, straw-person design](https://design-history.prevention-services.nhs.uk/manage-vaccinations-in-schools/2022/11/give-or-refuse-flu-vaccination-strawperson/)
- [Iteration to parent consent journey for flu](https://design-history.prevention-services.nhs.uk/manage-vaccinations-in-schools/2022/12/flu-consent-iteration/)
- [Updating the consent journey for flu](https://design-history.prevention-services.nhs.uk/manage-vaccinations-in-schools/2023/08/updating-the-consent-journey-for-flu/)

This work needed to be revisited in the context of how the service is designed today, and changes that have been made to the flu vaccination programme since then.

## Choice of vaccine

Most children are offered the nasal spray flu vaccine. This is the preferred flu vaccine as it is the most effective and easiest to administer.

As the nasal spray contains a small amount of gelatine from pigs (porcine gelatine), parents can ask for their child to have an injection instead.

Parents and children may also prefer to have the injection for other reasons. Nurses may also decide that the injected vaccine is more suitable after reviewing any answers to health questions.

### Asking parents for their preferred vaccination method

In our earlier designs, the consent journey asked parents to give consent for the nasal flu vaccination. If they refused, and their reason for refusal was because the vaccine contains gelatine, only then would we offer them the opportunity to request an injection instead.

When we spoke with SAIS teams, they felt it was important that parents were offered a choice upfront. We also explain that the alternative vaccine is available in the initial consent request, so hiding this option was counter intuitive.

We updated the consent question so that parents could give consent for either the nasal spray or injected vaccine. We clearly indicate that the nasal spray is the recommended vaccine, and label the injection as an ‘alternative’.

Parents we tested this new journey with understood the difference and appreciated having both options.

### Getting consent for the alternative injected vaccine

If a parent was to give consent for nasal spray, and then gave an answer to a health question that was contraindicating, a team would need to contact the parent to get consent for the injected vaccine instead.

To reduce the burden on teams, we decided to ask parents who give consent for the nasal spray if they also want to give consent for the injected vaccine.

We initially asked this question only if a parent answered ‘Yes’ to any health question. However, as there are other situations where an injection may be offered on the day (for example, if a child has heavy nasal congestion), we decided to show this question to all parents who give consent for the nasal spray.

This means there are 4 possible consent outcomes:

- Consent given for the nasal spray, and for injected vaccine if needed
- Consent given for the nasal spray only
- Consent given for the injected vaccine only
- Consent refused

## Health questions

There are 8 health questions that are asked for the nasal spray and 4 for the injected vaccine. If a parent gives consent for both vaccines, then 10 questions are asked.

For the nasal spray, if a parent answers ‘Yes’ to ‘Has your child been diagnosed with asthma?’, two further sub-questions are asked:

1. Does your child take oral steroids for their asthma?
2. Has your child ever been admitted to intensive care because of their asthma?

Only if a parent answers ‘Yes’ to either of these sub-questions will the child require triage (because only severe asthma conditions are contraindicating for the nasal spray).

Now that we had a consent journey in which only some ‘Yes’ answers would trigger triage, we could revisit some of our previous questions and decide which would trigger triage and which would not.

In fact, it meant we could ask very precise questions (to identify contraindications that would require triage) and a set of ‘catch-all’ questions in which parents could provide extra information to teams, but which would not add to a triage backlog.

For the flu consent journey, the following questions do not require triage:

- Does your child have any other medical conditions the immunisation team should be aware of?
- Does your child need extra support during vaccination sessions?

Vaccinators will see answers to these questions on the day of vaccination, but they will not require triage by a nurse beforehand.

## Asking parents who refuse if they would like to speak to a nurse

A parent may refuse to give consent, but refusing a vaccination needn’t be the end of the journey.

Some parents may not be sure if their child needs a vaccination or will want to speak to someone before deciding, perhaps needing extra reassurance. Alongside updating the consent journey to support the flu programme, we also investigated asking parents who did not give consent if they would like to speak to a member of the team.

For nurses, this would then provide them with a list of people who have declined to give consent but are open to doing so. Teams can prioritise contacting these parents over those that have given an outright refusal.

## Consent emails

As well as adding information about the 2 different vaccines available, we took this opportunity to review our consent request emails. We:

- removed the note about multiple session dates if there is only one session date
- moved the call to action nearer to the end of the email to make it easier to find
- removed the ‘If you cannot use the online form’ heading and moved its content below the ‘How to respond’ heading
