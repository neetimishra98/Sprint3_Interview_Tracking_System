import axios from 'axios';

let getDistinctPrimarySkillAction = () => {
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:9090/cgits/candidatepstb"
          );
          dispatch({type: "GET_DISTINCT_PRIMARY_SKILLS", payload: res.data});
    }
}

export default getDistinctPrimarySkillAction;