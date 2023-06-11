import React, { useState } from 'react';
import { Tabs, Tab, Menu, MenuItem, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const PAGES = [
  { label: 'sell', sx: { color: 'text.primary' }, path: '/sell' },
];

const CATEGORIES = [
  { label: 'All', path: '/allproducts' },
  { label: 'Category 1', path: '/category1' },
  { label: 'Category 2', path: '/category2' },
];

const SubNavbar = () => {
  const [categoriesAnchorEl, setCategoriesAnchorEl] = useState(null);

  const handleCategoriesClick = (event) => {
    setCategoriesAnchorEl(event.currentTarget);
  };

  const handleCategoriesClose = () => {
    setCategoriesAnchorEl(null);
  };

  return (
    <Box>
      <Tabs textColor="#FFFFFF">
        {PAGES.map((page, index) => (
          <Tab key={index} label={page.label} sx={page.sx} component={Link} to={page.path} />
        ))}
        <Tab
          aria-controls="categories-menu"
          aria-haspopup="true"
          label="CATEGORIES"
          sx={{ color: 'text.primary' }}
          onClick={handleCategoriesClick}
        />
      </Tabs>

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
    </Box>
  );
};

export default SubNavbar;
