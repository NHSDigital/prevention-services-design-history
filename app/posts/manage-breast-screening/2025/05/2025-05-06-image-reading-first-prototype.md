---
  title: Image reading - first prototype
  date: 2025-05-06
  tags:
    - alpha
    - prototype
    - image reading
---

Building on the [previous design explorations](/manage-breast-screening/2025/04/existing-image-reading-design-concepts/) of breast image reading, our initial image reading prototype focuses on three key user needs for image readers: choosing which cases to read, giving opinions on cases and efficiently navigating between them. We've deferred addressing first and second read communication for future design iterations.

## Reading cases in batches

The majority of image reading currently happens in batches that correspond to specific clinics. An example of a clinic might be the 50 people screened in one day at a breast care centre.

Admin staff prepare clinics for screening, which may include retrieving previous mammograms ("priors") from other breast screening centres. Cases awaiting these prior images are labelled "awaiting priors".

Once prepared, staff place clinic folders on shelves in date order, separated by first and second read status. Radiologists typically select the oldest clinic, though they might prioritise second reads if an arbitration meeting is approaching.

### Why read in a batch?

Processes have evolved over time to be highly reliant on reading in batches. Breast Screening Units (BSUs) track their participants via their screening forms and these are grouped into batches by clinic.

There are processes and safeguards in place to track these clinics and make sure they move through screening in a timely manner and that no individuals get lost. It’s naturally easier to track a clinic as a whole than every participant individually. If you’re tracking work via a clinic, it makes sense to do reading by clinic.

Reading in clinic batches has become a useful unit of work. A clinic will typically have 30 to 60 cases in it, and a radiologist might expect to complete this in an hour. Prior studies around reading order and reader fatigue have found evidence around suggested reading session durations. Research has also identified benefits of there being a defined unit of work someone can work through to ‘finish’.

Reading in batches ultimately meets two core user needs. Image readers firstly need to read the right cases in the right order so that nothing gets missed, and secondly they need to know how many cases to read or how long to read for in one go, so that they can break work down into manageable chunks and have an end point to aim for.

## Image reading dashboard

Our first prototype largely recreates the current workflow of reading by batch. We list clinics in reverse-date order and show their reading status. This will need to be more sophisticated in the future when we address first vs. second reads and situations where a clinic may be partially first read and partially second read.

We've included a 'Start reading' link at the top of the page – this links directly to the oldest clinic available for reading. We're interested to see whether radiologists tend to start reading immediately or prefer reviewing the clinics first to select one to read.

![A screenshot of our image reading dashboard](dashboard.png)

When you select a clinic or ‘start reading’ it takes you through to a page showing a list of cases in the clinic and their read status. Again, users have a choice between ‘start reading’ or to select a case.

![A list of cases in a clinic to be read](clinic-list.png)

## Giving an opinion

When a radiologist opens a case, we show high-level information about the participant with buttons to give an opinion. This works similarly to the National Breast Screening System (NBSS). When opening a case, the relevant mammograms open in the radiologist's Picture Archiving and Communication System (PACS) image viewer. Our job is to let them record their opinion and review any relevant medical information.

The page has two other key areas – tabs for background information about the participant, and navigation.

The tabs allow radiologists to see participant information, relevant medical details collected at screening, and information about previous mammograms.

Navigation allows radiologists to skip to the next case or go back to the previous one. Radiologists have told us that they sometimes want to think about a complex case before giving an opinion – they may skip these and come back to them towards the end of the reading session.

![Main reading screen showing three buttons for ‘normal’, ‘technical recall’, and ‘recall for assessment’](reading-case-a.png)

### One click normal

In routine breast screening, the majority of cases will be normal. These are called ‘routine recall’ because the participant will go back into the pool to be recalled for screening in three years. NBSS supports this being done quickly by having a single button labelled ‘Normal/normal’ that gives the opinion and advances to the next case.

