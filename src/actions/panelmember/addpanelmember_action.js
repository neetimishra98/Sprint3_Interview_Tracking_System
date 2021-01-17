import axios from 'axios'

const AddPanelMemberAction = (props)=> {
    return async function(dispatch){
        var err = null;
        var onLoad = 0;
        const axios = require('axios').default;
        if(props!=null){
            console.log(props.pathVar, props.body);
            const url = 'http://localhost:9090/cgits/panelmember/'+props.pathVar;
            const serverResponse = await axios.post(url, props.body) //await can only be used with async function....
            .then(response => dispatch({type: 'ADD_PANEL_MEMBER', payload: response.data}))
            .catch(error => console.log(err=error));
            
            console.log(serverResponse);
            if(serverResponse.data===undefined){
            console.log("COULD NOT ADD PANEL MEMBER, SINCE EMPLOYEE WAS NOT FOUND");
        }
        }
        if(err!==null && props!==undefined){
            console.log("Operation could not be completed, error from server");
            dispatch({type: 'ADD_PANEL_MEMBER', payload: null});
        }
        
        
    }
}

export default AddPanelMemberAction;