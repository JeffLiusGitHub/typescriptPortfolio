import React from 'react';
import { Link } from 'react-scroll';
import { NavItemContainer } from './NavItemMobileStyle';
type Props = { section: string };

const NavItemMobile = ({ section }: Props) => {
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
      >
        {section.toUpperCase()}
      </NavItemContainer>
    </Link>
  );
};

export default NavItemMobile;
