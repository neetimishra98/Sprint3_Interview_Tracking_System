import { Alert, Form, Table, Jumbotron, Button, Col, InputGroup, FormControl } from 'react-bootstrap'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SearchEmployeeAction from '../../../actions/employee/searchemployee_action';
import AddPanelMemberAction from '../../../actions/panelmember/addpanelmember_action';


const AddPanelMember = () => {

    let loc = null;
    let panel = null;
    let name = null;
    let post_json = null;

    let props_wrapper = {};

    let panelMemberResponse = useSelector((state)=>state.PanelMemberReducer.panelupdate);
    let dispatcher = useDispatch();
    //ADD PANEL MEMBER WITH REACT USE EFFECT        
    React.useEffect(()=>AddPanelMemberAction_Function(), [])
        const AddPanelMemberAction_Function = () => {
            dispatcher(AddPanelMemberAction(post_json, name));
        }

    function addPanelMember(){
        loc = document.getElementById("location_add").value;
        panel = document.getElementById("panel_add").value;
        name = document.getElementById("empname").value;
        console.log(name, loc, panel);
        post_json = { employeeEntity: null, location : loc, panelid: 10000000, type : panel };
        props_wrapper = {body: post_json, pathVar: name}
        if(loc!="null" && panel!="null"){
            dispatcher(AddPanelMemberAction(props_wrapper));
            confirmAddition(panelMemberResponse);
        }
        else{
            panelMemberResponse = null;
            confirmAddition(panelMemberResponse);
        }
    }

    function clearAlerts(){
        panelMemberResponse = undefined;
        confirmAddition(panelMemberResponse);
    }


    return (
        // All Final Operations and Functions
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <Jumbotron style={{width: 600}}>
                <Form>
                    <Form.Group controlId="formGroupText">
                        <Form.Label>What is the name of the Employee?</Form.Label>
                        {/* <Form.Control type="text" placeholder="Name of the Employee" id="searchParameter"/> */}
                        
                        <br></br>
                        <InputGroup className="mb-3">
                            <FormControl
                            id="empname"
                            placeholder="Employee's Name"
                            aria-label="Employee's Name"
                            aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                            {/* Check Button for Employee will run search employee..... */}
                                
                            </InputGroup.Append>
                        </InputGroup>
                        <hr></hr>
                        <Table size="sm">
                        <tbody id="table_content">
                            <tr>
                                <td>Select a Department</td>
                                <td>
                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Control id="panel_add" as="select" defaultValue="Choose...">
                                            <option value="null">Choose...</option>
                                            <option value="hr">Human Resources (HR)</option>
                                            <option value="tech">Technical</option>
                                        </Form.Control>
                                    </Form.Group>
                                </td>
                            </tr>
                            <tr>
                                <td>Select Location</td>
                                <td>
                                    <Form.Group as={Col} controlId="formGridState" >
                                        <Form.Control as="select" id="location_add" defaultValue="Choose...">
                                            <option value="null">Choose...</option>
                                            <option>Ahmedabad</option>
                                            <option>Aurangabad</option>
                                            <option>Bengaluru</option>
                                            <option>Chennai</option>
                                            <option>Delhi</option>
                                            <option>Daman/Diu</option>
                                            <option>Hyderabad</option>
                                            <option>Indore</option>
                                            <option>Lucknow</option>
                                            <option>Mumbai</option>
                                            <option>Nasik</option>
                                            <option>Pune</option>
                                            <option>Raipur</option>
                                            <option>Thiruvananthapuram</option>
                                        </Form.Control>
                                    </Form.Group>
                                </td>
                            </tr>
                            <br></br>
                            <tr>
                                <td>
                                    <Button variant="danger" type="reset" call onClick={clearAlerts}>
                                        Reset
                                    </Button>
                                </td>
                                <td>
                                    <Button variant="primary" type="button" call onClick={addPanelMember}>
                                        Add Member
                                    </Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    </Form.Group>
                </Form>

                {/* Response  */}
                <div>
                    {confirmAddition(panelMemberResponse)}
                </div>
            </Jumbotron>
        </div>
    );


    function confirmAddition(panelMemberResponse){
        console.log(panelMemberResponse);
        
        if(panelMemberResponse!==null && panelMemberResponse!==undefined  && panelMemberResponse.length!==0){
            console.log("Added the specified panel member to the database");
            return(
                <Alert variant="success">
                <Alert.Heading>SUCCESSFULLY added the panel member</Alert.Heading>
                <p>
                    The Panel Member Was Added Successfully!
                </p>
                </Alert>
            );
        }
        if(panelMemberResponse===[] && post_json!==null){
            return(
                <Alert variant="danger">
                <Alert.Heading>FAILED to add panel member</Alert.Heading>
                <p>
                    The Panel Member Was Not Added! There was some error in processing your request.
                </p>
                </Alert>
            );
        }
        if(panelMemberResponse===[] || panelMemberResponse===null){
            return(
                <div></div>
            );
        }

    }
}


export default AddPanelMember;
