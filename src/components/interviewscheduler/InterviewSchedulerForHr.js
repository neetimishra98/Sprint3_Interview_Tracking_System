import GiveHrRating from './hrservices/givehrrating'
//import ViewInterviewMembersForHr from './hrservices/viewallinterviewmembers'
import ShowInterviewMember from './hrservices/viewinterviewmemberhr';
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
                                View All HrInterview Members
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                            {/* Fetch all Interview Members from InterviewScheduler component */}
                          <Card.Body><ShowInterviewMember></ShowInterviewMember></Card.Body>
                            {/* Fetch all Interview Members from InterviewScheduler component */}
                            </Accordion.Collapse>
                        </Row>
                    </Col>
                </table>
                </Card>
                <Card>
                <table className="marginLeft">
                    <Col className="align-items-center">
                        <Row>
                            <Accordion.Toggle as={Button} variant="dark" eventKey="1" >
                               Give HrRating To a CandidateForAdmin
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
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