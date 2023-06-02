import 'server-only'

import { SanityClient } from '@sanity/client'
import { apiVersion, dataset, projectId, useCdn } from 'lib/sanity.api'
import {
  articleBySlugQuery,
  authorBySlugQuery,
  homePageQuery,
  homePageTitleQuery,
  pagesBySlugQuery,
  projectBySlugQuery,
  settingsQuery,
} from 'lib/sanity.queries'
import { createClient } from 'next-sanity'
import type {
  ArticlesPayload,
  HomePagePayload,
  PagePayload,
  ProjectPayload,
  SettingsPayload,
} from 'schemas/index'

export const sanityClient = (token?: string): SanityClient | null => {
  return projectId
    ? createClient({ projectId, dataset, apiVersion, useCdn, token })
    : null
}

export async function getHomePage({
  token,
}: {
  token?: string
}): Promise<HomePagePayload | undefined> {
  return await sanityClient(token)?.fetch(homePageQuery)
}

export async function getHomePageTitle({
  token,
}: {
  token?: string
}): Promise<string | undefined> {
  return await sanityClient(token)?.fetch(homePageTitleQuery)
}

export async function getPageBySlug({
  slug,
  token,
}: {
  slug: string
  token?: string
}): Promise<PagePayload | undefined> {
  return await sanityClient(token)?.fetch(pagesBySlugQuery, { slug })
}

export async function getProjectBySlug({
  slug,
  token,
}: {
  slug: string
  token?: string
}): Promise<ProjectPayload | undefined> {
  return await sanityClient(token)?.fetch(projectBySlugQuery, { slug })
}

export async function getSettings({
  token,
}: {
  token?: string
}): Promise<SettingsPayload | undefined> {
  return await sanityClient(token)?.fetch(settingsQuery)
}

export async function getArticleBySlug({
  slug,
  token,
}: {
  slug: string
  token?: string
}): Promise<ArticlesPayload | undefined> {
  return await sanityClient(token)?.fetch(articleBySlugQuery, { slug })
}

export async function getAuthorBySlug({
  slug,
  token,
}: {
  slug: string
  token?: string
}): Promise<ArticlesPayload | undefined> {
  return await sanityClient(token)?.fetch(authorBySlugQuery, { slug })
}
