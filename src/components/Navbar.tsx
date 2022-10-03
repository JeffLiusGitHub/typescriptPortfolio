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
import NavItems from './NavItems';
import NavItemMobile from './NavItemMobile';
import useMouse from './useMouse';
// import JeffResume from '../../public/Jeff_Pdf_resume.pdf';
type Props = {
  setHover?: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = (Prop: Props) => {
  const navItemsArray = [
    'home',
    'about',
    'experience',
    'skills',
    'work',
    'contract',
  ];
  const outerLinkArray = [
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

  const [openTab, setOpenTab] = useState<boolean>(false);
  const handleOnClick = (): void => setOpenTab((prevTab) => !prevTab);

  return (
    <div
      className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#08192f] text-gray-300 z-1000"
      style={{ zIndex: '1000000', boxShadow: '2px 9px 35px -5px #000000' }}
    >
      <Link
        activeClass="active"
        to={'home'}
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        <img src={Logo} alt="logo image" style={{ width: '50px' }} />
      </Link>

      <ul className="hidden md:flex">
        {navItemsArray?.map((n) => (
          <NavItems section={n} />
        ))}
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
        {navItemsArray.map((n) => (
          <NavItemMobile section={n} />
        ))}
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
