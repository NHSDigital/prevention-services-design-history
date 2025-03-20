---
layout: page
title: How to publish a design history entry
description: A guide for our teams on how to publish to this site.
eleventyNavigation:
  parent: Guide
---

To publish a design history post, you need to use [GitHub](https://github.com) and [Markdown](https://www.markdownguide.org).

If you need any help with this, ask on the Slack channel – [#dpsp-prof-ucd](https://nhsdigitalcorporate.enterprise.slack.com/archives/C06DGMH1XUN).

## How to become a contributor

You need three things to contribute:

1. Create a free [GitHub](https://github.com) account
2. Join NHS Digital on GitHub – see [how to request access](https://nhs.sharepoint.com/sites/X26_EngineeringCOE/SitePages/GitHub-User---how-to-request-access.aspx)
3. Get contributor access to [this project on GitHub](http://github.com/NHSDigital/prevention-services-design-history/) – ask an existing team member to add you

## How to publish a post

1. Create a branch. The name of the branch doesn’t matter too much but you could name it after your post title.
2. Add a new markdown file in `app/posts/[service-name]/YYYY/MM/[post-name].md`. It’s often easier to duplicate an existing post. That way, you will have the headers that contain basic information that all posts need.
3. Edit the post with your content – make sure it has a title and date.
4. If you have images, add them to a folder in `app/images/[service-name]/YYYY/MM/[post-name]/`.
5. Open a pull request with your changes and ask for someone to review it. A preview will be available linked from the pull request.
6. Once it’s reviewed, you can merge the pull request and the post will appear live within a minute or so.
