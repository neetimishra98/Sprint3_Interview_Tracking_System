import { render } from '@testing-library/react';
import React, { useState } from 'react'
import { Form, Table, Jumbotron, Button, Modal, Alert } from 'react-bootstrap'

import { useDispatch, useSelector } from 'react-redux';
import ViewaCandidateForTechAction from '../../../actions/candidate/view_a_cand_tech_action';

const ViewACandidateForTech = (props) => {

    var pathVar = null;
    let candidate = useSelector((state)=>state.TechReducer.candidates);
    let dispatcher = useDispatch();
    React.useEffect(()=>ViewaCandidateForTechAction_Func(), [])
    const ViewaCandidateForTechAction_Func = () => {
        dispatcher(ViewaCandidateForTechAction(pathVar));
    }
    
    const handleSubmit = (event) =>{ 
        pathVar = document.getElementById("pathVariable").value;
        dispatcher(ViewaCandidateForTechAction(pathVar));
        renderData(candidate);
    }
    return (
        // All Final Operations and Functions
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <Jumbotron style={{width: 700}}>
                <Form>
                    <Form.Group controlId="formGroupText">
                        <Form.Label>Enter candidate id</Form.Label>
                        <Form.Control type="text" placeholder="Candidate ID" id="pathVariable"/>
                    </Form.Group>
                    <Button variant="dark" type="button" call onClick={handleSubmit}>
                        View
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
                Candidate with the mentioned id was not found. Maybe you entered wrong id. Please check once!
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
                            <th>Intreview ID</th>
                            <th>Location</th>
                            <th>Tech Rating</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th>Start time</th>
                            <th>End time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{candidate.data.interviewid}</td>
                            <td>{candidate.data.location}</td>
                            <td>{candidate.data.techrating}</td>
                            <td>{candidate.data.finalstatus}</td>
                            <td>{candidate.data.date}</td>
                            <td>{candidate.data.start_time}</td>
                            <td>{candidate.data.end_time}</td>
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