import { visionTool } from '@sanity/vision'
import { theme } from 'https://themer.sanity.build/api/hues?default=ffffff;50;lightest:ffffff&primary=878787;200;lightest:ffffff;darkest:111212&transparent=c6c8c8;300;lightest:000000&positive=6e6e6e;300&caution=fbd024;200&critical=darkest:111212&lightest=fafafa&darkest=000000'
import { apiVersion, dataset, previewSecretId, projectId } from 'lib/sanity.api'
import { previewDocumentNode } from 'plugins/previewPane'
import { productionUrl } from 'plugins/productionUrl'
import { pageStructure, singletonPlugin } from 'plugins/settings'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import articles from 'schemas/articles'
import author from 'schemas/author'
import category from 'schemas/category'
import home from 'schemas/home'
import page from 'schemas/page'
import settings from 'schemas/settings'

const title =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || 'Reality Designers | Studio'

export const PREVIEWABLE_DOCUMENT_TYPES: string[] = [
  home.name,
  page.name,

  articles.name,
]

export default defineConfig({
  theme,
  basePath: '/studio',
  projectId: projectId || '',
  dataset: dataset || '',
  title,
  schema: {
    types: [home, settings, page, articles, author, category],
  },
  plugins: [
    deskTool({
      structure: pageStructure([home, settings]),
      // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
      defaultDocumentNode: previewDocumentNode({ apiVersion, previewSecretId }),
    }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    singletonPlugin([home.name, settings.name]),
    // Add the "Open preview" action
    productionUrl({
      apiVersion,
      previewSecretId,
      types: PREVIEWABLE_DOCUMENT_TYPES,
    }),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
