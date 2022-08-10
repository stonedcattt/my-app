import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Fragment } from 'react';
import { Typography } from '@mui/material';
import { padding } from '@mui/system';

const Login = () => {
  return (
    <div sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      
    }}
    >
      <Box
        component="form"
        sx={{
          maxWidth: "400px",
          height: "450px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          border: "1px solid gray",
          borderRadius: "5px",
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
      >
        <Typography
          sx={{
            color: "black",
            textAlign: "center"
          }}
        >
          INICIAR SESION
        </Typography>
        <TextField id="outlined-basic" label="Usuario" variant="outlined" />
        <TextField id="outlined-basic" label="Contraseña" variant="outlined" />
        <Stack spacing={2} direction="column">
          <Button variant="contained">Iniciar Sesión</Button>
          <p>O</p>
          <Button variant="contained">Google</Button>
        </Stack>
      </Box>
    </div>
  );
}

export default Login