//Admin Services Component : CHECK WARNING.info FOR NOTES.....
//import InterviewSchedulerForAdmin from './interviewscheduler/InterviewSchedulerForAdmin'

//import InterviewSchedulerForAdmin from './interviewscheduler/InterviewSchedulerForAdmin'
//import PanelMemberForAdmin from './panelmember/PanelMemberForAdmin'

// Bootstrap


import PanelMemberForHR from './panelmember/PanelMemberForHR'
import SearchCandidate from './candidate/CandidateForHR';
import InterviewSchedulerForHr from './interviewscheduler/InterviewSchedulerForHr';
import InterviewSchedulerForHrRating from './interviewscheduler/InterviewSchedulerForHrRating';


import { Tab, Tabs } from 'react-bootstrap'

const HRComponent = () => {
    return (
        <div>
            <Tabs id="uncontrolled-tab-example">

                <Tab eventKey="PanelMember" title="HR INTERVIEW">
                <SearchCandidate></SearchCandidate>
                    <PanelMemberForHR></PanelMemberForHR>
                    <br></br>
                    <br></br>
                    
                    <InterviewSchedulerForHr></InterviewSchedulerForHr>
                    <InterviewSchedulerForHrRating></InterviewSchedulerForHrRating>
                
                </Tab>
            </Tabs>
        </div>
    );
}



export default HRComponent;