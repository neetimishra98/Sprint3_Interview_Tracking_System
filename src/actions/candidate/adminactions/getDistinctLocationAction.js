import axios from 'axios';

let getDistinctLocationAction = () => {
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:9090/cgits/candidateloctb"
          );
          dispatch({type: "GET_DISTINCT_LOCATIONS", payload: res.data});
    }
}

export default getDistinctLocationAction;