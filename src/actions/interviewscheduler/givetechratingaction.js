import axios from 'axios'

const GiveTechRatingAction = (props)=> {

    return async function(dispatch){
        var err = null;
        var onLoad = 0;
        const axios = require('axios').default;
        const url = 'http://localhost:9091/cgits/interviewscheduler/tech/rating/'+props;
        const serverResponse = await axios.get(url) //await can only be used with async function....
        .then(response => dispatch({type: 'GIVE_TECH_RATING', payload: response}))
        .catch(error => console.log(err=error));
        if(err!==null && props!=undefined){
            console.log("No User Found");
            dispatch({type: 'GIVE_TECH_RATING', payload: null});
        }
    }

}
export default GiveTechRatingAction;