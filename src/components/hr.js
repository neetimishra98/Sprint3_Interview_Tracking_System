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
                <PanelMemberForHR></PanelMemberForHR>
                {/*<InterviewSchedulerForHr></InterviewSchedulerForHr>*/}
            
                </Tab>
                
            </Tabs>
        </div>
    );
}



export default HRComponent;