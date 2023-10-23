import { type SchemaTypeDefinition } from 'sanity'
import projectSchema from './schemas/project.schema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    projectSchema
  ],
}
