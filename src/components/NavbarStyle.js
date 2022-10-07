import styled from 'styled-components';

export const NavBarContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 1rem /* 16px */;
  padding-right: 1rem;
  background-color: rgb(8 25 47);
  color: rgb(209 213 219);
  z-index: 10000;
  box-shadow: 2px 9px 35px -5px #000000;
`;

export const LogoContainer = styled.div`
  margin-left: 10px;
  font-family: 'Oswald', sans-serif;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 1.6;
  transition: all 0.5s ease-in-out;
  :hover {
    color: #ed5788;
    text-shadow: 0 0 30px #ff296d, 0 0 40px #ff296d, 0 0 50px #ff296d,
      0 0 60px #ff296d, 0 0 70px #ff296d;
  }
`;

export const NavBarItemContainer = styled.ul`
  display: none;
  animation: all 0.2 ease-in-out;

  @media (min-width: 768px) {
    display: flex;
  }
`;
export const NavLi = styled.li`
  position: relative;
  display: inline;
  text-decoration: none;
  &::after {
    position: absolute;
    right: 0;
    content: '';
    width: 100%;
    height: 4px;
    background: rgb(219 39 119);
    bottom: -8px;
    transform: scale(0, 1);
    transition: transform 0.3s;
    transform-origin: left top;
  }
  &:hover::after {
    transform: scale(1, 1);
  }
`;

export const HambugerButton = styled.button`
  z-index: 10;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileNavBarContainer = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgb(8 25 47);
  display: flex;
  flex-direction: column;
  /* place-items: center center; */
  justify-content: center;
  align-items: center;
`;

export const SocialContainer = styled.ul`
  display: none;
  @media (min-width: 1024px) {
    display: flex;
  }
  position: fixed;
  flex-direction: column;
  top: 35%;
  left: 0;
`;
