import axios from 'axios'

const SearchEmployeeAction = (props)=> {
    return async function(dispatch){
        var err = null;
        var onLoad = 0;
        const axios = require('axios').default;
        console.log(props);
        const url = 'http://localhost:8080/cgits/employee/'+props;
        const serverResponse = await axios.get(url) //await can only be used with async function....
        .then(response => dispatch({type: 'SEARCH_EMPLOYEE', payload: response.data}))
        .catch(error => console.log(err=error));
        console.log(serverResponse);
        if(err!==null && props!=undefined){
            console.log("No User Found");
            dispatch({type: 'SEARCH_EMPLOYEE', payload: null});
        }
    }
}

export default SearchEmployeeAction;
