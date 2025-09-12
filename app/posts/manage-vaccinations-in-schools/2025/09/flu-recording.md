---
title: "Doughnuts and diamonds: Recording a flu vaccination"
date: 2025-09-12
opengraphImage:
  src: /manage-vaccinations-in-schools/2025/09/flu-recording/doughnut-and-diamond.png
  alt: Icons used for nasal spray (empty circle) and injected vaccine (filled diamond)
screenshots:
  - title: "Screenshots: managing a session"
    items:
      - Sessions
      - Session – Edit session
      - Session – Delegation
      - text: Session – Registration
        caption: Some teams don’t use registration at all, or only for certain session, so we made this feature optional. If registration isn’t enabled for a session, children who are ready for a vaccinator will appear in the ‘Record vaccinations’ section automatically.
      - Session – Review consent responses
      - Session – Review triage statuses
      - text: Session – Review PSDs
        caption: When a team enables the PSD protocol for a session, Mavis shows a new PSDs section. If a user has permission, there is a link to bulk add PSDs.
      - Session – Add PSDs
      - text: Session – Register attendance
        caption: Mavis shows the vaccination method for each child. When a team enables the PSD protocol for a session, Mavis shows the PSD status for each child due to have a nasal spray. A user can filter results to show only these children.
      - text: Session – Record vaccinations
        caption: As well as showing any default batches, we provide each vaccinator with an individual count of vaccinations given for each vaccine they can administer. We show this information within an expander (closed by default).
  - title: "Screenshots: recording a vaccination"
    items:
      - text: Record vaccination (nurse, PGD protocol)
        caption: In this example, the parent has given consent for the nasal spray and alternative injected vaccine. A nurse can choose to give the alternative vaccine if they decide it’s necessary on the day. Even though this child has a PSD, because the user is a nurse, they will still administer the vaccination with the PGD protocol.
      - text: Confirm vaccination (nurse, PGD protocol)
        caption: The confirmation screen for a nurse is the same as that for other vaccination programmes.
      - text: Record vaccination (HCA, PGD supply)
        caption: In this example, the parent has given consent for the nasal spray and alternative injected vaccine. An HCA can administer a vaccine using the PGD protocol by recording who supplied it. The option to administer the alternative injection is also shown because this session has the national protocol enabled.
      - text: Confirm vaccination (HCA, PGD supply)
        caption: The confirmation screen for an HCA using the PGD protocol shows the nurse who supplied the vaccine.
      - text: Record vaccination (HCA, PSD added)
        caption: In this example, the parent has given consent for the nasal spray and alternative injected vaccine, and the session is using PSDs. An HCA can see that a child has a PSD, and administer a vaccine using the PSD protocol. The option to administer the alternative injection is also shown because this session has the national protocol enabled. If the HCA decides to administer an injection instead, they’ll be asked to record the supplier as one of the conditional questions shown under that option.
      - text: Confirm vaccination (HCA, PSD added)
      - text: Record vaccination (HCA, national protocol)
        caption: In this example, the parent has given consent for the injected vaccine only. An HCA can administer a vaccine using the national protocol by recording who supplied it.
      - text: Confirm vaccination (HCA, national protocol)
        caption: The confirmation screen for an HCA using the national protocol shows the nurse who supplied the vaccine.
---

The children’s flu vaccine is offered yearly to all school-aged children (Reception to Year 11). Sessions run from the beginning of September every year.

