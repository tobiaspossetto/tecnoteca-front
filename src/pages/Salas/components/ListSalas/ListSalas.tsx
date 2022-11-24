import { salas } from "@/data";
import { deleteComputer, deleteSala } from "@/redux";
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
export interface ListSalasInterface {}

const ListSalas: React.FC<ListSalasInterface> = () => {
    const stateSalas = useSelector((store: AppStore) => {
        return store.sala;
    });
    const [idToDelete, setIdToDelete] = useState<string | null>(null);
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        dispatch(deleteSala(idToDelete));
        setOpen(false);
    };

    const handleSelection = (id: string) => {
        setIdToDelete(id);
        handleClickOpen();
    };

    const handleIdToDelete = () => {
        handleClose();
    };

    const columns = [
        {
            field: "id",
            headerName: "Id",
            flex: 1,
            maxWidth: 40,
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
                            <IconButton
                                onClick={() => {
                                    handleSelection(params.row.id);
                                }}
                                aria-label="delete"
                            >
                                <AiTwotoneDelete color="#d32f2f" />
                            </IconButton>
                        </div>
                    }
                </>
            ),
        },
        {
            field: "createdAt",
            headerName: "Fecha de Creaciòn",
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
                    ¿Está seguro que desea eliminar esta computadora?
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
                style={{
                    marginTop: 40,
                    marginBottom: 10,
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "40%",
                }}
                disableColumnSelector
                disableSelectionOnClick
                autoHeight
                pageSize={5}
                rowsPerPageOptions={[5]}
                rows={stateSalas}
                columns={columns}
                getRowId={(row: any) => row.id}
            />
        </>
    );
};

export default ListSalas;
