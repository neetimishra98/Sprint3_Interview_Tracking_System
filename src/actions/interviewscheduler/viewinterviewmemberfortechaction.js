import axios from 'axios'

const ViewInterviewMemberForTechAction = (props)=> {

    return async function(dispatch){
        var err = null;
        var onLoad = 0;
        const axios = require('axios').default;
        const url = 'http://localhost:9090/cgits/interviewscheduler/tech/'+props;
        const serverResponse = await axios.get(url) //await can only be used with async function....
        .then(response => dispatch({type: 'VIEW_INTERVIEW_MEMBER_FOR_TECH', payload: response}))
        .catch(error => console.log(err=error));
        if(err!==null && props!=undefined){
            console.log("No User Found");
            dispatch({type: 'VIEW_INTERVIEW_MEMBER_FOR_TECH', payload: null});
        }
    }

}

export default ViewInterviewMemberForTechAction;