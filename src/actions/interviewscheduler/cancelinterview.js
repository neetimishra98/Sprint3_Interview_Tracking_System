const CancelInterviewAction = (pathVar) => {
   
    return async function(dispatch){
        const serverResponse = await fetch(''); //await can only be used with async function....
        const data = await serverResponse.json();
        console.log("Server Response / Cancel Interview  "+ data);
        dispatch({type: 'CANCEL_INTERVIEW', payload: data});
    }
 }
 
 export default CancelInterviewAction;