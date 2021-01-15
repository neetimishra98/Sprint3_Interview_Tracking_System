import AddCandidate from './adminservices/addCandidate'
import ViewCandidate from './adminservices/viewCandidate'
import { Row, Col, table, Accordion, Card, Button, Container } from 'react-bootstrap'

const CandidateForAdmin = () => {
    return (
        <div>

            <Container className="mr-5">
                <card>
                    {/* All underlying operations from services */}
                    <Accordion>

                        <table className="marginLeft">
                            <Col className="align-items-center">
                                <Row>
                                    <Accordion.Toggle as={Button} variant="dark" eventKey="0">
                                        <center><h2><b><i>Add Candidate</i></b></h2></center>
                                    </Accordion.Toggle>

                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body class="bg-custom"><AddCandidate></AddCandidate></Card.Body>
                                    </Accordion.Collapse>
                                </Row>
                                <Row>
                                    <Accordion.Toggle as={Button} variant="dark" eventKey="1">
                                        <center><h2><b><i>View Candidate</i></b></h2></center>
                                    </Accordion.Toggle>

                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body class="bg-custom" ><ViewCandidate></ViewCandidate></Card.Body>
                                    </Accordion.Collapse>
                                </Row>

                            </Col>
                        </table>
                    </Accordion>
                </card>
            </Container>
        </div>
    );
}

export default CandidateForAdmin;
/*




<Row className="align-items-center">
  <Col>
    <h1>{title}</h1>
    <p>{details}</p>
  </Col>
  <Col>
    <button>{callToAction}</button>
  </Col>
</Row>;

*/


