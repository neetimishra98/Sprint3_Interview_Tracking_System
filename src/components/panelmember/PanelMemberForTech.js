//Panel Services Accessible By The Admin....
import SurrenderAsTechPanel from './techservices/surrendertechpanel'

import { Col,Row,Accordion, Card, Button } from 'react-bootstrap'
const PanelMemberForTech = () => {
    return (
        <div>
            {/* All underlying operations from services */}
            <Card>
                <Accordion>
                    <table className="marginLeft">
                        <Col className="align-items-center">
                            <Row>
                                <Accordion.Toggle as={Button} variant="dark" eventKey="0"> 
                                    <center>Surrender As Technical Panel</center>
                                </Accordion.Toggle>
                                
                                <Accordion.Collapse eventKey="0">
                            
                                <Card.Body class="bg-custom"><SurrenderAsTechPanel></SurrenderAsTechPanel></Card.Body>
                                </Accordion.Collapse>
                            </Row>
                        </Col>
                    </table>
                </Accordion>
            </Card>
        </div>
    );
    }
export default PanelMemberForTech;
