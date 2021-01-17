let showtechcandidatesAction = () => {
    return async function (dispatch) {
        const res = await fetch(
          "http://localhost:9090/cgits/interviewschedulertechsch"
          );
          const data = await res.json();
          console.log("showtechcandidatesAction ", data);
          dispatch({type: "SHOW_TECH_CANDIDATES", payload: data});
    }
}

export default showtechcandidatesAction;
