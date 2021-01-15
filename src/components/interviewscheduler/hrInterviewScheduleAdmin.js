
import CancelInterview from './adminhrServices/hrcancelinterview.js'
import UpdateInterview from "./adminhrServices/hrupdatescheduleinterview";
import { Accordion, Card, Button } from 'react-bootstrap'


const hrInterviewScheduleAdmin = () => {
    return (
        <div>
            {/* All underlying operations from services */}
            <Accordion>
            <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Cancel Interview
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    {/* Search an Employee component */}
                    <Card.Body><CancelInterview></CancelInterview></Card.Body>
                    {/* Search an Employee component */}
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Update Schedule Interview
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    {/* Fetch all Employee component */}
                    <Card.Body><UpdateInterview></UpdateInterview></Card.Body>
                    {/* Fetch all Employee component */}
                    </Accordion.Collapse>
               </Card>
            </Accordion>
        </div>
    );
}

export default hrInterviewScheduleAdmin;