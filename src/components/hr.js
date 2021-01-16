import PanelMemberForHR from './panelmember/PanelMemberForHR'
import SearchCandidate from './candidate/CandidateForHR';
import InterviewSchedulerForHr from './interviewscheduler/InterviewSchedulerForHr';



import { Jumbotron, Button, Tab, Tabs } from 'react-bootstrap'

const HRComponent = () => {
    return (
        <div style={{ backgroundColor: "navy"}}>
            <br></br>
            <h1 style={{color: "white"}}><b><i>HR Panel Member Services</i></b></h1>
            <br></br>

            <Tabs defaultActiveKey="Home"  id="uncontrolled-tab-example" variant="pills">

                <Tab eventKey="InterviewSchedulerView"title="View Interview Members" >
                    <InterviewSchedulerForHr></InterviewSchedulerForHr>
                </Tab>
                <Tab eventKey="Candidate" title="Candidate Details">
                    <SearchCandidate></SearchCandidate></Tab>
                <Tab eventKey="PanelMember" title="Surrender As Panel">
                    <PanelMemberForHR></PanelMemberForHR>
                </Tab>
                
            
                
                
            </Tabs>
        </div>
    );
}



export default HRComponent;