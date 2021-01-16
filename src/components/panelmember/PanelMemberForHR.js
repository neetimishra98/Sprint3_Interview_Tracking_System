//Panel Services Accessible By The Admin....
import SurrenderAsHRPanel from './hrservices/surrenderashr'
import ShowPanelMembers from './services/showpanelmember'
import DeletePanelMember from './services/deletepanelmember'

import { Col,Row,Accordion, Card, Button } from 'react-bootstrap'

const PanelMemberForHR = (props) => {
    return (
        <div>
            {/* All underlying operations from services */}
            <Card>
                <Accordion>
                    <table className="marginLeft">
                        <Col className="align-items-center">
                            <Row>
                                <Accordion.Toggle as={Button} variant="dark" eventKey="0"> 
                                    <center>Surrender As HR Panel</center>
                                </Accordion.Toggle>
                                
                                <Accordion.Collapse eventKey="0">
                            
                                <Card.Body class="bg-custom"><SurrenderAsHRPanel></SurrenderAsHRPanel></Card.Body>
                                </Accordion.Collapse>
                            </Row>
                        </Col>
                    </table>
                </Accordion>
            </Card>
        </div>
    );
}

export default PanelMemberForHR;