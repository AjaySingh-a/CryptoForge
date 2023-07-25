import {AppBar,Container,MenuItem,Select,Toolbar,Typography,} from "@mui/material";
import React from 'react';
import './Navbar.css'
import {FaCoins} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (

    <>
    <Link to="/">
    <AppBar color="transparent" position="static">
      <Container>
        <Toolbar>
          <Typography flex={1} color={"rgb(239, 166, 31)"}>CryptoDigest</Typography>
        </Toolbar>
      </Container>
    </AppBar>
    </Link>
    
     <div>
     <Link to='/'>
     <div className='navbar'>
         <FaCoins className="icon"/>
         <h1>Crypto<span className="blue">Digest</span> </h1>
     </div>
     </Link>
     </div>

     </>
    
  )
}

export default Navbar
