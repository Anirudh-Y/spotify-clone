import { createContext, useContext, useReducer } from "react";
import React from "react";

export const DataLayerContext = createContext(null);

export let DataLayer = ({reducer,initialState ,children})=>{
   return ( <DataLayerContext.Provider value={useReducer(reducer, initialState)} >
        {children}
    </DataLayerContext.Provider>
   )
}

export const useDataLayerValue = () => useContext(DataLayerContext);