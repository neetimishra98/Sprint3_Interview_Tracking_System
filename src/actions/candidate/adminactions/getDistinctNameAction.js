import axios from 'axios';

let getDistinctNameAction = () => {
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:9090/cgits/candidatenmdis"
          );
          dispatch({type: "GET_DISTINCT_NAMES", payload: res.data});
    }
}

export default getDistinctNameAction;