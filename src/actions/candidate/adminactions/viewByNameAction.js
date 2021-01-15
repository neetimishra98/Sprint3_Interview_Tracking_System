import axios from 'axios';

let viewByNameAction = (candidatename) => {
    return async function (dispatch) {
        const res = await axios.get(
            `http://localhost:9090/cgits/candidatenm/${candidatename}`
          );
          dispatch({type: "SHOW_CANDIDATE", payload: res.data});
    }
}

export default viewByNameAction;
