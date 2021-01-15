import React from 'react'
import { Form, Table, Jumbotron, Button } from 'react-bootstrap'

import { useDispatch, useSelector } from 'react-redux';
import ViewCandidateForHRAction from '../../../actions/candidate/view_a_cand_hr'
const ViewCandidate = () => {

    var pathVar = null;
    let candidate = useSelector((state)=>state);
    let dispatcher = useDispatch();
    React.useEffect(()=>ViewCandidateForHRAction_Function(), [])
        const ViewCandidateForHRAction_Function = () => {
            dispatcher(ViewCandidateForHRAction(pathVar));
        }
    
    const handleSubmit = (event) =>{ 
        pathVar = document.getElementById("pathVariable").value;
        dispatcher(ViewCandidateForHRAction(pathVar));
    }
    return (
        // All Final Operations and Functions
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <Jumbotron style={{width: 800}}>
                <Form>
                    <Form.Group controlId="formGroupText">
                        <Form.Label>Search by valid name/id</Form.Label>
                        <Form.Control type="text" placeholder="Name or Candidate ID" id="pathVariable"/>
                    </Form.Group>
                    <Button variant="dark" type="submit"  call onClick={handleSubmit}>
                        Search
                    </Button>
                    <hr></hr>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <th>Candidate ID</th>
                            <th>Candidate Name</th>
                            <th>Location</th>
                            <th>Qualification</th>
                            <th>Designation</th>
                            <th>Experience</th>
                            <th>Primary Skills</th>
                            <th>Secondary Skills</th>
                            <th>Notice Period</th>
                            <th>Final Status</th>
                        </thead>
                        <tbody id="table_content">
                            {renderData(candidate)}
                        </tbody>
                    </Table>
                </Form>
            </Jumbotron>
        </div>
    );

    function renderData(candidate) {   
        console.log("candidate dispatcher object returned from the server : ", candidate);
        if(candidate!==undefined){
            return(
                <tr>
                    <td>{candidate.data.candidateid}</td>
                    <td>{candidate.data.candidatename}</td>
                </tr>
            );
        }
    }
}

export default ViewCandidate;