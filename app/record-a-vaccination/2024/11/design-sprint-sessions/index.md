---
title: A design sprint exploring sessions
date: 2024-11-18
---

We spent 8 days in early October doing a design sprint. This was something we hadn’t done before. The aim was to rethink our core user journey of recording a vaccination.

![](ootaakntc9jrfw429c2xm1igwe4u.png)

## Background

A big theme in our user feedback so far has been that our users would like us to streamline the main interface for recording a vaccination.

At the moment, each time a user records a vaccination, they have to input things such as the date, location, type of vaccine and vaccine product, batch number, legal mechanism, and so on.

We wanted to explore if we could speed up this process. Our hypothesis was:

> If we let users set up vaccination sessions, we can save them time when recording a vaccination.

## What we did

We started by creating a list of all the 30 questions asked when recording a vaccination. We then tried to answer why each question was asked, whether the data was sent to other systems, and any gaps in our knowledge about it.

For each question, we assessed whether we thought it likely the same answer would be given for all vaccinations in a single session or not.

Before starting any design work, we spoke to the teams working on the Manage vaccinations in schools and Manage your appointments services, and looked at demos of their designs. Both had similar concepts of ‘sessions’ so it was interesting to understand where the possible overlaps were.

We then spent 2 days sketching collaboratively. Initially we started with pen and paper. We then moved to using the digital tool Balsamiq, which is designed to be equally low-fidelity.

On our final day we tested the digital Balsamiq wireframe prototype with 3 users over Teams calls.

## The design

### Sessions flow

In the Balsamiq prototype, we created a new section in the main navigation called ‘Sessions’.

To create a session, users would answer these questions in this order:

1. When is the session?
   ![](gwrjadpaf9sktxwiq9f4b602tm6g.png)

2. Where will the session take place?
   ![](fzrh65xmn12ydz32nvd4ybs1rnhf.png)

3. Which team is going to the session?
   ![](11u9mm7nv0u280o4loywslmt1nir.png)

4. Who will be giving the vaccine?
   ![](hurpu5ze2hlewk28kcgn6bwt045q.png)

5. What type of vaccine will you be giving?
   ![](9l5iidn2lft7g9z0wdn1dob4p97e.png)

6. Which vaccine products will you be using?
   ![](fhwiaivewj5tz4m1bop6h6r5rr10.png)

7. Which vaccine batches will you be using?
   ![](f39fvvop753khx0syoe33xnga56w.png)

8. Who is this session for?
   ![](9ii0qi7z88qx4429usyc0gcnbv60.png)

9. How will people attend the session?
   ![](i4b19aqjka5tgk3i2c812ymfa32n.png)

10. Add people booked to attend (optional)
    ![](5supxcv0rs2i6sqolrhr0vr51yj4.png)

The last couple of questions were intentionally speculative and hinted at either:

- integration with the national vaccination booking system
- users being able to copy and paste the NHS numbers of patients who had booked to attend through local booking systems

11. Check and confirm
    ![](23l3sq09xfafcihu39brdkgr97i1.png)

Once a session was created it would be added to the sessions list. From there, users could join a session and see its full details, including a list of booked patients (if applicable).

12. Session list
    ![](qex91l0qn9kb3buu0av8ur3jlik9.png)

## Recording a vaccination flow

We also designed the (reduced) question flow for a vaccinator working within a session.

From a session screen, users could:

- select one of the booked patients
- find a patient using their NHS number, or name and date of birth, in the usual way

13. Find a patient
    ![](bsy9fq6m5xzitf1d5fn893i66qou.png)

14. Patient details and vaccination history
    ![](v43jqi383zcl7cs1ihn0pjloegsk.png)

15. Consent
    ![](mz0a6f1cekppqndt6vtvjpyu4qla.png)

16. Injection site
    ![](dcnx5f64q4g6e3k2i637smlq4r6s.png)

On the final screen, a success message was shown to confirm the vaccination was recorded. The user could then continue to vaccinate the next patient.

17. Success message
    ![](wfvbxd24dq284yj3e2pwwieibusi.png)

## What we wanted to learn

In our designs, we deliberately didn’t focus too much on the exact wording of questions or answers because the main thing we wanted to learn was whether the overall concept of sessions worked.

In particular, we wanted to find out:

- how far in advance sessions would typically be scheduled
- what information would be known in advance
- which options might have multiple answers, such as giving more than 1 vaccine in a session, or multiple eligibility groups, or multiple vaccinators present
- how users felt about the potential for the record flow to be much shorter

## What we learned

The 3 participants we tested the prototype with were generally positive about the concept of sessions, which fitted with their existing practice for managing vaccinations.

One exception was around vaccinating staff within a hospital context. We learned that this can be organised in different ways. For example, a vaccinator might go around the wards to vaccinate staff, rather than staff being directed to a vaccination session.

Users told us that they would know some things longer in advance than others. For example, they might be able to book a community venue weeks in advance, and they might know the type of vaccine they’d be giving (such as flu or COVID-19). But the names of the vaccinators and the product batch numbers would not be confirmed until nearer the time.

As well as saving time, it was also suggested that setting up sessions and streamlining the record flow might reduce the opportunity for mistakes.

## What we would do next

To take this design forward, we would need to consider how to make some questions optional, and how to allow sessions to be editable so that users can add details as and when they are confirmed.

We would also have to consider if and how the session could be edited once it had started, to allow for some flexibility or for unplanned changes.

We could also allow the record a vaccination flow to be flexible so that the number of questions shown depends on how the session is set up.

Finally, we also realised that we should do some further planning with the Manage your appointments team, as integration with that service might mean that some of the information about sessions such as date, location and vaccine, could be entered there instead.
