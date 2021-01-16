import axios from 'axios'

const GiveTechRatingAction = (props)=> {

    return async function(dispatch){
        var err = null;
        var onLoad = 0;
        const axios = require('axios').default;
<<<<<<< HEAD
        const url = 'http://localhost:8080/cgits/interviewscheduler/tech/rating/'+props;
=======

        const url = 'http://localhost:9090/cgits/interviewscheduler/tech/rating/'+props;
>>>>>>> 16303803101c84eaff3cda9f699d784d81ef5dba

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