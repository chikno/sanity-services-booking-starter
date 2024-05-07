import {defineField, defineType} from 'sanity'
import CustomAddNewDetail from '../custom/add-new-detail';

export const serviceType = defineType({
  name: 'services',
  title: 'services',
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
    defineField({
      name: 'prestation',
      type: 'array',
      title: 'prestation',
      of: [
        {
          type: "string",
        },
      ],
      options: {
        list: [
          { title: "A domicile", value: "domicile"},
          { title: "Au cabinet", value: "cabinet"},
        ],
        layout: "grid",
      },
    }),
    defineField({
      name: 'category',
      type: 'reference',
      to: [{type: 'categories'}]
    }),
    defineField({
      name: 'city',
      type: 'array',
      title: 'city',
      of: [
        {
         type: 'reference',
         to: { type: 'cities'}
        }
      ],
    }),
    defineField({
      name: 'price',
      type: 'number',
    }),
    defineField({
      name: 'duration',
      type: 'string',
    }),
    defineField({
      name: 'isPopular',
      type: 'boolean',
    }),
    defineField({
      name: 'isHero',
      type: 'boolean',
    }),
    defineType({
      name: 'details',
      title: 'details',
      type: 'document',
      fields: [
        defineField({
          name: 'myArray',
          type: 'array',
          title: 'My array',
          of: [
            {
              type: 'string',
            },
          ],
          components: { string: CustomAddNewDetail },
        }),
      ],
    })
  ],
})
