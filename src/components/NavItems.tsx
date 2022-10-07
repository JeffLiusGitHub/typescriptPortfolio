import React from 'react';
import { Link } from 'react-scroll';
import { NavLi } from './NavbarStyle';
type Props = { section: string };

const NavItems = ({ section }: Props) => {
  return (
    <Link
      activeClass="active"
      to={section}
      spy={true}
      smooth={true}
      offset={50}
      duration={500}
    >
      <NavLi>{section.toUpperCase()}</NavLi>
    </Link>
  );
};

export default NavItems;
