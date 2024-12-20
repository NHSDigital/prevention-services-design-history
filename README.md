# Design history for NHS.UK screening

A place for services within screening to document their design decisions and research learnings.

## Installation and getting started

1. Clone the repo to a folder on your computer
2. In your terminal, `cd` to the folder
3. Run `npm install` to install pre-requisites
4. Run `npm run start` to build the design history site and serve it
5. View the site locally at `localhost:8080`

## Adding a new service

For new services in screening, [follow this guide to get yourself added](https://x-govuk.github.io/govuk-design-history/divide-a-design-history-into-sections/).

## Adding a new post

You have two choices for adding a post:

* [Add a post manually](#add-a-post-manually)
* [Use the post generation scripts](https://x-govuk.github.io/govuk-design-history/generate-a-page-of-screenshots/)

### Add a post manually

1. Draft your design history post - it's often easiest to do this in Sharepoint
1. Create a new markdown file in `app/posts/[service-name]/YYYY/MM/[post-name].md`
  * * It's often easier to duplicate an existing post as that will have the headers you need
3. Edit the post with your content - make sure it has a title, subtitle, and date
4. If you have images, add them to a folder in `app/images/[service-name]/YYYY/MM/[post-name]/`
5. Make a PR with your changes and get it reviewed

### Add a post using the generation scripts

[View more details on the scripts here.](https://x-govuk.github.io/govuk-design-history/generate-a-page-of-screenshots/)

1. Use a PNG optimiser [like TinyPNG](https://tinypng.com/) to reduce the file size of your images.
2. Create a folder for your images and them in `app/images/[service-name]/YYYY/MM/[post-name]/`
3. From the terminal, run `node scripts/generate.js [path]` where `path` is the full path to the folder of images. The easiest way to do this is to type `node scripts/generate.js ` and then drag the folder from Finder on to your terminal to fill in the path.
4. The script will generate a post linking to each image.
5. You should check the title text for each image and ammend as needed.
6. The script will prepend the post filename with the current date but you can delete this if you like.

## Deploying and publishing

Once you have a post you want to publish, make a PR on this repo with your suggested change.

Once it is merged the updated design history will automatically deploy with your post.

## Support

For issues relating to the NHS Screening design history, [contact Ed Horsford](https://github.com/edwardhorsford).

The [GOV.UK design history project](https://x-govuk.github.io/govuk-design-history/) is maintained by a small number of volunteers working across government.

For questions about using a design history for your service, bug reports or feedback, [submit a new issue](https://github.com/x-govuk/govuk-design-history-template/issues/new).

## Technical notes

The design history uses the [GOV.UK Design System](https://design-system.service.gov.uk) and the [Eleventy](https://www.11ty.dev) static site generator with the [GOV.UK Eleventy Plugin](https://x-govuk.github.io/govuk-eleventy-plugin/).
