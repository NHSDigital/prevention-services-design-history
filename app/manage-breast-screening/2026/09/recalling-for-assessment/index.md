---
title: Recalling for assessment and adding annotations
description: Exploring different interfaces for adding multiple annotations
date: 2026-09-14
author: Ed Horsford
opengraphImage:
  src: /to-add
  alt: To add
tags:
  - beta
  - prototype
  - breast screening
  - image reading
  - annotations


---

One of the things we’re exploring changing with Rubie is the data collected when an image reader sees something of concern and wants to recall the participant for assessment. We will be increasing the detail of data collected to assist in assessment and later tracking of abnormalities through to treatment.

##Existing process and interface

![NBSS image reading opinion page, with a drop-down choice per breast](nbss-breast-assessment-empty.png)

The current NBSS interface focuses on capturing an assessment per breast. In the above screenshot the current user is the second reader (row 2 in the table), and needs to choose an assessment per breast. They can choose between ‘normal’, ‘abnormal’, ‘technical’, or ‘clinical’. If both breasts are normal they can instead use teh ‘Save As Normal/Normal’ button.

![NBSS image reading opinion page, with a drop-down choice per breast. The right breast has been marked abnormal, leading to several checkboxes of abnormalities being shown below](nbss-breast-assessment-completed.png)

If ‘abnormal’ is chosen, a set of checkboxes are shown below to choose from abnormality types the reader has seen.

###Marking abnormality locations

The NBSS data will capture that a mass was seen in the right breast, but it doesn’t capture where in the breast the abnormality was seen. If two masses are seen, there’s no structured way to capture this. If two checkboxes are selected, it’s not clear if this is one abnormality that could be two things, or two separate abnormalities.

Readers will use the freetext box to describe in words some where the abnormalities are seen.

[TO ADD: INSERT PHOTO OF HAD DRAWN DIAGRAM]

![A representative sketch from an image reader of where they observe abnormalities](paper-abnormality-diagram.png)

For breast screening units that use paper, it’s common for image readers to annotate the paper with sketch of what they see.

###Why we’re not using annotations in PACS

Image readers have the ability to annotate on the mammograms inside their PACS system. This will often provide advanced annotation tools including changing the shape and size, and adding notes.

So why aren’t we using it? We don’t think it’s the right place be doing those annotations at that time. If the first image reader adds an annotation, these will be visible and shown to the second reader, which can influence their opinion. It’s possible to hide annotations on first load, but in practice this often isn’t set up. By annotating in our tool we can control when they are shown and used. We’ll also have easier direct access to the data to make it available in arbitration or assessment, and later be able to track image reader performance or which abnormalities were assessed.

We think it’s better to annotate on PACS once an overall outcome has been decided, not during initial image reading stage. It may well be that we can later integrate with PACS so that if something is annotated there we can import it, or if something is annotated in Rubie, we can add it to PACS.

##Capturing recall for assessment and abnormality details

We will continue to capture an overall assessment per breast and in addition for abnormalities we now want to shift to capturing data for each abnormality seen, with their actual locations. We will build an annotation tool [similar to our breast features tool](/manage-breast-screening/2025/07/medical-annotation-tool-for-capturing-breast-features/) to enable image readers to pinpoint where on the mammograms they see the abnormalities.

![A set of radios for right and left breast asking the reader’s opinion of that breast, with options for normal or abnormal.](recall-for-assessment-opinion.png)

###Significant symptoms and signs

![Where  symptoms are present, readers get an extra choice ‘normal, but symptoms need clinical assessment’](recall-for-assessment-opinion-with-symptoms.png)

The overall assessment per breast usually has two options, but where the participant had significant symptoms or signs, image readers have a third option labelled ‘Normal, but symptoms need clinical assessment’ - which allows them to recall on this basis. This is equivalent to the current ‘clinical’ option in NBSS.

##Annotation tool designs

###Design challenges of an annotation tool

Marking an abnormality on the mammogram images is similar to our breast features tool, but with some new design considerations:

- In breast features, you mark a single location only. For annotations, you may need to mark the same thing in multiple images - one for each image the abnormality is visible in
- There are an variable number of images - 1 to as many as 8.
- We need to capture more detail about the abnormality - the type, the level of concern, and freetext comment

We’re also allowing for annotations not necessarily being a negative thing. An image reader might want to mark an annotation purely to say they’ve seen something and consider it harmless. For example, they might see in the participant’s history that they have a scar in a certain location. They may wish to mark this on the image to note that it is not reason to recall them.

We’ve tried two different interfaces for an annotation too. One where you add them one by one (‘annotation first’) and one where you add markers all together and then add details (‘marker first’).

###Tabbed interface / ‘marker first’

In this concept, users have tabs to pick between right and left breast, and then they can immediately click to add a marker. After a marker has been added, they are prompted to provide details about it.

![A tabbed interface with one breast per tab. The left breast tab is showing. On the tab are mammogram images of the left breast. There are some abnormalities visible in both images](tabbed-initial.png 'A tab is shown per breast, with all images for that breast visible.')

![After clicking on the image, a yellow marker is placed. In the list of annotations users are prompted to add details](tabbed-with-one-marker.png 'After adding a marker, the annotations list shows that one has been added, but details aren’t complete yet')

![Details about the annotation are collected in a modal. The interface collects abnormality type, level of concern, and lets readers provide a comment.](tabbed-annotation-details.png 'After adding a marker, the annotations list shows that one has been added, but details aren’t complete yet')

After they’ve added the markers, we show a modal to collect details about the markers they’ve added. This uses a new pattern of component we’ve developed to be more compact than standard radios and checkboxes whilst still clear which is selected

Getting this concept working well required a lot of subtle interaction tweaking. Once you’re familiar with it it can be quite fast to use - but with some usability drawbacks.

