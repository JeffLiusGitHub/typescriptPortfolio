import React, { useState, useRef, memo } from 'react';
import {
  BackgroundContainer,
  MainContractContainer,
  Title,
  Content,
  EmailContainer,
  ButtonContainer,
} from './ContactStyle';
import { CallToActionButton, BlinkerCursor } from './HomeStyle';
import { useInView } from 'framer-motion';
import { Element } from 'react-scroll';
import { contactDescription } from '../Data/Data';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import CustomizedSnackbars from '../components/CustomSnackbar';

type Props = { textEnter: () => void; textLeave: () => void };

const Contract = ({ textEnter, textLeave }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const contentRef = useRef<HTMLInputElement>(null);
  const isContentInView = useInView(contentRef);
  console.log('contract');

  const openHandler = (): void => {
    setOpen(true);
  };
  const closeHandler = (): void => {
    setOpen(false);
  };

  const animationStyle = {
    opacity: isContentInView ? 1 : 0,
    transform: isContentInView ? 'none' : 'translateY(-100px)',
    transition: 'all 1.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
  };
  return (
    <Element name="contact">
      <BackgroundContainer ref={contentRef}>
        <MainContractContainer>
          <Title
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            style={animationStyle}
          >
            Contact
          </Title>
          <Content
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            style={animationStyle}
          >
            {contactDescription}
          </Content>
          <EmailContainer style={animationStyle}>
            <CopyToClipboard
              text="jeffliu2802@hotmail.com"
              onCopy={openHandler}
            >
              <span>
                jeffliu2802@hotmail.com <ContentCopyIcon />
              </span>
            </CopyToClipboard>
          </EmailContainer>
          <ButtonContainer>
            <a
              href="mailto:jeffliu2802@hotmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CallToActionButton>
                Send Email<BlinkerCursor>_</BlinkerCursor>
              </CallToActionButton>
            </a>
          </ButtonContainer>
        </MainContractContainer>
        <CustomizedSnackbars open={open} closeHandler={closeHandler} />
      </BackgroundContainer>
    </Element>
  );
};

export default memo(Contract);
