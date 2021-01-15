import GiveHrRating from './hrservices/givehrrating'
import ViewListForHr from './hrservices/viewlistforhr';
import { Accordion, Card, Button } from 'react-bootstrap';



const InterviewSchedulerForHr = () => {
    return (
        <div>
            {/* All underlying operations from services */}
            <Accordion>
                



                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="7">
                   View Interview Members 
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="7">
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

