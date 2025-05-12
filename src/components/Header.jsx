import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';

const Header = ({ onToggleDarkMode, isDarkMode }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobileOrTablet = useMediaQuery('(max-width:1024px)');

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Exchange Rates (Live)', to: '/exchange-rates' },
    { label: 'About', to: '/about' },
    { label: 'Error Page', to: '/error-page' },
    {
      label: isDarkMode ? 'Light Mode' : 'Dark Mode',
      action: onToggleDarkMode,
    },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: '#232423',
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Loan Calculator
          </Typography>

          {isMobileOrTablet ? (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box>
              {navItems.map((item, index) =>
                item.to ? (
                  <Button
                    key={index}
                    color="inherit"
                    component={RouterLink}
                    to={item.to}
                  >
                    {item.label}
                  </Button>
                ) : (
                  <Button
                    key={index}
                    color={isDarkMode ? 'secondary' : 'primary'}
                    onClick={item.action}
                    sx={{ marginLeft: 2 }}
                  >
                    {item.label}
                  </Button>
                )
              )}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile/tablet */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navItems.map((item, index) =>
              item.to ? (
                <ListItem key={index} disablePadding>
                  <ListItemButton component={RouterLink} to={item.to}>
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                </ListItem>
              ) : (
                <ListItem key={index} disablePadding>
                  <ListItemButton onClick={item.action}>
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;