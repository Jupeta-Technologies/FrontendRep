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
        { name: 'Affiliates' },
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
        { name: 'News' },
        { name: 'Investors' },
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
    {
      title: 'Community',
      links: [
        { name: 'Announcement' },
        { name: 'Discussion boards' },
        { name: 'Giving works' },
      ],
    },
  ];

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      marginTop="1.5rem"
      style={{ color: '#000', background: '#e7e7e7' }}
    >
      {footerLinks.map((footerLink) => (
        <div key={footerLink.title}>
          <Typography variant="h4" fontWeight="medium" marginBottom="0.8rem" fontSize="1.2rem">
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
