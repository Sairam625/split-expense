import { Typography } from "@mui/material"
import { Box, Container } from "@mui/system"
import Copyright from "./Copyright"

const About = () => {
  return (
    <>
<Container maxWidth='md' sx={{
            bgcolor: 'background.paper',
            boxShadow: 2,
            my: 10,
            py:10
        }}>
<div align="center">
  <a href="/">
    <img src="https://github.com/tuzup/SplitApp/blob/master/client/public/static/logo.png?raw=true" alt="Logo" width="80" height="80"/>
  </a>

  <h2 align="center">SplitApp</h2>

  <p align="center">
    Build with the MERN stack (MongoDB, Express, React and NodeJS).
    <br />
    <br/>
    <Copyright/>
    <br/>
    <a href="https://github.com/tuzup/SplitApp/issues">Report Bug</a>
    &nbsp;&nbsp;&nbsp;
    <a href="https://github.com/tuzup/SplitApp/issues">Request Feature</a>
  </p>
</div>
<br/>
<center><img src="https://raw.githubusercontent.com/tuzup/SplitApp/master/Screenshots/dashboard-main-transparent.png" alt="splitapp" width={'80%'}/></center>
<Typography variant="h5">

</Typography>
<Copyright/>
<br/>
</Container>
 </>
  )
}

export default About