import React from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Buy',
      links: [
        { name: 'Registration' },
        { name: 'Money Back Guarantee' },
        { name: 'Biding and Buying help' },
        { name: 'Store' },
      ],
    },
    {
      title: 'Sell',
      links: [
        { name: 'Start selling' },
        { name: 'Learn to sell' },
        { name: 'Stores' },
      ],
    },
    {
      title: 'Tools & Apps',
      links: [
        { name: 'Developers' },
        { name: 'Security Center' },
        { name: 'Site Map' },
      ],
    },
    {
      title: 'Stay connected',
      links: [
        { name: 'Twitter' },
        { name: 'Instagram' },
        { name: 'Facebook' },
      ],
    },
    {
      title: 'About Us',
      links: [
        { name: 'Company info' },
        { name: 'Careers' },
        { name: 'Advertise with us' },
        { name: 'Policies' },
      ],
    },
    {
      title: 'Help & contact',
      links: [
        { name: 'Sellers Information Center' },
        { name: 'Contact us' },
      ],
    },
    
  ];

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      marginTop="10px"
      style={{ color: '#000', background: '#F4F4F7' }}
    >
      {footerLinks.map((footerLink) => (
        <div key={footerLink.title}>
          <Typography variant="h4" fontWeight="medium" marginBottom="0.8rem" fontSize=".8rem" marginTop="30px"   marginLeft="10px">
            {footerLink.title}
          </Typography>
          <List>
            {footerLink.links.map((link) => (
              <ListItem
                key={link.name}
                component="li"
                marginbottom="0.3rem"
                cursor="pointer"
                hover="text.secondary"
              >
                {link.name}
              </ListItem>
            ))}
          </List>
        </div>
      ))}
    </Box>
  );
};

export default Footer;
