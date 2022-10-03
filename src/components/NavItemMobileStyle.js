import styled from 'styled-components';

export const NavItemContainer = styled.li`
  padding-top: '1.5rem';
  padding-bottom: '1.5rem';
  font-size: '2.25rem';
  line-height: '2.5rem';
  display: inline-block;
  font-size: 3rem;
  font-weight: 300;
  padding: 2rem 3rem;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  background-image: linear-gradient(
    100deg,
    transparent 0%,
    transparent 50%,
    #fff 50%
  );
  background-size: 230%;
  transition: all 0.5s;
  :hover {
    background-position: 100%;
    color: #d62663;
    transform: translateX(1rem);
  }
`;
