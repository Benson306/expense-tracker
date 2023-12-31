const storedState = localStorage.getItem('exptracker');

export const initialState = storedState ? JSON.parse(storedState) :{
                                                                        expenditures: [],
                                                                        budgets: []
                                                                    }


const Reducer = (state, action) =>{
    const { type, payload } = action;

    switch(type){
        case "SET_STATE":
            return payload;
        case "ADD_EXPENDITURE":
            let addState ={
                ...state,
                expenditures: payload.expenditures
            }
            localStorage.setItem('exptracker', JSON.stringify(addState));
            return addState;
        case "REMOVE_EXPENDITURE":
            let newState = {
                ...state,
                expenditures: payload.expenditures
            }
            localStorage.setItem('exptracker', JSON.stringify(newState));
            return newState;
        case "UPDATE_EXPENDITURE":
            let updateState = {
                ...state,
                expenditures: payload.expenditures
            }
            localStorage.setItem('exptracker', JSON.stringify(updateState));
            return updateState;
            case "ADD_BUDGET":
                let addBudget ={
                    ...state,
                    budgets: payload.budgets
                }
                localStorage.setItem('exptracker', JSON.stringify(addBudget));
                return addBudget;
            case "REMOVE_BUDGET":
                let newBudget = {
                    ...state,
                    budgets: payload.budgets
                }
                localStorage.setItem('exptracker', JSON.stringify(newBudget));
                return newBudget;
            case "UPDATE_BUDGET":
                let updateBudgate = {
                    ...state,
                    budgets: payload.budgets
                }
                localStorage.setItem('exptracker', JSON.stringify(updateBudgate));
                return updateBudgate;
            case "CLEAR_STATE":
                let clear = {
                        expenditures:[],
                        budgets: []
                }
                localStorage.removeItem('exptracker');
                return clear;
        default:
            throw new Error(`No case for type ${type} found in reducer`)
    }
}

export default Reducer;