---
layout: page
title: How to add a new service
description: A guide for our teams on how to add their service to the design history
eleventyNavigation:
  parent: Guide
---

Posts in this design history are grouped by the service or team they relate to. Before you can start publishing posts, you need to add your service. You only need to do this once.

You may want to [look at an existing pull request](https://github.com/NHSDigital/prevention-services-design-history/pull/20) to see the files you need to update.

You will need to create some files and folders based on the name of your service, using lowercase and hypens. For example, for `Manage breast screening` you would use `manage-breast-screening`

You’ll need to:

* create a folder for your service within `app/posts/`, for example `app/posts/your-service-name/`
* create a folder with the same name in `app/images/`, for example `app/images/your-service-name/`
* create a `your-service-name.json` file within `app/posts/` that adds the eleventyNavigation parent name as the name of your service (copy an existing example)
* create a Markdown file in `app/posts/`, for example `app/posts/your-service-name.md`. Copy an existing example and update any references to match your service.
* update `eleventy.config.js` to create a new 'collection' for your service (copy one of the existing examples)
* update `app/_layouts/_product.njk` to list your new service in the sections variable
* open a pull request with your changes