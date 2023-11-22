import { Box, IconButton } from '@mui/material';
import heroImage from '../images/led-speaker.jpg';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AiOutlineShoppingCart } from 'react-icons/ai';


const Hero = () => {
  return (
    <Box
    sx={{
      position: 'relative',
      backgroundImage: `url(${heroImage})`,
      backgroundSize: 'cover',
      height: '100vh',
      width: '100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      top:'0',
    }}
  >

    <Box
      sx={{
        position: 'absolute',
        bottom: '16px',
        left: '90px',
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        width: '80px',
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '250px'
      }}
    >
      
        <IconButton
          sx={{
            color: 'white',
            fontSize: '500px',
          }}
        >
          <AiOutlineShoppingCart style={{fontSize:'40px'}}/>
        </IconButton>
    </Box>
  </Box>
);
};

export default Hero;