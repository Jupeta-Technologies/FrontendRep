import React, { useState } from 'react';
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';

const PAGES = [
    { key: "categories", label: "CATEGORIES", sx: { color: '#000000' } },
    { key: "sell", label: "sell", sx: { color: '#000000' } },
    { key: "location", label: <LocationOnIcon sx={{ color: "text.primary" }} />, sx: {} },
    { key: "search", label: <SearchIcon sx={{ color: 'text.primary' }}/>},
    { key: "favorite", label: <FavoriteBorderIcon sx={{ color: 'text.primary' }} />},
    { key: "profile", label: <AccountCircleIcon sx={{ color: 'text.primary' }} />},
    { key: "cart", label: <ShoppingCartIcon sx={{ color: 'text.primary' }} />}
  ];
  
const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <React.Fragment>
      <Drawer open={openDrawer} onClose={handleDrawerClose}>
        <List>
        {
  PAGES.map((page) => (
    <ListItemButton key={page.key}>
      <ListItemIcon>
        {page.label}
      </ListItemIcon>
    </ListItemButton>
  ))
}

        </List>
      </Drawer>
      <IconButton sx={{ marginLeft: 'auto' }} onClick={handleDrawerOpen}>
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
