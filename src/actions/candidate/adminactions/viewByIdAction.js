import axios from 'axios';

let viewByIdAction = (candidateid) => {
    console.log("iiiiiiiiiiiiiiiiiiii",candidateid);
    return async function (dispatch) {
        const res = await axios.get(
            `http://localhost:9090/cgits/candidate/${candidateid}`
          );
          dispatch({type: "SHOW_CANDIDATE", payload: res.data});
    }
}

export default viewByIdAction;