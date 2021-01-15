import React, { useState } from 'react'
import { Form, Table, Jumbotron, Button, Alert } from 'react-bootstrap'

import { useDispatch, useSelector } from 'react-redux';
import ViewInterviewMemberForTechAction from '../../../actions/interviewscheduler/viewinterviewmemberfortechaction';

const ViewInterviewMemberForTech = (props) => {

    var techinterviewlist = null;
    let member = useSelector(state => state.TechReducer.viewmemberfortech);
    let dispatcher = useDispatch();
    React.useEffect(()=>ViewInterviewMemberForTechAction_Function(), [])
    const ViewInterviewMemberForTechAction_Function = () => {
            dispatcher(ViewInterviewMemberForTechAction(techinterviewlist));
    }
    
    const handleSubmit = (event) =>{ 
        techinterviewlist = document.getElementById("intid").value;
        dispatcher(ViewInterviewMemberForTechAction(techinterviewlist));
        renderData(member);
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
                        <Form.Label>View Candidate Using interviewid</Form.Label>
                        <Form.Control id="intid" type="text" placeholder="Interview ID" />
                        </Form.Group>
                    <Button variant="dark" type="button" call onClick={handleSubmit}>
                        Search
                    </Button>
                    <hr></hr>
                        {renderData(member)}
                </Form>
            </Jumbotron>
        </div>
    );

    //Alert
    function AlertMemberNotFoundTech() {
        const [show, setShow] = useState(true);
        console.log(show, setShow);
        if (show) {
          return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
              <Alert.Heading>Interview Member Not Found</Alert.Heading>
              <p>
              Candidate with the mentioned interview id was not found. Maybe you entered wrong id. Please check once!
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
    function renderData(member) {   
        console.log("candidate dispatcher object returned from the server : ", member);
        if(member!==undefined && member!==null && member.length!==0){
            return(
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Candidate ID</th>
                            <th>Candidate Name</th>
                            <th>Location</th>
                            <th>Qualification</th>
                            <th>Designation</th>
                            <th>Experience</th>
                            <th>Primary<br></br>Skills</th>
                            <th>Secondary <br></br>Skills</th>
                            <th>Notice <br></br>Period</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{member.data.candidateid}</td>
                            <td>{member.data.candidatename}</td>
                            <td>{member.data.location}</td>
                            <td>{member.data.qualification}</td>
                            <td>{member.data.designation}</td>
                            <td>{member.data.experience}</td>
                            <td>{member.data.primaryskills}</td>
                            <td>{member.data.secondaryskills}</td>
                            <td>{member.data.noticeperiod}</td>
                            
                        </tr>
                        </tbody>
                </Table>
            );
        }

        if(member!==undefined && member===null){
            console.log("called the alert for tech");
            return(<AlertMemberNotFoundTech show="true"/>);
        }
    }        

}

export default ViewInterviewMemberForTech;