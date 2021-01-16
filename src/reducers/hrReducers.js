
const HRReducer = (state= { panelmember: [], candidate: [], ratinglistcandidate: [],viewmemberforhr: []}, action) => {

    switch(action.type){

        //CASE TO VIEW A CANDIDATE FOR HR
        case 'VIEW_A_CANDIDATE_FOR_HR': 
        state.candidate = action.payload;
        console.log('VIEW_A_CANDIDATE_FOR_HR', state.candidate);
        return state;
       // return action.payload;

        //CASE TO SURRENDER AS HR
        case 'SURRENDER_AS_HR': 
        state.panelmember = action.payload;
        console.log('SURRENDER_AS_HR', state.panelmember);
        return state;
        //return action.payload;


       /* //case to view all interview members
        case 'SHOW_INTERVIEWMEMBER':
            state.interviewmembers = action.payload;
            console.log('SHOW_INTERVIEWMEMBER' , state.interview);
            return state;*/



           //case to view all members
           case 'GIVE_HR_RATING': 
           state.ratinglistcandidate=action.payload
           console.log('GIVE_HR_RATING',state.ratinglistcandidate)
           return state;
           //return action.payload;



             //case to view all members
            case 'VIEW_INTERVIEW_MEMBER_FOR_HR':
                 state.viewmemberforhr=action.payload
              console.log('VIEW_INTERVIEW_MEMBER_FOR_HR',state.viewmemberforhr)
                return state;
           //return action.payload;

           default:
               return state;

}
}

export default HRReducer;
