'use client'

import { createClient } from 'contentful';
import { useEffect, useState } from 'react';
import { TypeProjectsFields } from '../../../types/contentful/TypeProjects';

const Project = () => {
    const [projects, setProjects] = useState<TypeProjectsFields[]>([]);
    // const [filter] = useState<string>('')
    // const [isPending, startTransition] = useTransition();

    const client = createClient({
        space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID ?? '',
        accessToken:  process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN ?? ''
    });

    useEffect(() => {

        const getProjects = async () => {
            const entries =  await client.getEntries({content_type: 'projects'});

            setProjects(entries.items.map(item => item.fields as TypeProjectsFields))
            console.log(entries)
        };

        getProjects();
    }, []);
    
    return (


        <div>
            <h2>Projects</h2>
            {projects.length === 0 ? (
                <p>No projects found.</p>
            ) :(
            projects.map((project, index) => 
                <div key={index}>
                    <h2>{project.projectName}</h2>
                    <p>{project.description}</p>
                    <h3>Skills</h3>
                    {project.skills}
                </div>
            )
        )}
      </div>

    )
}

export default Project;