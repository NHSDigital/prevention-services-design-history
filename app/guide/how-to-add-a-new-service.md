---
layout: page
title: How to add a new service
description: A guide for our teams on how to add their service or team to the design history
eleventyNavigation:
  parent: Guide
---

Posts in this design history are grouped by the service or team they relate to. Before you can start publishing posts, you need to add your service. You only need to do this once.

You may want to [look at an existing pull request](https://github.com/NHSDigital/prevention-services-design-history/pull/20) to see the files you need to update.

You will need to create some files and folders based on the name of your service, using lowercase and hypens. For example, for `Manage breast screening` you would use `manage-breast-screening`.

You’ll need to:

* create a Markdown file in `app/posts/`, for example `app/posts/your-service-name.md`. Copy an existing example and update any references to match your service.
* create a folder for your service in `app/images/`, for example `app/images/your-service-name/`.
* create a folder for your service in `app/posts/`, for example `app/posts/your-service-name/`.
* inside your service’s post folder, ceate a json file `your-service-name.json`, for exampole `app/posts/your-service-name/your-service-name.json`. Copy an existing example for what to put in it.
* update `eleventy.config.js` to create a new 'collection' for your service (copy one of the existing examples).
* update `app/_layouts/_product.njk` to list your new service in the sections variable.
* **note:** you will need to [add a post](/guide/how-to-publish/) before the service can be found in the navigation.
* open a pull request with your changes.