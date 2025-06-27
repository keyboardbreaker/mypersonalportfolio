'use client'

import { createClient } from 'contentful';
import { useEffect, useState } from 'react';
import { TypeProjectsFields } from '../../../types/contentful/TypeProjects';
import Textbox from '../components/Textbox';

const Project = () => {
    const [projects, setProjects] = useState<TypeProjectsFields[]>([]);
    const [filter, setFilter] = useState<string>('');
    // const [isPending, startTransition] = useTransition();

    const client = createClient({
        space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID ?? '',
        accessToken:  process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN ?? ''
    });

    useEffect(() => {
        const getProjects = async () => {
            const entries =  await client.getEntries({content_type: 'projects'});

            let items = entries.items;
            if (filter) {
                items = entries.items.filter((item) => {
                    return (
                        typeof item.fields.skills === 'string' &&
                        item.fields.skills.toLowerCase().includes(filter.toLowerCase())
                    );
                });
            }
            // Map entries to their fields to match TypeProjectsFields[]
            setProjects(items.map(item => item.fields as TypeProjectsFields));
        };

        getProjects();
    }, [ filter ]);
    
    return (


        <div>
            <Textbox handleChange={(value)=> setFilter(value)} label="Search by skills" />
            <h2>Projects</h2>
            {projects.length === 0 ? (
                <p>No projects found.</p>
            ) :(
            projects && projects.map((project, index) => 
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