import React from 'react';
import { Element } from 'react-scroll';
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
  gitUrl: string;
  link: string;
};

const Work = ({
  id,
  img,
  title,
  category,
  technology,
  gitUrl,
  link,
}: Props) => {
  return (
    <ProjectContainer>
      <Project>
        <ProjectContent id={id}>
          <ProjectLabel>{category}</ProjectLabel>
          <ProjectTitle id={id}>{title}</ProjectTitle>
          <ProjectDetails>
            <ProjectDescriptions>
              <p>
                you probably haven't heard of them bitters selvage listicle
                heirloom. Locavore kombucha street art ennui 90's, organic food
                truck hell of seitan skateboard literally hexagon fixie next
                level. Lomo salvia yuccie hella roof party echo park vegan four
                dollar toast cred.
              </p>
            </ProjectDescriptions>
            <div>
              <SkillContainer id={id}>
                {technology.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </SkillContainer>
            </div>
            <IconContainer id={id}>
              <GitIconContainer
                href={gitUrl}
                target="_blank"
                style={{ marginRight: '35px' }}
                rel="noopener noreferrer"
              >
                <BsGithub size={25} />
              </GitIconContainer>
              <LinkIconContainer
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineLink size={25} />
              </LinkIconContainer>
            </IconContainer>
          </ProjectDetails>
        </ProjectContent>
        <ProjectImg id={id}>
          <img src={`/work/${img}.png`} alt={title} />
        </ProjectImg>
      </Project>
    </ProjectContainer>
  );
};

export default Work;
