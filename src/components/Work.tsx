import React from 'react';
import {
  ProjectContainer,
  Project,
  ProjectContent,
  ProjectLabel,
  ProjectTitle,
  GitIconContainer,
  LinkIconContainer,
  ProjectDetails,
  ProjectDescriptions,
  ProjectImg,
  SkillContainer,
  IconContainer,
} from './WorkStyle';
import { BsGithub } from 'react-icons/bs';
import { AiOutlineLink } from 'react-icons/ai';
type Props = {
  id?: number;
  img?: string;
  title: string;
  category: string;
  technology: string[];
  gitUrl?: string;
  link?: string;
  desc: string;
};

const Work = ({
  id,
  img,
  title,
  category,
  technology,
  gitUrl,
  link,
  desc,
}: Props) => {
  return (
    <ProjectContainer>
      <Project>
        <ProjectContent id={id}>
          <ProjectLabel>{category}</ProjectLabel>
          <ProjectTitle id={id}>{title}</ProjectTitle>
          <ProjectDetails>
            <ProjectDescriptions>
              <p>{desc}</p>
            </ProjectDescriptions>
            <div>
              <SkillContainer id={id}>
                {technology.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </SkillContainer>
            </div>
            <IconContainer id={id}>
              {gitUrl && (
                <GitIconContainer
                  href={gitUrl}
                  target="_blank"
                  style={{ marginRight: '35px' }}
                  rel="noopener noreferrer"
                >
                  <BsGithub size={25} />
                </GitIconContainer>
              )}
              {link && (
                <LinkIconContainer
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineLink size={25} />
                </LinkIconContainer>
              )}
            </IconContainer>
          </ProjectDetails>
        </ProjectContent>
        <ProjectImg id={id}>
          <img src={`/work/${img}-min.png`} alt={`${title} screenshot`} />
        </ProjectImg>
      </Project>
    </ProjectContainer>
  );
};

export default Work;
