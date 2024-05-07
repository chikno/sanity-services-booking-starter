import {defineField, defineType} from 'sanity'


export const categoryType = defineType({
  name: 'categories',
  title: 'categories',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'description',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block'
        }
      ]
    }),
  ],
})
