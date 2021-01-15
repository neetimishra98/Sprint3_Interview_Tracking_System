import axios from 'axios'

const CancelInterviewAction = (props)=> {
    return async function(dispatch){
        var err = null;
        var onLoad = 0;
        console.log(props);
        const axios = require('axios').default;
        const url = 'http://localhost:9091/cgits/interviewschedulerdel/'+props;
        const serverResponse = await axios.delete(url) //await can only be used with async function....
        .then(response => dispatch({type: 'CANCEL_INTERVIEW', payload: response}))
        .catch(error => console.log(err=error));
        if(err!==null && props!=undefined){
            console.log("No Interview Found");
            dispatch({type: 'CANCEL_INTERVIEW', payload: null});
        }
    }
}

export default CancelInterviewAction;