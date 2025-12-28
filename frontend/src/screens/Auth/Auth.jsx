import { useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom' // <-- import useNavigate
import Login from '../../components/Login.jsx'
import SignUp from '../../components/SignUp.jsx'

export default function Auth() {
  const [showLogin, setShowLogin] = useState(true)
  const navigate = useNavigate() // <-- initialize navigate

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: '#0D1B2A',
        p: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          alignItems: 'center',
          position: 'relative',
          p: 3,
        }}
      >
        {/* Decorative shapes */}
        <Box
          sx={{
            position: 'absolute',
            top: -50,
            right: -50,
            width: 120,
            height: 120,
            bgcolor: '#FFC300',
            borderRadius: '50%',
            opacity: 0.3,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: -50,
            left: -50,
            width: 100,
            height: 100,
            bgcolor: '#FFC300',
            borderRadius: '50%',
            opacity: 0.3,
          }}
        />

        <Typography
          variant="h3"
          sx={{ color: '#FFC300', fontWeight: 'bold', mb: 2 }}
        >
          To Do List
        </Typography>

        {showLogin ? <Login /> : <SignUp />}

        {/* Switch Login/SignUp */}
        <Button
          onClick={() => setShowLogin(!showLogin)}
          variant="contained"
          sx={{
            mt: 1,
            bgcolor: '#FFC300',
            color: '#0D1B2A',
            '&:hover': { bgcolor: '#FFD633' },
          }}
        >
          {showLogin ? 'Switch to Sign Up' : 'Switch to Login'}
        </Button>

        {/* Navigate to Home */}
        <Button
          onClick={() => navigate('/home')} // <-- navigate to /home
          variant="contained"
          sx={{
            mt: 1,
            bgcolor: '#00BFFF', // you can change color if you like
            color: '#0D1B2A',
            '&:hover': { bgcolor: '#1E90FF' },
          }}
        >
          Go to Home
        </Button>
      </Box>
    </Box>
  )
}
