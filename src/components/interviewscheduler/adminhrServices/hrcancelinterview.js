import React, { useState } from 'react'
import { Form, Table, Jumbotron, Button, Alert } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import CancelHRInterviewAction from '../../../actions/interviewscheduler/cancelhrinterview_action';


const HRCancelInterview = (props) => {

    var pathVar = null;
    let hrinterview = useSelector((state)=>state);
    let dispatcher = useDispatch();
    React.useEffect(()=>CancelHRInterviewAction_Function(), [])
        const CancelHRInterviewAction_Function = () => {
            dispatcher(CancelHRInterviewAction(pathVar));
        }
    
    const handleSubmit = (event) =>{ 
        pathVar = document.getElementById("paths").value;
        console.log(pathVar);
        dispatcher(CancelHRInterviewAction(pathVar));
        renderData(hrinterview);
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
                        <Form.Label>Enter Interview ID to Cancel</Form.Label>
                        <Form.Control type="text" placeholder="Interview Id" id="paths"/>
                        </Form.Group>
                        <Button variant="dark" type="button" call onClick={handleSubmit}>
                            Cancel
                        </Button>
                        <hr></hr>
                        {renderData(hrinterview)}
                </Form>
            </Jumbotron>
        </div>
    );

    //ALERT
    function AlertInterviewNotFound() {
        const [show, setShow] = useState(true);
        console.log(show, setShow);
        if (show) {
          return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
              <Alert.Heading>Interview Not Found</Alert.Heading>
              <p>
                Interview with the mentioned id was not found.
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

    function renderData(hrinterview) {   
        console.log("interview member dispatcher object returned from the server : ", hrinterview);
        if(hrinterview!==undefined && hrinterview!==null){
            return(
                <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                       
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {/*<td>{interview.data.interviewid}</td>*/}
                       
                    </tr>
                </tbody>
            </Table>
            );
        }
        if(hrinterview!==undefined && hrinterview===null){
            console.log("called the alert");
            return(<AlertInterviewNotFound show="true"/>);
        }
    }        
}

export default HRCancelInterview;