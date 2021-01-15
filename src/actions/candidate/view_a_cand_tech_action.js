//Action for viewing a candidate for tech panel
const ViewaCandidateForTechAction = (pathVar) => {
   
    return async function(dispatch){
        const serverResponse = await fetch(''); //await can only be used with async function....
        const data = await serverResponse.json();
        console.log("Server Response / View a candidate for tech panel  "+ data);
        dispatch({type: 'VIEW_A_CANDIDATE_FOR_TECH', payload: data});
    }
 }
 
 export default ViewaCandidateForTechAction;