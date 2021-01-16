import GiveHrRating from './hrservices/givehrrating'
import ViewListForHr from './hrservices/viewlistforhr';
import { Accordion, Card, Button } from 'react-bootstrap';
import ShowInterviewMember from './hrservices/viewinterviewmemberhr';



const InterviewSchedulerForHr = () => {
    return (
        <div>
            {/* All underlying operations from services */}
            <Accordion>
                

                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button}  variant="link" target="_blank" eventKey="7">
                   View List of  Interview Members 
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="7">
                    {/* Fetch all Interview Members from InterviewScheduler component */}
                    <Card.Body><ShowInterviewMember></ShowInterviewMember></Card.Body>
                    {/* Fetch all Interview Members from InterviewScheduler component */}
                    </Accordion.Collapse>
                </Card>

                
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button}   variant="link" target="_blank"eventKey="9">
                   View List of Candidate Using Interview Id
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="9">
                    {/* Fetch all Interview Members from InterviewScheduler component */}
                    <Card.Body><ViewListForHr></ViewListForHr></Card.Body>
                    {/* Fetch all Interview Members from InterviewScheduler component */}
                    </Accordion.Collapse>
                </Card>


                

                </Accordion>
        </div>
    );
}

export default InterviewSchedulerForHr;

