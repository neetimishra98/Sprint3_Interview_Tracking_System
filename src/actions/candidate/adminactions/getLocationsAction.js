import axios from 'axios';

let getLocationsAction = () => {
    return async function (dispatch) {
        const res = await axios.get(
            "http://localhost:9090/cgits/candidateloc"
          );
          dispatch({type: "GET_LOCATIONS", payload: res.data});
    }
}

export default getLocationsAction;


