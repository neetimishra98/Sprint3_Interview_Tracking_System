const CandidateReducer = (state = {candidate: [],candidates: [], location: [], qualification: [], designation:[], primaryskill: [], secondaryskill: [], filter: []}, action) => {
    switch (action.type) {
        case 'ADD_CANDIDATE':
            state.candidate.push(action.payload);
            return state;
        case 'SHOW_CANDIDATE':
            state.candidates = action.payload;
            return state;
        case 'GET_LOCATIONS':
            state.location = action.payload;
            return state;
        case 'GET_QUALIFICATIONS':
            state.qualification = action.payload;
            return state;
        case 'GET_DESIGNATIONS':
            state.designation = action.payload;
            return state;
        case 'GET_PRIMARYSKILLS':
            state.primaryskill = action.payload;
            return state;
        case 'GET_SECONDARYSKILLS':
            state.secondaryskill = action.payload;
            return state;
        case 'GET_DISTINCT_NAMES':
            state.filter = action.payload;
            return state;
        case 'GET_DISTINCT_LOCATIONS':
            state.filter = action.payload;
            return state;
        case 'GET_DISTINCT_QUALIFICATIONS':  
            state.filter = action.payload;
            return state;  
        case 'GET_DISTINCT_DESIGNATIONS':
            state.filter = action.payload;
            return state;
        case 'GET_DISTINCT_PRIMARY_SKILLS':
            state.filter = action.payload;
            return state;           
        default:
            return state;
    }
}

export default CandidateReducer;