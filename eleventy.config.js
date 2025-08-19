import { nhsukEleventyPlugin } from '@x-govuk/nhsuk-eleventy-plugin'

export default function(eleventyConfig) {

  eleventyConfig.addPlugin(nhsukEleventyPlugin, {
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

  // General category for posts that cover all of digital prevention services
  eleventyConfig.addCollection("digital-prevention-services", (collection) => {
    return collection.getFilteredByGlob("app/posts/digital-prevention-services/**/*.md")
  })

  // Screening collections

  // General category for posts about screening
  eleventyConfig.addCollection("screening", (collection) => {
    return collection.getFilteredByGlob("app/posts/screening/**/*.md")
  })

  eleventyConfig.addCollection("bowel-screening", (collection) => {
    return collection.getFilteredByGlob("app/posts/bowel-screening/**/*.md")
  })

  eleventyConfig.addCollection('breast-screening-reporting', collection => {
    return collection.getFilteredByGlob('app/posts/breast-screening-reporting/**/*.md')
  })

  eleventyConfig.addCollection("cohort-manager", (collection) => {
    return collection.getFilteredByGlob("app/posts/cohort-manager/**/*.md")
  })

  eleventyConfig.addCollection('explore-team', collection => {
    return collection.getFilteredByGlob('app/posts/explore-team/**/*.md')
  })

  eleventyConfig.addCollection('manage-breast-screening', collection => {
    return collection.getFilteredByGlob('app/posts/manage-breast-screening/**/*.md')
  })

  eleventyConfig.addCollection("manage-your-screening", (collection) => {
    return collection.getFilteredByGlob("app/posts/manage-your-screening/**/*.md")
  })

  eleventyConfig.addCollection('hpv-self-sampling', collection => {
    return collection.getFilteredByGlob('app/posts/hpv-self-sampling/**/*.md')
  })

  eleventyConfig.addCollection('screening-invite', collection => {
    return collection.getFilteredByGlob('app/posts/screening-invite/**/*.md')
  })

  // Vaccination collections

  // General category for posts about vaccination services
  eleventyConfig.addCollection("vaccinations", (collection) => {
    return collection.getFilteredByGlob("app/posts/vaccinations/**/*.md")
  })

  eleventyConfig.addCollection('book-a-vaccination', collection => {
    return collection.getFilteredByGlob('app/posts/book-a-vaccination/**/*.md')
  })

  eleventyConfig.addCollection('manage-vaccinations-in-schools', collection => {
    return collection.getFilteredByGlob('app/posts/manage-vaccinations-in-schools/**/*.md')
  })

  eleventyConfig.addCollection('manage-your-appointments', collection => {
    return collection.getFilteredByGlob('app/posts/manage-your-appointments/**/*.md')
  })

  eleventyConfig.addCollection('record-a-vaccination', collection => {
    return collection.getFilteredByGlob('app/posts/record-a-vaccination/**/*.md')
  })

  eleventyConfig.addCollection('select-people-for-invitation', collection => {
    return collection.getFilteredByGlob('app/posts/select-people-for-invitation/**/*.md')
  })

  eleventyConfig.addCollection('vaccinations-in-the-app', collection => {
    return collection.getFilteredByGlob('app/posts/vaccinations-in-the-app/**/*.md')
  })

  // Personalised prevention collections

  // General category for posts about personalised prevention
  eleventyConfig.addCollection("personalised-prevention", (collection) => {
    return collection.getFilteredByGlob("app/posts/personalised-prevention/**/*.md")
  })

  eleventyConfig.addCollection('nhs-health-check-online', collection => {
    return collection.getFilteredByGlob('app/posts/nhs-health-check-online/**/*.md')
  })

  eleventyConfig.addCollection('personalised-prevention-platform', collection => {
    return collection.getFilteredByGlob('app/posts/personalised-prevention-platform/**/*.md')
  })

  eleventyConfig.addCollection('talking-therapies', collection => {
    return collection.getFilteredByGlob('app/posts/talking-therapies/**/*.md')
  })

  eleventyConfig.addCollection('smoking-cessation', collection => {
    return collection.getFilteredByGlob('app/posts/smoking-cessation/**/*.md')
  })

  eleventyConfig.addCollection('lung-health-check', collection => {
    return collection.getFilteredByGlob('app/posts/lung-health-check/**/*.md')
  })

  eleventyConfig.addCollection('guide', collection => {
    return collection.getFilteredByGlob('app/guide/**/*.md')
  })


  // A 'post' collection containing all posts across all services
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
      includes: '_components'
    }
  }
}
