
//import CandidateForTech from './candidate/CandidateForTech'
import InterviewSchedulerForTech from './interviewscheduler/InterviewSchedulerForTech'
import PanelMemberForTech from './panelmember/PanelMemberForTech'
import ViewACandidateForTech from './candidate/CandidateForTech';
// Bootstrap
import CandidateForTech from './candidate/CandidateForTech'
import { Tab, Tabs } from 'react-bootstrap'

const TechComponent = () => {
    return (
        <div style={{ backgroundColor: "navy" }}>
            <br></br>
            <h1 style={{ color: "white" }}><b><i>TECHNICAL SERVICES</i></b></h1>
            <br></br>

            <Tabs defaultActiveKey="Home" id="uncontrolled-tab-example" variant="pills">
                <Tab eventKey="InterviewSchedulerView" title="Interview Scheduler" >
                    <InterviewSchedulerForTech></InterviewSchedulerForTech>
                </Tab>
                <Tab eventKey="Candidate" title="Candidate" >
                <CandidateForTech></CandidateForTech>
                </Tab>
                <Tab eventKey="Panel Member" title="Panel Member">
                    <PanelMemberForTech></PanelMemberForTech>

                </Tab>
            </Tabs>
        </div>
    );
}




export default TechComponent;