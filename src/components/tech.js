
import CandidateForTech from './candidate/CandidateForTech'
import InterviewSchedulerForTech from './interviewscheduler/InterviewSchedulerForTech'
import PanelMemberForTech from './panelmember/PanelMemberForTech'

// Bootstrap

import { Tab, Tabs } from 'react-bootstrap'

const TechComponent = () => {
    return (
        <div>
            <body>
            <Tabs defaultActiveKey="Home" id="uncontrolled-tab-example">
    
            <Tab eventKey="Interviewscheduler" title="TECH Services">
            <InterviewSchedulerForTech></InterviewSchedulerForTech>
            <PanelMemberForTech></PanelMemberForTech>
            <CandidateForTech></CandidateForTech>

            </Tab>
            </Tabs> 
            </body>
            
        </div>
    );
}
export default TechComponent;