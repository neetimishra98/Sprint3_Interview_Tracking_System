import React from 'react'
import { Form, Table, Jumbotron, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import UpdateInterviewScheduleAction from '../../../actions/interviewscheduler/updateinterviewschedule_action';

const TechUpdateInterview = (props) => {

    var pathVar = null;
    let updateinterview = useSelector((state)=>state);
    let dispatcher = useDispatch();
    React.useEffect(()=>UpdateInterviewScheduleAction_Function(), [])
        const UpdateInterviewScheduleAction_Function = () => {
            dispatcher(UpdateInterviewScheduleAction(pathVar));
        }
    
    const handleSubmit = (event) =>{ 
        pathVar = document.getElementById("paths").value;
        console.log(pathVar);
        dispatcher(UpdateInterviewScheduleAction(pathVar));
        renderData(updateinterview);
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
                        {renderData(updateinterview)}
                </Form>
            </Jumbotron>
        </div>
    );

    function renderData(updateinterview) {   
        console.log("interview member dispatcher object returned from the server : ", updateinterview);
        if(updateinterview!==undefined && updateinterview!==null){
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

export default TechUpdateInterview;