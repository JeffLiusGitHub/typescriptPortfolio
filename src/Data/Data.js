import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import ConstructionIcon from '@mui/icons-material/Construction';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import SchoolIcon from '@mui/icons-material/School';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import SummarizeIcon from '@mui/icons-material/Summarize';
export const navItemsArray = ['home', 'about', 'experience', 'work', 'contact'];

export const outlinkBottomArray = [
  {
    label: 'Linkedin',
    icon: <LinkedInIcon />,
    href: 'https://linkedin.com/in/zexi-liu-0934841b3/',
  },
  {
    label: 'Github',
    icon: <GitHubIcon />,
    href: 'https://Github.com/JeffLiusGitHub',
  },
  {
    label: 'Email',
    icon: <EmailIcon />,
    href: 'mailto:jeffliu2802@hotmail.com',
  },
  {
    label: 'Resume',
    icon: <SummarizeIcon />,
    href: '/Jeff_pdf_resume.pdf',
  },
];

export const outerLinkArray = [
  {
    color: 'rgb(59 130 246)',
    url: 'https://linkedin.com/in/zexi-liu-0934841b3/',
    name: 'Linkedin',
    children: <FaLinkedin size={30} />,
  },
  {
    color: 'rgb(59 62 66)',
    url: 'https://Github.com/JeffLiusGitHub ',
    name: 'Github',
    children: <FaGithub size={30} />,
  },
  {
    color: 'rgb(111 194 176)',
    url: 'mailto:jeffliu2802@hotmail.com',
    name: 'Mail',
    children: <HiOutlineMail size={30} />,
  },
  {
    color: 'rgb(88 95 105)',
    url: '/Jeff_pdf_resume.pdf',
    name: 'Resume',
    children: <BsFillPersonLinesFill size={30} />,
  },
];

export const homeDescription =
  'As a passionate developer, I switched my career from an aircraft engineer to a full-stack developer. I have experience working with React, Typescript, Redux, Styled-Component, React Testing Library, Restful Api, Material UI, github, Node JS, CI/CD and AWS. You can directly view my work or browsing my past experience.';

export const aboutPrimaryContent =
  'Hi. I`m Jeff, nice to meet you. Please take a look around.';

export const aboutSecondryContent =
  ' With an eye for details and good time management, I am a passionate and quality-oriented developer with extensive experience in web development. An effective communicator and a good team player with can-do attitude. As a developer, I am a quick learner, eager to keep up with the latest technology. I am currently pursuing a full-time career with in developer opportunities.';

export const timeLineArray = [
  {
    id: 1,
    align: 'right',
    date: 'Sep 2010 – Sep 2014',
    title: 'Education',
    mainContent: '❖ Bachelor of Electrical Engineering and Automation',
    subContent: '-- Civil Aviation University of China',
    children: <SchoolIcon />,
  },
  {
    id: 2,
    align: 'left',
    date: 'Jul 2014 -Jul 2017',
    title: 'Experience',
    mainContent: '❖ JuneYao Airline (China)',
    subContent: 'Aircraft Electrical Engineer--',
    children: <ConstructionIcon />,
  },
  {
    id: 3,
    align: 'left',
    date: 'Nov 2019 - Feb 2020',
    title: 'Internship',
    mainContent: '❖ Topsek Technology Ltd (Shanghai headquarter)',
    subContent: '--Data Visualizations intern',
    children: <ContactMailIcon />,
  },
  {
    id: 4,
    align: 'right',
    date: 'Jul 2018 – Jul 2020',
    title: 'Education',
    mainContent: '❖ Master of Information Technology',
    subContent: 'Monash University--',
    children: <SchoolIcon />,
  },

  {
    id: 5,
    align: 'right',
    date: 'Nov 2020 – Oct 2021',
    title: 'Experience',
    mainContent: '❖ Ablink Pty Ltd (Australia)',
    subContent: '--React Developer',
    children: <LaptopMacIcon />,
  },
  {
    id: 6,
    align: 'left',
    date: 'Apr 2022 – June 2022',
    title: 'Experience',
    mainContent: '❖ Openpay Group Ltd (Australia)',
    subContent: 'Frontend Developer--',
    children: <LaptopMacIcon />,
  },
];

