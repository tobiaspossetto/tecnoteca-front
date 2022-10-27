import { Avatar, Typography } from '@mui/material';
import React from 'react';
export interface NavbarInterface {}

const Navbar : React.FC<NavbarInterface> = () => {
	return <div  style={{boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 3px 0px", position:"sticky",top:0, backgroundColor:"white", zIndex:"2",borderBottom:"30px", display:'flex', alignItems:'center', justifyContent:'start', padding:'20px', height:"150px", width:"100%"}}> 
	<Avatar variant="square"
  alt="Municipalidad Logo"
  src="https://fmondalibre.com.ar/08-2019/bfb9951e7c71015661c764b4f2e074f0.png"
  sx={{ width: 100, height: 100 }}
/>
	<Typography variant="h2" color="#009ee2" style={{fontWeight:'500', fontSize:'40px'}} component="h2" >
  Tecnoteca San Francisco
</Typography>
	</div>;
};

export default Navbar;
