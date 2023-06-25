import { Box, Button } from '@mui/material';

const Benefits = () => {
  return (
    <Box
    sx={{
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
      <div>Featured Benefits</div>
    <Box sx={{ display: 'flex', gap: '16px' }}>
      <Button
        variant="outlined"
        sx={{ backgroundColor: 'black', color: 'white', borderColor: 'black' }}
        size="large"
      >
        Shop Now
      </Button>
      <Button
        variant="outlined"
        sx={{ backgroundColor: 'black', color: 'white', borderColor: 'black' }}
        size="large"
      >
       Bid
      </Button>
    </Box>
  </Box>
  )
}

export default Benefits