import React from 'react';
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { reservasCompus } from '@/data';
export interface ListReservasInterface {}

const ListReservas : React.FC<ListReservasInterface> = () => {
	const columns = [
      
        {
            field: "id",
            headerName: "Id",
            flex: 1,
            minWidth: 150,
            renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
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
            field: "horaDeFinalizacion",
            headerName: "Hora de finalizaciòn",
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
        <DataGrid style={{marginTop: 40, marginBottom: 10}}
            disableColumnSelector
            disableSelectionOnClick
            autoHeight
            pageSize={5}
            rowsPerPageOptions={[5]}
            rows={reservasCompus}
            columns={columns}
            getRowId={(row: any) => row.id}
        />
    );
};

export default ListReservas;
