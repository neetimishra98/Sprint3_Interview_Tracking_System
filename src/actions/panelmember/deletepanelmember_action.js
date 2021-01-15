
import axios from 'axios';

const DeletePanelMemberAction = (props) => {
    return async function (dispatch) {
        var err = null;
        var onLoad = 0;
        const axios = require('axios').default;
        const url = 'http://localhost:9091/cgits/panelmember/' + props;
        const serverResponse = await axios.delete(url) //await can only be used with async function....
            .then(response => dispatch({ type: 'DELETE_PANELMEMBER', payload: response.data }))
            .catch(error => console.log(err = error));
        console.log(props);
        if (err !== null && props != undefined) {
            console.log("No User Found");
            dispatch({ type: 'DELETE_PANELMEMBER', payload: null });
        }
    }
}

export default DeletePanelMemberAction;