There is no confirmation step. To prevent accidental opinions, there's a minimum time required on a case before the button can be pressed. The risk is further mitigated because radiologists have the physical bundle of screening forms in front of them – if they accidentally give an opinion and move on, the paperwork would be out of sequence and there would be a form left over at the end.

One radiologist we've spoken to feels it's important they continue to be able to quickly give an opinion without a confirmation step. In a digital workflow without the paper bundle, there’s potential for more risk associated with ‘one click normal’ than in the current system – so we’ll want to consider this carefully. We will discuss this with our clinical safety colleagues and need to decide on an approach that balances efficient reading with appropriate safeguards. For now, the prototype supports both 'one click normal' and an alternative approach that requires confirmation before recording an opinion. We'll determine which approach to implement based on testing.

### Showing important information

Some information is important enough that it should be presented obviously and before readers give their opinion. If we present background medical information first, we anticipate readers wouldn’t read it – they don’t have the time. We need to instead present the highest priority information such as reported symptoms.

![A reading screen with large yellow warning notice showing three symptoms](reading-case-b.png)

### Technical recall

Technical recall is where one or more mammograms aren't of sufficient quality and need to be retaken – typically because of blur. NBSS has no way of recording which specific image is problematic. In our prototype, we're exploring letting radiologists select exactly which images need to be repeated, which would improve efficiency by only requiring specific views to be retaken rather than all images.

![A screenshot of our image reading dashboard](technical-recall.png)

### Recall for assessment

In NBSS, there are two options that lead to a participant being recalled for further assessment: 'clinical' and 'abnormal'.

The 'clinical' option is used when images appear normal, but the participant reported symptoms that require clinical investigation. The 'abnormal' option is used when the radiologist sees something concerning in the images.

Since both options lead to the same next stage (recall for assessment), we're considering combining them into a single initial option in our design.

We let the reader give an opinion per breast, and if there were symptoms reported, one option is to recall for clinical reasons.

![Recall for assessment screen with radio choice per breast to give an opinion](recall-for-assessment.png)

In NBSS, radiologists give their opinion per breast and note the types of issues they see on the breast as a whole. We're trialling a different approach: recording observed issues as specific annotations, allowing multiple annotations per breast.

This would provide greater precision – for example, a radiologist could indicate a well-defined mass in the lower inner quadrant and a lymph node abnormality in the upper outer quadrant. Currently, they can only record that the breast contains both abnormalities without specifying their locations.

The trade-off is that recording this more structured data may take radiologists slightly longer, which we'll need to evaluate in testing.

![Recall for assessment screen with radio choice per breast to give an opinion](add-breast-annotation.png)

### Reviewing opinions

When radiologists complete reading all cases in a clinic, they return to the clinic list page where they can review all their opinions and any cases they skipped. From there, they can navigate back to the main image reading section or revisit specific cases if needed.

![The clinic list page showing all cases with their read opinion](clinic-list-complete.png)

## How it tested

Our testing of this prototype was largely positive, with a few issues identified.

Users were able to easily navigate to a clinic and start reading. The options were familiar to them or they easily found equivalents. The general workflow of reading an individual case is similar to the current process – though a big change is in not having medical information to hand in paper form and instead needing to look for it.

The largest issue observed was in adding annotations. Partly this is because the design is unfinished – the intention is that users can loop through the annotations and add multiple observations. The prototype has a button to ‘select location on image’ - but this was unfunctional in testing. Without selecting a specific area on the breast, users felt that the whole page felt burdensome – why not just collect this info on the main recall page?

We’re changing the data collected to collect abnormalities per annotation – but this wasn’t clear to users so just felt like a second page required to collect information thy currently provide using one page.

We think this new process might be clearer if users first select an area on a breast, then describe what they see there.

Other general feedback was around knowing if a clinic had been first read or second read, and who had done what. These are areas we’ve not focused on yet but will return to in the future.