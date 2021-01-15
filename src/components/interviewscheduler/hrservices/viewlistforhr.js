//Hr Interview Scheduler Services Component : CHECK WARNING.info FOR NOTES.....

import { Form, Table, Jumbotron, Button } from 'react-bootstrap';

const ViewListForHr = () => {
    return (
    
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Jumbotron style={{ width: 700 }}>
                <Form>
                    <Form.Group controlId="formGroupText">
                        <Form.Label> View Candidate Using interviewid</Form.Label>
                        <Form.Control type="text" placeholder="Interview ID" id="searchParameter"/>
                        <br></br>
                        <br></br>
                        <Button variant="dark" type="submit" call>
                            Search
                        </Button>
                    </Form.Group>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <th>Candidate ID</th>
                            <th>Candidate Name</th>
                            <th>Location</th>
                            <th>Qualification</th>
                            <th>Designation</th>
                            <th>Experience</th>
                            <th>Primary<br></br>Skills</th>
                            <th>Secondary <br></br>Skills</th>
                            <th>Notice <br></br>Period</th>
                        </thead>
                        <tbody id="table_content">
                        </tbody>
                    </Table>
                </Form>
            </Jumbotron>
        </div>
    );
}



export default ViewListForHr;