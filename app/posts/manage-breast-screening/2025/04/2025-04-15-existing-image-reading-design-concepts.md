---
  title: Existing image reading design concepts
  description: A tour of prior design work we can learn from
  date: 2025-04-15
  tags:
    - alpha
    - prototype
    - image reading
---

# Existing image reading design concepts

Some years ago an NHS team did some design sprints looking at [image reading](/manage-breast-screening/2025/04/understanding-image-reading/). We understand that they wanted to explore concepts for how image reading could work in the future and come up with some aspirational designs to show stakeholders.

The team worked with clinical colleagues and stakeholders over several iterations. This post will show selected pages from the designs and how they changed between versions. The prototypes weren’t fully functional and tended to follow a scripted path – for example read a normal case first, then a technical recall, then an abnormal.



---

## Version 1

### Dashboard

Users start on a dashboard with a number of options. At the top of the page are some summary statistics about numbers of people needing to be read. The options then allow choice between reading unread images, reading partially read images, and other image reading activities.

In the prototype, only ‘Read unread images’ is linked through to a participant reading list.



![A screenshot of a dashboard with a number of options](v1-dashboard.png)

### Participant reading list

After selecting to read unread images, users are shown a list of participants to read. Each has some basic information, the reading status, and a ‘read’ button.

![A table of participants who need reading, and a green ‘read‘ button on each row](v1-participant-list.png)

### Image reading – initial

After picking a participant, the main thing on the page are the four mammograms. Below them are three radio options for outcomes – normal, abnormal, and technical recall. Each has some hint text.



![Radio choice between normal, abnormal, and technical recall](v1-image-reading-initial.png)

### Repeat images

Where a case has repeat images, inset text is added to notify the image reader.



![When there is a repeat image, inset text is used to highlight this](v1-repeat-images.png)

### Repeat image confirmation

If there are repeat images, users are shown a conditional page asking them to confirm they have reviewed all images. This is likely because of concerns around the potential to miss the fifth image in PACS (Picture Archiving and Communication System) as it may not be shown by default.

![A confirmation page shown when there are repeat images](v1-repeat-image-confirmation.png)


### Abnormal outcome

If a reader selects ‘abnormal’ they are asked to identify the abnormality on the mammograms, then shown a form to collect more information about the abnormality.



![A form to collect details of abnormality - with options for features seen, level of concern, and additional comments](v1-describe-abnormal-outcome.png)

### Confirmation

After describing abnormalities, users are shown a confirmation of the data.



![A confirmation page showing mammograms with abnormalities marked, and tables for features, concern, and comments](v1-confirmation.png)

---

## Version 2

### Dashboard

Users start on a dashboard with a number of options. In the prototype, only the green 'Start reading images’ button works. Compared to version 1, it seems the team has tried to put focus on this main reading action.



![A screenshot of a dashboard with a number of options, including ‘Start reading images’](v2-dashboard.png)



### Image reading – initial

The user is immediately taken to a page to image read for a user. We can note the page is white on black – a ‘dark mode’ to support image readers who work in dark rooms.

Navigation at the top alludes to how users might get to various bits of data. Symptoms are shown in a table, though this user does not have any.

The page has radio options that mirror the options in NBSS and has the ability to add a comment.  We can also see that users can skip or ‘end reading session.

Compared to v1, the mammograms are given less visual prominence, and the hint text for each option has been removed. This is likely because image readers will have the full size mammograms open in their PACS workstation – so showing them here isn’t absolutely necessary.

![Screenshot of initial image reading screen, showing some participant information and radios to select a reading outcome – choosing between normal, abnormal, technical recall and clinical recall](v2-image-reading-initial.png)



### Repeat images

Changed from version 1, the confirmation about having reviewed repeat images has been moved to the main reading outcome page. This is likely to avoid an additional page and step in the journey.



![An extra checkbox is added before the confirm button when there are repeat images](v2-repeat-images.png)

### Second reads

Where participant has already had a first read, there is a details element that lets the reader expand to see the opinion of the first reader. This would not be ‘blind reading’, but is how some breast screening units operate.





![An expanding element shows the first reader’s opinion – in this case highlighting two lesions on the mammograms.](v2-first-read-opinion.png)

### Reading summary

A page is available that shows previously read participants and the outcome.

![A table showing participants who have been read. Each has an outcome - in this case, two are ‘normal‘ and one is ‘abnormal‘](v2-reading-summary.png)

---

## Version 3



### Dashboard

In version 3 of the designs, more of the pages and journeys have been built – around technical recalls, different potential options, and further refinement of existing pages.

In version 3, the dashboard has been tweaked somewhat closer to version 1, though without the reading statistics. A radio choice has been added to the header to enable or disable dark mode.



![V3 dashboard with primary options for start reading, start arbitration, and start assessment clinic](v3-dashboard.png)



## Choosing how to read

After selecting ‘start reading’, users are given a choice of reading by priority or by clinic. Choosing ‘by clinic’ shows a list of clinics, whereas ‘by priority’ jumps straight to reading. Users do not have a choice about first or second reading, though if it’s a second read, the first reader’s assessment can be seen.



![A choice of reading ‘by priority’ or ‘by clinic’](v3-priority-choice.png)



![A table of clinics available to read. Both are overdue. No indication is given around first or second reads](v3-by-clinic.png)

### Repeat images

Repeat images are still highlighted, but there is no longer a checkbox to confirm reviewing them.



![Repeat images are indicated by inset text saying ‘This record has 5 images’](v3-repeat-images.png)

### Skipping participant

Users can choose to skip a participant, and if so they are asked why they are skipping.



![Users are asked why they are skipping a participant](v3-skipping-participants.png)



### Technical recall

When choosing technical recall, users are asked to describe the technical recall. Users can’t specify specific mammograms that are at issue, though there’s a free text box, so they could provide extra context there.

![A radio choice to describe why the images need to be retaken](v3-technical-recall.png)

### Clinical information

Version 3 adds a yellow banner when there is clinical information available for the participant. This would have been accessible previously from the ‘clinical information’ tab, but it’s likely an image reader wouldn't look in there unless they saw something unusual in the scans. The banner is likely an effective way of highlighting that the reader should review this information.



![A yellow banner is added above the reading outcome choice to highlight when there is clinical information to review.](v3-image-reading-clinical-information.png)



### Clinical information tab

The banner links through to the tab for clinical information, where we get an idea of the sorts of information that might be present.



![Tab for clinical information shows tables relating to current symptoms and previous surgeries](v3-clinical-information-tab.png)

---

## Version 4

Version 4 is largely the same as the prior version, though with some tweaks and more journeys built out.

### Choosing how to read

 When choosing to start reading the user is taken straight to the choice of clinics – removing the version 3 option to read by priority.

The clinic list has been updated with new columns referencing if a clinic has been first read or second read, and removing tags for status in favour of text about whether the clinic has breached targets.

![A table of clinics available to read, and columns for whether has been first or second read](v4-by-clinic.png)

### Image reading

In version 4 the main reading pages are mostly similar, though the technical recall flow now asks which breast is causing the recall – though does not capture the view that was at issue.

![When selecting ‘technical recall’, users are asked which breast is causing the recall](v4-technical-recall.png)

---

There’s lots of interesting and good ideas in these prototypes, so it has been helpful to review them and build off this work. The prototypes primarily explore the journey of reviewing images rather than workflows around first and second reads, which is something we will need to explore too.

