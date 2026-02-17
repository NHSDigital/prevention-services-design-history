---
layout: page
title: Using Markdown
description: A guide to using Markdown within design history posts
eleventyNavigation:
  parent: Guide
---

Posts within this design history website are written using [Markdown](https://en.wikipedia.org/wiki/Markdown), a simple markup language which saves you from having to use HTML.

[[toc]]

## Paragraphs

You don’t have to do anything special for paragraphs, except for making sure that there is an empty line between each one.

```md
This is a paragraph.

This is another paragraph.
This sentence will appear next to the previous sentence as single line breaks are ignored.
```

## Headings and sub-headings

For headings, start the line with hash (`#`) characters, followed by a space.

You should use 2 hash characters for a heading (h2), or 3 hash characters for a sub-heading (h3).

Do not include a post title (h1) as this will be generated automatically from the information at the top of the post.

You do not need to create a heading before the introductory paragraph.

```md
This is an introductory paragraph.

## Heading

This is a paragraph.

### Sub-heading

This is a paragraph.
```

## Links

To create links, you have to use a combination of square brackets and round brackets.

The square brackets come first, and contain the link text. This must be immediately followed by round brackets which contain the URL.

```md
For more information, see [vaccinations on the NHS website](https://www.nhs.uk/vaccinations/).
```

### Internal links

If you are linking to another post on this design history site, you should not include the full URL, and instead just the part after `https://design-history.prevention-services.nhs.uk`.

This should start with a forward slash (`/`) character:

```md
We previously wrote about [the pilot](/screening-invite/2025/06/invite-pilot-overview/).
```

### Footnotes

Footnotes allow you to add notes and references without interrupting the flow of your writing. When you create a footnote, a superscript number with a link appears where you added the reference.

To create a footnote reference, add a caret with an identifier inside brackets `[^1]`. Identifiers can be numbers or words but they can't contain spaces or tabs.

Add the footnote using another caret and number inside brackets with a colon and the associated text `[^1]: My footnote`. You don't have to put footnotes at the end of the markdown document -- that's where they will be rendered though. This can make it easier to add a footnote reference and a footnote close to each other.

```md
Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: This is the first footnote.

[^bignote]: This is a bigger footnote with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.
```

This would be displayed as:

<!--
  Breaking into HTML here and deliberately used a new namespace for the links in case someone does
  end up using actual footnotes in this document
-->
Here's a simple footnote,<sup id="fnref:example:1"><a class="nhsuk-link" href="#fn:example:1" aria-describedby="footnotes-label">1</a></sup> and here's a longer one.<sup id="fnref:example:2"><a class="nhsuk-link" href="#fn:example:2" aria-describedby="footnotes-label">2</a></sup>

<ol class="app-footnotes-list">
  <li id="fn:example:1"><p class="nhsuk-body">This is the first footnote. <a class="nhsuk-link" href="#fnref:example:1" aria-label="Back to content">↩︎</a></p>
  </li>
  <li id="fn:example:2"><p class="nhsuk-body">This is a bigger footnote with multiple paragraphs and code.</p>
    <p class="nhsuk-body">Indent paragraphs to include them in the footnote.</p>
    <p class="nhsuk-body"><code class="app-code app-code--inline">{ my code }</code></p>
    <p class="nhsuk-body">Add as many paragraphs as you like. <a class="nhsuk-link" href="#fnref:example:2" aria-label="Back to content">↩︎</a></p>
  </li>
</ol>

## Lists

You can add bullet lists by starting each item of the list with a dash (`-`) character followed by a space. You can also use asterisks (`*`).

There should be a blank line before and after each list.

```md
We have 3 user types:

- administrators
- clinicians
- managers
```

### Numbered lists

If the order of items in your list is significant, use a numbered list.

Each item in the list should start with a number, a full stop and then a space.

```md
This was our design process:

1. Desk research
2. Explore lots of different designs
3. Refine a couple of options
4. Usability testing
```

## Quotations

You can add quotations by starting each line of the quote using a greater than (`>`) character followed by a space.

If you are quoting a user taking part in research, they should not be identifiable.

```md
As the NHS vaccination strategy says:

> Vaccination services and activities should be holistic.
>
> Multidisciplinary teams could offer wider health advice and interventions.
```

This is shown like this:

> Vaccination services and activities should be holistic.
>
> Multidisciplinary teams could offer wider health advice and interventions.

### Quotations with attribution

You can attribute a quote to its author by adding two hyphens (`--`) before the attribution you want to add.

```md
> No society can legitimately call itself civilised if a sick person is denied aid because of lack of means.
> -- Nye Bevan, 1952
```

This is shown like this:

> No society can legitimately call itself civilised if a sick person is denied aid because of lack of means.
> -- Nye Bevan, 1952

## Images

To embed an image, use a similar combination of square and round brackets as with links, but starting first with a exclamation mark (`!`).

The content within the square brackets is used for alternative text (alt text) for use by screen reading software or if the the images fail to load.

The alt text should contain the key information within the image that is being discussed in your post. For example, if the image is a screenshot, the alt text could describe the visual layout of the page, or could contain the key content in the screenshot. It should not be generic text like "Screenshot of homepage".

Within the round brackets you must include the exact name of the image file, which is case sensitive.

```md
We redesigned the homepage to clearly list the different services within our portfolio:

![Screenshot of a website with the title 'Digital prevention design history'. Beneath this are 3 headings labelled 'Screening', 'Vaccinations' and 'Personalised prevention', and underneath these headings are linked service names in a two column grid.](homepage-redesign.png)
```

### Images with captions

You can also optionally add a caption to an image, which will then appear underneath it on your post.

The caption is in addition to alt text. Unlike the alt text, the caption cab be a short description of what the image is.

The caption is added inside the round brackets, after the file name, within double quotes (`"`).

```md
This is our brand:

![Blue rectangle containing 'NHS' as white slanted letters](nhs-logo.png "The NHS logo")
```

Here is how images with captions are displayed:

![Blue rectangle containing 'NHS' as white slanted letters](../nhs-logo.png 'The NHS logo')

## Tables

Tables can be used if you have some simple data or statistics to include.

To add tables, use the pipe (`|`) character to separate the columns and at the start and end of each row.

The table should start with a row that contains headings for each column. After this heading row, add a row using dash (`-`) characters in each column to separate the column headings from the table data.

```md
These are the questions we included in the survey:

| Field                      | Format  | Type     |
| -------------------------- | ------- | -------- |
| Name                       | Text    | Required |
| Date of birth              | Date    | Required |
| Phone number               | Text    | Optional |
| Consent for future contact | Boolean | Required |
```

## Notes

Notes can be used emphasise important information or to highlight content that has a different context from the rest of your post.

To add a note, start each line with a `>` character, and add `> [!NOTE]` on the line immediately above:

```markdown
> [!NOTE]
> In the UK, 1 in 5 people is disabled.
>
> This can equate to more than [16 million](https://commonslibrary.parliament.uk/research-briefings/cbp-9602/) people with disabilities
```

This will display as:

> [!NOTE]
> In the UK, 1 in 5 people is disabled.
>
> This can equate to more than [16 million](https://commonslibrary.parliament.uk/research-briefings/cbp-9602/) people with disabilities

You can also include a title:

```markdown
> [!NOTE] Help take part in research
> We’d like to spend 20 minutes talking to you about your experiences.
```

The rendered output looks like this:

> [!NOTE] Help take part in research
> We’d like to spend 20 minutes talking to you about your experiences.

## Alerts

Alerts are rendered as [warning callouts](https://service-manual.nhs.uk/design-system/components/warning-callout):

```markdown
> [!IMPORTANT]
> This assumption has not yet been validated.
```

This displays as:

> [!IMPORTANT]
> This assumption has not yet been validated.

If you include a title, this will be shown in the heading instead:

```markdown
> [!IMPORTANT] Clinical note
> This guidance was based on information in the Patient Group Direction (PGD).
```

This displays as:

> [!IMPORTANT] Clinical note
> This guidance was based on information in the Patient Group Direction (PGD).

---

See [NHS.UK Eleventy markdown guide](https://x-govuk.github.io/nhsuk-eleventy-plugin/example/markdown/) for the full list of options.
