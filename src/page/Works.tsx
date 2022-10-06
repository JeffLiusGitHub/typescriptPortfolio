import React, { useRef } from 'react';
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

//   {
//     id: 1,
//     img: 'Iconic',
//     title: 'Iconic Demo',
//     category: 'SHOPPING WEBSITE',
//     technology: [
//       'React',
//       'Redux',
//       'Styled-component',
//       'Material UI',
//       'animation-on-scroll',
//       'react-router-dom',
//       'formik',
//       'yup',
//       'axios',
//       'node.js',
//       'JWT token',
//       'mongoDB',
//       'heroku',
//       'stripe',
//     ],
//     gitUrl: 'https://github.com/JeffLiusGitHub/shoppingDemo',
//     link: 'https://iconic-shopping.web.app/',
//     desc: 'An online shopping web application for registering and logging into the website. Users can add items to the cart, or wishlist and pay using Stripe API. If users login as admin, they can view analytics on other user`s shopping behaviour.',
//   },
//   {
//     id: 2,
//     img: 'ToyRobot',
//     title: 'Toy Robot Simulator',
//     category: 'WEBSITE GAME',
//     technology: [
//       'React',
//       'Redux',
//       'Styled-component',
//       'Material UI',
//       'firebase',
//       'react testing library',
//     ],
//     gitUrl: 'https://github.com/JeffLiusGitHub/toy-robot',
//     link: 'https://toy-robot-simulator-69acb.web.app/',
//     desc: 'A game application to manipulate the turtle`s movement, turn left, turn right, place the turtle, and report its current coordinates. It will indicate if the user attempts a wrong move like moving a turtle before it`s placed, or moving it out of the table. ',
//   },
//   {
//     id: 3,
//     img: 'Kanban',
//     title: 'KanBan Board App',
//     category: 'PROJECT MANAGEMENT APP',
//     technology: ['React', 'Material UI', 'date-fns', 'react-beautiful-dnd'],
//     gitUrl: 'https://github.com/JeffLiusGitHub/trello',
//     link: 'https://kanban-45ef5.web.app/',
//     desc: 'A project management app that organises  tasks based on the schedules. It features a number of function such as: creating tasks, modifying tasks, and deleting them, as well as overdue alerts. Easy to use, drag the tasks and create your own!',
//   },

//   {
//     id: 4,
//     img: 'chat',
//     title: 'Real-time chat App',
//     category: 'CHAT APP',
//     technology: [
//       'React',
//       'Redux',
//       'Styled-component',
//       'Lottie animation',
//       'socket io',
//       'material UI',
//       'react-emoji',
//       'axios',
//       'firebase',
//       'heroku',
//     ],
//     gitUrl: 'https://github.com/JeffLiusGitHub/chatting-app',
//     link: 'https://chat-462f6.web.app/',
//     desc: 'A web chat app supports multiple users chatting on the same screen. Support emoticons. Have fun chatting with your friends right now!',
//   },
//   {
//     id: 5,
//     img: 'newspaper',
//     title: 'ABCnews Clone',
//     category: 'NEWSPAPER WEBSITE',
//     technology: ['React', 'Material UI', 'date-fns', 'lodash', 'date-fns-tz'],
//     gitUrl: 'https://github.com/JeffLiusGitHub/newspaper_demo',
//     link: 'https://news-43792.web.app/',
//     desc: 'A web newspaper app based on ABC news that uses recursion to destructure JSON data. The website is designed to work with most ABC news data formats.',
//   },
//   {
//     id: 6,
//     img: 'Sportholic',
//     title: 'Sportholic ',
//     category: 'INJURY PREVENTING WEBSITE',
//     technology: [
//       'ASP.net',
//       'css',
//       'AfterEffects',
//       'Premiere',
//       'video start from 02:12',
//     ],
//     gitUrl: 'https://github.com/JeffLiusGitHub/ie_sport_injury-ver-1.3',
//     link: 'https://www.bilibili.com/video/BV1jK411p7nm?share_source=copy_web&t=133',
//     desc: 'An injury prevention web application inspired by a bike accident. Features include map route search, traffic knowledge education, quiz on traffic knowledge,  illustration of common injuries, 3D street view for the most dangerous area, etc.',
//   },
//   {
//     id: 7,
//     img: 'Portfolio',
//     title: 'Jeff Liu`s portfolio',
//     category: 'PORTFOLIO WEBSITE',
//     technology: [
//       'React',
//       'Typescript',
//       'styled-Components',
//       'Frame Motion',
//       'React scroll',
//       'Material-UI',
//       'React-Intersection-Observer',
//     ],
//     gitUrl: 'https://github.com/JeffLiusGitHub/typescriptPortfolio',
//     link: 'https://portfolio-add7c.web.app/',
//     desc: 'A self-introduction website with sections such as introduction, experience and work. Enhance the user experience by using proper animation.',
//   },
// ];
const Works = (props: Props) => {
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

export default Works;
