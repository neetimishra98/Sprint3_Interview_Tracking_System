const HRReducer = (state= { panelmembers: [], candidates: [] }, action) => {

    switch(action.type){

        //CASE TO VIEW A CANDIDATE FOR HR
        case 'VIEW_A_CANDIDATE_FOR_HR': 
        state.candidates = action.payload;
        console.log('VIEW_A_CANDIDATE_FOR_HR', state.candidates);
        return state;
        //return action.payload;

        //CASE TO SURRENDER AS HR
        case 'SURRENDER_AS_HR': 
        state.panelmembers = action.payload;
        console.log('SURRENDER_AS_HR', state.panelmembers);
        return state;
        //return action.payload;
       
        default:
            return state;

    }
}

export default HRReducer;
