import axios from 'axios'

const SurrenderAsATechAction = (props)=> {
    return async function(dispatch){
        var err = null;
        var onLoad = 0;
        const axios = require('axios').default;
<<<<<<< HEAD
        const url = 'http://localhost:9090/cgits/panelmember/tech/search/'+props;
=======
        const url = 'http://localhost:8080/cgits/panelmember/tech/search/'+props;
>>>>>>> 2c6d4a5667e2df06bc0c10a833b5683262162699
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