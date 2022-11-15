import { createSlice } from "@reduxjs/toolkit";
import { LocalStorageTypes } from "../../models";
import { IComputer, IComputerState } from '../../models/computer';
import { getLocalStorage, setLocalStorage } from "../../utilities/localstorage.utility";

const initialState: IComputer[] = [
   
]



export const computersSlice = createSlice({
    name: LocalStorageTypes.COMPUTER,
    initialState,
    reducers: {
       
        
        getComputers:(state,action) => {
            return action.payload
        },
        deleteComputer:(state,action)=>{
            console.log(action.payload)
            const result = state.filter((reserv) => reserv.id !== action.payload )
            console.log(result)
            return result
        },
        addComputer:(state,action) => {
            return [...state, action.payload]
        }
    }
});

export const {getComputers,deleteComputer,addComputer} = computersSlice.actions;