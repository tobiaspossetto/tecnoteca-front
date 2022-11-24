import { LocalStorageTypes } from '@/models';
import { createSlice } from '@reduxjs/toolkit';
import { ISalas } from '../../models/salas';


const initialState: ISalas[] = [
   
]


export const salasSlice = createSlice({
    name: LocalStorageTypes.SALA,
    initialState,
    reducers: {
       
        
        getSalas:(state,action) => {
            return action.payload
        },
        deleteSala:(state,action)=>{
            console.log(action.payload)
            const result = state.filter((reserv) => reserv.id !== action.payload )
            console.log(result)
            return result
        },
        addSala:(state,action) => {
            return [...state, action.payload]
        }
    }
});

export const {getSalas,deleteSala,addSala} = salasSlice.actions;