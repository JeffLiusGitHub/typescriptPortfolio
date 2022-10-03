import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';
import OuterLink from './OuterLink';
import NavItems from './NavItems';
import NavItemMobile from './NavItemMobile';
import {
  NavBarContainer,
  LogoContainer,
  NavBarItemContainer,
} from './NavbarStyle';

type Props = {
  setHover?: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = (Prop: Props) => {
  const navItemsArray = ['home', 'about', 'experience', 'work', 'contract'];
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
    <NavBarContainer>
      <Link
        activeClass="active"
        to={'home'}
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        <LogoContainer>Jeff Liu</LogoContainer>
      </Link>

      <NavBarItemContainer>
        {navItemsArray?.map((n) => (
          <NavItems key={n} section={n} />
        ))}
      </NavBarItemContainer>

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
          <NavItemMobile key={n} section={n} setOpenTab={setOpenTab} />
        ))}
      </ul>
      {/* social  */}
      <div className=" lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          {outerLinkArray?.map((o) => (
            <OuterLink key={o.name} color={o.color} url={o.url} name={o.name}>
              {o.children}
            </OuterLink>
          ))}
        </ul>
      </div>
    </NavBarContainer>
  );
};

export default Navbar;
