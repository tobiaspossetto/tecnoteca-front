import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slider } from '@mui/material';
import React from 'react';
import'./modalRequerirCompu.css'
export interface ModalRequerirCompuInterface {}

const ModalRequerirCompu : React.FC<ModalRequerirCompuInterface> = () => {
	const [open, setOpen] = React.useState(false);
	function valuetext(value: number) {
		return `${value}°C`;
	  }
	const handleClickOpen = () => {
	  setOpen(true);
	};
  
	const handleClose = () => {
	  setOpen(false);
	};
	return  <div>
	<Button variant="contained" color="error" onClick={handleClickOpen}>
	  Agregar reserva de computadora
	</Button>
	<Dialog open={open} onClose={handleClose}>
	  <DialogTitle >Reserva</DialogTitle>
	  <DialogContent>
		<DialogContentText>
		  Complete los datos del usuario/s para reservar la/s computadora/s por el tiempo seleccionado
		</DialogContentText>
		<form>
			<div>
				<label>Nombre</label>
				<input type="text" placeholder='Nombre del usuario' />
			</div>
			<div>
				<label>Dni</label>
				<input type="text" name="dni" placeholder='dni' id="" />
			</div>
			<div>
				<label>Motivo</label>
				<input type="text" name="motivo" placeholder="motivo" id="" />
			</div>
			<div>
				<label>Fecha</label>
				<input type="date" name="date" id="" />
			</div>
			<div>
				<label>Hora de inicio y finalizaciòn</label>
				<input type="time" name="" id="" />
				<input type="time" name="" id="" />
			</div>
			
			<div>
				<label>Cantidad de computadoras</label>
				<Box sx={{ width: 300 }}>
      <Slider
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
		<Button onClick={handleClose} variant='outlined' color='error'>Cancelar</Button>
		<Button onClick={handleClose} variant='contained' color='success' >Agregar</Button>
	  </DialogActions>
	</Dialog>
  </div>;
};

export default ModalRequerirCompu;
