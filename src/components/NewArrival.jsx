import { Box, Button } from '@mui/material';
import ArrivalImage from '../images/sneaker.jpg';

const NewArrival = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundImage: `url(${ArrivalImage})`,
        backgroundSize: 'cover',
        height: '400px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Button
        variant="outlined"
        sx={{
          backgroundColor: 'transparent',
          color: 'black',
          border: '1px solid white',
          position: 'absolute',
          left: '16px',
          bottom: '50px',
          borderColor: 'black'
        }}
        size="medium"
      >
        Shop Now
      </Button>
    </Box>
  );
};

export default NewArrival;
