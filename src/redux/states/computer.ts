

import { createSlice } from "@reduxjs/toolkit";
import { LocalStorageTypes } from "../../models";
import { IComputer } from '../../models/computer';
import { getLocalStorage, setLocalStorage } from "../../utilities/localstorage.utility";

const initialState: IComputer[] = [];



export const computersSlice = createSlice({
    name: LocalStorageTypes.COMPUTER,
    initialState: getLocalStorage(LocalStorageTypes.COMPUTER)
        ? JSON.parse(getLocalStorage(LocalStorageTypes.COMPUTER) as string)
        : initialState,

    reducers: {
       
        addFavorite: (state, action) => {
            setLocalStorage(LocalStorageTypes.COMPUTER, state);
            return action.payload;
        },
    },
});

export const {addFavorite} = computersSlice.actions;