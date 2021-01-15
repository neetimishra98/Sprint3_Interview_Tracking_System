//Employee Services Accessible By The Admin....

import SearchEmployee from './services/searchemployee'

import { Row,Container, Col, Accordion, Card, Button } from 'react-bootstrap'

const EmployeeForAdmin = () => {
    return (
        <div>
       
            <Container className="mr-5">
            <card>
            {/* All underlying operations from services */}
            <Accordion>
                
               <table className="marginLeft">
               <Col className="align-items-center">
                         <Row></Row>
                    <Row>
                    <Accordion.Toggle as={Button} variant="dark" eventKey="1">
                    <center><h2><b><i>Search an Employee</i></b></h2></center>
                    </Accordion.Toggle>
               
                <Accordion.Collapse eventKey="1">
                    {/* View Candidate component */}
                    <Card.Body class="bg-custom"><SearchEmployee></SearchEmployee></Card.Body>      
                    {/* View an Candidate component */}
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


export default EmployeeForAdmin;

