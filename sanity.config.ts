import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'sanity-expo-react-native',

  projectId: <SANITY_PROJECT_ID_HERE>,
  dataset: <SANITY_DATASET_HERE>,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
