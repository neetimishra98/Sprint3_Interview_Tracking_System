//Action for viewing a candidate for tech panel
const ViewCandidateForHrAction = (props) => {
   
    return async function(dispatch){
        let error;
        const axios = require('axios').default;
        const url = 'http://localhost:9091/cgits/candidate/hr/'+props;
        const serverResponse = await axios.get(url) //await can only be used with async function....
        .then(response => dispatch({type: 'VIEW_CANDIDATE_FOR_HR', payload: response}))
        .catch(error => console.log(error));
    }
 }
 
 export default ViewCandidateForHrAction;