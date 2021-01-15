import axios from 'axios';

let viewByLocationAction = (location) => {
    return async function (dispatch) {
        const res = await axios.get(
            `http://localhost:9090/cgits/candidateloc/${location}`
          );
          dispatch({type: "SHOW_CANDIDATE", payload: res.data});
    }
}

export default viewByLocationAction;