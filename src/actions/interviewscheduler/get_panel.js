let showPanelAction = () => {
    return async function (dispatch) {
        const res = await fetch(
          "http://localhost:9091/cgits/panelmembers"
          );
          const data = await res.json();
          console.log("showPanelAction ", data);
          dispatch({type: "SHOW_PANEL", payload: data});
    }
}

export default showPanelAction;
