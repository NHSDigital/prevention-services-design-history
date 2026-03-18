---
title: Mavis vision for 2026 and beyond
date: 2026-03-13
---

Mavis supports school-age immunisation service (SAIS) teams to offer all school-age vaccination programmes in school and clinic settings. Evidence shows the service is already improving vaccination uptake. However, there is a lot more we want to do. We’ve written up our main strategic goals for each [Mavis functional area](/manage-vaccinations-in-schools/2026/01/service-stages/).

[[toc]]

## Get help with Mavis

We offer individual onboarding support to every team and a proactive, user-friendly service wrap for all SAIS users.

General onboarding resources are available on NHS futures. We help each new provider to set up their team and school configuration on Mavis, and work with their Registration Authority to align their Care Identity (CIS2) user accounts. We offer regular onboarding catch-ups for team leadership and training opportunities for all SAIS roles.

We have a clear and comprehensive user guide and update it every release (twice a week).

Users from all teams can ask us questions in MS Teams; we respond on the same day to all queries. We keep track of common questions and problems and feed them back into our research and design backlog.

We triage anything that could be an incident within 2 working days, resolve incidents quickly based on their severity, promptly acknowledge and apologise for any problems we contribute to, and keep our users informed about the progress we’re making on known issues.

### In the future

We plan to offer as good, or better, support with less manual overhead for the Mavis team. This could include:

- digital training packages
- human in the loop AI responses to queries
- AI JIRA ticket creation

We also want to tighten the feedback loop between support and design even more, to mitigate more support requests before they happen.

## Manage teams

SAIS teams access Mavis via their NHS Care Identity (CIS2). Mavis has four layers of access control:

- providers are identified by their ODS code
- providers can be set up with as many separate Mavis teams as they need using CIS2 workgroups
- users get different access to Mavis depending on their CIS2 role
- additional privileges (such as deleting vaccination records) can be added for individual users with specific CIS2 activity codes

Each team can manage the schools and clinics that they offer vaccinations in. Mavis uses DfE’s Get Information about Schools (GIAS) service to source school and year group information.

### In the future

We plan to allow SAIS teams to:

- fully self-manage their school and clinic configuration, with no support intervention needed
- define their cohorts by more than just school; also by GP practice and home address areas that they cover (to offer better functionality to SAIS and allow us to onboard other types of providers in the future)
- share responsibility for cohorts for different programmes, for example if different providers offer flu and the teenage programmes in the same schools, or if providers offer infant and school age programmes to overlapping age groups based on their home address or GP, then they get a shared view of each child they share responsibility for

We also plan for school admin teams to be able to log into Mavis via the DfE Sign-in service to upload their own contact information for children and see who hasn’t responded to digital consent requests, so they can follow up with parents individually.

## Manage vaccination records

Mavis sources vaccination history from multiple places:

- we query the Immunisation API for each programme a child is eligible for
- SAIS teams upload their own vaccination records from previous academic years
- SAIS/CHIS teams upload vaccination histories from CHIS for all children in their cohorts

We use this vaccination history to determine each child’s current vaccination status and whether to invite them for a vaccination. For more information on how we do this, see [this post](/manage-vaccinations-in-schools/2026/01/vaccination-statuses/).

Mavis shows both a child’s previous vaccination records for every programme and a summary of their current vaccination status.

For complex programmes where we don’t yet have enough historical data to determine eligibility (for example the tetanus containing vaccines), Mavis flags each child whose history needs triage to a nurse to review before vaccinating.

Nurses can record that a child has already had a vaccination when they’re given evidence of this, and add the date the vaccination was given, and Mavis will automatically update their vaccination status and inform their parents if they no longer need a vaccination.

Mavis automatically reports all vaccinations given to GPs and NHS England via the Immunisation FHIR API, and users can download exports to report the vaccinations to CHIS.

Teams who aren’t yet using Mavis for their end-to-end programme delivery can access Mavis national reporting to upload vaccination records in bulk, which Mavis then flows to GPs and NHS England.

### In the future

For managing vaccination records, we plan to:

- support recording all children’s vaccines, including the routine and at-risk infant and pre-school vaccinations
- have comprehensive vaccination status logic for all remaining childhood programmes
- eliminate manual vaccination record uploads and source all vaccination history automatically
- develop a better process for evidencing that children are already vaccinated
- flow vaccinations that clinicians and parents know children have already had onwards to national data sources and GP records, so that their records can be in sync across services
- enable better deduplication and cleansing of children’s vaccination histories to create a record that’s clear and understandable to everyone who needs it; including clinicians, CHIS and parents (see also: the vaccination history alpha)

## Manage children

SAIS teams can upload cohort lists to Mavis sourced from CHIS and/or local authorities. As new information is added, Mavis matches it to the correct child and progressively updates their record, to change their school, their contact details, or other information.

