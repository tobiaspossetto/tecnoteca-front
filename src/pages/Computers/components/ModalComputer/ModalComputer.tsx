import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import React, { useRef } from 'react';
import { IoMdAddCircle } from 'react-icons/io';
import Slide from '@mui/material/Slide';

export interface ModalComputerInterface {}
{/* */}
import { TransitionProps } from '@mui/material/transitions';
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const ModalComputer : React.FC<ModalComputerInterface> = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
   <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Añadir nueva computadora
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Añadir nueva computadora"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            ¿Esta seguro de que desea añadir una nueva computadora?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' color='error' onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleClose} variant='contained' color='success' >Añadir</Button>
        </DialogActions>
      </Dialog>
    </div>
    </>
  )
};

export default ModalComputer;
