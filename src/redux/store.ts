import { configureStore } from "@reduxjs/toolkit";
import { IComputer } from '../models/computer';
import { computersSlice } from './states/computer';
import { computerReservationSlice } from './states/computerReserve';
import { IComputerReservation, ISalas, ISalasReservation } from '@/models';
import { getSalasReservations, salaReservationSlice, salasSlice } from "./states";


export interface AppStore{
    computer: IComputer[],
    computersReservations: IComputerReservation[],
    sala: ISalas[],
    salaReservations:ISalasReservation[]
}

export default configureStore<AppStore>({
    reducer:{
        computer: computersSlice.reducer,
        computersReservations: computerReservationSlice.reducer,
        sala:salasSlice.reducer,
        salaReservations: salaReservationSlice.reducer
        
    }
})