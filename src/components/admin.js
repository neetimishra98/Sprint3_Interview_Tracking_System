//Admin Services Component : CHECK WARNING.info FOR NOTES.....

import EmployeeForAdmin from './employee/EmployeeForAdmin'
import CandidateForAdmin from './candidate/CandidateForAdmin'


import InterviewSchedulerForAdmin from './interviewscheduler/InterviewSchedulerForAdmin';
import PanelMemberForAdmin from './panelmember/PanelMemberForAdmin'
//import InterviewSchedulerForAdmin from './interviewscheduler/InterviewSchedulerForAdmin'

//import InterviewSchedulerForAdmin from './interviewscheduler/InterviewSchedulerForAdmin'
//import PanelMemberForAdmin from './panelmember/PanelMemberForAdmin'

// Bootstrap

import { Tab, Tabs } from 'react-bootstrap'

const AdminComponent = () => {
    return (
        <div>
            <Tabs id="uncontrolled-tab-example" variant="pills">
                <Tab eventKey="Candidate " title="Candidate" >
                    <CandidateForAdmin></CandidateForAdmin>
                </Tab>
                <Tab eventKey="Employee" title="Employee">
                    <EmployeeForAdmin></EmployeeForAdmin>
                </Tab>
                <Tab eventKey="InterviewScheduler" title="Interview Scheduler">
                    <InterviewSchedulerForAdmin></InterviewSchedulerForAdmin>
                </Tab>
                <Tab eventKey="PanelMember" title="Panel Member ">
                    <PanelMemberForAdmin></PanelMemberForAdmin>
                </Tab>
            </Tabs>
        </div>
    );
}



export default AdminComponent;