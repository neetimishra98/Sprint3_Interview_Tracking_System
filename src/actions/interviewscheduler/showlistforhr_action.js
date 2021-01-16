import axios from 'axios'

const ShowListForHrAction  = (props)=> {
    return async function(dispatch){
        var err= null;
        var onLoad =0;
        const axios = require('axios').default;
        const url = 'http://localhost:8080/cgits/interviewscheduler/hr/'+ props;
        const serverResponse = await axios.get(url) //await can only be used with async function....
        .then(response => dispatch({type: 'VIEW_INTERVIEW_MEMBER_FOR_HR', payload: response}))
        .catch(error => console.log(err=error));
        if(err!=null && props!=undefined){
            console.log("No user Found");
            dispatch({type: 'VIEW_INTERVIEW_MEMBER_FOR_HR', payload: null});
        }
    }
}

export default ShowListForHrAction;