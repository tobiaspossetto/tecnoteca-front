import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slider,
} from "@mui/material";
import { Console } from "console";
import React, { useEffect, useState } from "react";
import "./modalRequerirCompu.css";
export interface ModalRequerirCompuInterface {}

const ModalRequerirCompu: React.FC<ModalRequerirCompuInterface> = () => {
  const [open, setOpen] = React.useState(false);
  const [datos, setDatos] = useState({
    nombre: "",
    dni: "",
    motivo: "",
    fecha: "",
    horaInicio: "",
    cantidadDeComputadoras: "",
  });
  function valuetext(value: number) {
    return `${value}`;
  }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (event: {
    target: {
      getAriaValueText?: any;
      name: any;
      value: any;
    };
  }) => {
    if (event.target.name === "cantidadDeComputadoras") {
      setDatos({
        ...datos,
        [event.target.name]: event.target.getAriaValueText,
      });
    }else{
		setDatos({
			...datos,
			[event.target.name]: event.target.value,
		  });
	}
    
  };
  const send = () => {
    console.table(datos);
  };
  useEffect(() => {
    console.log(datos);
  }, [datos]);

  return (
    <div>
      <Button variant="contained" color="error" onClick={handleClickOpen}>
        Agregar reserva de computadora
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Reserva</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Complete los datos del usuario/s para reservar la/s computadora/s
            por el tiempo seleccionado
          </DialogContentText>
          <form>
            <div>
              <label>Nombre</label>
              <input
                type="text"
                name="nombre"
                onChange={handleInputChange}
                placeholder="Nombre del usuario"
              />
            </div>
            <div>
              <label>Dni</label>
              <input
                type="text"
                name="dni"
                onChange={handleInputChange}
                placeholder="dni"
              />
            </div>
            <div>
              <label>Motivo</label>
              <input
                type="text"
                name="motivo"
                onChange={handleInputChange}
                placeholder="motivo"
              />
            </div>
            <div>
              <label>Fecha</label>
              <input type="date" name="fecha" onChange={handleInputChange} />
            </div>
            <div>
              <label>Hora de inicio</label>
              <input
                type="time"
                name="horaInicio"
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label>Cantidad de computadoras</label>
              <Box sx={{ width: 300 }}>
                <Slider
                  name="cantidadDeComputadoras"
                  aria-label="Small steps"
                  defaultValue={1}
                  getAriaValueText={valuetext}
                  step={1}
                  marks
                  min={1}
                  max={10}
                  valueLabelDisplay="auto"
                />
              </Box>
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined" color="error">
            Cancelar
          </Button>
          <Button onClick={send} variant="contained" color="success">
            Agregar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ModalRequerirCompu;
