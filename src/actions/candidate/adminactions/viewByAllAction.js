import axios from 'axios';

let viewByAllAction = () => {
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:9090/cgits/candidate"
        );
        dispatch({ type: "SHOW_CANDIDATE", payload: res.data });
    }
}

export default viewByAllAction;

