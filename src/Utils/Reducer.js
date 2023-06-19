const storedState = localStorage.getItem('state');

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
            localStorage.setItem('state', JSON.stringify(addState));
            return addState;
        case "REMOVE_EXPENDITURE":
            let newState = {
                ...state,
                expenditures: payload.expenditures
            }
            localStorage.setItem('state', JSON.stringify(newState));
            return newState;
        case "UPDATE_EXPENDITURE":
            let updateState = {
                ...state,
                expenditures: payload.expenditures
            }
            localStorage.setItem('state', JSON.stringify(updateState));
            return updateState;
            case "ADD_BUDGET":
                let addBudget ={
                    ...state,
                    budgets: payload.budgets
                }
                localStorage.setItem('state', JSON.stringify(addBudget));
                return addState;
            case "REMOVE_BUDGET":
                let newBudget = {
                    ...state,
                    budgets: payload.budgets
                }
                localStorage.setItem('state', JSON.stringify(newBudget));
                return newState;
            case "UPDATE_BUDGET":
                let updateBudgate = {
                    ...state,
                    budgets: payload.budgets
                }
                localStorage.setItem('state', JSON.stringify(updateBudgate));
                return updateState;
            case "CLEAR_STATE":
                let clear = {
                        expenditures:[],
                        budgets: []
                }
                localStorage.removeItem('state');
                return clear;
        default:
            throw new Error(`No case for type ${type} found in reducer`)
    }
}

export default Reducer;