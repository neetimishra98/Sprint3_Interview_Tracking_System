//Admin Services Component : CHECK WARNING.info FOR NOTES.....
//import InterviewSchedulerForAdmin from './interviewscheduler/InterviewSchedulerForAdmin'

//import InterviewSchedulerForAdmin from './interviewscheduler/InterviewSchedulerForAdmin'
//import PanelMemberForAdmin from './panelmember/PanelMemberForAdmin'

// Bootstrap




import PanelMemberForHR from './panelmember/PanelMemberForHR'
import SearchCandidate from './candidate/CandidateForHR';
import InterviewSchedulerForHr from './interviewscheduler/InterviewSchedulerForHr';



import { Tab, Tabs } from 'react-bootstrap'

const HRComponent = () => {
    return (
        <div>
            <Tabs id="uncontrolled-tab-example">

                <Tab eventKey="PanelMember" title="HR INTERVIEW">
                <SearchCandidate></SearchCandidate>
<<<<<<< HEAD
                <PanelMemberForHR></PanelMemberForHR>
                    
=======
                    <PanelMemberForHR></PanelMemberForHR>
                    <InterviewSchedulerForHr></InterviewSchedulerForHr>
                
>>>>>>> 2874aa4dd4104462d6836ec6f05d749cf2e023ba
                </Tab>
                
            </Tabs>
        </div>
    );
}



export default HRComponent;