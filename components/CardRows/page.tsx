import React from 'react'
import Card from '../Card'
import { getProjects } from '@/sanity/lib/client';

const CardRows = async () => {
    const projects = await getProjects();

    return (
        <>
            {
                projects?.map((project: object, index: number) => (
                    <Card project={project} key={index} />
                ))
            }
        </>
    )
}

export default CardRows