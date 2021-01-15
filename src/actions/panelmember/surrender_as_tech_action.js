import axios from 'axios'

const SurrenderAsATechAction = (props)=> {
    return async function(dispatch){
        var err = null;
        var onLoad = 0;
        const axios = require('axios').default;
        const url = 'http://localhost:8080/cgits/panelmember/tech/search/'+props;
        const serverResponse = await axios.get(url) //await can only be used with async function....
        .then(response => dispatch({type: 'SURRENDER_AS_A_TECH', payload: response}))
        .catch(error => console.log(err=error));
        if(err!==null && props!=undefined){
            console.log("No User Found");
            dispatch({type: 'SURRENDER_AS_A_TECH', payload: null});
        }
    }
}

export default SurrenderAsATechAction;