Mavis matches child records to PDS records to get NHS numbers and our matching algorithm achieves over 98% automatic NHS number coverage.

SAIS teams can upload class lists sourced directly from schools providing up-to-date contact information, and Mavis matches these to the right child record and uses the information to request consent. When children are unexpectedly not present on a class list, Mavis keeps them in a “school unknown” holding pen until their new school is identified.

Mavis deduplicates children between teams and informs both teams when a child moves from one SAIS area to another.

### In the future

For managing children, we plan to:

- allow school admin teams to manage children’s information themselves in Mavis, to eliminate the emailing of spreadsheets; or better yet, automate this process with schools’ student records systems
- find a way to share information about which schools children attend nationally, via PDS or another approach, so that others who rely on this (such as CHIS and school nursing teams) can benefit from Mavis’ up to date records
- show reasonable adjustments (from the RADF API) for each child in Mavis and allow nurses to add these
- integrate more deeply with the Personal Demographics Service; using more information sourced from PDS and updating PDS with information sourced from schools (with appropriate policy and IG approval to do so)
- provide better functionality for managing parent contact details in Mavis
- improve Mavis’ data provenance capabilities to make it clearer to our users how and why children’s records have changed over time

## Vaccinate in schools

SAIS teams can schedule sessions in schools in their area to offer the school age vaccines either separately or together. Mavis will automatically add all of the children eligible for any of the vaccines to the session and schedule consent requests and reminders.

Mavis links incoming consent responses to the right child automatically and shows an overall consent status: no response, given, refused or conflicting. Nurses can follow up with parents and record new consents given over the phone, on paper or in person.

Where parents answer “yes” to a relevant health question, Mavis requires the information to be triaged before a vaccination can proceed.

Qualified prescribers can add PSDs to children individually or in bulk in advance of a session, so that HCAs can vaccinate, and Mavis also supports the PGD supply model and National Protocol for HCAs to give flu vaccinations.

SAIS teams can manage school sessions without needing any paper lists or spreadsheets; they can mark who is attending and who is absent in Mavis, then record who identified each child, and either record that they were vaccinated or why they weren’t. They can see counts of how many children have been vaccinated in each session to reconcile against stock.

SAIS teams can record Gillick competence assessments and self-consent given by competent young people, and suppress further messages to parents about the vaccination if the young person wants that.

### In the future

For vaccinating in schools, we plan to:

- focus on continuous improvement, as this area seems to be working well right now based on all feedback we are receiving
- explore adding support for other childhood vaccination catch-ups in school sessions if needed by SAIS teams

## Vaccinate in clinics and homes

Mavis allows SAIS to record school-age vaccinations given in a clinic or home setting.

SAIS can invite children to book into a clinic for a particular programme:

- once their school session is over, if they weren’t vaccinated in a school
- at any time during the programme, either
  - in bulk for all homeschooled and school unknown children
  - individually whenever needed

Clinic appointments are currently arranged over the phone or in 3rd-party booking systems.

### In the future

We plan to:

- schedule clinic availability in Mavis so that parents can book appointments online
- streamline consent recording when parents are present during vaccinations
- create more flexible invitation scheduling for targeted catch-ups
- offer age-based invites for the infant and pre-school vaccination schedule

## Protect your child from serious illness

Parents receive a consent request for each programme their child is eligible for, and a reminder if they haven’t consented a week before each scheduled session at their child’s school.

They can give or refuse their consent through Mavis, or tell us if their child has already had the vaccine.

If they give consent, they answer health questions relevant to the vaccination. They then get emails reminding them of the upcoming session and either confirming vaccination or, if their child isn’t vaccinated at school, explaining why.

If they refuse consent, they select a reason why, receive a confirmation and aren’t sent any more consent requests for that vaccine that academic year.

Either after school sessions or independently, parents get invites to book into a clinic for one or more vaccinations for their child. They can currently book a clinic appointment over the phone or using a third party booking service, depending on the SAIS team.

### In the future

We plan to let parents:

- book an appointment for a clinic vaccination digitally
- find walk-in clinics in their area
- request contact from SAIS teams to discuss their options
- get NHS app notifications if they have proxy access for their child
- see which vaccinations their child has had and all the vaccines they are due and consent for them without having to repeat information
- give consent for multiple children without having to repeat information
- complete the consent journey in other languages

We also plan to:

- contact parents using the contact details we hold in PDS where schools won’t provide them or the school-provided details don’t work
- store parents’ language preferences and contact them in their preferred language
- optimise the schedule of requests and reminders to get the most responses
- A/B test different consent messaging to establish what works best

With the recent expansion of the SAIS specification to include catch-up vaccinations for sixth form, we are developing an offer for teenagers who are 16 and over to:

- find out about vaccinations they are eligible for
- consent to vaccinations themselves when SAIS visit their school
- attend a SAIS clinic
