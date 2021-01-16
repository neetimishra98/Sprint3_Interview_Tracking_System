import SearchCandidate from './hrservices/viewhrcandidate'
import {Accordion, Card, Button, Row, Col, table, Container} from 'react-bootstrap'
//import CancelInterview from './services/cancelinterview.js'

const CandidateForHR = (props) => {
    return (
        <div>
            {/* All underlying operations from services */}
            <Card>
                <Accordion>
                    <table className="marginLeft">
                        <Col className="align-items-center">
                            <Row>
                                <Accordion.Toggle as={Button} variant="dark" eventKey="0"> 
                                    <center>View a Candidate</center>
                                </Accordion.Toggle>
                                
                                <Accordion.Collapse eventKey="0">
                                <Card.Body class="bg-custom"><SearchCandidate></SearchCandidate></Card.Body>
                                </Accordion.Collapse>
                            </Row>
                        </Col>
                    </table>
                </Accordion>
            </Card>
        </div>
    );
}

export default CandidateForHR;