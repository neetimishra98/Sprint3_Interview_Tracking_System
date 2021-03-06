import axios from 'axios'

const ViewaCandidateForTechAction = (props)=> {
    return async function(dispatch){
        var err = null;
        var onLoad = 0;
        const axios = require('axios').default;
        console.log(props);
        const url = 'http://localhost:9090/cgits/candidate/techp/search/'+props;
        const serverResponse = await axios.get(url) //await can only be used with async function....
        .then(response => dispatch({type: 'VIEW_A_CANDIDATE_FOR_TECH', payload: response}))
        .catch(error => console.log(err=error));
        console.log(serverResponse);
        if(err!==null && props!=undefined){
            console.log("No User Found");
            dispatch({type: 'VIEW_A_CANDIDATE_FOR_TECH', payload: null});
        }
    }
}

export default ViewaCandidateForTechAction;

