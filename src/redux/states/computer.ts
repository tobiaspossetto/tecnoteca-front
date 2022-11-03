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
        }
    },
});

export const {getComputers} = computersSlice.actions;