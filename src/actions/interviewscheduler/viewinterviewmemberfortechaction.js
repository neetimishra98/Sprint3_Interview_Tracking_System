import axios from 'axios'

const ViewInterviewMemberForTechAction = (props)=> {
    return async function(dispatch){
        let error;
        const axios = require('axios').default;
        const url = 'http://localhost:8080/cgits/interviewscheduler/tech/'+props;
        const serverResponse = await axios.get(url) //await can only be used with async function....
        .then(response => dispatch({type: 'VIEW_INTERVIEW_MEMBER_FOR_TECH', payload: response}))
        .catch(error => console.log(error));
    }
}

export default ViewInterviewMemberForTechAction;