import React from 'react';
import Work from '../components/Work';
import { Element } from 'react-scroll';
import {
  HeaderContainer,
  WorkContainer,
  WorkTitle,
  WorkDescriptionContainer,
} from './WorksStyle';
import ToyRobot from '../assets/ToyRobot.png';
import Iconic from '../assets/Iconic.png';
import Kanban from '../assets/Kanban.png';
import chat from '../assets/chat.png';
import newspaper from '../assets/newspaper.png';
import sportholic from '../assets/Sportholic.png';
import portfolio from '../assets/Portfolio.png';

type Props = {};
const workArray = [
  {
    id: 1,
    img: 'ToyRobot',
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
    desc: 'A game web app for manipulating the turtle move, turn left, turn right, place the turtle and report the current coordinates. Website will report if user want to do the invalid move like move turtle before place it, move turtle out of the table etc. ',
  },
  {
    id: 2,
    img: 'Iconic',
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
      'stripe',
    ],
    gitUrl: 'https://github.com/JeffLiusGitHub/shoppingDemo',
    link: 'https://iconic-shopping.web.app/',
    desc: 'A shopping web app for buying cloth and accessories online. User can register and login the website to add product to cart or to the wishlist. User can do pay the product based on stripe api. If user login as admin, they can see the dashboard based on other user`s shopping behavior.',
  },
  {
    id: 3,
    img: 'Kanban',
    title: 'KanBan Board App',
    category: 'PROJECT MANAGEMENT APP',
    technology: ['React', 'Material UI', 'date-fns', 'react-beautiful-dnd'],
    gitUrl: 'https://github.com/JeffLiusGitHub/trello',
    link: 'https://kanban-45ef5.web.app/',
    desc: 'A project management app for arrange task based on time schedule. Support multiple functions such as: create task, modify task, and delete task, overdue alert, feel free to drag the card and create your own card!',
  },

  {
    id: 4,
    img: 'chat',
    title: 'Real-time chat App',
    category: 'CHAT APP',
    technology: [
      'React',
      'Redux',
      'Styled-component',
      'Lottie animation',
      'socket io',
      'material UI',
      'react-emoji',
      'axios',
      'firebase',
      'heroku',
    ],
    gitUrl: 'https://github.com/JeffLiusGitHub/chatting-app',
    link: 'https://chat-462f6.web.app/',
    desc: 'A web chat app for chatting with friends. Support multiple users chatting in the same room. Support emoji. Have fun with your friend right now!',
  },
  {
    id: 5,
    img: 'newspaper',
    title: 'ABCnews Clone',
    category: 'NEWSPAPER WEBSITE',
    technology: ['React', 'Material UI', 'date-fns', 'lodash', 'date-fns-tz'],
    gitUrl: 'https://github.com/JeffLiusGitHub/newspaper_demo',
    link: 'https://news-43792.web.app/',
    desc: 'A web newspaper app inspired by ABC news by using recrusion to destructure json data. Website can work for most ABC news format data structure.',
  },
  {
    id: 6,
    img: 'Sportholic',
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
    link: 'https://www.bilibili.com/video/BV1jK411p7nm?share_source=copy_web&t=133',
    desc: 'A web sport injury preventing web app inspired by once I falling down from the bike. Provide map route search, traffic knowledge education, quiz for traffic knowledge with explanations, common injuries illustration, 3D street view for most dangerous area, etc.',
  },
  {
    id: 7,
    img: 'Portfolio',
    title: 'Jeff Liu`s portfolio',
    category: 'PORTFOLIO WEBSITE',
    technology: [
      'React',
      'Typescript',
      'styled-Components',
      'Frame Motion',
      'React scroll',
      'Material-UI',
      'React-Intersection-Observer',
    ],
    gitUrl: 'https://github.com/JeffLiusGitHub/typescriptPortfolio',
    link: 'https://portfolio-add7c.web.app/',
    desc: 'A web sport injury preventing web app inspired by once I falling down from the bike. Provide map route search, traffic knowledge education, quiz for traffic knowledge with explanations, common injuries illustration, 3D street view for most dangerous area, etc.',
  },
];
const Works = (props: Props) => {
  return (
    <Element name="work">
      <WorkContainer>
        <HeaderContainer>
          <WorkTitle>Work</WorkTitle>
        </HeaderContainer>
        <WorkDescriptionContainer>
          These are some personal projects I've worked with
        </WorkDescriptionContainer>

        {workArray?.map((w) => (
          <Work
            key={w.id}
            id={w.id}
            img={w.img}
            title={w.title}
            category={w.category}
            technology={w.technology}
            gitUrl={w.gitUrl}
            link={w.link}
            desc={w.desc}
          />
        ))}
      </WorkContainer>
    </Element>
  );
};

export default Works;
