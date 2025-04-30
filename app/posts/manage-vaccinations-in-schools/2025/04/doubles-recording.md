---
title: Recording MenACWY and Td/IPV vaccinations
date: 2025-04-30
screenshots:
  - title: "Screenshots: Previous design"
    items:
      - id: previous-session-overview-not-scheduled
        text: Session overview (not scheduled)
      - id: previous-session-overview-scheduled
        text: Session overview (scheduled)
      - id: previous-session-overview-in-progress
        text: Session overview (in progress)
      - id: previous-session-overview-completed
        text: Session overview (completed)
      - id: previous-session-list
        text: Check consent responses
        caption: Example of a list view in the previous design.
      - id: previous-session-patient
        text: Patient session
        caption: Example of a patient session in the previous design.
  - title: "Screenshots: Later design"
    items:
      - Session overview (not scheduled)
      - Session overview (scheduled)
      - Session overview (in progress)
      - Session overview (completed)
      - text: Review consent responses
        caption: Unmatched consent responses are clearly highlighted in list views.
      - Review triage statuses
      - Register attendance
      - Register attendance (no session in progress)
      - Record vaccinations
      - Record vaccinations (no session in progress)
      - Review session outcomes
      - Patient session (no response)
      - Patient session (consent given)
      - Patient session (triage outcome)
      - Patient session (vaccinated for one programme, with outstanding vaccination notice)
      - Patient session (vaccinated for all programmes)
      - text: Patient session (not vaccinated)
        caption: We updated the design to ensure that it’s still possible to vaccinate a child if a previous attempt was unsuccessful.
---

The first SAIS team to use our service was Coventry and Warwickshire Partnership NHS Trust (CWPT). They run HPV vaccination sessions for year 8 students at the start of the Spring term, before turning their attention to MenACWY and Td/IPV sessions at the start of the Summer term.

