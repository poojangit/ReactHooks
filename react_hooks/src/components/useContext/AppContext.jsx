import { createContext } from "react";

export const AppContext = createContext()

const Contextprovider = (props) => {
    const phone = "7867878989"
    const name = "pooja"
    return (
        <AppContext.Provider value={{phone, name}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default Contextprovider