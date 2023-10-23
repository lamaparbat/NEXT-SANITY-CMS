"use client";

import { PortableText } from '@portabletext/react';
import Image from 'next/image'
import React from 'react'

const Card = ({ project }: any) => {
    return (
        <div className="border border-slate-10 0 my-2 h-40 w-[300px] flex flex-col items-center justify-center gap-2 rounded-md flex-wrap">
            <h1>{project?.name}</h1>
            <Image src={project.image} height={50} width={50} alt="card image" />
            <div>
                <PortableText value={project?.content} />
            </div>
            <button className="px-2 bg-black text-white rounded-sm" onClick={() => console.log({ hello: true, project: project._id })}>Details</button>
        </div>
    )
}

export default Card