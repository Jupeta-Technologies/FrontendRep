import { Box, IconButton } from '@mui/material';
import heroImage from '../images/led-speaker.jpg';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Hero = () => {
  return (
    <Box
    sx={{
      position: 'relative',
      backgroundImage: `url(${heroImage})`,
      backgroundSize: 'cover',
      height: '400px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >

    <Box
      sx={{
        position: 'absolute',
        bottom: '16px',
        left: '16px',
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      
        <IconButton
          sx={{
            color: 'white',
            fontSize: '500px',
          }}
        >
          <ShoppingCartIcon />
        </IconButton>
    </Box>
  </Box>
);
};

export default Hero;