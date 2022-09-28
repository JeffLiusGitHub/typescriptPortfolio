import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo.png';
import * as Scroll from 'react-scroll';
import { Link } from 'react-scroll';
import OuterLink from './OuterLink';
import useMouse from './useMouse';
type Props = {
  setHover?: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = (Prop: Props) => {
  const outerLinkArray = [
    {
      color: 'rgb(59 130 246)',
      url: '/linkedin',
      name: 'Linkedin',
      children: <FaLinkedin size={30} />,
    },
    {
      color: 'rgb(59 62 66)',
      url: '/github',
      name: 'Github',
      children: <FaGithub size={30} />,
    },
    {
      color: 'rgb(111 194 176)',
      url: '/mail',
      name: 'Mail',
      children: <HiOutlineMail size={30} />,
    },
    {
      color: 'rgb(88 95 105)',
      url: '/resume',
      name: 'Resume',
      children: <BsFillPersonLinesFill size={30} />,
    },
  ];

  const [openTab, setOpenTab] = useState<boolean>(false);
  const handleOnClick = (): void => setOpenTab((prevTab) => !prevTab);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#08192f] text-gray-300 z-1000" style={{zIndex:'1000000'}}>
      <img src={Logo} alt="logo image" style={{ width: '50px' }} />

      <ul className="hidden md:flex">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <li>HOME</li>
        </Link>

        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <li>ABOUT</li>
        </Link>
        <Link
          activeClass="active"
          to="experience"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <li>EXPERIENCE</li>
        </Link>

        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <li>SKILLS</li>
        </Link>
        <Link
          activeClass="active"
          to="work"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <li>WORK</li>
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <li>CONTACT</li>
        </Link>
      </ul>

      {/* hambuger */}
      <button onClick={handleOnClick} className="md:hidden z-10">
        {openTab ? <FaTimes /> : <FaBars />}
      </button>
      {/*mobile*/}
      <ul
        className={
          openTab
            ? 'absolute top-0 left-0 w-full h-screen bg-[#08192f] flex flex-col justify-center items-center'
            : 'hidden'
        }
      >
        <li className="py-6 text-4xl ">HOME</li>
        <li className="py-6 text-4xl ">ABOUT</li>
        <li className="py-6 text-4xl ">EXPERIENCE</li>
        <li className="py-6 text-4xl ">SKILLS</li>
        <li className="py-6 text-4xl ">WORK</li>
        <li className="py-6 text-4xl ">CONTACT</li>
      </ul>
      {/* social  */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          {outerLinkArray?.map((o) => (
            <OuterLink key={o.name} color={o.color} url={o.url} name={o.name}>
              {o.children}
            </OuterLink>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
