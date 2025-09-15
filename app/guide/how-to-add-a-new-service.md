---
layout: page
title: How to add a new service
description: A guide for our teams on how to add their service or team to the design history
eleventyNavigation:
  parent: Guide
---

Posts in this design history are grouped by the service or team they relate to. Before you can start publishing posts, you need to add your service. You only need to do this once.

You will need to create some files and folders based on the name of your service, using lowercase and hyphens. For example, for `Manage breast screening` you would use `manage-breast-screening`.

You’ll need to:

- create a subfolder for the service within `app/`, for example `app/your-service-name/`.
- inside your service’s subfolder, create a json file `your-service-name.json`, for example `app/your-service-name/your-service-name.json`. Copy an existing example for what to put in it.
- create a Markdown file in `app/` named after the service, for example `app/your-service-name.md`. Copy an existing example and update any references to match your service. The `area` value should be set to either `screening`, `vaccinations` or `personalised-prevention`.
- update `eleventy.config.js` to add the name of the service, for example `"your-service-name"`, within the list of services under the `// Service collections` line.
- **note:** you will need to [add a post](/guide/how-to-publish/) before the service can be found in the navigation.
- open a pull request with your changes.
