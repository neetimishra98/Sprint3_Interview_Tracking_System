let showcandidatesAction = () => {
    return async function (dispatch) {
        const res = await fetch(
          "http://localhost:8080/cgits/candidate"
          );
          const data = await res.json();
          console.log("showcandidatesAction ", data);
          dispatch({type: "SHOW_CANDIDATES", payload: data});
    }
}

export default showcandidatesAction;
