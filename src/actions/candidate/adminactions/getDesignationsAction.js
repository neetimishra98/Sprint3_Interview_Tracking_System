import axios from 'axios';

let getDesignationsAction = () => {
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:9090/cgits/candidatedes"
          );
          dispatch({type: "GET_DESIGNATIONS", payload: res.data});
    }
}

export default getDesignationsAction;

