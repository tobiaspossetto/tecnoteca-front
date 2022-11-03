import { IComputerReservation, LocalStorageTypes } from "@/models";
import { createSlice } from '@reduxjs/toolkit';

const initialState: IComputerReservation[] = [
   
]

export const computerReservationSlice = createSlice({
    name: LocalStorageTypes.COMPUTER_RESERVATION,
    initialState,
    reducers:{
        getComputersReservations:(state,action)=>{
            return action.payload
        }
    }
})

export const {getComputersReservations} = computerReservationSlice.actions