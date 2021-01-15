import axios from 'axios';

let getPrimarySkillsAction = () => {
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:9090/cgits/candidateps"
          );
          dispatch({type: "GET_PRIMARYSKILLS", payload: res.data});
    }
}

export default getPrimarySkillsAction;