import React from 'react';
import { Element } from 'react-scroll';
import {
  ProjectContainer,
  Project,
  ProjectContent,
  ProjectLabel,
  ProjectTitle,
  ProjectDetails,
  ProjectImg,
} from './WorkStyle';
type Props = {};

const Work = (props: Props) => {
  return (
    <ProjectContainer>
      <Project>
        <ProjectContent>
          <ProjectLabel>Game of Thrones</ProjectLabel>
          <ProjectTitle>A Clash of Kings</ProjectTitle>
          <ProjectDetails>
            <p>
              Lorem ipsum dolor amet you probably haven't heard of them bitters
              selvage listicle heirloom. Locavore kombucha street art ennui
              90's, organic food truck hell of seitan skateboard literally
              hexagon fixie next level. Lomo salvia yuccie hella roof party echo
              park vegan four dollar toast cred.
            </p>
            <ul>
              <li>Shadow</li>
              <li>Demon</li>
              <li>Baby</li>
            </ul>
          </ProjectDetails>
        </ProjectContent>

        <ProjectImg>
          <img
            src="https://cdn.vox-cdn.com/thumbor/w-IFN0FWpN4BGfhZaV9EYqs4nLo=/51x0:977x617/1200x800/filters:focal(51x0:977x617)/cdn.vox-cdn.com/uploads/chorus_image/image/50017015/Screen_Shot_2016-07-04_at_12.37.15_PM.0.0.png"
            alt=""
          />
        </ProjectImg>
      </Project>
    </ProjectContainer>
  );
};

export default Work;
