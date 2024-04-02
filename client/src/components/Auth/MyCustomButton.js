// import React from 'react'
// import Icon from './icon'
// import { useGoogleLogin,GoogleLogin } from '@react-oauth/google';
// import  useStyles  from './styles';
// import { Button } from '@mui/material';
// import { jwtDecode } from "jwt-decode";
// const MyCustomButton = () => {
//   const {classes} = useStyles();
//     // const login = useGoogleLogin({
//     //     onSuccess: tokenResponse => console.log(tokenResponse)
        
//     //   });
//     const login = () => {
//       return (
//         <GoogleLogin
//           onSuccess={credentialResponse => {
//             console.log(jwtDecode(credentialResponse.credential));
//             console.log(credentialResponse);
//           }}
//           onError={() => {
//             console.log('Login Failed');
//           }}
//         />
//       );
//     };
//   return (
//     <Button
//                   className = {classes.googleButton}
//                   color = "primary"
//                   fullWidth
//                   onClick={login}
//                   startIcon={<Icon />}
//                   variant="contained"
//                   >Google Sign In
//                 </Button>
//   )
// }

// export default MyCustomButton