---
title: "Sprint two: finding patients and recording vaccinations"
date: 2023-04-24
---
### Improving the way data is recorded 

We are exploring how to design a service that enables vaccinators and other healthcare professionals to record vaccination data easily. 
 
Our work in alpha builds on our initial discovery, which examined point-of-care (POC) systems like NIVS (National Immunisation and Vaccination System) and Pinnacle alongside users’ satisfaction scores — giving us a better understanding of how POC users interact with the system, what works (for them), and most importantly, what can be improved. 
 
Staff typically interact with the system to: 

- Search for patients who arrive at the clinic with a booked appointment 
- Find patients who don't have an appointment and book them in 
- Verify a patient’s identity using key identifiers 
- Understand a patient’s last vaccination and if they’re eligible for another  
- Ask screening questions to determine if a patient is fit and ready for a vaccination 
- Choose and record the type of vaccine they are planning to give the patient 
- Request and capture patient consent or from someone acting on their behalf 

### Solving user’s problems and challenging the way things are done 

Following discovery, we found users experience the following pain points when using existing POC systems:   

- Patients are difficult to find in the system due to inflexible search functions and inaccurate patient records. Sometimes, staff had trouble identifying patients due to misspelt names or postcodes. These identifiers are helpful since patients often don't know their NI number. 
- The lack of integration between booking apps and point-of-care systems meant staff typically view and run the two systems side-by-side. 
- The inability to view a complete COVID-19 immunisation history and no single data source with the NIMS/NIVS split made it difficult for vaccinators to understand if patients are eligible and ready for vaccination. 
- Several interaction design issues during the eligibility, pre-screening and vaccination data capture stages led to inefficient or duplicate data capture and errors.   

Our aim of the sprint was to challenge how users currently record vaccination data in POC systems and look at ways to resolve some of their pain points. 
 
>We also considered how our service can support healthcare professionals in capturing and recording patient data when administering two or more vaccines to patients.  

### Making the service simple to use  

Through prototyping, we explored how to help users: 

- instantly search for, and find a patient in the system and verify their identity 
- record and amend data in a user-friendly way 
- manage appointments digitally (typically done by paper) 
- remove the need to run two systems side-by-side 
- determine whether patients are eligible for single or multiple vaccines 
- screen patients quickly while maintaining clinical safety 
- reduce the time spent on keying in data manually

### Borrowing from the best 

We spoke with teams across other vaccine recording-related work streams, like the national booking service (NBS) and the school age immunisation service (SAIS) to view and understand their work. We used this knowledge along with the discovery process to develop user stories, from which we developed the loose requirements for our prototypes. 

We allowed users to search directly for a patient using the [personal demographics search (PDS)](https://digital.nhs.uk/services/personal-demographics-service) or an appointment list.  

We borrowed designs from both SAIS and NBS to present patients’ names and sort and filter the appointment list. 
  
When searching for patients in the PDS, users could enter the patient’s date of birth using the [GOV.UK design system date input component] (https://design-system.service.gov.uk/components/date-input/#:~:text=The%20date%20input%20component%20consists,is%20your%20date%20of%20birth%3F).  

**Screen showing appointment list and PDS**.

![Appointment list and patient demographic search](d2ucz022qwefcz7vm5mhua91i2n7.png)

### Improving data quality 

We considered when and where the service should automate data capture to avoid the amount of time users spend on keying (and re-keying) data, reducing the risk of human error to improve data quality. 

We also ensured our designs:

- Displayed closed-ended questions with selectable checkboxes
- Avoided (where possible) open input fields that collect user comments (unstructured data) that’s difficult to process and analyse. 
- Encouraged the user to check and confirm the patient's record to avoid submitting errors.

**Check and confirm screen**
 
![Check and confirm screen](7gumi50thmmh6b8y77imkps4lp80.png)

### Prototyping 

Our prototypes supported scenarios where users record more than one vaccination event (COVID and Flu) for a patient who has 1. an appointment or 2. no appointment (walk-ins). 

### What we learnt 

Following our research with participants, we gained the following insight into users’ expectations of the service, pain points and needs: 
 
**Appointment lists**

- Staff typically check patients in from a list, possibly before allocating them to different vaccine queues within the clinic (if different vaccinators are involved) — highlighting that our service needs to support different workflows in different contexts. 
- Users expect to see (at a glance) the patient’s NHS number, the first line of their address and the vaccines they had booked. 
- Users expect to filter/sort the appointment list and view a summary of categories for patients: 
   - Without an appointment (walk-ins) 
   - With appointments  
   - Who did not attend their appointments 
   - Who had chosen a specific vaccine type  
- Some healthcare settings that deal mainly with walk-in patients, like community pharmacies, expressed the need to add a patient to a ‘free slot’ in the list instead of finding and recording the event directly.  

**Patient record (including vaccine history)**

- Users need to flag incorrect patient details like a postcode, address or spelling, which we also uncovered through discovery. Currently, users are unable to do so through their point-of-care systems. They escalate patient data inaccuracies by other means, which is time-consuming and burdensome. 
- Users need to see further information in the vaccine history like the vaccine batch number depending on the vaccine a patient has requested or booked.   

**Alerts and error prevention**

- Users expect an alert for any anomalies so they can flag this to the patient immediately. For example, if the patient has arrived for their appointment on the wrong day or has already received a vaccine, making them ineligible. 

**Eligibility and pre-screening**

- Users expect to view and recheck patient responses if eligibility questions are answered and captured at the time of booking.  
- In the event a patient requests to have two or more vaccines at the same time, we will consider how we present eligibility and screening questions together to avoid duplication.   

**Patient search**  

- Users confirmed they would expect to search for 2 out of 3 parameters like last name and date of birth, highlighting the need for a more flexible PDS search. 

### Design iterations

Following our analysis, we changed the following: 

- Added information like the first line of a patient’s address to the appointment list to help users distinguish between bookings.  
- Improved the appointment list’s sort and filter options to help the user quickly find the correct patient.  
- Added details like the patient’s contact telephone number and primary care network (PCN) name to offer the user alternative ways to identify patients. 
- Featured a ‘choose slot’ call to action button to the appointments list, which allowed the user to book an available time slot for ‘walk-in’ patients without an appointment. 
- Captured patient consent during the pre-screening stage, not at the journey's end, to make it easier to record this information. 
- Updated the PDS search to include a ‘choose slot’ or 'record a vaccination’ button for patients without a booking – enabling users to either book an appointment for walk-in patients or start recording their vaccination immediately. 

**Appointment list iteration**

![Appointment list iteration](ow1j1ig1x8ttzqordbj01awqp640.png)