The team did some [design and research around recording flu vaccinations before the HPV pilot](https://design-history.prevention-services.nhs.uk/manage-vaccinations-in-schools/2022/11/poc-flu-campaign/). We needed to revisit this work in the context of how the service works today, and any changes that made to the flu vaccination programme since then.

## How flu differs from other vaccination programmes

### Choice of vaccine

Most children are offered the nasal spray flu vaccine. This is the preferred flu vaccine as it’s the most effective and easiest to administer.

As the nasal spray contains a small amount of gelatine from pigs (porcine gelatine), parents can ask for their child to have an injection instead.

Parents and children may also prefer to have the injection for other reasons. Nurses may also decide that the injected vaccine is more suitable after reviewing any answers to health questions.

### Vaccine is also given to primary school children

Unlike adolescent programmes, the cohort for flu includes younger children who attend primary school (4 to 11 years old). This can present a challenge if a child cannot confirm their identity, meaning an adult will need to confirm it for them.

### High volume of vaccinations

As the vaccination is given to every school-aged child, cohorts can be large with SAIS teams having to vaccinate more children during a session.

### Non-registered practitioners can give vaccinations

Given this high volume, flu sessions may use trained but non-registered practitioners, such as healthcare assistants (HCAs), to help administer vaccines.

### Flu is not co-administered

Again, due to this increased volume, flu is almost always administered on its own, and not alongside other vaccination programmes.

## Managing sessions

Adding support for the flu programme meant adding more sessions, for more schools across different vaccination programmes.

The previous design for sessions allowed teams to browse sessions by their status (today’s sessions, scheduled sessions, unscheduled sessions and completed sessions). This worked when there was a limited number of sessions, but it would become difficult for teams to find a session as this number increased.

We adapted the existing search filter and results pattern used to find children in a session, to allow teams to filter sessions by name, status, programme and session type. This pattern provides pagination, meaning it can accommodate more sessions, too.

![New sessions page.](sessions.png 'Sessions filtered by programme and type')

## Managing consent responses

As covered in [Consent for flu vaccination](https://design-history.prevention-services.nhs.uk/manage-vaccinations-in-schools/2025/09/flu-consent/), there are 4 possible consent outcomes:

- Consent given for the nasal spray, and for injected vaccine if needed
- Consent given for the nasal spray only
- Consent given for the injected vaccine only
- Consent refused

Teams need to easily identify which children have consent for which vaccination method. Consent can also conflict if one parent gives consent for the nasal spray only, and the other for the injected vaccine only.

We decided to resolve this by having 2 distinct outcomes for consent given:

1. Consent given for the nasal spray
2. Consent given for the injected vaccine

We flag children as having conflicting consent if the parent giving consent for the nasal spray has not also given consent for the alternative injected vaccine.

### Recording a new consent response

When recording a new consent response, the nurse can record if the parent also gives consent for the injected vaccine as an alternative, as a conditional question.

![Recording a new consent response as a nurse.](new-consent-response-decision.png)

## Triaging health questions

We made changes to the triage journey to support the flu programme.

### Sub questions

We show nurses answers to sub questions only if a parent has answered ‘Yes’ to the root question.

### Only some answers require triage

No design changes were needed, but the business logic was updated so that answers given to some questions no longer placed a child in triage. The nurse and vaccinator can still see answers to these questions.

### Recording answers to health questions for a new consent response

When recording a consent response, sub questions appear as conditional questions if the parent has answered ‘Yes’ to the root question.

![Answers to health questions in a new consent response recorded as a nurse.](new-consent-response-answers-to-health-questions.png)

### Recording a triage outcome

The triage journey needs to account for different vaccines being available, and different consent outcomes being possible.

- If a parent has given consent for the nasal spray and the injected vaccine as an alternative, a nurse needs to decide which vaccine should be given (or none).
- If a parent has given consent for only the nasal spray, or only the injected vaccine, they can only decide if the consented vaccine should be given (or not).

We decided to play back to the nurse whether consent has been given for the alternative vaccine or not to give context to the options available.

Much like for consent, we also decided to have 2 distinct safe to vaccinate outcomes:

1. Safe to vaccinate with nasal spray
2. Safe to vaccinate with injected vaccine

![Recording a new triage outcome with two different safe to vaccinate options shown.](triage-outcome-for-nasal-spray-and-alternative-injected-vaccine.png 'Options shown when a parent has given consent for both vaccines.')

![Recording a new triage outcome with consent given for the nasal spray only.](triage-outcome-for-nasal-spray-only.png 'Options shown when a parent has given consent for the nasal spray only.')

![Recording a new triage outcome with consent given for the injected spray only.](triage-outcome-for-injected-vaccine-only.png 'Options shown when a parent has given consent for the injected vaccine only.')

## Protocols

Until now, Mavis has provided support for the Patient Group Direction (PGD) protocol, as nurses are responsible for assessing a child’s readiness for a vaccination and administering a vaccine.

Healthcare assistants (HCAs) and other non-clinical staff can also use the PGD protocol to administer the nasal spray, but they need to record the registered clinician who assessed the child as safe to vaccinate (this person is sometimes referred to as the supplier).

HCAs can use a similar procedure to administer the injected vaccine using the national protocol. Again, the vaccinator needs to record the name of the registered clinician that assessed the child.

Finally, a SAIS team may decide to use the Patient Specific Direction (PSD) protocol to allow non-registered practitioners to administer nasal sprays. This requires a prescriber to assess children ahead of a session and give each child an instruction to vaccinate.

| | Patient Group Direction (PGD) | Patient Specific Direction (PSD) | National protocol |
| - | - | - | - |
| Vaccine | Nasal spray | Nasal spray | Injected vaccine |
| Vaccinator records supplier | Yes | No | Yes |
| Prescriber adds instruction | No | Yes | No |

For children who have consent for the nasal spray and do not need triage, a prescriber can add instructions in bulk. For children who need triage, a nurse with responsibility for prescribing can triage a child and, if they decide they are safe to vaccinate, add a PSD instruction.

If a non-prescriber performs triage, they are unable to add a PSD, which means a HCA cannot perform the vaccination.

![Recording a new triage outcome with for the nasal spray with the option to add a PSD.](triage-outcome-for-nasal-spray-add-psd.png 'If the clinician decides it’s safe to vaccinate the child with the nasal spray, the session is using PSDs and the user has permissions to prescribe, we show the option to add a PSD.')

### Choosing which protocols to use for a session

Different SAIS teams have differing preferences for which protocols they wish to use. In some cases this will depend on the number of children attending a session or which staff are available.

We give teams the option to select if they want to allow the use of the national protocol and PSDs in a given session (with each team set up to have a default choice).

### Determining protocol used to a record a vaccination

When recording a vaccination, we take into account the user’s role, the vaccine method and a session’s settings to determine which options to show, and which protocol to record a vaccination against.

Nurses can administer all vaccines, and the protocol is always recorded as PGD.

For a HCA to record a vaccination administered with the nasal spray, they must either:

- record the supplier of the vaccine (with the protocol recorded as PGD)
- be in a session with the PSD protocol enabled and with a child who has a PSD instruction (with the protocol recorded as PSD)

If none of these are true, the HCA cannot record a vaccination.

For a HCA to record a vaccination administered with an injected vaccine, they must:

- be in a session with the national protocol enabled and record the supplier of the vaccine (with the national protocol recorded)

If none of these are true, the HCA cannot record a vaccination.

## Recording a flu vaccination

### Identifying the vaccine method

Once a parent has given consent, and if the child needs triage and an outcome decided, we can show teams which vaccine a vaccinator should use.

We help teams identify which children should have which vaccine by using the following symbols:

![Doughnut and diamond symbols.](doughnut-and-diamond.png)

We decided to use symbols instead of tags, as we use a lot of different tags already, and this information needed to stand out.

We chose two distinct shapes, one solid and one hollow, that relate to each vaccine method. The empty circle (or doughnut) looks like the applicator of a nasal spray, while the diamond is pointed like the tip of a needle. These icons are always shown alongside text labels.

### Confirming a child’s identity

With vaccinations happening in primary schools with younger children, and also in other environments where a child may not be able to confirm their identity, somebody who knows the child (such as a parent or teacher) will need to confirm the child’s identity.

We added the ability for teams to record who confirmed the identity. This is something some teams do already, but were unable to record in Mavis until now.

![Pre-screen form with question asking who confirmed the child’s identity.](prescreen-identity.png)

### Recording a vaccination outcome

Where a nurse has decided that it’s safe to vaccinate a child with a given vaccine, only that vaccine can be given. If a parent has given consent for both vaccines, a nurse can choose to administer the alternative if necessary.

![Pre-screen form with question asking which vaccine the nurse gave.](prescreen-ready.png)

### Recording half a dose for a nasal spray

The nasal spray is given by spraying the vaccine into each nostril. Sometimes children refuse to have it in the second nostril, or pull away and the vaccine isn’t fully administered. We default to recording a full dose, but a vaccinator can record when they have given half a dose.

![Page asking if the child got the full dose.](did-they-get-the-full-dose.png)
