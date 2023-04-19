import { PlugIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'
import muxInput from 'sanity-plugin-mux-input'

export default defineType({
  title: 'Video blog post',
  name: 'videoBlogPost',
  icon: PlugIcon,
  type: 'document',
  fields: [
    { title: 'Title', name: 'title', type: 'string' },
    {
      title: 'Video file',
      name: 'video',
      type: 'mux.video',
    },
  ],
})
