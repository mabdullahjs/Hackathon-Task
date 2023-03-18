import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
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
import BAButton from "../config/components/BAButton";

function Register() {
  // password show or hidden
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  //useNavigate
  const navigate = useNavigate();

  //form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);

  //register user
  const registerUser = () => {
    setLoader(true)
    const obj = {
      email: email,
      password: password,
    };
    signUpUser(obj)
      .then((res) => {
        setLoader(false)
        console.log(res);
        navigate('/')
      })
      .catch((err) => {
        setLoader(false)
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
      <Box className="mt-5 mb-5"> 
      <BAButton loading={loader} label="register" size="large" onClick={registerUser} />
      </Box>
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
