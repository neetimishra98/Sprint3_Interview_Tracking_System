import axios from 'axios';

let addTechInterviewAction = (interviewscheduler) => {
console.log("In action : ",interviewscheduler);
console.log("candidateeeeeeeeeee",interviewscheduler.candidate.candID);
console.log("Panelllllllllllllllll id: ",interviewscheduler.panel.panID);

    return async function (dispatch) {
        const res = await axios.post(
            `http://localhost:9090/cgits/interviewscheduler/${interviewscheduler.candidate.candID}/${interviewscheduler.panel.panID}`,

                {
            
                    candidate: {"candidateid": interviewscheduler.candidate.candID},
                    panel:{"panelid":interviewscheduler.panel.panID},
                    location: interviewscheduler.location, 
                    date: interviewscheduler.date,
					start_time: interviewscheduler.start_time,
					end_time: interviewscheduler.end_time,  
					finalstatus: interviewscheduler.finalstatus,
					techrating: interviewscheduler.techrating
                   
                }, 
                { 
                    "Content-type": "application/json; charset=UTF-8"
                }
            );
         
          dispatch({type: "ADD_TECHINTERVIEW", payload: res.data});
    }
}

export default addTechInterviewAction;


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

