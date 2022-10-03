import React from 'react';
import Work from '../components/Work';
import { Element } from 'react-scroll';
import {
  HeaderContainer,
  WorkContainer,
  WorkTitle,
  WorkDescriptionContainer,
} from './WorksStyle';
type Props = {};
const workArray = [
  {
    id: 1,
    title: 'Toy Robot Simulator',
    category: 'WEBSITE GAME',
    technology: [
      'React',
      'Redux',
      'Styled-component',
      'Material UI',
      'firebase',
      'react testing library',
    ],
    gitUrl: 'https://github.com/JeffLiusGitHub/toy-robot',
    link: 'https://toy-robot-simulator-69acb.web.app/',
  },
  {
    id: 2,
    title: 'Iconic Demo',
    category: 'SHOPPING WEBSITE',
    technology: [
      'React',
      'Redux',
      'Styled-component',
      'Material UI',
      'animation-on-scroll',
      'react-router-dom',
      'formik',
      'yup',
      'axios',
      'node.js',
      'JWT token',
      'mongoDB',
      'heroku',
    ],
    gitUrl: 'https://github.com/JeffLiusGitHub/shoppingDemo',
    link: 'https://iconic-shopping.web.app/',
  },
  {
    id: 3,
    title: 'KanBan Board App',
    category: 'PROJECT MANAGEMENT APP',
    technology: ['React', 'Material UI', 'date-fns', 'react-beautiful-dnd'],
    gitUrl: 'https://github.com/JeffLiusGitHub/chatting-app',
    link: 'https://kanban-45ef5.web.app/',
  },

  {
    id: 4,
    title: 'Real-time chat App',
    category: 'CHAT APP',
    technology: [
      'React',
      'Redux',
      'Styled-component',
      'Material UI',
      'animation-on-scroll',
      'react-router-dom',
      'formik',
      'yup',
      'axios',
      'node.js',
      'JWT token',
      'mongoDB',
      'heroku',
    ],
    gitUrl: 'https://github.com/JeffLiusGitHub/chatting-app',
    link: 'https://chat-462f6.web.app/',
  },
  {
    id: 5,
    title: 'ABCnews Clone',
    category: 'NEWSPAPER WEBSITE',
    technology: ['React', 'Material UI', 'date-fns', 'lodash', 'date-fns-tz'],
    gitUrl: 'https://github.com/JeffLiusGitHub/newspaper_demo',
    link: 'https://news-43792.web.app/',
  },
  {
    id: 6,
    title: 'Sportholic ',
    category: 'INJURY PREVENTING WEBSITE',
    technology: [
      'ASP.net',
      'css',
      'AfterEffects',
      'Premiere',
      'video start from 02:12',
    ],
    gitUrl: 'https://github.com/JeffLiusGitHub/ie_sport_injury-ver-1.3',
    link: 'https://www.bilibili.com/video/BV1jK411p7nm/?vd_source=1ba0949df227a0f9e027afb06286cb5e',
  },
];
const Works = (props: Props) => {
  return (
    <Element name="work">
      <WorkContainer>
        <HeaderContainer>
          <WorkTitle>Work</WorkTitle>
          <WorkDescriptionContainer>ABC</WorkDescriptionContainer>
        </HeaderContainer>

        {workArray?.map((w) => (
          <Work
            key={w.id}
            id={w.id}
            title={w.title}
            category={w.category}
            technology={w.technology}
            gitUrl={w.gitUrl}
            link={w.link}
          />
        ))}
      </WorkContainer>
    </Element>
  );
};

export default Works;
