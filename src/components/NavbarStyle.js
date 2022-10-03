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
  & > a > li {
    border-bottom-width: 4px;
    border-color: #07192e;
  }
  & > a > li:hover {
    border-bottom-width: 4px;
    border-color: rgb(219 39 119);
  }
`;
