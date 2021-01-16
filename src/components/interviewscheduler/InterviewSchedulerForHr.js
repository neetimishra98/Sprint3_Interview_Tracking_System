import GiveHrRating from './hrservices/givehrrating'
import ViewListForHr from './hrservices/viewlistforhr';import ShowInterviewMember from './hrservices/viewinterviewmemberhr';
import { Accordion, Card, Button, Row, Col, table } from 'react-bootstrap';



const InterviewSchedulerForHr = () => {
    return (
        <div>
            {/* All underlying operations from services */}
            <Accordion>
            <Card>
                <table className="marginLeft">
                    <Col className="align-items-center">
                        <Row>
                            <Accordion.Toggle as={Button} variant="dark" eventKey="0">
                                List of All HrInterview Members
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                            {/* Fetch all Interview Members from InterviewScheduler component */}
                          <Card.Body><ShowInterviewMember></ShowInterviewMember></Card.Body>
                            {/* Fetch all Interview Members from InterviewScheduler component */}
                            </Accordion.Collapse>
                        </Row>
                    
                        <Row>
                            <Accordion.Toggle as={Button} variant="dark" eventKey="1">
                                View A HrInterview Member
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                            {/* Fetch all Interview Members from InterviewScheduler component */}
                          <Card.Body><ViewListForHr></ViewListForHr></Card.Body>
                            {/* Fetch all Interview Members from InterviewScheduler component */}
                            </Accordion.Collapse>
                        </Row>
                    
                        <Row>
                            <Accordion.Toggle as={Button} variant="dark" eventKey="2" >
                               Set HrRating To a Candidate 
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="2">
                            {/* givehrrating to InterviewScheduler component */}
                            <Card.Body><GiveHrRating></GiveHrRating></Card.Body>
                            {/* givehrrating to InterviewScheduler component */}
                            </Accordion.Collapse>
                        </Row>
                    </Col>
                </table>
                </Card>

              
                </Accordion>
        </div>
    );
}

export default InterviewSchedulerForHr;