import { type SchemaTypeDefinition } from 'sanity';
import UserRegistration from './schemas/userRegistration.schema';
import ProjectSchema from './schemas/project.schema';
import RolesRegistrationSchema from './schemas/rolesRegistration.schema';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    ProjectSchema,
    UserRegistration,
    RolesRegistrationSchema
  ],
}
