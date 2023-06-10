import { Box, Button } from '@mui/material';
import trendyImage from '../images/desktop-layout.jpg';

const HolidaySale = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${trendyImage})`,
        backgroundSize: 'auto 100%',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    
      }}
    >
      <Box sx={{ display: 'flex', gap: '16px' }}>
        <Button
          variant="outlined"
          sx={{ backgroundColor: 'transparent', color: 'black',  borderColor: 'black', }}
          size="large"
        >
          Shop Now
        </Button>
        <Button
          variant="outlined"
          sx={{ backgroundColor: 'transparent', color: 'black',  borderColor: 'black', }}
          size="large"
        >
          Discover More
        </Button>
      </Box>
    </Box>
  );
};

export default HolidaySale;
