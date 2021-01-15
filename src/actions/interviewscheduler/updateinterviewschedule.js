const UpdateScheduleInterviewAction = (pathVar) => {
   
    return async function(dispatch){
        const serverResponse = await fetch(''); //await can only be used with async function....
        const data = await serverResponse.json();
        console.log("Server Response / Update Interview Schedule "+ data);
        dispatch({type: 'UPDATE_INTERVIEW_SCHEDULE', payload: data});
    }
 }
 
 export default UpdateScheduleInterviewAction;