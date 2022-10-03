import React from 'react';
import { Link } from 'react-scroll';
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
      <li>{section.toUpperCase()}</li>
    </Link>
  );
};

export default NavItems;
