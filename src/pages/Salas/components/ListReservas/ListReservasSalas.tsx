import { reservasSalas } from "@/data";
import { deleteReservation, deleteSalaReservation } from "@/redux";
import { AppStore } from "@/redux/store";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
	IconButton,
} from "@mui/material";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import React, { useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
export interface ListReservasInterface {}

const ListReservasSalas: React.FC<ListReservasInterface> = () => {
	const dispatch = useDispatch()
 
    const [idToDelete, setIdToDelete] = useState<string|null>(null)

    const stateSalasReservations = useSelector((store: AppStore) => {
        return store.salaReservations;
    });
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        dispatch(deleteSalaReservation(idToDelete))
        setOpen(false);
    };

    const handleSelection = (id:string) => {
        setIdToDelete(id)
        handleClickOpen()
    }

    const handleIdToDelete = () => {
        handleClose()
       
    }
	
	const columns = [
        {
            field: "id",
            headerName: "Id",
            flex: 1,
            width: 10,
            renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
        },
        {
            field: "actions",
            headerName: "Eliminar",
            type: "actions",
            sorteable: false,
            width: 100,
            renderCell: (params: GridRenderCellParams) => (
                <>
                    {
                        <div>
                            
                            <IconButton onClick={() => {handleSelection(params.row.id)}} aria-label="delete">
                                <AiTwotoneDelete color="#d32f2f"/>
                            </IconButton>
                        </div>
                    }
                </>
            ),
        },
        {
            field: "nombreUsuario",
            headerName: "Nombre Usuario",
            flex: 1,
            minWidth: 150,
            renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
        },
        {
            field: "dni",
            headerName: "Dni",
            flex: 1,
            minWidth: 150,
            renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
        },
       
        {
            field: "idSala",
            headerName: "Id de sala",
            flex: 1,
            minWidth: 150,
            renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
        },
        {
            field: "fechaDeInicio",
            headerName: "Fecha",
            flex: 1,
            minWidth: 150,
            renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
        },
        {
            field: "horaDeInicio",
            headerName: "Hora de inicio",
            flex: 1,
            minWidth: 150,
            renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
        },

        {
            field: "motivo",
            headerName: "Motivo",
            flex: 1,
            minWidth: 150,
            renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
        },
    ];
	
	return (
    <>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                ¿Està seguro que desea eliminar esta reserva?
            </DialogTitle>
            <DialogContent></DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancelar
                </Button>
                <Button onClick={handleClose} color="primary" autoFocus>
                    Aceptar
                </Button>
            </DialogActions>
        </Dialog>

        <DataGrid
            style={{ marginTop: 40, marginBottom: 10 }}
            disableColumnSelector
            disableSelectionOnClick
            autoHeight
            pageSize={5}
            rowsPerPageOptions={[5]}
            rows={stateSalasReservations}
            columns={columns}
            getRowId={(row: any) => row.id}
        />
    </>);
};

export default ListReservasSalas;
