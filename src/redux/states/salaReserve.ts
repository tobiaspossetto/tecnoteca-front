import { ISalasReservation, LocalStorageTypes } from "@/models"
import { createSlice } from "@reduxjs/toolkit"

const initialState: ISalasReservation[] = [
   
]

export const salaReservationSlice = createSlice({
    name: LocalStorageTypes.SALA_RESERVATION,
    initialState,
    reducers:{
        getSalasReservations:(state,action)=>{
            return action.payload
        },
        deleteSalaReservation:(state,action)=>{
            console.log(state)
            const result = state.filter((reserv) => reserv.id !== action.payload )
            console.log(result)
            return result
        },
        addSalaReservation:(state,action)=>{
            return [...state, action.payload]
        }
    }
})

export const {getSalasReservations,deleteSalaReservation,addSalaReservation} = salaReservationSlice.actions