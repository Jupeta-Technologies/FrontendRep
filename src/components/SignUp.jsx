import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

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
        <Link to='/createanaccount'>
          <Button
            variant="outlined"
            sx={{ backgroundColor: 'transparent', color: 'black', borderColor: 'black' }}
            size="large"
          >
          Sign Up
        </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default SignUp;
