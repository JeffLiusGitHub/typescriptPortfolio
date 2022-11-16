import React, { useState, memo } from 'react';
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
  NavTopButtonContainer,
} from './NavbarStyle';
import { navItemsArray, outerLinkArray } from '../Data/Data';
import useWindowSize from '../components/useWindowSize';
import BottomNav from '../components/BottomNav';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
type Props = {
  setHover?: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = (Prop: Props) => {
  console.log('nav');
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
      <NavTopButtonContainer>
        <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
          <Fab
            style={{ backgroundColor: 'rgba(250,95,160,.7',boxShadow: '2px 2px 4px 0px rgba(120,150,210,0.75)' }}
            size="medium"
            // variant="extended"
          >
            <NavigationIcon style={{fontSize:'18px',color:'#D1D5DB'}}/>
            {/* Top */}
          </Fab>
        </Link>
      </NavTopButtonContainer>
      {renderButtomIcon && <BottomNav />}
    </>
  );
};

export default memo(Navbar);
