const InterviewReducer = (state={interviewschedules: [],candidates: [],panels: [],hr: []}, action) => {
    switch(action.type) {
        case 'ADD_TECHINTERVIEW':
            console.log("In technical Reducer",action.payload);
            state.interviewschedules.push(action.payload);
            return state;
        case 'SHOW_CANDIDATES':
            state.candidates = action.payload;
            return state;
        case 'SHOW_PANEL':
            state.panels = action.payload;     
            return state;
        case 'ADD_HRINTERVIEW':
            console.log("In hr Reducer",action.payload);
            state.hr.push(action.payload);
            return state;
           //case to cancel the Interview
           case 'CANCEL_INTERVIEW': return action.payload;

           //CASE TO update the Interview
           case 'UPDATE_INTERVIEW': return action.payload;
         
        default:
            return state;
    }
}

export default InterviewReducer;

