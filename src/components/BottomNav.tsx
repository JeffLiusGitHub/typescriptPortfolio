import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import SummarizeIcon from '@mui/icons-material/Summarize';
type Props = {};

const BottomNav = (props: Props) => {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    (ref.current as HTMLDivElement).ownerDocument.body.scrollTop = 0;
  }, [value]);
  const outlinkArray = [
    {
      label: 'Linkedin',
      icon: <LinkedInIcon />,
      href: 'https://linkedin.com/in/zexi-liu-0934841b3/',
    },
    {
      label: 'Github',
      icon: <GitHubIcon />,
      href: 'https://Github.com/JeffLiusGitHub',
    },
    {
      label: 'Email',
      icon: <EmailIcon />,
      href: 'mailto:jeffliu2802@hotmail.com',
    },
    {
      label: 'Resume',
      icon: <SummarizeIcon />,
      href: '/Jeff_pdf_resume.pdf',
    },
  ];
  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <Paper
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: '10000',
        }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          style={{
            background:
              'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(74,132,200,0.8) 100%)',
            boxShadow: '1px -5px 35px -4px rgba(0,0,0,0.66)',
          }}
        >
          {outlinkArray.map((o, key) => (
            <BottomNavigationAction
              key={key}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'rgb(37 38 39)' }}
              {...o}
            />
          ))}
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

export default BottomNav;
