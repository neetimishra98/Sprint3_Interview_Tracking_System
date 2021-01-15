import axios from 'axios';

const ShowPanelMemberAction = (props) => {
    return async function (dispatch) {
        let error;
        const axios = require('axios').default;
        const url = 'http://localhost:9090/cgits/panelmembers';
        const res = await axios.get(url) //await can only be used with async function....
            .then(response => dispatch({ type: 'SHOW_PANELMEMBER', payload: res.data }))
            .catch(error => console.log(error));
    }
}

export default ShowPanelMemberAction;