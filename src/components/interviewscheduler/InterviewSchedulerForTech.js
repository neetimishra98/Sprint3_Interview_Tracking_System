import GiveTechRating from './services/givetechrating';
import ViewAllInterviewMembersForTech from './services/viewinterviewmemberfortech';
import { Row,Col,Accordion, Card, Button } from 'react-bootstrap';

const InterviewSchedulerForTech = () => {
    

return (
    <div>
        {/* All underlying operations from services */}
        <Card>
            <Accordion>
                <table className="marginLeft">
                    <Col className="align-items-center">
                        <Row>
                            <Accordion.Toggle as={Button} variant="dark" eventKey="0"> 
                            View All Interview Members 
                            </Accordion.Toggle>
                            
                            <Accordion.Collapse eventKey="0">
                        
                                  <Card.Body><ViewAllInterviewMembersForTech></ViewAllInterviewMembersForTech></Card.Body>
                            </Accordion.Collapse>
                          </Row>
                             <Row>
                            <Accordion.Toggle as={Button} variant="dark" eventKey="1"> 
                            Give Tech Rating to a Candidate
                            </Accordion.Toggle>
                            
                            <Accordion.Collapse eventKey="1">
                        
                            <Card.Body><GiveTechRating></GiveTechRating></Card.Body>
                            </Accordion.Collapse>
                        </Row>
                    </Col>
                </table>
            </Accordion>
        </Card>
    </div>
);
}

export default InterviewSchedulerForTech;







