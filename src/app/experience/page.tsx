'use client'

import { createClient } from 'contentful';
import { useEffect, useState } from 'react';
import { TypeExperiencesFields } from '../../../types/contentful/TypeExperiences';

const Experience = () => {
    const [experiences, setExperiences] = useState<TypeExperiencesFields[]>([]);
    // const [filter] = useState<string>('')
    // const [isPending, startTransition] = useTransition();
    console.log(process.env);
    const client = createClient({
        space: process?.env.VITE_CONTENTFUL_SPACE_ID ?? '',
        accessToken:  process?.env?.VITE_CONTENTFUL_ACCESS_TOKEN ?? ''
    });

    useEffect(() => {

        const getExperiences = async () => {
            const entries =  await client.getEntries({content_type: 'experiences'});

            setExperiences(entries.items.map(item => item.fields as TypeExperiencesFields))
            console.log(entries)
        };

        getExperiences()
        
    
    }, [])
    
    return (


        <div>
            <h2>Experiences</h2>
            {experiences.length === 0 ? (
                <p>No experiences found.</p>
            ) :(
            experiences.map((experience, index) => 
                <div key={index}>
                   <h2>{experience.name}</h2>
                   <h3>Skills</h3>
                   {experience.description}
                </div>
            )
        )}
      </div>

    )
}

export default Experience;