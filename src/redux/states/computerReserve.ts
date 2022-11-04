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
        },
        deleteReservation:(state,action)=>{
            console.log(state)
            const result = state.filter((reserv) => reserv.id !== action.payload )
            console.log(result)
            return result
        }
    }
})

export const {getComputersReservations,deleteReservation} = computerReservationSlice.actions