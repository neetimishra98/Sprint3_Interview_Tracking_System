import axios from 'axios';

let viewByQualificationAction = (qualification) => {
    return async function (dispatch) {
        const res = await axios.get(
            `http://localhost:9090/cgits/candidateqal/${qualification}`
          );
          dispatch({type: "SHOW_CANDIDATE", payload: res.data});
    }
}

export default viewByQualificationAction;
