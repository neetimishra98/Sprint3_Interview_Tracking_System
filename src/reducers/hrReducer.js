const HRReducer = (state= { panelmember: [], candidate: [] }, action) => {

    switch(action.type){

        //CASE TO VIEW A CANDIDATE FOR HR
        case 'VIEW_A_CANDIDATE_FOR_HR': 
        state.candidate = action.payload;
        console.log('VIEW_A_CANDIDATE_FOR_HR', state.candidate);
        return state;
        //return action.payload;

        //CASE TO SURRENDER AS HR
        case 'SURRENDER_AS_HR': 
        state.panelmember = action.payload;
        console.log('SURRENDER_AS_HR', state.panelmember);
        return state;
        //return action.payload;
       
        default:
            return state;

    }
}

export default HRReducer;
