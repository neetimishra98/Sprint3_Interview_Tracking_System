import axios from 'axios';

let viewByDesignationAction = (designation) => {
    return async function (dispatch) {
        const res = await axios.get(
            `http://localhost:9090/cgits/candidatedes/${designation}`
          );
          dispatch({type: "SHOW_CANDIDATE", payload: res.data});
    }
}

export default viewByDesignationAction;