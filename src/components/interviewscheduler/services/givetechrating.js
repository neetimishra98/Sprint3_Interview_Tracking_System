import { render } from '@testing-library/react';
import React, { useState } from 'react'
import { Form, Table, Jumbotron, Button, Alert } from 'react-bootstrap'

import { useDispatch, useSelector } from 'react-redux';
import GiveTechRatingAction from '../../../actions/interviewscheduler/givetechratingaction'

const GiveTechRating = (props) => {

    var techratinglist = null;
    let interviewmember = useSelector(state => state.TechReducer.ratinglistcandidate);
    let dispatcher = useDispatch();
    React.useEffect(()=>GiveTechRatingAction_Function(), [])
    const GiveTechRatingAction_Function = () => {
            dispatcher(GiveTechRatingAction(techratinglist));
        }
    
    const handleSubmit = (event) =>{ 
        techratinglist = document.getElementById("interviewidforrating").value;
        dispatcher(GiveTechRatingAction(techratinglist));
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
                        <Form.Label>Give TechRating to a Candidate by Interviewid</Form.Label>
                        <Form.Control id="interviewidforrating" type="text" placeholder="Interview ID" />
                        </Form.Group>
                    <Button variant="dark" type="button" call onClick={handleSubmit}>
                        Search
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
        console.log("candidate dispatcher object returned from the server : ", interviewmember);
        if(interviewmember!==undefined && interviewmember!==null){
            return(
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Interview ID</th>
                            <th>Location</th>
                            <th>Date</th>
                            <th>Start Time</th>
                            <th>End Time</th>
                            <th>TechRating</th>
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
                            <td>{interviewmember.data.techrating}</td>
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

export default GiveTechRating;