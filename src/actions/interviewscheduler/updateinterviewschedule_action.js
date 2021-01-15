import axios from 'axios'

const UpdateInterviewScheduleAction = (props)=> {
    return async function(dispatch){
        let error;
        const axios = require('axios').default;
        const url = 'http://localhost:8080/cgits/interviewscheduler/'+props;
        const serverResponse = await axios.get(url) //await can only be used with async function....
        .then(response => dispatch({type: 'UPDATE_INTERVIEW', payload: response}))
        .catch(error => console.log(error));
    }
}

export default UpdateInterviewScheduleAction;