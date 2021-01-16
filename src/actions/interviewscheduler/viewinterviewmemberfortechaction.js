import axios from 'axios'

const ViewAllInterviewMembersForTechAction = ()=> {
    return async function(dispatch){
        var err = null;
        const axios = require('axios').default;
<<<<<<< HEAD
        const url = 'http://localhost:9090/cgits/interviewscheduler/tech';
=======
        const url = 'http://localhost:8080/cgits/interviewscheduler/tech/'+props;
>>>>>>> 730d8b6aa3a41ccf407bd3dca6c0d061520c576c
        const serverResponse = await axios.get(url) //await can only be used with async function....
        .then(response => dispatch({type: 'VIEW_INTERVIEW_LIST_FOR_TECH', payload: response.data}))
        .catch(error => console.log(err=error));
        if(err!=null || serverResponse==null){
            console.log("Something went wrong while connecting to srver");
        }
    }
}

export default ViewAllInterviewMembersForTechAction;