export const workArray = [
  {
    id: 0,
    img: 'openpay',
    title: 'Openpay Customer Platform',
    category: 'FINTECH WEBSITE',
    technology: [
      'React',
      'Styled-component',
      'Material UI',
      'StoryBook',
      'formik',
      'yup',
      'axios',
      'carousel.js',
      'Azure',
    ],
    link: 'https://my.openpay.com.au/',
    desc: 'Openpay platform includes registration and login features, with flexible repayment options for users. The platform allows for easy account setup and management. Additionally, the platform provides users with tools to manage their repayment schedules and track their transaction history.',
  },
  {
    id: 1,
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
      'sendGrid',
    ],
    gitUrl: 'https://github.com/JeffLiusGitHub/shoppingDemo',
    link: 'https://iconic-shopping.web.app/',
    desc: 'An online shopping web application for registering and logging into the website. Users can add items to the cart, or wishlist and pay using Stripe API. If users login as admin, they can view analytics on other user`s shopping behaviour.',
  },
  {
    id: 2,
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
    desc: 'A game application to manipulate the turtle`s movement, turn left, turn right, place the turtle, and report its current coordinates. It will indicate if the user attempts a wrong move like moving a turtle before it`s placed, or moving it out of the table. ',
  },
  {
    id: 3,
    img: 'Kanban',
    title: 'KanBan Board App',
    category: 'PROJECT MANAGEMENT APP',
    technology: ['React', 'Material UI', 'date-fns', 'react-beautiful-dnd'],
    gitUrl: 'https://github.com/JeffLiusGitHub/trello',
    link: 'https://kanban-45ef5.web.app/',
    desc: 'A project management app that organises  tasks based on the schedules. It features a number of function such as: creating tasks, modifying tasks, and deleting them, as well as overdue alerts. Easy to use, drag the tasks and create your own!',
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
      'node.js',
      'material UI',
      'react-emoji',
      'axios',
      'firebase',
      'heroku',
      'Openai API',
    ],
    gitUrl: 'https://github.com/JeffLiusGitHub/chatting-app',
    link: 'https://chat-462f6.web.app/',
    desc: 'A web chat app supports multiple users chatting on the same screen. Support emoticons. Have fun chatting with your friends right now!',
  },
  {
    id: 5,
    img: 'newspaper',
    title: 'ABCnews Clone',
    category: 'NEWSPAPER WEBSITE',
    technology: ['React', 'Material UI', 'date-fns', 'lodash', 'date-fns-tz'],
    gitUrl: 'https://github.com/JeffLiusGitHub/newspaper_demo',
    link: 'https://news-43792.web.app/',
    desc: 'A web newspaper app based on ABC news that uses recursion to destructure JSON data. The website is designed to work with most ABC news data formats.',
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
    desc: 'An injury prevention web application inspired by a bike accident. Features include map route search, traffic knowledge education, quiz on traffic knowledge,  illustration of common injuries, 3D street view for the most dangerous area, etc.',
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
    desc: 'A self-introduction website with sections such as introduction, experience and work. Enhance the user experience by using proper animation.',
  },
  {
    id: 8,
    img: 'uberClone',
    title: 'React Native Uber Clone',
    category: 'React Native app',
    technology: [
      'ReactNative',
      'Expo',
      'tailwind css',
      'Redux',
      'Google PLaces API',
      'Google Directions API',
      'Google Distance Matrix API',
    ],
    gitUrl: 'https://github.com/JeffLiusGitHub/ReactNativeUber',
    desc: 'A mobile app clone of Uber that allows users to search origin and destination locations by typing keywords, as well as automate geolocation searches using the GooglePlaceAutoComplete API, navigate pages, mark locations on maps, get route directions, and calculate distance, estimate travel time and fee.',
  },
  {
    id: 9,
    img: 'microfrontend',
    title: 'React Vue Demo',
    category: 'MICROFRONTEND WEBSITE',
    technology: [
      'React',
      'lazyLoading',
      'react-router-dom',
      'MaterialUI',
      'Vue',
      'webpack',
      'ModuleFederationPlugin',
      'HtmlWebpackPlugin',
      'Github Action',
      'AWS S3',
      'Amazon CloudFront',
    ],
    gitUrl: 'https://github.com/JeffLiusGitHub/Microfrontend_react_vue_S3',
    link: 'https://d3uv50zavr0skp.cloudfront.net/',
    desc: 'A Microfrontend application that combines React and Vue pages using W ebpack. Solutions have been implemented to address issues such as style conflicts, navigation, authentication, and automatic deployment on AWS S3 by using GitHub Action.',
  },
  {
    id: 10,
    img: 'microservice',
    title: 'React node Demo',
    category: 'MICROSERVICE WEBSITE',
    technology: [
      'React',
      'bootstrap',
      'node',
      'axios',
      'cors',
      'nodemon',
      'event-bus',
      'docker',
      'Kubernete',
      'load balance',
      'Ingress-Nginx',
      'skaffold',
    ],
    gitUrl:
      'https://github.com/JeffLiusGitHub/microservice-demo-server-client-',

    desc: 'A microservice application that implements the post and comment functions, as well as rejecting comments with specific words. Microservices concept is used to build a post, comments, query, and moderation service separately. Event-bus is used to connect the servers and save the data. When some servers are broken, event-bus can send the data once the servers are re-started. Using docker to create the image and Kubernete to run the container.',
  },
];

export const contactDescription =
  'Feel free to contact me if you are interested in my work, skills or would like to speak with me. You can find my Linkedin, Github, Email and resume by clicking the link below. Let`s keep in touch!';
