import axios from 'axios';

let getDistinctDesignationAction = () => {
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:9090/cgits/candidatedestb"
          );
          dispatch({type: "GET_DISTINCT_DESIGNATIONS", payload: res.data});
    }
}

export default getDistinctDesignationAction;