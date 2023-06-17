import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
  InputBase,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled, ThemeProvider } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import DrawerComp from './DrawerComp';
import ProfilePage from '../PAGES/profilePage';

const SearchContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#FFFFFF',
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  paddingLeft: theme.spacing(2),
}));

const SearchInput = styled(InputBase)(({ theme, expanded }) => ({
  padding: theme.spacing(1, 1, 1, 0),
  transition: theme.transitions.create('width'),
  width: expanded ? '400px' : '5px',
}));

const PAGES = [
  { label: <LocationOnIcon sx={{ color: 'text.primary' }} />, sx: {}, path: '/location' },
];

const CATEGORIES = [
  { label: 'All', path: '/allproducts' },
  { label: 'Category 2', path: '/category2' },
  { label: 'Category 3', path: '/category3' },
];

const Navbar = () => {
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [categoriesAnchorEl, setCategoriesAnchorEl] = useState(null);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));

  const handleSearchIconClick = () => {
    setSearchExpanded(!searchExpanded);
  };

  const handleCategoriesClick = (event) => {
    setCategoriesAnchorEl(event.currentTarget);
  };

  const handleCategoriesClose = () => {
    setCategoriesAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar sx={{ background: '#FFFFFF' }}>
        <Toolbar>
          <Typography sx={{ color: 'text.primary' }}>jUPETA</Typography>
          {isMatch ? (
            <>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs textColor="#000000">
                {PAGES.map((page, index) => (
                  <Tab key={index} label={page.label} sx={page.sx} component={Link} to={page.path} />
                ))}
              </Tabs>

              <Tabs sx={{ marginLeft: 'auto' }} textColor="#000000">
                <SearchContainer>
                  {searchExpanded && (
                    <Tab
                      aria-controls="categories-menu"
                      aria-haspopup="true"
                      label="CATEGORIES"
                      sx={{ color: 'text.primary', minWidth: 0 }}
                      onClick={handleCategoriesClick}
                    />
                  )}
                  <IconButton aria-label="search" onClick={handleSearchIconClick}>
                    <SearchIcon />
                  </IconButton>
                  <SearchInput
                    placeholder="Search..."
                    inputProps={{ 'aria-label': 'search' }}
                    expanded={searchExpanded}
                  />
                </SearchContainer>

                <Tab
                  icon={<FavoriteBorderIcon sx={{ color: 'text.primary' }} />}
                  aria-label="favorite"
                  component={Link}
                  to="/favorites"
                />
                <Tab
                  icon={<AccountCircleIcon sx={{ color: 'text.primary' }} />}
                  aria-label="profile"
                  component={Link}
                  to="/profile"
                />
                <Tab
                  icon={<ShoppingCartIcon sx={{ color: 'text.primary' }} />}
                  aria-label="cart"
                  component={Link}
                  to="/cart"
                />
              </Tabs>
            </>
          )}
        </Toolbar>
      </AppBar>

      <Menu
        id="categories-menu"
        anchorEl={categoriesAnchorEl}
        open={Boolean(categoriesAnchorEl)}
        onClose={handleCategoriesClose}
      >
        {CATEGORIES.map((category, index) => (
          <MenuItem
            key={index}
            component={Link}
            to={category.path}
            onClick={handleCategoriesClose}
          >
            {category.label}
          </MenuItem>
        ))}
      </Menu>
    </ThemeProvider>
  );
};

export default Navbar;
