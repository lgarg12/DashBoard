import { Link as RouterLink } from 'react-router-dom';
import { Avatar, Box, Stack, IconButton } from '@mui/material';
import { Logo } from 'src/components/logo';
import { useThemeContext } from '../../Context/ThemeContext';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const TOP_NAV_HEIGHT = 64;

export const TopNav = ( { onLogoClick } ) => {
  const { mode, toggleTheme } = useThemeContext();

  return (
    <Box
      component="header"
      sx={{
        backgroundColor: 'neutral.900',
        color: 'common.white',
        position: 'fixed',
        width: '100%',
        zIndex: (theme) => theme.zIndex.appBar,
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{
          minHeight: TOP_NAV_HEIGHT,
          px: 3,
        }}
      >
        <Stack
          alignItems="center"
          direction="row"
          spacing={3}
        >
          <Box
            component={RouterLink}
            to="/"
            sx={{
              display: 'inline-flex',
              height: 24,
              width: 24,
            }}
            onClick={onLogoClick}
          >
            <Logo />
          </Box>
        </Stack>
        <Stack
          alignItems="center"
          direction="row"
          spacing={2}
        >
          <IconButton
            onClick={toggleTheme}
            className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100"
          >
            {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          <Avatar
            src="/assets/avatars/LakshayProfilePic.png"
            variant="rounded"
          />
        </Stack>
      </Stack>
    </Box>
  );
};
