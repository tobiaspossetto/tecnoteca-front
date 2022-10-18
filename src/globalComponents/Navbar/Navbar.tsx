import { Avatar, Typography } from '@mui/material';
import React from 'react';
export interface NavbarInterface {}

const Navbar : React.FC<NavbarInterface> = () => {
	return <div  style={{display:'flex', alignItems:'center', justifyContent:'start', padding:'20px'}}> 
	<Avatar variant="square"
  alt="Municipalidad Logo"
  src="https://fmondalibre.com.ar/08-2019/bfb9951e7c71015661c764b4f2e074f0.png"
  sx={{ width: 160, height: 160 }}
/>
	<Typography variant="h3" style={{fontWeight:'500'}} component="h1">
  Tecnoteca San Francisco
</Typography>;
	</div>;
};

export default Navbar;
