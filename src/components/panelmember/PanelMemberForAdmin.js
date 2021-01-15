//Panel Services Accessible By The Admin....

import ShowPanelMembers from './services/showpanelmember'
import DeletePanelMember from './services/deletepanelmember'
import AddPanelMember from './services/addpanelmember'
import {Row,Col,Container, Accordion, Card, Button } from 'react-bootstrap'

const PanelMemberForAdmin = (props) => {
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
                                        <center><h2><b><i>Add Panel Member</i></b></h2></center>
                                    </Accordion.Toggle>
    
                                    <Accordion.Collapse eventKey="0">
                                        {/* Add Candidate component */}
                                        <Card.Body class="bg-custom"><AddPanelMember></AddPanelMember></Card.Body>
                                        {/* Add an Candidate component */}
                                    </Accordion.Collapse>
                                </Row>
                                <Row>
                                    <Accordion.Toggle as={Button} variant="dark" eventKey="1">
                                        <center><h2><b><i>Show All Panels</i></b></h2></center>
                                    </Accordion.Toggle>
    
                                    <Accordion.Collapse eventKey="1">
                                        {/* View Candidate component */}
                                        <Card.Body class="bg-custom" ><ShowPanelMembers></ShowPanelMembers></Card.Body>
                                        {/* View an Candidate component */}
                                    </Accordion.Collapse>
                                </Row>
                                <Row>
                                    <Accordion.Toggle as={Button} variant="dark" eventKey="2">
                                        <center><h2><b><i> Delete Panel Member</i></b></h2></center>
                                    </Accordion.Toggle>
    
                                    <Accordion.Collapse eventKey="2">
                                        {/* Add Candidate component */}
                                        <Card.Body class="bg-custom"><DeletePanelMember></DeletePanelMember></Card.Body>
                                        {/* Add an Candidate component */}
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
export default PanelMemberForAdmin;
