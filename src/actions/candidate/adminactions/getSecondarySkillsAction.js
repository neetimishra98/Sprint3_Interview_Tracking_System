import axios from 'axios';

let getSecondarySkillsAction = () => {
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:9090/cgits/candidatess"
          );
          dispatch({type: "GET_SECONDARYSKILLS", payload: res.data});
    }
}

export default getSecondarySkillsAction;