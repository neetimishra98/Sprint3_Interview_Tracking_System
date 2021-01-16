import axios from 'axios';

const GiveHrRatingAction = (props) => {
    return async function (dispatch) {
        var err = null;
        var onLoad = 0;
        const axios = require('axios').default;

        const url = 'http://localhost:9090/cgits/interviewscheduler/hr/rating/'+props;

        const serverResponse = await axios.get(url) //await can only be used with async function....
            .then(response => dispatch({ type: 'GIVE_HR_RATING', payload:response}))
            .catch(error => console.log(err=error));
            if(err!==null && props!=undefined){
                console.log("No User Found");
                dispatch({type:'GIVE_HR_RATING', payload: null});
            }
        }
    }

export default GiveHrRatingAction;
