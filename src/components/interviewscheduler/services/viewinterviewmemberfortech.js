import React from 'react'

import { Form, Table, Jumbotron, Button } from 'react-bootstrap'


import { useDispatch, useSelector } from 'react-redux';
import ViewInterviewMemberForTechAction from '../../../actions/interviewscheduler/viewinterviewmemberfortechaction';

const ViewInterviewMemberForTech = (props) => {

    var pathVar = null;
    let member = useSelector((state)=>state);
    let dispatcher = useDispatch();
    React.useEffect(()=>ViewInterviewMemberForTechAction_Function(), [])
        const ViewInterviewMemberForTechAction_Function = () => {
            dispatcher(ViewInterviewMemberForTechAction(pathVar));
        }
    
    const handleSubmit = (event) =>{ 
        pathVar = document.getElementById("pathVariable").value;
        dispatcher(ViewInterviewMemberForTechAction(pathVar));
    }


    return (
        // All Final Operations and Functions
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Jumbotron style={{ width: 700 }}>
                <Form>
                    <Form.Group controlId="formGroupText">
                        <Form.Label> View Candidate Using interviewid</Form.Label>
                        <Form.Control id="pathVariable" type="text" placeholder="Interview ID"/>
                        <br></br>
                        <br></br>
                        <Button variant="dark" type="button" call onClick={handleSubmit}>
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
                        {renderData(member)}
                        </tbody>
                    </Table>
                </Form>
            </Jumbotron>
        </div>
    );

    function renderData(member) {   
        console.log("interview member dispatcher object returned from the server : ", member);
        if(member!==undefined){
            return(
                <tr>
                   
                </tr>
            );
        }
    }        
}

export default ViewInterviewMemberForTech;
/*
 <td>{member.data.candidateid}</td>
                    <td>{member.data.candidatename}</td>
                    <td>{member.data.location}</td>
                    <td>{member.data.qualification}</td>
                    <td>{member.data.designation}</td>
                    <td>{member.data.experience}</td>
                    <td>{member.data.primaryskills}</td>
                    <td>{member.data.secondaryskills}</td>
                    <td>{member.data.noticeperiod}</td>*/