import React, {useState, createContext} from "react";


export const DataContext = createContext()

export function DataProvider(props){
    const[registerMessageValue, setRegisterMessageValue] = useState("")
return(
    <DataContext.Provider value={{registerMessage:[registerMessageValue, setRegisterMessageValue]}}>
        {props.children}
    </DataContext.Provider>
)   

}