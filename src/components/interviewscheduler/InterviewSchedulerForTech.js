import GiveTechRating from './services/givetechrating';
<<<<<<< HEAD
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
=======
import ViewInterviewMemberForTech from './services/viewinterviewmemberfortech';
import ViewAllInterviewMembersForTech from './services/viewallinterviewmembersfortech'
import { Accordion, Card, Button } from 'react-bootstrap';
import ViewACandidateForTech from '../candidate/techservices/viewtechcandidate'
import SurrenderAsTechPanel from '../panelmember/techservices/surrendertechpanel'

const InterviewSchedulerForTech = () => {
    return (
        <div>
             <Accordion>

             <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        View All Interview Members 
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    {/* Fetch all Employee component */}
                    <Card.Body><ViewAllInterviewMembersForTech></ViewAllInterviewMembersForTech></Card.Body>
                    {/* Fetch all Employee component */}
                    </Accordion.Collapse>
                </Card> 
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                        View Interview Member 
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                    {/* Fetch all Employee component */}
                    <Card.Body><ViewInterviewMemberForTech></ViewInterviewMemberForTech></Card.Body>
                    {/* Fetch all Employee component */}
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="3">
                       Set Tech Rating to a Candidate
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                    {/* Fetch all Employee component */}
                    <Card.Body><GiveTechRating></GiveTechRating></Card.Body>
                    {/* Fetch all Employee component */}
                    </Accordion.Collapse>
                </Card>    
           
>>>>>>> 730d8b6aa3a41ccf407bd3dca6c0d061520c576c
            </Accordion>
        </Card>
    </div>
);
}

export default InterviewSchedulerForTech;







