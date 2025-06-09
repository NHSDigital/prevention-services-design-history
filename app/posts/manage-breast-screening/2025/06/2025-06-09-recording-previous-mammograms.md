---
  title: Recording previous mammograms
  description: Helping radiographers and breast clinic admin teams to log mammograms that aren’t on their system
  date: 2025-06-09
  breast screening
  tags:
    - alpha
    - prototype
    - breast screening
---

We’re helping radiographers and breast clinic admin teams to log mammograms that aren’t on their system. This will help radiologists when reviewing breast images, and prevent participants from receiving unnecessary radiation from having X-rays too soon. 

## Getting a full picture 

In routine breast cancer screening, women are invited to have a mammogram every three years. They have their breasts X-rayed, and these images are assessed by a specialist.  

The X-ray images are stored for the future so radiologists reviewing them can compare them against previous scans.  

Each breast screening unit (BSU) will have details of prior mammograms taken there stored on their system. But if the participant moves area or has a mammogram at a private clinic, this information may not be available. 

Previous X-rays are essential for radiologists, who will look to see if something that causes them concern appears on past scans, or has been previously investigated. This will influence their decision to recall for further assessment. 

Mammographers also need to know about previous mammograms to make sure a participant does not have breast X-rays within 6 months of each other. 

This timeframe is part of the [Ionising Radiation (Medical Exposures) Regulations 2017 (IR(ME)R)](https://www.gov.uk/government/publications/breast-screening-guidance-on-implementation-of-ionising-radiation-medical-exposure-regulations-2017) which set out the procedures and protocols around breast screening. While the amount of radiation from a mammogram is considered safe (and less than a standard chest X-ray), risks do increase if they are performed too frequently.  

## Data integration 

In an ideal world, the databases that hold breast X-ray image files and mammogram information from each BSU would all talk to each other, making it easy to locate this information using a name and NHS number. With complete data, nobody would receive an invite to a screening mammogram if they had received one within the past 6 months. 

But that’s not always the case. 

Mammogram data across the NHS is not stored centrally, so if someone moves area, their mammogram history may not follow with them. There is also no integration with private clinics where mammograms may have been taken, and if mammograms have been taken in another country it’s unlikely this will be on NHS records. 

## Tracking down the detail 

When they find out about a mammogram that’s not in their system (whether it’s in the 6 month window or not), BSU admin staff are tasked with sourcing these images. 

When armed with the necessary information, they can make a request through an Image Exchange Portal (IEP) which facilitates the transfer of medical images between care providers. 

Once underway, this is a relatively smooth process. The difficulty comes with ensuring the requests can be made efficiently so they can be processed by the time images need to be reviewed. 

The BSUs we have visited and spoken to use a variety of ways to collect and communicate this information. Most commonly this will be recorded manually on a paper screening form during an appointment which is then transcribed before making the request. 

By digitising this process, we’re hoping to make it more efficient to retrieve images, without adding any additional burden on mammographers when collecting information 

## The previous mammogram user journey 

The most sensible place in the journey for this question to be asked is during the initial ID check. This is a potential appointment-stopper, so it's a necessary thing to establish up-front before progressing with other questions around the participant's medical history or current symptoms. 

Alongside screening appointment information, we’ve displayed the ‘Last known mammogram’ with details on when and where it was. 

Mammographers would be expected to verify this information is correct. If it’s not, they would click ‘Add another’. 

![Image description](image-reading-workstation.jpg "Image caption.")

It’s important to keep in mind when collecting this data that we are relying on each participant’s memory and understanding of what a mammogram is. It will be down to those asking the question to clarify that we need to know about breast X-rays, rather than any of the other types of screening scans they may have had. 

None of this collected data will sit in the system as ‘fact’ until the process to source prior images has been completed. 

### Adding details of a previous mammogram 

The first question we ask is where the breast X-rays were taken. 

![Image description](image-reading-workstation.jpg "Image caption.")

The answers each come with different implications: 

- **‘At [THIS LOCATION]’** suggests there’s an issue with how internal database are synced 
- **‘At another NHS breast screening unit’** presents a selection of the other BSUs across the UK (with an autocomplete text input) 
- **‘Somewhere else in the UK’** or **‘Outside the UK’** triggers a free-text area to provide details on the clinic, hospital or any other detail that would help them be tracked down. We’re treating these as separate fields as we’re likely to be able to source mammograms if they happened in the UK, but it’s less likely if they were abroad 
- **‘Prefer not to say’** would likely be a rare response but something we need to provide for certain scenarios, for example, if they were in prison which the participant does not want to divulge 

Next, we ask when this happened. 

![Image description](image-reading-workstation.jpg "Image caption.") 

The possible answers are: 

- **‘Enter an exact date’** which provides day, month and year entry for when the participant has accurate information to hand
- **‘Enter an approximate date’** allows for any date interpretation, such as “9 months ago”, “Last March” or “Summer 2023” 
- **‘Not sure’** is not an ideal response (as it will make it very difficult for images to be sourced) but some participants may not recall when the mammogram took place 

The search for previous images will be much simpler if the correct name is used. So, we ask if they were taken with the name we have on their patient record. 

Most commonly this would occur following a marriage. There’s no reason for us to collect the ‘why’, so we just ask what the previous name was. 

![Image description](image-reading-workstation.jpg "Image caption.")

Before clicking continue, there is an opportunity to provide any additional information. There is yet to be an established user need for this but for the purposes of testing we’re making this available to see if there are any common details that might not be covered in our previous questions. 

![Image description](image-reading-workstation.jpg "Image caption.") 

After clicking continue, the previous mammogram is saved and presented alongside the last known mammogram within the appointment detail. Options will be available to edit this information or add another mammogram. 

![Image description](image-reading-workstation.jpg "Image caption.")

## Continuing or ending the appointment 

If the reported mammogram was more than 6 months ago, the appointment can proceed along the usual journey. 

If the date added is within the past 6 months, users are directed to a separate page. This can also be triggered by free text in the approximate date option, however this relies on the system being able to intelligently interpret the details that have been added - “3 months ago” is easy to assess, but “Earlier this year” would be less likely to be picked up. 

![Image description](image-reading-workstation.jpg "Image caption.") 

Typically the appointment would stop here, however we’ve allowed users to override this and ‘Proceed with this appointment’ anyway. If they make a clinical decision to carry on, they are required to provide a reason for doing so. 

![Image description](image-reading-workstation.jpg "Image caption.") 

## Preliminary testing 

During in-person tests with support staff at a BSU, initial feedback was positive. There are clear benefits to be had from the accuracy and speed of replacing paper-based processes. 

But there are various improvements to be made. One person we showed it to when asked “What would you do if a participant told you that they’d had a mammogram within the last 6 months?” went straight down the ‘Stop appointment’ journey rather than adding details of the previous mammogram. 

While this isn’t technically wrong (there’s a suitable selection to choose from the options on that page), it doesn’t allow the necessary information to be collected for future mammograms. 

As well as making the preferred link more obvious to users, this has given us the idea of an alternative route. If they select the ‘Last mammogram within 6 months’ option when stopping an appointment without adding any detail, we can direct them towards the previous mammogram questions before going back to the clinic page. 

## What’s coming next 

As well as continuing to test and improve this feature based on user feedback, there are some associated parts of the service that this relates to. 

### Sourcing images 

It's not enough to just know about previous mammograms, we need admin teams to be able to actively do something about them. 

Initial ideas around this include: 

- Building a task list or dashboard that collates all previous mammogram details from each clinic for admin staff to work through systematically 
- Integrating directly with the IEP to automatically trigger requests if a BSU and an accurate date have been submitted 

### Presenting information to image readers 

Some BSUs have a policy that radiologists should not review any cases that have prior images requested. Others are happy to proceed and will only pause to wait for the images if there’s a potential issue identified  in the latest X-rays. 

We need to reflect the previous mammogram status in the image reading side of the service, highlighting when images are being sourced and alerting users when they have been added to the system. We will also need to consider how to handle cases where it hasn’t been possible to retrieve images, or verify whether a mammogram has taken place. 

### Self-reporting previous mammograms 

There are various things that radiographers need to ask participants during an appointment (such as ethnicity and current symptoms) that could be covered in a pre-appointment questionnaire. 

Some answers would still need to be verified when they arrive, but in the case of previous mammograms, having this information submitted advance would: 

- give admin teams a head start in retrieving prior images before X-rays went for a radiologist review 
- save the need for participants to come in for an appointment if they have already been recently 

Pre-appointment questionnaires are currently out of scope, partly due to the complexities of showing personal information to participants. But we are factoring this into designs so the service is futureproofed to accommodate data whether it’s been submitted by a participant or collected at a clinic. 
