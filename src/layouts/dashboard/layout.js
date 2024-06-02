import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { Footer } from './footer';
import { SideNav } from './side-nav';
import { TopNav } from './top-nav';
import { Drawer, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

const SIDE_NAV_WIDTH = 120;
const TOP_NAV_HEIGHT = 64;

const LayoutRoot = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  display: 'flex',
  flexDirection: 'column',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: TOP_NAV_HEIGHT,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: SIDE_NAV_WIDTH,
    flexDirection: 'row'
  }
}));

const LayoutContainer = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  width: '100%'
});

export const Layout = (props) => {
  const { children } = props;
  const isLgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <TopNav onLogoClick={handleDrawerToggle}>
        {!isLgUp && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ ml: 1 }}
          >
            <MenuIcon />
          </IconButton>
        )}
      </TopNav>
      <LayoutRoot>
        {isLgUp ? (
          <SideNav />
        ) : (
          <Drawer
            anchor="right"
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', lg: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: SIDE_NAV_WIDTH },
            }}
          >
            <SideNav anchor="right" />
          </Drawer>
        )}
        <LayoutContainer>
          {children}
          <Footer />
        </LayoutContainer>
      </LayoutRoot>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
