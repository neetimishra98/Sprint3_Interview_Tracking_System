//Interview Services Accessible By The Admin....

import hrInterviewScheduleAdmin from '../interviewscheduler/hrInterviewScheduleAdmin';

import TechShareandschedule from './adminTechServices/techshareandschedule.js';
import TechCancelInterview from './adminTechServices/techcancelinterview.js'
import TechUpdateInterview from "./adminTechServices/techupdatescheduleinterview";
import { Accordion, Card, Button } from 'react-bootstrap'




const techInterviewScheduleAdmin = () => {
    return (
        <div>
            {/* All underlying operations from services */}
            <Accordion>
               <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      Schedule Technical Interview
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body><TechShareandschedule></TechShareandschedule></Card.Body>
                    </Accordion.Collapse>
                </Card>
                </Accordion>
                <Accordion>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                     Update Technical Interview
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body><TechUpdateInterview></TechUpdateInterview></Card.Body>
                    </Accordion.Collapse>
                </Card>
                </Accordion>
                <Accordion>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                      Cancel Technical Interview
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body><TechCancelInterview></TechCancelInterview></Card.Body>
                    </Accordion.Collapse>
                </Card>
               
            </Accordion>
        </div>
    );
}

export default techInterviewScheduleAdmin;