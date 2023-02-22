import React, {FC} from 'react';
import {ProjectType} from "@/types";
import {serverUrl} from "@/api";
import Link from "next/link";

const ProjectCard: FC<{ project: ProjectType, className?: string}> = ({project, className}) => {
    return (
        <Link href={`/portfolio/${project.id}`} className={className}
              style={{backgroundImage: `url(${serverUrl + project.attributes.preview.data.attributes.url})`}}>
            <p>{project.attributes.type}</p>
            <h3>{project.attributes.title}</h3>
        </Link>
    );
};

export default ProjectCard;