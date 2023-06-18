import { Box,  } from '@mui/material';
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
      
      </Box>
    </Box>
  );
};

export default HolidaySale;
