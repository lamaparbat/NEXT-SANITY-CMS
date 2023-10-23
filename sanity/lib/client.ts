import { createClient, groq } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'
import { Project } from '@/lib/types/project';

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});

export const getProjects = async (): Promise<Project[]> => {
  return await client.fetch(
    groq`*[_type == "project"]{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "image": image.asset->url,
    url,
    content
  }`)
}