#### Video of the interface in action

![A video showing a user marking the right breast as normal, and the left as abnormal. After they mark the left as abnormal, the tabbed interface swaps to the images of that breast and they can add two annotations, providing details about each one](tabbed-annotations.gif)

####How this tested

This matched many of our users’ mental models, where they just want to ‘get going’ and click where they see an abnormality, then do details later. They liked that the collection was on the same page as the overall opinion like the current NBSS interface.

The concept has some drawbacks though:

- You can’t see the images whilst adding details
- In most cases there’s just a single annotation to add with one or two markers - this interface has a lot going on, most of which is more suited when there’s multiple annotations
- We observed some instances where a user needed to add two annotations for two separate abnormalities, but instead accidentally just created one annotation with two markers.
- Some users accidentally created extra annotations and didn’t realise
- Showing on the same page as the overall opinion has drawbacks. Should users add the annotation immediately after they mark a breast as abnormal, or should they give an overall opinion for both breasts first, then do annotations? in either case, how do you prompt that an annotation is now required?
- Error validating for this is more complex as more could be going wrong at one time

###One by one / ‘annotation first’

As a simpler thing to compare against, we tried an interface where you need to add each annotation as a separate item on its own page, and then select where the markers go. To add multiple annotations (the less common use case) you would add them on their own page.

![A page to collect details of a single annotation. At the top of the page are the mammogram images with some abnormalities visible, and below is a form to collect the abnormality type and level of concern](one-by-one-initial.png 'A single page to collect a single abnormality')

![Screenshot showing a marker two markers placed on two mammogram images, with a complete form below describing what the abnormality is](one-by-one-complete.png 'Details are collected one abnormality at a time')

#### Accessing the annotation form

![Annotations are addedvia an ‘add annotation’ button that is below the opinion for each breast](one-by-one-old.png 'The form is accessed via an ‘add annotation’ button')

We originally had the form accessed via an ‘add annotation’ button for each breast. We realised in most cases there’s only one abnormality type and choosing this could be the route in to adding an annotation. This somewhat matches existing behaviour where readers mark a breast as abnormal and then pick the abnormality type they see.

![Annotations are added by selecting the abnormality type first, and then the form is opened](one-by-one-new.png 'The abnormality type options are presented up front, and all of them open the annotation form')

Presenting multiple options like this is something we’ve done before for our symptoms form, and presents the choice sooner, whilst saving a click.

#### Video of the interface in action

![A video showing a user marking the right breast as normal, and the left as abnormal. After they mark the left as abnormal, under a ‘add annotation’ heading they select a button for ‘microcalcification’. After they press this, a modal window opens with the images. From this modal they can add markers and details of the microcalfication](one-by-one-video.gif 'The form is accessed via an ‘add annotation’ button')

NBSS captures the abnormality types on the same screen as the overall breast opinion. Where capturing information per abnormally, we haven’t found a good way to do it on the same page. But we have prototyped using a modal to make it feel faster / closer to the overall opinion

####How this tested

Users were able to use this to add annotations easily. Subjectively they felt this interface was slow, or slow in comparison to what they’re used to with NBSS. Partly this is unavoidable - moving to collecting per-annotation data is slightly more data and that necessarily has a time penalty. The team feels this is worthwhile for the increased data quality.

We don’t think it’s slower versus the tabbed interface, though subjectively it may ‘feel’ slower as you are navigating between different pages. It is the same number of clicks to add an annotation as our tabbed concept. It doesn’t have many of the disadvantages of the tabbed interface, which makes it a better starting point for us:

- You can see the images whilst adding details
- Simpler pages and interactions are easier for us to build
- Simpler to validate because you’re only doing one annotation at a time
- It’s the same number of clicks to add an annotation

Editing a marker position is slower as you need to click ‘change’ first to open the annotation. We judge think this is acceptable as editing will likely be rare.

We’re going to start with the one-by-one interface, but will keep the tabbed interface in consideration. It may be useful in other scenarios when later looking at multiple annotations at once.

##Validation

The validation on the recall for assessment journey is more complex than a standard page, and has had to come up with new patterns.

We need to check:

- that both breasts are not marked ‘normal’
- that at least one annotation has been added for any breast marked ‘abnormal’
- if a breast is marked as ‘normal’, any annotations added are not level of concern of 3 or higher
- if a breast is marked as ‘abnormal’, at least one annotation must be level of concern 3 or higher

![Screenshot of the main recall for assessment opinion page. An error summary at the top tells the user that ‘at least one breast must be marked abnormal to recall for assessment’. Both breasts are currently marked ‘normal’, and both sets of radios are shown in error with the same error message](recall-for-assessment-error-both-normal.png ‘An error that could relate to either breast’)

The standard NHS Design system pattern for errors has an error shown in the error summary linking to a specific field in error - but we have cases where two fields could be in error, or two different things could be wrong. We’ve defaulted to both fields showing as in error, with the error summary linking to the first.

![Screenshot of the main recall for assessment opinion page. The right breast has an error ‘A normal right breast cannot have annotations with concern level 3 or higher’](recall-for-assessment-annotations-with-errors.png)

This is the more complex validation - if a breast is marked as normal but an annotation added that’s level of concern 3 or higher, we have incompatible data. The user either needs to mark the breast as a abnormal, or remove or adjust the annotation.

##Starting to build this

Building the annotation interface to place markers on images will take considerable development effort. For our first production build we have descoped the markers and will instead collect a free-text description of the location. This data approximately equivalent to what NBSS collects, though not our ideal. We hope to replace this later with the marker interface.

![Screenshot of a simpler annotation form. There are no images or markers. Instead there is a free-text input for ‘location’ ](one-by-one-simple.png)
