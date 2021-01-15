import axios from 'axios'

const CancelInterviewAction = (props)=> {
    return async function(dispatch){
        var err = null;
        var onLoad = 0;
        const axios = require('axios').default;
        const url = 'http://localhost:8080/cgits/interviewschedulerdel/'+props;
        const serverResponse = await axios.get(url) //await can only be used with async function....
        .then(response => dispatch({type: 'CANCEL_INTERVIEW', payload: response}))
        .catch(error => console.log(error));
        if(err!==null && props!=undefined){
            console.log("No Interview Found");
            dispatch({type: 'CANCEL_INTERVIEW', payload: null});
        }
    }
}

export default CancelInterviewAction;