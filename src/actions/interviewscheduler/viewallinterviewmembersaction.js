import axios from 'axios';

const ViewallInterviewMembersForTechAction = (props) => {
    return async function (dispatch) {
        var err = null;
        var onLoad = 0;
        const axios = require('axios').default;
        console.log(props);
        const url = 'http://localhost:8080/cgits/interviewscheduler/tech';
        const serverResponse = await axios.get(url) //await can only be used with async function....
            .then(response => dispatch({ type: 'VIEW_ALL_INT_MEMBER_FOR_TECH', payload: response.data }))
            .catch(error => console.log(err = error));
        console.log(serverResponse);
    }
}

export default ViewallInterviewMembersForTechAction;