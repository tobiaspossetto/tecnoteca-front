import { configureStore } from "@reduxjs/toolkit";
import { IComputer } from '../models/computer';
import { computersSlice } from './states/computer';


export interface AppStore{
    computer: IComputer[],

}

export default configureStore<AppStore>({
    reducer:{
        computer: computersSlice.reducer,
        
    }
})