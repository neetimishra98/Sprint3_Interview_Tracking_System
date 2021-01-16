import axios from 'axios';

let getDistinctQualificationAction = () => {
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:9090/cgits/candidatequaltb"
          );
          dispatch({type: "GET_DISTINCT_QUALIFICATIONS", payload: res.data});
    }
}

export default getDistinctQualificationAction;