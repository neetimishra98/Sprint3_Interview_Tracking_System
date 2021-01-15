import axios from 'axios';

const ShowPanelMemberAction = (props) => {
    return async function (dispatch) {
        var err = null;
        var onLoad = 0;
        const axios = require('axios').default;
        console.log(props);
        const url = 'http://localhost:9090/cgits/panelmembers';
        const serverResponse = await axios.get(url) //await can only be used with async function....
            .then(response => dispatch({ type: 'SHOW_PANELMEMBER', payload: response.data }))
            .catch(error => console.log(err = error));
        console.log(serverResponse);
    }
}

export default ShowPanelMemberAction;