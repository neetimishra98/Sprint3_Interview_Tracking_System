import axios from 'axios';

let viewByPrimarySkillsAction = (primaryskills) => {
    return async function (dispatch) {
        const res = await axios.get(
            `http://localhost:9090/cgits/candidateps/${primaryskills}`
          );
          dispatch({type: "SHOW_CANDIDATE", payload: res.data});
    }
}

export default viewByPrimarySkillsAction;
