/*
//Hr Interview Scheduler Services Component : CHECK WARNING.info FOR NOTES.....

import { Form, Table, Jumbotron, Button } from 'react-bootstrap';

const ViewInterviewMembersForHr = () => {
    return (
    
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Jumbotron style={{ width: 700 }}>
                <Form>
                    <Form.Group controlId="formGroupText">
                        <Form.Label> View List of Interview Members</Form.Label>
                        <br></br>
                        <br></br>
                        <Button variant="dark" type="submit" call>
                            Search
                        </Button>
                    </Form.Group>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <th>Interview ID</th>
                            <th>Date</th>
                            <th>End_time</th>
                            <th>Finalstatus</th>
                            <th>HrRating</th>
                            <th>Location</th>
                            <th>Start_time</th>
                            <th>Candidateid</th>
                            <th>panelid</th>
                        </thead>
                        <tbody id="table_content">
                        </tbody>
                    </Table>
                </Form>
            </Jumbotron>
        </div>
    );
}



export default ViewInterviewMembersForHr;

*/