import { render } from '@testing-library/react';
import React, { useState } from 'react'
import { Form, Table, Jumbotron, Button, Modal, Alert } from 'react-bootstrap'

import { useDispatch, useSelector } from 'react-redux';
import ViewaCandidateForTechAction from '../../../actions/candidate/view_a_cand_tech_action';

const ViewACandidateForTech = (props) => {

    var pathVar = null;
    let candidate = useSelector((state)=>state.TechReducer.candidates);
    let dispatcher = useDispatch();
    React.useEffect(()=>ViewaCandidateForTechAction_Function(), [])
    const ViewaCandidateForTechAction_Function = () => {
        console.log(pathVar);
            dispatcher(ViewaCandidateForTechAction(pathVar));

    }
    
    const handleSubmit = (event) =>{ 
        pathVar = document.getElementById("pathV").value;
        dispatcher(ViewaCandidateForTechAction(pathVar));

        renderData(candidate);
        renderData(candidate);

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
                        <Form.Control type="text" placeholder="Name or Candidate ID" id="pathV"/>
                    </Form.Group>
                    <Button variant="dark" type="button" call onClick={handleSubmit}>
                        View a candidate
                    </Button>
                    <hr></hr>
                        {renderData(candidate)}
                </Form>
            </Jumbotron>
        </div>
    );


      //ALERT
    function AlertCandidateNotFound() {
        const [show, setShow] = useState(true);
        console.log(show, setShow);
        if (show) {
          return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
              <Alert.Heading>Candidate Not Found</Alert.Heading>
              <p>
                Candidate with the mentioned id was not found. Maybe you entered wrong name/id. Please check once!
              </p>
            </Alert>
          );
        }
        else{
            return (
                <div></div>
            );
        }
        
        
    }

    function renderData(candidate) {   
        console.log("candidate dispatcher object returned from the server : ", candidate);
        if(candidate!==undefined && candidate!==null && candidate.length!==0){
            return(
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Candidate ID</th>
                            <th>Candidate Name</th>
                            <th>Location</th>
                            <th>Qualification</th>
                            <th>Designation</th>
                            <th>Experience(In Years)</th>
                            <th>Primary Skills</th>
                            <th>Secondary Skills</th>
                            <th>Notice Period(In Months)</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{candidate.data.candidateid}</td>
                            <td>{candidate.data.candidatename}</td>
                            <td>{candidate.data.location}</td>
                            <td>{candidate.data.qualification}</td>
                            <td>{candidate.data.designation}</td>
                            <td>{candidate.data.experience}</td>
                            <td>{candidate.data.primaryskills}</td>
                            <td>{candidate.data.secondaryskills}</td>
                            <td>{candidate.data.noticeperiod}</td>
                        </tr>
                    </tbody>
                </Table>
            );
        }
        if(candidate!==undefined && candidate===null){
            console.log("called the alert");
            return(<AlertCandidateNotFound show="true"/>);
        }
    }        
}

export default ViewACandidateForTech;