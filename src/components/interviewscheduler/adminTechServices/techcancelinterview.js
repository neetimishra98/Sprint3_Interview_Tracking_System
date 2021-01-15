import React, { useState } from 'react'
import { Form, Table, Jumbotron, Button, Alert } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import CancelInterviewAction from '../../../actions/interviewscheduler/cancelinterview_action';


const TechCancelInterview = (props) => {

    var pathVar = null;
    let interview = useSelector((state)=>state);
    let dispatcher = useDispatch();
    React.useEffect(()=>CancelInterviewAction_Function(), [])
        const CancelInterviewAction_Function = () => {
            dispatcher(CancelInterviewAction(pathVar));
        }
    
    const handleSubmit = (event) =>{ 
        pathVar = document.getElementById("path").value;
        console.log(pathVar);
        dispatcher(CancelInterviewAction(pathVar));
        renderData(interview);
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
                        <Form.Control type="text" placeholder="Interview Id" id="path"/>
                        </Form.Group>
                        <Button variant="dark" type="button" call onClick={handleSubmit}>
                            Cancel
                        </Button>
                        <hr></hr>
                        {renderData(interview)}
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

    function renderData(interview) {   
        console.log("interview member dispatcher object returned from the server : ", interview);
        if(interview!==undefined && interview!==null){
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
        if(interview!==undefined && interview===null){
            console.log("called the alert");
            return(<AlertInterviewNotFound show="true"/>);
        }
    }        
}

export default TechCancelInterview;