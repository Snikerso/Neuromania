import  React, {createContext} from 'react';

const SheduleContext = createContext({
        sheduleState:[]
    })
SheduleContext.displayName = "SheduleContext";

function sheduleReducer(state,action){
    const newState =state
    switch(action.type){
        case 'INIT': {


            return action.payload.data
        }
        case 'ADD': {
            const foundedItem = state.find(item =>item.id === action.payload.item.id)
            

            if(foundedItem ===undefined){
                localStorage.setItem("shedule",JSON.stringify([...newState, action.payload.item]))
                return [...newState, action.payload.item]
            }else{
                return newState
            }
        }
        case 'DELETE': {
            const newStateWithDeletedItem = state.filter(item =>item.id !== action.payload.item.id)
            localStorage.setItem("shedule",JSON.stringify([...newStateWithDeletedItem]))
                
            return newStateWithDeletedItem
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

export function SheduleProvider({children}){

    const [sheduleState, sheduleDispatch] = React.useReducer(sheduleReducer,[])
    
    React.useEffect(() => {
        if(JSON.parse(localStorage.getItem('shedule')) === null){
            return;
        }else{
            return sheduleDispatch({type:"INIT",payload:{data:JSON.parse(localStorage.getItem('shedule'))}})
        }
        
      }, [])
    
    const value = {sheduleState, sheduleDispatch}


    return <SheduleContext.Provider value={value}>{children}</SheduleContext.Provider>
}

export function useShedule(){
    const context = React.useContext(SheduleContext)
    if (context === undefined){
        throw new Error(`useShedule must be used within a UserProvider`)
    }
    return context
}