import React, { ReactNode } from 'react';
import { OuterLinkWrapper, OuterLinkText } from './OuterLinkStyle';

type Props = {
  color: string;
  url: any;
  name: string;
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
