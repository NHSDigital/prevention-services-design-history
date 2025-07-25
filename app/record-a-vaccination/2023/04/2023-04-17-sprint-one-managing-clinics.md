---
title: "Sprint one: managing clinics"
date: 2023-04-17
---
### Designing a new service to manage clinics 
We are exploring what users would expect from a new service area ‘manage clinics’ in alpha. We’ve considered what tasks users would want to perform, built prototypes, and tested different ideas — learning more and learning faster this way. 

Our main goals are to address known user pain points of finding patients in a clinic, which can cause significant delays and address the lack of integration between other booking and point-of-care systems. 

To manage clinics, staff typically: 

- set up calendars of patient appointments into booking or calendar systems 
- manually transfer appointment information into their point-of-care (POC) system to record vaccination data, though some point of care systems integrate booking  
- assign teams of clinical staff to administer and record vaccinations 
- arrange additional support or longer appointments for patients with specific needs 

During the sprint, our goal was to:  

- verify the main tasks users perform to manage clinics based on our assumptions 
- identify the language used to describe clinic management tasks 
- understand how users could manage clinics more effectively using the system 

### Exploring new approaches  

We explored: 

- where appointment information is captured, and how it’s entered in current POC systems. And how we can leverage technology to simplify this. 
- how we can accommodate appointment bookings and walk-in patients. 
- how we can help users find and allocate the right staff to administer vaccinations. 
- where we can show patient information in the system to support the planning of appointments. 

### Getting the scope of our service right 
We explored how users manage appointments and calendars using different structures, systems, and processes — mindful that our POC system should join up or point to with what’s already in place (not replicate or replace it).  

### Prototyping without designers  

At the start of alpha, we had not yet onboarded our designers, so we worked as a team to process our ideas and develop some basic wireframes. This gave us a good starting point for our user research sessions. In future, we’ll build prototypes in Figma and make design iterations based on what we learn. Our prototypes supported the following scenarios:

**Users set up their clinics to deliver and record vaccinations**.

![Plan your clinic homepage](eccyyd9xahdqn16pv7hrc8qhkzor.png)

![Set up clinic screen](u8cu2anf2uymycq20zr6jqvo1w7o.png)

#### We learnt:

- Users expect to see a list of sites with corresponding calendars. 
- Maternity settings operate differently: patients drop in for a vaccine when they attend a maternity appointment. 
- Users in large vaccination centres see no value in allocating staff to a scheduled clinic because they may only find out who is working on the day.  
- Current point-of-care systems record the vaccinator's details, which users view as an administrative burden.   
- Users view the ability to ‘check how many vaccines are available’ as positive and expect to see the clinic’s capacity to accommodate walk-in patients.   
   
**Users identify and arrange support for patients who need reasonable adjustments or assistance**. 

![Arrange patient support screen](9a6eux4vy6zzjzc3uvxpln4pjguo.png)

![Arrange patient support options screen](uf9ejlrjuk5huxmnwtr2w66j6ftl.png)

#### We learnt:

- Users need to know if patients have specific requirements or need reasonable adjustments in advance because it could lengthen the duration of their appointment or require a particular staff member.   
- The national booking service (NBS) captures some (but not all) patient access needs. For example, we learnt there is a need for staff to prepare clinics in advance for stem cell patients or patients who cannot show their arms for religious reasons, which NBS does not capture.  
- If patients book their appointments through a booking system like the national booking service (NBS), users need the ability to change the location of the appointment in their point-of-care system. Currently, users must cancel the appointment in their system, manually reschedule it (at a new site) and notify the patient. 

**Users find patients with or without appointments**.

![Find patients in appointment list screen](jfqt16o4cle8ima0feq29c611u9d.png)

![Search to find patients screen](5ucliwzr5ykutzzsxdylf3tqwmc4.png)

#### We learnt:

- Users expect to see the appointment list and patients before arranging support. 
- Users expect to see (at a glance) in the appointment list patients who need additional support. While maternity setting users can already view this information in the patient record, which is of less value to them.     
- The list is a good starting point for viewing all patients. For example, users are likely to click on the patient’s name and start recording their vaccination data, removing the need to search for them.   
- Users expect to extract an appointment list from other systems in an appropriate format, like a CSV file.  
- Users expect to search and filter the appointment list in one view. 
