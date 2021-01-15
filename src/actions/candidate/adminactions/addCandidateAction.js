import axios from 'axios';

const addCandidateAction = (candidate) => {
    console.log('ssssssssssss',candidate.primaryskills);
    return async function(dispatch) {
        const res = await axios.post(
            "http://localhost:9090/cgits/candidate",
                { 
                    candidatename: candidate.candidatename, 
                    designation: candidate.designation, 
                    experience: candidate.experience,
                    location: candidate.location,
                    noticeperiod: candidate.noticeperiod,
                    primaryskills: candidate.primaryskills,
                    qualification: candidate.qualification, 
                    secondaryskills: candidate.secondaryskills
                }, 
                { 
                    "Content-type": "application/json; charset=UTF-8"
                }
            );
          console.log('Add Candidate serverResponse: ', res.data);
          dispatch({type: "ADD_CANDIDATE", payload: res.data});

    }
}

export default addCandidateAction;

