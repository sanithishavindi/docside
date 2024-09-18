import { Box, Button, Checkbox, CircularProgress, FormControlLabel, FormGroup, Stack, TextField, Typography, circularProgressClasses, colors } from "@mui/material";
import React, { useState } from "react";
import { images } from "../assests";
import { Link, useNavigate } from "react-router-dom";
import Animate from "../components/common/Antimate";
import {signIn} from "../firebase";


const LoginPage = () => {

  const navigate = useNavigate();

  const [onRequest, setOnRequest] = useState(false);
  // const [loginProgress, setLoginProgress] = useState(0);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // const firebase = new Firebase();

  const handleLogin = async (e) => {
    e.preventDefault();
    setOnRequest(true);
    console.log(email, password);
    // setOnRequest(false);

    // const user = await firebase.signIn(email, password);
    // if(user){
    //   navigate('/dashboard');
    //   alert("successfully loged in");
    // }
    // else{
    //   console.log('error');
    //   alert("Try again");
    // }

    try {
      const user = await signIn(email, password);
      if (user) {
        navigate("/dashboard");
        alert("Successfully logged in");
      }
    } catch (error) {
      setError("Login failed. Please check your credentials and try again.");
    }
  };

  //   const interval = setInterval(() => {
  //     setLoginProgress(prev => prev + 100 / 40);
  //   }, 50);

  //   setTimeout(() => {
  //     clearInterval(interval);
  //   }, 2000);

  //   setTimeout(() => {
  //     setIsLoggedIn(true);
  //   }, 2100);

  //   setTimeout(() => {
  //     navigate("/dashboard");
  //   }, 3300);
  // };
 

  return (
    <Box
      position="relative"
      height="100vh"
      sx={{ "::-webkit-scrollbar": { display: "none" } }}
    >
      {/* background box */}
      <Box sx={{
        position: "absolute",
        right: 0,
        height: "100%",
        width: "70%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${images.loginBg})`
      }} />
      {/* background box */}

       {/* Login form */}
       <Box sx={{
        position: "absolute",
        left: 0,
        height: "100%",
        width: { xl: "30%", lg: "40%", md: "50%", xs: "100%" },
        transition: "all 1s ease-in-out",
        bgcolor: colors.common.white
      }}>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          opacity: 1,
          transition: "all 0.3s ease-in-out",
          height: "100%",
          "::-webkit-scrollbar": { display: "none" }
        }}>
          {/* logo */}
          <Box sx={{ textAlign: "center", p: 5 }}>
            <Animate type="fade" delay={0.5}>
              <img src={images.logo} alt="logo" height={60}></img>
            </Animate>
          </Box>
          {/* logo */}

          {/* form */}
          <Box sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "::-webkit-scrollbar": { display: "none" }
          }}>
            <Animate type="fade" sx={{ maxWidth: 400, width: "100%" }}>
              <Box component="form" maxWidth={400} width="100%" >
                <Stack spacing={3}>
                  <TextField label="username" fullWidth  value={email} 
                    onChange={(e) => setEmail(e.target.value)} required/>
                  <TextField label="password" type="password" fullWidth  value={password}
                    onChange={(e) => setPassword(e.target.value)} required/>
                    {error && <Typography color="error" fontWeight="bold">{error}</Typography>}
                  <Button type="submit" size="large" variant="contained" color="success" onClick={handleLogin}>
                    sign in
                  </Button>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <FormGroup>
                      <FormControlLabel control={<Checkbox />} label="Remember me" />
                    </FormGroup>
                    <Typography color="error" fontWeight="bold">
                      <Link to="#">
                        Forgot password?
                      </Link>
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            </Animate>
          </Box>
          {/* form */}

          {/* footer */}
          {/* <Box sx={{ textAlign: "center", p: 5, zIndex: 2 }}>
            <Animate type="fade" delay={1}>
              <Typography
                display="inline"
                fontWeight="bold"
                sx={{ "& > a": { color: colors.red[900], ml: "5px" } }}
              >
                Don't have an account -
                <Link to="#">
                  Register now
                </Link>
              </Typography>
            </Animate>
          </Box> */}
          {/* footer */}

          {/* loading box */}
          {onRequest && (
            <Stack
              alignItems="center"
              justifyContent="center"
              sx={{
                height: "100%",
                width: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                bgcolor: colors.common.white,
                zIndex: 1000
              }}
            >
              <Box position="relative">
                <CircularProgress
                  variant="determinate"
                  sx={{ color: colors.grey[200] }}
                  size={100}
                  value={100}
                />
                <CircularProgress
                  variant="determinate"
                  disableShrink
                  // value={loginProgress}
                  size={100}
                  sx={{
                    [`& .${circularProgressClasses.circle}`]: {
                      strokeLinecap: "round"
                    },
                    position: "absolute",
                    left: 0,
                    color: colors.green[600]
                  }}
                />
              </Box>
            </Stack>
          )}
          {/* loading box */}
        </Box>
      </Box>
      {/* Login form */}
    
    </Box>
  )
}

export default LoginPage;