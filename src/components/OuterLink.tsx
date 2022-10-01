import React, { ReactNode } from 'react';
import { IconType } from 'react-icons';
import { useRef } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from 'react-icons/fa';
import { OuterLinkWrapper, OuterLinkText } from './OuterLinkStyle';
import useMouse from './useMouse';
type Props = {
  color: string;
  url: any;
  name: string;
  setHoverOutLink?: React.Dispatch<React.SetStateAction<boolean>>;

  children?: ReactNode;
};

const OuterLink = ({ color, url, name, children }: Props) => {
  return (
    <OuterLinkWrapper color={color}>
      <OuterLinkText href={url} target="_blank" rel="noopener noreferrer">
        <>
          {name}
          {children}
        </>
      </OuterLinkText>
    </OuterLinkWrapper>
  );
};

export default OuterLink;
