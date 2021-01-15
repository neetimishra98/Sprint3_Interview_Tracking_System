
import GiveTechRating from '../components/interviewscheduler/services/givetechrating';
import ViewInterviewMemberForTech from '../components/interviewscheduler/services/viewinterviewmemberfortech';
import ViewAllInterviewMembersForTech from '../components/interviewscheduler/services/viewinterviewmemberfortech';
// Bootstrap

import { Tab, Tabs } from 'react-bootstrap'

const TechComponent = () => {
    return (
        <div>
            <body>
            <Tabs defaultActiveKey="Home" id="uncontrolled-tab-example">
    
            <Tab eventKey="Interviewscheduler" title="TECH Interview">
            <ViewInterviewMemberForTech></ViewInterviewMemberForTech>
            <ViewAllInterviewMembersForTech></ViewAllInterviewMembersForTech>
            <GiveTechRating></GiveTechRating>
            </Tab>
            </Tabs> 
            </body>
            
        </div>
    );
}
export default TechComponent;