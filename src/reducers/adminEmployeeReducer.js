const EmployeeReducer = (state = { employees: [] }, action) => {
    switch (action.type) {

        // JUST ADD ALL CASES OF REDUCER HERE....

        //CASE TO SHOW PANEL MEMBERS
        case 'SEARCH_EMPLOYEE':
            state.employees = action.payload;
            console.log('SEARCH_EMPLOYEE', state.employees);
            return state;

        default:
            return state;

    }
}
export default EmployeeReducer;