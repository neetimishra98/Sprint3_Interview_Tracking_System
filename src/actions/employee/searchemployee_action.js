import axios from 'axios'

const SearchEmployeeAction = (props)=> {
    return async function(dispatch){
        var err = null;
        var onLoad = 0;
        const axios = require('axios').default;
        const url = 'http://localhost:9090/cgits/employee/'+props;
        const serverResponse = await axios.get(url) //await can only be used with async function....
        .then(response => dispatch({type: 'SEARCH_EMPLOYEE', payload: response}))
        .catch(error => console.log(err=error));
        if(err!==null && props!=undefined){
            console.log("No User Found");
            dispatch({type: 'SEARCH_EMPLOYEE', payload: null});
        }
    }
}

export default SearchEmployeeAction;