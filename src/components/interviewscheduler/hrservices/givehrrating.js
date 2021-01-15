import {render} from '@testing-library/react'
import GiveHrRatingAction from '../../../actions/interviewscheduler/givehrrating_action';
import React, { useState } from 'react'
import { Form, Table, Jumbotron, Button, Alert } from 'react-bootstrap'

import { useDispatch, useSelector } from 'react-redux';


const GiveHrRating = (props) => {

    var hrratinglist = null;
    let interviewmember = useSelector((state)=>state.HRReducer.ratinglistcandidate);
    let dispatcher = useDispatch();
    React.useEffect(()=>GiveHrRatingAction_Function(), [])
        const GiveHrRatingAction_Function = () => {
            dispatcher(GiveHrRatingAction(hrratinglist));
    
        }
    
    const handleSubmit = (event) =>{ 
        hrratinglist = document.getElementById("interviewidforhrrating").value;
        dispatcher(GiveHrRatingAction(hrratinglist));
        renderData(interviewmember);
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
                        <Form.Label>Give HrRating to a Candidate by Interviewid</Form.Label>
                        <Form.Control   id="interviewidforhrrating" type="text"   placeholder="Interview ID" />
                        </Form.Group>
                    <Button variant="dark" type="button" call onClick={handleSubmit}>
                        SHOW
                    </Button>
                    <hr></hr>
                        {renderData(interviewmember)}
                </Form>
            </Jumbotron>
        </div>
    );

    //Alert
    function AlertMemberNotFound() {
        const [show, setShow] = useState(true);
        console.log(show, setShow);
        if (show) {
          return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
              <Alert.Heading>Interview Not Found</Alert.Heading>
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
    function renderData(interviewmember) {   
        console.log("interview member with rating dispatcher object returned from the server : ", interviewmember);
        if(interviewmember!==undefined && interviewmember!==null  && interviewmember.length!==0){

            return(
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Interview ID</th>
                            <th>Location</th>
                            <th>Date</th>
                            <th>Start Time</th>
                            <th>End Time</th>
                            <th>HrRating</th>
                            <th>Final Status</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{interviewmember.data.interviewid}</td>
                            <td>{interviewmember.data.location}</td>
                            <td>{interviewmember.data.date}</td>
                            <td>{interviewmember.data.start_time}</td>
                            <td>{interviewmember.data.end_time}</td>
                            <td>{interviewmember.data.hrrating}</td>
                            <td>{interviewmember.data.finalstatus}</td>
                            
                        </tr>
                        </tbody>
                </Table>
            );
        }

        if(interviewmember!==undefined && interviewmember===null){
            console.log("called the alert");
            return(<AlertMemberNotFound show="true"/>);
        }
    }        
}

export default GiveHrRating;