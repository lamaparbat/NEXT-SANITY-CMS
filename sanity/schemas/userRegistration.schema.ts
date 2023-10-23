
const UserRegistrationSchema = {
    name: 'userRegistration',
    title: 'User Registration',
    type: 'document',
    fields: [
        {
            title: 'User name',
            name: 'username',
            type: 'string',
            validation: (Rule: any) => Rule.required().min(20)
        },
        {
            title: 'Email Address',
            name: 'email',
            type: 'string',
            validation: (Rule: any) => Rule.required()
        },
        {
            title: 'Password',
            name: 'password',
            type: 'string',
            validation: (Rule: any) => Rule.required()
        },
        {
            title: 'Profile',
            name: 'profile',
            type: 'image',
            options: {
                hotspot: true
            }

        },
        {
            name: 'dob',
            title: 'Date Of Birth',
            type: 'date',
        },
        {
            title: 'Role',
            name: 'role',
            type: 'reference',
            to: [{ type: 'rolesRegistration' }]
        },
        {
            title: 'Bio Descriptions',
            name: 'bioDescription',
            type: 'string',
            validation: (Rule: any) => {
                Rule.custom((text: string) => {

                })
            }
        }
    ]
}

export default UserRegistrationSchema;