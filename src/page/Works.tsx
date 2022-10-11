import React, { useRef,memo} from 'react';
import Work from '../components/Work';
import { Element } from 'react-scroll';
import {
  HeaderContainer,
  WorkContainer,
  WorkTitle,
  WorkDescriptionContainer,
} from './WorksStyle';
import { useInView } from 'framer-motion';
import { workArray } from '../Data/Data';
type Props = {};


const Works = (props: Props) => {
  console.log('work')
  const titleRef = useRef<HTMLInputElement>(null);
  const isTitleInView = useInView(titleRef);
  return (
    <Element name="work">
      <WorkContainer ref={titleRef}>
        <HeaderContainer>
          <WorkTitle
            style={{
              transform: isTitleInView ? 'none' : 'translateY(-300px)',
              opacity: isTitleInView ? 1 : 0,
              transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
            }}
          >
            Work
          </WorkTitle>
        </HeaderContainer>
        <WorkDescriptionContainer
          style={{
            transform: isTitleInView ? 'none' : 'translateY(-200px)',
            opacity: isTitleInView ? 1 : 0,
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
        >
          These are some personal projects I've worked with
        </WorkDescriptionContainer>

        {workArray?.map((w) => (
          <Work key={w.id} {...w} />
        ))}
      </WorkContainer>
    </Element>
  );
};

export default memo(Works);
