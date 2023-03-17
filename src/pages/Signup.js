import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import { signUpUser } from "../config/Firebase/firebaseMethod";
import { useNavigate } from "react-router-dom";

function Register() {
  // password show or hidden
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  //useNavigate
  const navigate = useNavigate();

  //form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //register user
  const registerUser = () => {
    const obj = {
      email: email,
      password: password,
    };
    signUpUser(obj)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      minHeight="100vh"
    >
      <Typography className="mb-4" variant="h4">
        Register User
      </Typography>
      <TextField
        className="mb-3"
        id="outlined-basic"
        label="Email"
        type="email"
        variant="outlined"
        sx={{ width: "25rem" }}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormControl sx={{ width: "25rem" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          onChange={(e) => setPassword(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
      <Button
        size="large"
        className="mt-5"
        variant="contained"
        onClick={registerUser}
      >
        Register
      </Button>
      <Typography
        sx={{ cursor: "pointer" }}
        className="text-primary mt-2"
        onClick={() => navigate("/")}
      >
        Already a user Please Login!
      </Typography>
    </Box>
  );
}

export default Register;
