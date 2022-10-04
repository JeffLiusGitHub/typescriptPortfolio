import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

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

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      {/* <CssBaseline /> */}

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
        >
          <BottomNavigationAction
            label="Linkedin"
            icon={<LinkedInIcon />}
            href="https://linkedin.com/in/zexi-liu-0934841b3/"
            target="_blank"
            rel="noopener noreferrer"
          />
          <BottomNavigationAction
            label="Github"
            icon={<GitHubIcon />}
            href="https://Github.com/JeffLiusGitHub"
            target="_blank"
            rel="noopener noreferrer"
          />
          <BottomNavigationAction
            label="Email"
            icon={<EmailIcon />}
            href="mailto:jeffliu2802@hotmail.com"
            target="_blank"
            rel="noopener noreferrer"
          />
          <BottomNavigationAction
            label="Resume"
            icon={<SummarizeIcon />}
            href="/Jeff_pdf_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

export default BottomNav;
