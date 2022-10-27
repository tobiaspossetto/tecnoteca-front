import { Typography, Avatar } from "@mui/material";
import React from "react";
import "./footer.css";
export interface FooterInterface {}

const Footer: React.FC<FooterInterface> = () => {
  return (
    <div className="footer-container">
      <div className="colors-container">
        <div
          className="colorModule"
          style={{ backgroundColor: "#450a76" }}
        ></div>
        <div
          className="colorModule"
          style={{ backgroundColor: "#1d3388" }}
        ></div>
        <div
          className="colorModule"
          style={{ backgroundColor: "#47aa2b" }}
        ></div>
        <div
          className="colorModule"
          style={{ backgroundColor: "#e8a719" }}
        ></div>
        <div
          className="colorModule"
          style={{ backgroundColor: "#f15613" }}
        ></div>
        <div
          className="colorModule"
          style={{ backgroundColor: "#c70d22" }}
        ></div>
      </div>
      <div className="info-container">
        <Avatar
          variant="square"
          alt="Municipalidad Logo"
          src="http://www.sanfrancisco.gov.ar/imagenes/estructura/img_logo_gestion.png"
          sx={{ width: "260px", height: "auto" }}
        />
		<div>
		<Typography
          variant="h4"
          style={{ fontWeight: "500", fontSize: "14px", textAlign: "right", width: "auto"}}
          component="p"
        >
          Bv. 9 de Julio 1187 San Francisco, Córdoba, Argentina
        </Typography>
		<Typography
          variant="h4"
          style={{ fontWeight: "500", fontSize: "14px", textAlign: "right", width: "auto"}}
          component="p"
        >
         (+54) 03564
          439111 / 439118 
        </Typography>
		<Typography
          variant="h4"
          style={{ fontWeight: "500", fontSize: "14px", textAlign: "right", width: "auto"}}
          component="p"
        >
        prensa@sanfrancisco.gov.ar
        </Typography>
		</div>
        
        
      </div>
    </div>
  );
};

export default Footer;
