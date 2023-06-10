import { Box, Button } from '@mui/material';

const SignUp = () => {
  return (
    <Box
      sx={{
        backgroundColor: `#E6E8F5`,
        backgroundPosition: 'center',
        height: '17vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1 style={{ marginBottom: '16px' }}>SIGN UP AND GET 30% OFF YOUR FIRST PURCHASE</h1>
      <Box sx={{ display: 'flex', gap: '16px' }}>
        <Button
          variant="outlined"
          sx={{ backgroundColor: 'transparent', color: 'black', borderColor: 'black' }}
          size="large"
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};

export default SignUp;
