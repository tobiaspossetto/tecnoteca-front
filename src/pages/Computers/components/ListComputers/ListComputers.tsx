import { Stack } from '@chakra-ui/react';
import React from 'react';
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { compus } from '../../../../data';
import { useSelector } from 'react-redux';
import { AppStore } from '../../../../redux/store';


export interface ListComputersInterface {}

const ListComputers : React.FC<ListComputersInterface> = () => {

    const stateCompus= useSelector((store: AppStore) => {
		return store.computer;
    });
	const columns = [
      
        {
            field: "id",
            headerName: "Id",
            flex: 1,
            minWidth: 150,
            renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
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
        <DataGrid style={{marginTop: 40, marginBottom: 10}}
            disableColumnSelector
            disableSelectionOnClick
            autoHeight
            pageSize={5}
            rowsPerPageOptions={[5]}
            rows={stateCompus}
            columns={columns}
            getRowId={(row: any) => row.id}
        />
    );
};

export default ListComputers;
