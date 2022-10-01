import React from 'react';
import Work from '../components/Work';
import { Element } from 'react-scroll';
import { WorkContainer } from './WorksStyle';
type Props = {};

const Works = (props: Props) => {
  return (
    <Element name="skills">
      <WorkContainer>
        <Work />
        <Work />
        <Work />
        <Work />
      </WorkContainer>
    </Element>
  );
};

export default Works;
