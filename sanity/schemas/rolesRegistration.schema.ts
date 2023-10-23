
const RolesRegistrationSchema = {
    name: 'rolesRegistration',
    title: 'Roles Registration',
    type: 'document',
    fields: [
        {
            title: 'Name',
            name: 'name',
            type: 'string',
        },
        {
            title: 'Hide Role',
            name: 'isHidden',
            type: 'boolean',
        }
    ]
}

export default RolesRegistrationSchema;