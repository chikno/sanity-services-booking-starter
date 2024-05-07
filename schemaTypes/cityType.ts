import {defineField, defineType} from 'sanity'


export const cityType = defineType({
  name: 'cities',
  title: 'cities',
  type: 'document',
  fields: [
    defineField({
      name: 'label',
      type: 'string',
    }),
    defineField({
      name: 'value',
      type: 'string',
    }),
  ],
})
