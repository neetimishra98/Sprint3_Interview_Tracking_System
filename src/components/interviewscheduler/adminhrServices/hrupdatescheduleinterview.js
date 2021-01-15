import React from 'react'
import { Form, Table, Jumbotron, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import UpdateHRInterviewScheduleAction from '../../../actions/interviewscheduler/updatehrinterviewschedule_action';

const TechUpdateHRInterview = (props) => {

    var pathVar = null;
    let hrupdateinterview = useSelector((state)=>state);
    let dispatcher = useDispatch();
    React.useEffect(()=>UpdateHRInterviewScheduleAction_Function(), [])
        const UpdateHRInterviewScheduleAction_Function = () => {
            dispatcher(UpdateHRInterviewScheduleAction(pathVar));
        }
    
    const handleSubmit = (event) =>{ 
        pathVar = document.getElementById("paths").value;
        console.log(pathVar);
        dispatcher(UpdateHRInterviewScheduleAction(pathVar));
        renderData(hrupdateinterview);
    }

    return (
        // All Final Operations and Functions
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <Jumbotron style={{width: 500}}>
                <Form>
                <Form.Group controlId="formGroupText">
                        <Form.Label>Enter Interview ID to Update</Form.Label>
                        <Form.Control type="text" placeholder="Interview Id" id="paths"/>
                        </Form.Group>
    
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Select Date</Form.Label>
                        <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                    </Form.Group>


                    <Form.Group controlId="formBasicName">
                        <Form.Label>Start Time </Form.Label>
                        <Form.Control type="time" />
                    </Form.Group>

                    <Form.Group controlId="formBasicName">
                        <Form.Label>End Time </Form.Label>
                        <Form.Control type="time" />
                    </Form.Group>

                    <Form.Group controlId="formBasicName">
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    
                    <Table striped bordered hover size="sm">
                        <thead>
                           
                        </thead>
                        <tbody id="table_content">
                        </tbody>
                    </Table>
                    <Button variant="dark" type="button" call onClick={handleSubmit}>
                            Update
                        </Button>
                        <hr></hr>
                        {renderData(hrupdateinterview)}
                </Form>
            </Jumbotron>
        </div>
    );

    function renderData(hrupdateinterview) {   
        console.log("interview member dispatcher object returned from the server : ", hrupdateinterview);
        if(hrupdateinterview!==undefined && hrupdateinterview!==null){
            return(
                <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        
                    </tr>
                </thead>
               
            </Table>
            );
        }
    }        
}

export default TechUpdateHRInterview;