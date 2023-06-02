import imageUrlFor from '@sanity/image-url/'

import { sanityClient } from './sanity.client'

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlFor(sanityClient() || undefined)

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
export function urlFor(source: any) {
  return builder.image(source)
}
