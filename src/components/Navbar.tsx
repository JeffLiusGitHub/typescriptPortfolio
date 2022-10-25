import React, { useState,memo } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';
import OuterLink from './OuterLink';
import NavItems from './NavItems';
import NavItemMobile from './NavItemMobile';
import {
  NavBarContainer,
  LogoContainer,
  NavBarItemContainer,
  HambugerButton,
  MobileNavBarContainer,
  SocialContainer,
} from './NavbarStyle';
import { navItemsArray, outerLinkArray } from '../Data/Data';
import useWindowSize from '../components/useWindowSize';
import BottomNav from '../components/BottomNav';
type Props = {
  setHover?: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = (Prop: Props) => {
  console.log('nav')
  const [openTab, setOpenTab] = useState<boolean>(false);
  const { renderButtomIcon } = useWindowSize();

  const handleOnClick = (): void => setOpenTab((prevTab) => !prevTab);

  return (
    <>
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
        <HambugerButton onClick={handleOnClick}>
          {openTab ? <FaTimes /> : <FaBars />}
        </HambugerButton>
        {/*mobile*/}
        {openTab && (
          <MobileNavBarContainer>
            {navItemsArray.map((n) => (
              <NavItemMobile key={n} section={n} setOpenTab={setOpenTab} />
            ))}
          </MobileNavBarContainer>
        )}

        {/* social  */}
        <SocialContainer>
          {outerLinkArray?.map((o) => (
            <OuterLink key={o.name} {...o}>
              {o.children}
            </OuterLink>
          ))}
        </SocialContainer>
        {/* buttomSocial */}
      </NavBarContainer>
      {renderButtomIcon && <BottomNav />}
    </>
  );
};

export default memo(Navbar);
