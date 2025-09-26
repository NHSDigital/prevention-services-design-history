import fs from 'node:fs/promises'

import { nhsukEleventyPlugin } from '@x-govuk/nhsuk-eleventy-plugin'

const serviceName = 'Digital prevention services design history'

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(nhsukEleventyPlugin, {
    stylesheets: ['/styles/application.css'],
    templates: {
      feed: {
        title: serviceName
      },
      tags: true,
      searchIndex: true
    },
    header: {
      service: {
        text: serviceName,
        href: '/'
      }
    },
    footer: {
      meta: {
        items: [
          {
            text: 'Sitemap',
            href: '/sitemap'
          },
          {
            text: 'Subscribe to feed',
            href: '/feed.xml'
          },
          {
            text: 'Tags',
            href: '/tags'
          }
        ],
        text: 'All data and personal information shown in prototypes are fictional and for demonstration purposes only.'
      }
    },
    url:
      process.env.GITHUB_ACTIONS &&
      'https://design-history.prevention-services.nhs.uk/'
  })

  // Images and PDFs
  eleventyConfig.addPassthroughCopy('./app/**/*.gif')
  eleventyConfig.addPassthroughCopy('./app/**/*.jpg')
  eleventyConfig.addPassthroughCopy('./app/**/*.jpeg')
  eleventyConfig.addPassthroughCopy('./app/**/*.png')
  eleventyConfig.addPassthroughCopy('./app/**/*.pdf')


  // Nunjucks filters
  eleventyConfig.addFilter('push', (array, item) => {
    const newArray = [...array]
    newArray.push(item)

    return newArray
  })

  // Service area collections
  for (const area of ['screening', 'vaccinations', 'personalised-prevention']) {
    eleventyConfig.addCollection(`${area}-area`, (collection) => {
      return collection
        .getAll()
        .filter(({ data }) => data?.area === area)
        .sort((a, b) => {
          // Promoted collection in an area should be shown first
          if (a.data.promote) return -1
          if (b.data.promote) return 1

          return a.data.title.localeCompare(b.data.title)
        })
    })
  }

  // Service collections
  for (const service of [
    'digital-prevention-services',
    // Screening service collections
    'screening',
    'bowel-screening',
    'breast-screening-reporting',
    'cohort-manager',
    'diabetic-eye-screening',
    'explore-team',
    'manage-breast-screening',
    'manage-your-screening',
    'hpv-self-testing',
    'screening-invite',
    // Vaccination service collections
    'vaccinations',
    'book-a-vaccination',
    'manage-vaccinations-in-schools',
    'manage-your-appointments',
    'record-a-vaccination',
    'select-people-for-invitation',
    'vaccinations-in-the-app',
    // Personalised prevention service collections
    'ai-health-coach',
    'personalised-prevention',
    'lung-health-check',
    'nhs-health-check-online',
    'personalised-prevention-platform',
    'smoking-cessation',
    'talking-therapies'
  ]) {
    eleventyConfig.addCollection(service, (collection) => {
      return collection.getFilteredByGlob(`app/${service}/**/*.md`)
    })
  }

  // Guide collection
  eleventyConfig.addCollection('guide', (collection) => {
    return collection.getFilteredByGlob(`app/guide/**/*.md`)
  })

  // Posts collection (all posts across all services)
  eleventyConfig.addCollection('post', (collection) => {
    return collection
      .getAllSorted()
      .filter((item) => item.data?.layout === 'post')
  })

  // Reset contents of output directory before each build
  eleventyConfig.on('eleventy.before', async ({ directories, runMode }) => {
    if (runMode === 'build') {
      await fs.rm(directories.output, {
        force: true,
        recursive: true
      })
    }
  })

  // Config
  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'app',
      includes: '_components',
      layouts: '_layouts'
    }
  }
}
