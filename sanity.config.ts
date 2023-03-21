import { colorInput } from '@sanity/color-input'
import { visionTool } from '@sanity/vision'
import { defineConfig, isDev } from 'sanity'
import { deskTool } from 'sanity/desk'
import { dataset, projectId, title } from './environment'
import { getStartedPlugin } from './plugins/sanity-plugin-tutorial'
import { schemaTypes } from './schemas'

const devOnlyPlugins = [getStartedPlugin()]

export default defineConfig({
  name: 'default',
  title: title,
  projectId: projectId,
  dataset: dataset,

  plugins: [deskTool(), visionTool(), colorInput(), ...(isDev ? devOnlyPlugins : [])],

  schema: {
    types: schemaTypes,
  },
})
