import { render } from '@testing-library/react';
import React, { useState } from 'react'
import { Form, Table, Jumbotron, Button, Alert } from 'react-bootstrap'

import { useDispatch, useSelector } from 'react-redux';
import SurrenderAsHRAction from '../../../actions/panelmember/surrender_as_hr';

const SurrenderAsHRPanel = (props) => {

    var pathVar = null;



    let panelMember = useSelector((state)=>state.HRReducer.panelmembers);

    let dispatcher = useDispatch();
    React.useEffect(()=>SurrenderAsHRAction_Func(), [])
        const SurrenderAsHRAction_Func = () => {
            dispatcher(SurrenderAsHRAction(pathVar));
        }
    
    const handleSubmit = (event) =>{ 
        pathVar = document.getElementById("pathVar").value;
        dispatcher(SurrenderAsHRAction(pathVar));
        //renderData(panelMember);
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
                        <Form.Label>Enter your Panel ID</Form.Label>
                        <Form.Control id="pathVar" type="text" placeholder="Panel ID" />
                    </Form.Group>
                    <Button variant="dark" type="button" call onClick={handleSubmit}>
                        Surrender
                    </Button>
                    <hr></hr>
                        {renderData(panelMember)}
                </Form>
            </Jumbotron>
        </div>
    );

    //ALERT
    function AlertPanelMemberNotFound() {
        const [show, setShow] = useState(true);
        console.log(show, setShow);
        if (show) {
          return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
              <Alert.Heading>Panel Member Not Found</Alert.Heading>
              <p>
                Panel Member with the mentioned panel id was not found. Maybe you entered wrong panel id. Please check once!
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

    function renderData(panelMember) {   
        console.log("panel member dispatcher object returned from the server : ", panelMember);
        if(panelMember!==undefined && panelMember!==null && panelMember.length!==0){
            console.log("Surrendered successfully!");
            return(
                <div>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Panel ID</th>
                            <th>Location</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{panelMember.panelid}</td>
                            <td>{panelMember.location}</td>
                            <td>{panelMember.type}</td>
                        </tr>
                    </tbody>
                </Table>
                <Alert><Alert.Heading>Surrendered Successfully!</Alert.Heading></Alert>
                </div>
            );
        }
        
        if(panelMember!==undefined && panelMember===null){
            //return(<Box/>);
            console.log("called the alert");
            return(<AlertPanelMemberNotFound show="true"/>);
        }
        
    }        

}

export default SurrenderAsHRPanel;