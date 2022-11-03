import { configureStore } from "@reduxjs/toolkit";
import { IComputer } from '../models/computer';
import { computersSlice } from './states/computer';
import { computerReservationSlice } from './states/computerReserve';
import { IComputerReservation } from '@/models';


export interface AppStore{
    computer: IComputer[],
    computersReservations: IComputerReservation[]
}

export default configureStore<AppStore>({
    reducer:{
        computer: computersSlice.reducer,
        computersReservations: computerReservationSlice.reducer
        
    }
})