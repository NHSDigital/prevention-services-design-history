---
layout: page
title: How to publish a design history entry
description: A guide for our teams on how to publish to this site
eleventyNavigation:
  parent: Guide
---

If you need any help with this guidance, ask on the Slack channel – [#dpsp-design-histories](https://nhsdigitalcorporate.enterprise.slack.com/archives/C08JN2TJH2P).

## Before you start

You need:

1. A free [GitHub](https://github.com/) account
1. Join NHS Digital on GitHub – [see how to request NHS Digital access](https://nhs.sharepoint.com/sites/X26_EngineeringCOE/SitePages/GitHub-User---how-to-request-access.aspx)
1. Contributor access to this project on GitHub – ask on the Slack channel – [#dpsp-design-histories](https://nhsdigitalcorporate.enterprise.slack.com/archives/C08JN2TJH2P)

## Choose a how you want to create and publish your design history entry

- [**GitHub in a browser**](#using-github-in-a-browser) – no software needed, good if you're new to GitHub or on a locked-down device
- [**GitHub Codespaces**](#using-github-codespaces) – edit in a code editor in your browser, no installation needed
- [**Local setup**](#using-a-local-version-on-your-computer) – best if you have some experience with GitHub and are comfortable running things from the terminal

You also need to add your service before you can publish posts. You only need to do this once – [follow the guide on how to add a new service](/guide/how-to-add-a-new-service/).

Before you start writing, read the [sample template](/guide/a-sample-template/) to understand how to structure your post.

## Using GitHub in a browser

### Create your post

1. Go to the [DPSP design history repository on GitHub](https://github.com/NHSDigital/prevention-services-design-history) – this is the main project folder where all the files are stored
1. Click on the `app` folder and find your team's folder – note down the folder name, for example `lung-health-check`
1. Go back to the main project folder, click `app`, then `Add file` and `Create new file`
1. In the 'name your file' box, type the folder path for your post. Include your team name, year, month, a short title, and end with `index.md`. Use hyphens instead of spaces and forward slashes to separate each part – GitHub will create a new text box when you type a forward slash

    For example: `lung-health-check/2026/03/designing-new-service/index.md`

1. Write your post in [Markdown](/guide/using-markdown/) in the 'Enter file contents here' box – add the [frontmatter](/guide/a-sample-template/) at the top
1. Click 'Commit changes' – committing saves your changes. Select 'Create a new branch', and update the suggested name if you want something more descriptive, then click 'Propose changes'

### Add images (optional)

Before uploading, compress your images using [TinyPNG](https://tinypng.com/) to reduce file size.

1. Go to the [DPSP design history repository on GitHub](https://github.com/NHSDigital/prevention-services-design-history)
1. Click the 'main' button and select your branch – a branch is a separate copy of the files where you can make changes without affecting the main site. If you did not change the name, it should include your GitHub username
1. Navigate to your team's folder and then your new post folder
1. Click 'Add file' then 'Upload files'
1. Drag and drop your files or click 'Choose your files'
1. Click 'Commit changes'
1. Open your `index.md` file and add a reference to each image – [see the markdown guide for images](/guide/using-markdown/#images)

### Create a pull request

A pull request asks someone to review your changes before they go live on the main site.

1. Go to the [DPSP design history repository on GitHub](https://github.com/NHSDigital/prevention-services-design-history)
1. Click 'Pull requests' and find yours
1. Click 'Compare & pull request'
1. Update the title and description if needed – for example `Lung health check – designing a new service`
1. Click 'Create pull request'

### Preview your post

1. Scroll down to 'This branch was successfully deployed' and click 'Show environments'. If there is an error, it is likely to be in the frontmatter or how you have named or organised your files
1. Click 'View deployment' to preview the site and check your post appears in your team's section
1. To make changes, navigate to your file – click the branch button, select your branch, find your file and click the `...` menu, then 'Edit file'
1. Make your changes and click 'Commit changes'
1. Your entry will redeploy and you can preview the changes

### Get your post merged

Merging adds your changes to the main site and publishes your post.

1. Paste the URL of your pull request into [#dpsp-design-histories](https://nhsdigitalcorporate.enterprise.slack.com/archives/C08JN2TJH2P) and ask for a review
1. Once approved, click 'Merge pull request' or 'Squash and merge'

---

## Using GitHub Codespaces

### Set up your Codespace

1. Go to the [DPSP design history repository on GitHub](https://github.com/NHSDigital/prevention-services-design-history)
1. Click the green 'Code' button, then click the 'Codespaces' tab
1. Click 'Create codespace on main'
1. Wait for the editor to finish setting up – this may take a minute or two
1. A preview of the design history site will open automatically in a new browser tab

You only need to create a Codespace once. After that, reopen it from the same 'Codespaces' tab.

### Create your post

1. In the file explorer, find the `app` folder and your team's subfolder, for example `app/lung-health-check/`
1. Create a new folder for your post using the year, month, and a short title, for example `app/lung-health-check/2026/03/designing-new-service/`
1. Inside that folder, create a file called `index.md`
1. Add the [frontmatter](/guide/a-sample-template/) at the top of the file
1. Write your post content below the frontmatter
1. Save the file – the preview will update automatically

### Add images (optional)

Before adding images, compress them using [TinyPNG](https://tinypng.com/) to reduce file size.

1. Drag and drop your images into the same folder as your `index.md` file
1. Reference them in your Markdown using a relative path, for example:

```
![Alt text describing the image](image-name.png)
```

### Preview your post

The preview opens automatically when your Codespace starts. You can find it again in the 'Ports' tab at the bottom of the screen – click the link next to port 8080.

### Publish your post

1. Click the 'Source Control' icon in the left sidebar
1. Click the `...` menu, select 'Branch', then 'Create branch' – a branch is a separate copy of the files where you can make changes without affecting the main site
1. Give your branch a name, for example `your-username/your-post-title`, and press Enter
1. Type a short commit message, for example `Add post: your post title` – a commit saves a snapshot of your changes
1. Click 'Commit', then 'Publish branch'
1. Go to the [DPSP design history repository on GitHub](https://github.com/NHSDigital/prevention-services-design-history) and click the prompt to open a pull request – a pull request asks someone to review your changes before they go live
1. Give your pull request a title and description that briefly explain your post
1. Click 'Create pull request'
1. Automated checks will run – you will see 'merging is blocked', this is expected
1. Scroll down to 'This branch was successfully deployed' and click 'Show environments'. If there is an error, it is likely to be in the frontmatter or how you have named or organised your files
1. Click 'View deployment' to preview the deployed version and check your post appears in your team's section
1. To make changes, find your file in the file explorer and click to open it
1. Make your changes and save the file
1. Your entry will redeploy and you can preview the changes
1. Paste the pull request URL into [#dpsp-design-histories](https://nhsdigitalcorporate.enterprise.slack.com/archives/C08JN2TJH2P) and ask for a review
1. Once approved, click 'Merge pull request' or 'Squash and merge' – this adds your changes to the main site and publishes your post

---

## Using a local version on your computer

This method assumes you have some experience with GitHub and are comfortable running things from the terminal. If you are not sure, use the GitHub in a browser or Codespaces method instead.

You also need:

- Git installed on your computer
- Node.js installed on your computer
- A code editor, for example VS Code or Sublime

### Set up the project

You only need to do this once.

1. Download a copy of the [DPSP design history project](https://github.com/NHSDigital/prevention-services-design-history) to your computer by cloning the repository
1. Open your terminal and open the project folder
1. Run `npm install` to install dependencies – the software packages the project needs to run
1. Run `npm start` to run the site locally at `http://localhost:8080`

### Create your post

1. In the `app` folder, find your team's subfolder, for example `app/lung-health-check/`
1. Create a new folder for your post using the year, month, and a short title, for example `app/lung-health-check/2026/03/designing-new-service/`
1. Inside that folder, create a file called `index.md`
1. Add the [frontmatter](/guide/a-sample-template/) at the top of the file
1. Write your post content below the frontmatter
1. Save the file – your local site will update automatically

### Add images (optional)

Before adding images, compress them using [TinyPNG](https://tinypng.com/) to reduce file size.

1. Save your images into the same folder as your `index.md` file
1. Reference them in your Markdown using a relative path, for example:

```
![Alt text describing the image](image-name.png)
```

### Preview your post

Run `npm start` and visit `http://localhost:8080` at any point to preview locally.

### Publish your post

1. In your terminal, create a new branch – a separate copy of the files where you can make changes without affecting the main site:

```
git checkout -b your-username/your-post-title
```

1. Stage your changes – this tells Git which files you want to save:

```
git add .
```

1. Commit your changes – this saves a snapshot of your work:

```
git commit -m "Add post: your post title"
```

1. Push your branch to GitHub – this uploads your changes:

```
git push origin your-username/your-post-title
```

1. Go to the [DPSP design history repository on GitHub](https://github.com/NHSDigital/prevention-services-design-history) and click the prompt to open a pull request – a pull request asks someone to review your changes before they go live
1. Give your pull request a title and description that briefly explain your post
1. Click 'Create pull request'
1. Automated checks will run – you will see 'merging is blocked', this is expected
1. Scroll down to 'This branch was successfully deployed' and click 'Show environments'. If there is an error, it is likely to be in the frontmatter or how you have named or organised your files
1. Click 'View deployment' to preview the deployed version and check your post appears in your team's section
1. Paste the pull request URL into [#dpsp-design-histories](https://nhsdigitalcorporate.enterprise.slack.com/archives/C08JN2TJH2P) and ask for a review
1. Once approved, click 'Merge pull request' or 'Squash and merge' – this adds your changes to the main site and publishes your post
