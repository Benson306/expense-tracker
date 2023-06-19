import { createContext, useContext, useEffect, useReducer } from "react";
import Reducer, { initialState } from "./Reducer";

const BudgetExpContext = createContext(initialState);

export const BudgetExpProvider = ({ children }) =>{

    const [state, dispatch] = useReducer(Reducer, initialState);

    useEffect(()=>{
        const storedState = localStorage.getItem('exptracker');

        if(storedState) {
            dispatch({type: 'SET_STATE', payload: JSON.parse(storedState)});
        }

    },[])

    const addExpenditure = (expenditure) =>{
        let updatedExpenditure = state.expenditures.concat(expenditure);

        dispatch({
            type:"ADD_EXPENDITURE",
            payload:{
                expenditures: updatedExpenditure
            }
        })

    }

    const delExpenditure = (id) =>{
        let updatedExpenditure = state.expenditures.filter(currentExpenditure =>
            currentExpenditure.id != id
        )

        dispatch({
            type:"REMOVE_EXPENDITURE",
            payload:{
                expenditures: updatedExpenditure
            }
        })

    }

    const updateExpenditure = (expenditure) =>{

        const itemIndex = state.expenditures.findIndex(item => item.id === expenditure.id);

        state.expenditures[itemIndex] = expenditure;

        dispatch({
            type:"UPDATE_EXPENDITURE",
            payload:{
                expenditures: state.expenditures
            }
        })

    }

    let value ={
        expenditures: state.expenditures,
        bugets: state.bugets,
        addExpenditure,
        delExpenditure,
        updateExpenditure

    }


    return <BudgetExpContext.Provider value={value}>
        { children }
    </BudgetExpContext.Provider>
}

const useBudgetExp = () =>{
    const context = useContext(BudgetExpContext);

    if(context === 'undefined'){
        throw new Error("useBudgetExp must be used within CartContext")
    }
    return context;
}

export default useBudgetExp;