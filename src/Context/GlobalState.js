import React, { createContext, useReducer}  from "react" // these are from react context API
import OurReducer from "./OurReducer"

const ourState = {
    buttonToggler: { on: false }
}

export const GlobalContext = createContext(ourState); // the context has to be initialized so it could be dispatched

export const GlobalProvider = ({children}) => {
 
    const [ state, dispatch  ] = useReducer(OurReducer, ourState);

    const toggleAction = boolean => dispatch({ type: "TOGGLE_BUTTON", payload: boolean  })
    

    return (<GlobalContext.Provider value={{ buttonToggler: state.buttonToggler, toggleAction}}>{children}</GlobalContext.Provider>)

}


