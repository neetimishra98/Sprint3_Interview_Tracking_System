import React from 'react';
//import { Form, Table, Jumbotron, Button } from 'react-bootstrap'
//import React, { Component } from "react";
//import { ReactBootstrap, Jumbotron, Button, Col, Grid, Panel, FormGroup} from 'react-bootstrap';
import { HelpBlock, Nav, Spinner, Dropdown, Navbar, NavDropdown, MenuItem, Form, Jumbotron, Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import { useHistory } from "react-router-dom";

import addTechInterviewAction from '../../../actions/interviewscheduler/add_techinterview';
import InterviewScheduler from '../../../models/InterviewScheduler';
import showcandidatesAction from '../../../actions/interviewscheduler/get_candidates';
import showPanelAction from '../../../actions/interviewscheduler/get_panel';

let dispatch;
let history;
let selectedCanId;
let selectedpanId;

const TechShareandschedule = (props) => {

    dispatch = useDispatch();
    history = useHistory();
    //candidate
    let candList = useSelector(state => state.InterviewReducer.candidates);
    console.log("candList: ", candList);
    React.useEffect(() => {
        candidateList()
    }, []);

    const candidateList = () => {
        dispatch(showcandidatesAction())
    }

    if (!Array.isArray(candList)) {
        candList = [];
        console.log("Set candList to blank array");
    }
    //panel
    let panList = useSelector(state => state.InterviewReducer.panels);
    console.log("panList: ", panList);
    React.useEffect(() => {
        panelList()
    }, []);

    const panelList = () => {
        dispatch(showPanelAction())
    }

    if (!Array.isArray(panList)) {
        panList = [];
        console.log("Set panList to blank array");
    }

    return (
        // All Final Operations and Functions
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

        }}>
            <Jumbotron style={{ width: 600 }}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formGroupText">
                        <Form.Label>Share Candidate and Shecdule Interview</Form.Label>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formBasicPrimarySkills">
                        <Form.Label>Candidate ID</Form.Label>
                        <Form.Control as="select" id="candidate" name="candidate" onChange={handleChangecandidate}>
                            {renderCandidates(candList)}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formBasicPrimarySkills">
                        <Form.Label>Panel ID</Form.Label>
                        <Form.Control as="select" id="panel" name="panel" onChange={handleChangepanel}>
                            {renderpanels(panList)}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formBasicName">
                        <Form.Label>locations</Form.Label>
                        <Form.Control type="text" id="loc" name="loc" />
                    </Form.Group>

                    <Form.Group controlId="formBasicName">
                        <Form.Label>Select Date</Form.Label>
                        <Form.Control type="date" name="date" placeholder="Date of Birth" id="date" />
                    </Form.Group>

                    <Table size="sm">
                        <tbody id="table_content">
                            <tr>
                            
                                <td>
                                    <Form.Group controlId="formBasicName">
                                        <Form.Label><h6><b>Start Time</b> </h6></Form.Label>
                                        <Form.Control type="time" id="start" name="start" />
                                    </Form.Group>

                                </td>
                             
                                <td>

                                    <Form.Group controlId="formBasicName">
                                        <Form.Label><h6><b>End Time </b></h6></Form.Label>
                                        <Form.Control type="time" id="end" name="end" />
                                    </Form.Group>


                                </td>
                            </tr>
                        </tbody>
                    </Table>

                    <Form.Group controlId="formBasicExperience">
                        <Form.Label>Tech Interview Rating</Form.Label>
                        <Form.Control as="select" id="rate" name="rate">
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </Form.Control>

                    </Form.Group>
                   
                    <Form.Group controlId="formBasicName">
                            <Form.Label> Final Status </Form.Label>
                            <Form.Control as="select" id="status" name="status">
                                <option>Pending</option>
                                <option>Technical Completed</option>
                                <option>HR Completed</option>
                            </Form.Control>
    
                        </Form.Group>
                               

                        <Form.Group controlId="formBasicButton">
                    <Button variant="dark" type="submit">   SCEDULE TECHNICAL INTERVIEW </Button>
                    &nbsp; &nbsp;    
                    <Button variant="primary" type="reset">Reset </Button>
                    </Form.Group>
                </Form>
            </Jumbotron>
        </div>
    );
}

function handleChangecandidate(event) {
    selectedCanId = event.target.value
    console.log("selected candidate: " + selectedCanId);
}

function handleChangepanel(event) {
    selectedpanId = event.target.value
    console.log("selected panel member: " + selectedpanId);
}


function renderCandidates(candList) {
    console.log("candList: ", candList);
    //console.log("deptList[0].deptId: ", deptList[0].deptId);
    return candList.map((candidate) => {
        const { candidateid } = candidate //destructuring //candidte id 
        return (
            <option key={candidateid} value={candidateid}>{candidateid}</option>
        )
    })
}


function renderpanels(panList) {
    console.log("panelList: ", panList);
    //console.log("deptList[0].deptId: ", deptList[0].deptId);
    return panList.map((panel, index) => {
        const { panelid } = panel //destructuring //candidte id 
        return (
            <option key={panelid} value={panelid}>{panelid}</option>
        )
    })
};

function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const selectedCanId = data.get('candidate');
    console.log("candidateid input  : ", selectedCanId);
    const selectedpanId = data.get('panel');
    const locations = data.get('loc');
    console.log("Location input  : ", locations);
    const date = data.get('date');
    const techrating = data.get('rate');
    const finalstatus = data.get('status');
    const start_time = data.get('start');
    const end_time = data.get('end');
    if (locations === '' || locations === null) {
        alert("Entries should not be blank");
        return;
    }
    const interviewObj = new InterviewScheduler(selectedCanId, selectedpanId, locations, date, techrating, finalstatus, start_time, end_time,);
    console.log("Interview Object : ", interviewObj);
    dispatch(addTechInterviewAction(interviewObj, selectedCanId, selectedpanId));
    history.push('/admin');
    alert("Technical Interview Sheduled Successfully !");
}


















export default TechShareandschedule;



/*
 getPickerValue = value => {
        console.log(value);
    }
    ---------------
 <Form.Group controlId="formBasicName">
                        <Form.Label>Start Time :</Form.Label>

                        <MDBCol md="3">
                        <MDBTimePicker id="timePicker" label="24hrs format" hours={12} minutes={0} hoursFormat={24} getValue={this.getPickerValue} />
                       </MDBCol>

                        <Form.Control/>
                    </Form.Group>

-------------------------

 <TimePicker
          onChange={this.onChange}
          value={this.state.time}
        />
---------------
 <Form.Group controlId="formBasicExperience">
                    <Dropdown as={ButtonGroup}>
    <Dropdown.Toggle id="dropdown-custom-1">Technical Interview Rating</Dropdown.Toggle>
    <Dropdown.Menu className="super-colors">
      <Dropdown.Item eventKey="1">1</Dropdown.Item>
      <Dropdown.Item eventKey="2">2</Dropdown.Item>
      <Dropdown.Item eventKey="3" active>
        Active Item
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  --------------
  normal button:

   <Button variant="dark" type="submit">
                        SCEDULE AN INTERVIEW
                    </Button>
*/