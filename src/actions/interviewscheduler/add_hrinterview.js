import axios from 'axios';

let addHRInterviewAction = (hr) => {
console.log("In action : ",hr);
console.log("candidateeeeeeeeeee",hr.candidate.candID);
console.log("Panelllllllllllllllll id: ",hr.panel.panID);

    return async function (dispatch) {
        const res = await axios.post(
            `http://localhost:9091/cgits/hrinterviewscheduler/${hr.candidate.candID}/${hr.panel.panID}`,

                {
            
                    candidate: {"candidateid": hr.candidate.candID},
                    panel:{"panelid":hr.panel.panID}, 
                    date: hr.date,
                    end_time: hr.end_time,  
                    finalstatus: hr.finalstatus,
                    hrrating: hr.hrrating,
                    location: hr.location, 
					start_time: hr.start_time
                   
                }, 
                { 
                    "Content-type": "application/json; charset=UTF-8"
                }
            );
         
          dispatch({type: "ADD_HRINTERVIEW", payload: res.data});
    }
}

export default addHRInterviewAction;


//`http://localhost:9090/cgits/candidatedes/${designation}`




/*

let addElectionAction = (election) => {
    console.log("election in action",election.election_name);
    return async function (dispatch) {
        const res = await axios.post(
            "http://localhost:8080/evs/election",
             {     
                    state: election.state,
                    constituency: election.constituency,
                    date:election.date,
                    election_name: election.election_name, 
                   
                }, 
                {
                    "Content-type": "application/json; charset=UTF-8"
                }
            );
          
          dispatch({type: "ADD_ELECTION", payload: res.data});
    }
}

export default addElectionAction;
*/

