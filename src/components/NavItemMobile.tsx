import React, { Dispatch, useState } from 'react';
import { Link } from 'react-scroll';
import { NavItemContainer } from './NavItemMobileStyle';
type Props = { section: string; setOpenTab: Dispatch<boolean> };

const NavItemMobile = ({ section, setOpenTab }: Props) => {
  return (
    <Link
      activeClass="active"
      to={section}
      spy={true}
      smooth={true}
      offset={50}
      duration={500}
    >
      <NavItemContainer
        style={{
          paddingTop: '1.5rem',
          paddingBottom: '1.5rem',
          fontSize: '2.25rem',
          lineHeight: '2.5rem',
        }}
        onClick={() => setOpenTab(false)}
      >
        {section.toUpperCase()}
      </NavItemContainer>
    </Link>
  );
};

export default NavItemMobile;
