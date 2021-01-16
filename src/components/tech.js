
import CandidateForTech from './candidate/CandidateForTech'
import InterviewSchedulerForTech from './interviewscheduler/InterviewSchedulerForTech'
import PanelMemberForTech from './panelmember/PanelMemberForTech'

// Bootstrap

import { Tab, Tabs } from 'react-bootstrap'

const TechComponent = () => {
    return (
        <div>
            <body>
            <Tabs id="uncontrolled-tab-example">
    
            <Tab eventKey="PanelMember" title="TECH Services">
            <InterviewSchedulerForTech></InterviewSchedulerForTech>
            <CandidateForTech></CandidateForTech>
            <PanelMemberForTech></PanelMemberForTech>

            </Tab>
            </Tabs> 
            </body>
            
        </div>
    );
}
export default TechComponent;