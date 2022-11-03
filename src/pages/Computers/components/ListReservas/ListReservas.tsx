import React, { useState } from "react";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { reservasCompus } from "@/data";
import { useSelector } from "react-redux";
import { AppStore } from "@/redux/store";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    IconButton,
} from "@mui/material";
import {AiTwotoneDelete} from "react-icons/ai"
export interface ListReservasInterface {}

const ListReservas: React.FC<ListReservasInterface> = () => {

    const [idToDelete, setIdToDelete] = useState<string|null>(null)

    const stateCompusReservations = useSelector((store: AppStore) => {
        return store.computersReservations;
    });
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
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
            minWidth: 150,
            renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
        },
        {
            field: "actions",
            headerName: "Eliminar",
            type: "actions",
            sorteable: false,
            width: 200,
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
            field: "cantidadDeComputadoras",
            headerName: "Cantidad de computadoras",
            flex: 1,
            minWidth: 150,
            renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
        },
        {
            field: "idComputadora",
            headerName: "Id de computadoras",
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
                <DialogContent>
               
                </DialogContent>
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
                rows={stateCompusReservations}
                columns={columns}
                getRowId={(row: any) => row.id}
            />
        </>
    );
};

export default ListReservas;
