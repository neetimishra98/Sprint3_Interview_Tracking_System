const TechReducer = (state= {viewmemberfortech: [],ratinglistcandidate: [],panelmembers: []}, action) => {
    switch(action.type){

        //case to view all members
        case 'VIEW_INTERVIEW_MEMBER_FOR_TECH': 
        state.viewmemberfortech=action.payload;
       // console.log('VIEW_INTERVIEW_MEMBER_FOR_TECH', state.viewmemberfortech);
        return state;
        //return action.payload;

        //case to give techrating
        case 'GIVE_TECH_RATING' : 
        state.ratinglistcandidate=action.payload;
       // console.log('GIVE_TECH_RATING', state.ratinglistcandidate);
        return state;
        //return action.payload;
    
        //CASE TO update the Interview
        //case 'UPDATE_INTERVIEW': return action.payload;


         //CASE TO SURRENDER AS HR
         case 'SURRENDER_AS_A_TECH': 
         state.panelmembers = action.payload;
         console.log('SURRENDER_AS_A_TECH', state.panelmembers);
         return state;
         //return action.payload;

        default:
            return state;

    
      
    }

}

export default TechReducer;