---
title: "Sprint eight: workflows"
date: 2023-07-14
---
### Common ways vaccination clinics run

We have identified five common steps that healthcare settings take to administer and record patient vaccinations based on learnings from users in alpha.

- **Checking-in:**
users identify patients and either check or book them in for an appointment. A vaccinator or a receptionist typically carries this out.
- **Checking eligibility:**
users question patients to understand their suitability for a vaccine based on their vaccination history and other factors. The patient can pre-complete eligibility questions during their booking, but ultimately, a clinician checks them on the day.
- **Choosing vaccines:**
users ask for a patient's consent to their chosen vaccine(s).
- **Screening patients:**
users question patients as part of a health screen to ensure they are fit and healthy enough on the day of their vaccination. A clinician carries this out.
- **Recording and saving the data:**
once users have administered the vaccine, they finish recording the patients' vaccination and save the final record.

### Creating a workflow
We designed a workflow based on the five steps to help settings operate and move patients through their clinics — but we allowed users to configure it to match their preferred ways of working.

### New capabilities
We also introduced some new capabilities to support vaccination staff:

- When checking eligibility, non-clinical staff can carry out a cursory check at the check-in stage to flag any issues immediately. For example, if the patient is ineligible or arrived on the wrong date. The system will surface patients’ responses to the clinician before the health screening process for approval.

- When choosing vaccines, the system will show other available vaccines the patient is equally eligible for. The vaccinator can offer these vaccines to the patient, making every contact count.

- We have offered clinics the flexibility to split the workflow when patients get multiple vaccines, and different vaccinators are assigned to each vaccine so they can screen and vaccinate the patient separately.

### Testing and validating our ideas
Our goal during our prototyping sessions was to confirm whether the five steps accurately represent how all settings work and whether the workflow matched user mental models.

For example:

- Will the workflow meet the different healthcare settings' needs?
- Do the steps and handover points between clinical staff reflect working practices?
- Is a split workflow beneficial when a patient has booked in for multiple vaccines and different vaccinators are assigned to each vaccine?

### Prototypes

**Checking in patients**

![Check in screen](gaa4xuyepykhuquzszsdswjers8f.png)

**Checking eligibility**

![Check eligibility screen](6ih7wt4ro3s2f9ocm25kbkkh6vh6.png)

**Choosing the vaccine**

![Choose vaccines screen](hat0cgrdnk250ojndv12l90kfe1a.png)

**Screening patients for one or more vaccines**

![Health-screen screen](z6qv07lv47zl9j5cpw5p2odvh1fj.png)

**Administering the vaccination and saving the record**

![Record screen](6oiejh1o5dpphy8x20fgyoxo9owe.png)

### What we learnt:

#### Design

- Overall, the design, layout and flow are intuitive and self-explanatory.
- Users found the confirmation panel throughout the workflow steps valuable and reassuring and the in-progress view was helpful for system administrators to track a clinic’s progress.
- The static patient panel is helpful for staff picking up the workflow following handover to ensure the right person is sitting in front of them.

>"Clarity and simplicity (in the interface) is important for less tech-savvy users.”

#### Five steps
- The steps and the order in which they are presented reflect the user's mental model. Although 'choose vaccine' isn’t a current capability in point-of-care systems, users understand its role and would find it valuable.
- However, settings that appoint a single vaccinator to take the patient through the five steps do not require the workflow.

#### Eligibility
- Eligibility is likely to be rechecked regardless of whether cursory checks are made by a non-clinician at check-in.
- In some settings like GP practices and large vaccination centres, the check-in staff are not likely to check a patient’s eligibility due to the lack of privacy.
_ Conversely, hospital hubs expect check-in staff to check eligibility to ensure they are not wasting patients' and clinicians' time.

>"What patients say at the door versus what they say in the room can be very different."

#### Split workflow for multiple vaccinators
- Most vaccinators expect to screen and capture patient consent for the vaccines they give. Therefore, the split workflow supports this.

