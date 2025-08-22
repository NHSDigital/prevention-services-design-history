import { nhsukEleventyPlugin } from '@x-govuk/nhsuk-eleventy-plugin'

export default function(eleventyConfig) {

  eleventyConfig.addPlugin(nhsukEleventyPlugin, {
    stylesheets: [
      '/styles/application.css'
    ],
    templates: {
      feed: true,
      tags: true,
      searchIndex: true
    },
    header: {
      service: {
        text: "Digital prevention services design history",
        href: "/"
      }
    },
    footer: {
      meta: {
        items: [
          {
            text: "Sitemap",
            href: "/sitemap"
          },
          {
            text: "Subscribe to feed",
            href: "/feed.xml"
          },
          {
            text: "Tags",
            href: "/tags"
          }
        ],
        text: "All data and personal information shown in prototypes are fictional and for demonstration purposes only."
      }
    },
    url:
      process.env.GITHUB_ACTIONS &&
      'https://design-history.prevention-services.nhs.uk/'
  })

  // Passthrough
  eleventyConfig.addPassthroughCopy({ './app/images': '.' })
  eleventyConfig.addPassthroughCopy('./app/pdfs');

  // Nunjucks filters
  eleventyConfig.addFilter("push", (array, item) => {
    const newArray = [...array]
    newArray.push(item)

    return newArray
  });

  // Service area collections
  for (const area of ["screening", "vaccinations", "personalised-prevention"]) {
    eleventyConfig.addCollection(`${area}-area`, (collection) => {
      return collection.getAll()
        .filter(({data}) => data?.area === area)
        .sort((a, b) => {
          // Promoted collection in an area should be shown first
          if (a.data.promote) return -1;
          if (b.data.promote) return 1;

          return a.data.title.localeCompare(b.data.title);
        });
    })
  }

  // Service collections
  for (const service of [
    "digital-prevention-services",
    // Screening service collections
    "screening",
    "bowel-screening",
    "breast-screening-reporting",
    "cohort-manager",
    "explore-team",
    "manage-breast-screening",
    "manage-your-screening",
    "hpv-self-sampling",
    "screening-invite",
    // Vaccination service collections
    "vaccinations",
    "book-a-vaccination",
    "manage-vaccinations-in-schools",
    "manage-your-appointments",
    "record-a-vaccination",
    "select-people-for-invitation",
    "vaccinations-in-the-app",
    // Personalised prevention service collections
    "personalised-prevention",
    "lung-health-check",
    "nhs-health-check-online",
    "personalised-prevention-platform",
    "smoking-cessation",
    "talking-therapies",
  ]) {
    eleventyConfig.addCollection(service, collection => {
      return collection.getFilteredByGlob(`app/posts/${service}/**/*.md`)
    })
  }

  // Guide collection
  eleventyConfig.addCollection("guide", collection => {
    return collection.getFilteredByGlob(`app/guide/**/*.md`)
  })

  // Posts collection (all posts across all services)
  eleventyConfig.addCollection("post", (collection) => {
    return collection
      .getAllSorted()
      .filter((item) => item.data?.layout === 'post')
  })

  // Config
  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'app',
      includes: '_components',
      includes: '_layouts'
    }
  }
}
