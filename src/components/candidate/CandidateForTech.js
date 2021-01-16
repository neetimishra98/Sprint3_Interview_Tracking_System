//Employee Services Accessible By The Admin....

import SearchCandidate from './hrservices/viewhrcandidate'
import ViewACandidateForTech from './techservices/viewtechcandidate'
import {Row, Col,Accordion, Card, Button } from 'react-bootstrap'
//import CancelInterview from './services/cancelinterview.js'

const CandidateForTech = () => {
    return (
        <div>
            {/* All underlying operations from services */}
            <Card>
                <Accordion>
                    <table className="marginLeft">
                        <Col className="align-items-center">
                            <Row>
                                <Accordion.Toggle as={Button} variant="dark" eventKey="32"> 
                                    <center>View a Candidate</center>
                                </Accordion.Toggle>
                                
                                <Accordion.Collapse eventKey="32">
                                <Card.Body class="bg-custom"><ViewACandidateForTech></ViewACandidateForTech></Card.Body>
                                </Accordion.Collapse>
                            </Row>
                        </Col>
                    </table>
                </Accordion>
            </Card>
        </div>
    );
    }
export default CandidateForTech;