The private beta launched with support for HPV, and the next 2 programmes we needed to support were [MenACWY](https://www.nhs.uk/vaccinations/menacwy-vaccine/) and [Td/IPV](https://www.nhs.uk/vaccinations/td-ipv-vaccine-3-in-1-teenage-booster/). Like many other SAIS teams, CWPT co-administer MenACWY and Td/IPV vaccines at the same time. For this reason, these 2 vaccines are commonly known as the ‘doubles’.

We previously wrote about [the changes we made to Give or refuse consent for vaccinations](/manage-vaccinations-in-schools/2025/04/doubles-consent/), the parent-facing aspect of our service. In this post, we cover the changes we made to the service to support SAIS teams co-administering vaccinations.

## Moving from one vaccination to many

Prior to adding support for doubles, the service only needed to support one vaccination programme, HPV. Adding support for doubles forced us to revisit a number of our earlier design decisions, in particular those around:

- triaging health questions (most of which are shared for MenACWY and Td/IPV)
- identifying which children need which vaccinations
- recording multiple vaccinations and showing intermediate progress-

An additional complexity is that HPV catch-up vaccinations can be administered alongside the doubles, meaning some children may need 3 vaccinations within a single session.

## Navigating sessions

We had also received feedback from users about the design of session pages, in particular that the session overview page was confusing and unpredictable. It might get even more confusing were it to be used for sessions that support multiple vaccination programmes.

Previously, this page displayed different cards depending on the status of the session. Each card linked to a list of children that could be navigated between via secondary navigation:

| Session status | Overview card title     | List navigation labels                                          |
|----------------|-------------------------|-----------------------------------------------------------------|
| Unscheduled    | Schedule sessions       | —                                                               |
| Scheduled      | Check consent responses | No response<br>Consent given<br>Consent refused<br>Conflicts    |
|                | Triage health questions | Triage needed<br>Triage completed<br>No triage needed           |
| In progress    | Record session outcomes | Register<br>Get consent<br>Check refusal<br>Triage<br>Vaccinate |
|                | Review session outcomes | Vaccinated<br>Not vaccinated<br>No outcome yet                  |
| Completed      | Review session outcomes | Vaccinated<br>Not vaccinated<br>No outcome yet                  |

We changed the design so that secondary navigation appeared across all session pages, including the session overview page. The navigation items would now reflect the different stages of a vaccination journey, and remain consistent regardless of a session’s status.

Each session page showing a list of children would provide a set of contextual filters (alongside common and advanced filter options such as child’s year group, date of birth):

| Navigation label    | Filter label        | Filter options                                                                                                                                                                                                 |
|---------------------|---------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Consent             | Consent status      | Any<br>Request failed<br>No response<br>Conflicting consent<br>Consent given<br>Consent refused<br>Refusal confirmed                                                                                           |
| Triage              | Triage status       | Any<br>Needs triage<br>Delay vaccination<br>Do not vaccinate<br>Safe to vaccinate                                                                                                                              |
| Register            | Registration status | Any<br>Not registered yet<br>Attending session<br>Absent from session<br>Completed session                                                                                                                     |
| Record vaccinations | —                   | —                                                                                                                                                                                                              |
| Session outcomes    | Session outcome     | Any<br>Vaccinated<br>Partially vaccinated<br>Already had the vaccine<br>Had contraindications<br>Refused vaccine<br>Absent from the session<br>Unwell<br>Unable to contact parent<br>Consent received too late |

In sessions with multiple programmes, teams could also choose to filter by selected programmes.

### Replacing tables with cards

So that more information could be shown about each child, we replaced the table with a list of cards. As well as displaying the child’s full name, date of birth and year group, these could show the corresponding status for a given view.

For the ‘Register’ and ‘Record vaccinations’, an additional ‘Action required’ row could be shown.

For sessions with multiple programmes, the status (and any action required) could be shown for each programme.

![Patient card showing registration status and action required for multiple programmes.](patient-card.png "Patient card in a session registration context.")

### Session overview page

These changes freed up space on the session overview page, which could now show more general information about a session (status, location, links to relevant consent forms) as well as more data about a session, such as its session dates, cohort size and number of children vaccinated per programme.

The new design also includes a summary of actions required across all children in a session, each linking to a filtered view in a corresponding list view. These actions can change as required, but unlike the previous design, hopefully in a more predictable and understandable way.

## Updating the patient record in a session

Previously, the patient session page provided a summary of the child’s status at the top of the page. However, this could become infinitely more complex in sessions with multiple programmes involved.

Instead we split the page up into sections under the headings (‘Consent’, ‘Triage’, ‘Record vaccination’ and ‘Programme outcome’). These sections would only appear when there is relevant information to display.

Each section followed a similar design by showing an overall status, detailed description, links to any actions that could be performed and data table (consent responses, triage notes, and vaccination outcomes).

To counter the length of the page, we moved demographic information about a child to a fixed sidebar.

![Patient session page for a child who has been triaged and vaccinated.](patient-session-all-sections.png "Patient session record showing consent, triage and multiple vaccination outcomes. All programmes for this session have also been completed.")

## Recording multiple vaccinations

When recording a vaccination, a nurse needs to identify the child, review their record and ask them a set of [pre-screening questions](/manage-vaccinations-in-schools/2025/04/pre-screening-questions/) prior to performing the vaccination and recording the outcome.

In a session with multiple vaccinations, a nurse may perform these checks before administering all the vaccinations in one go. This is because alternating between asking questions and administering a vaccination can make a child nervous. It is also more time-consuming.

Our initial design maintained the single page for a patient session. For the recording area (which included pre-screening questions and whether the vaccination was given), tabs allowed a nurse to record each vaccination.

However, as we dug into the details, many parts of the patient session page could differ based on the vaccination. For example, there could be different consent or triage outcomes. We updated the design to have a separate patient session page for each programme, and link to these from a navigation bar at the top of the page.

The downside of this approach is a degree of repetition, and needing to visit separate pages to record each vaccination.

We heard from nurses that in the busy and chaotic school environment, it might be possible to record one vaccination, get distracted and then forget to record the second. We added a persistent notification banner on patient session pages where one vaccination had been recorded, but another was outstanding. We also added a tick icon alongside each programme where a vaccination had been successfully recorded in the navigation.

![Notice of outstanding vaccination needed, above navigation tabs, one for a completed vaccination.](patient-session-outstanding-vaccination-notice.png)

We believe there is still some work to do in this area to make it easier to record multiple vaccinations in succession. The first step in this direction, and shown in the screenshots below, is updating the previous design for pre-screening checks. Now we only ask users to confirm if the child has completed these checks, rather than ask users to confirm each check individually.
