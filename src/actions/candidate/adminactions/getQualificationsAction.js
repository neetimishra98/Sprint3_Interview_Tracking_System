import axios from 'axios';

let getQualificationsAction = () => {
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:9090/cgits/candidatequal"
          );
          dispatch({type: "GET_QUALIFICATIONS", payload: res.data});
    }
}

export default getQualificationsAction;