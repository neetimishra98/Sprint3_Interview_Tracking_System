import { render } from '@testing-library/react';
import React, { useState } from 'react'
import { Form, Table, Jumbotron, Button, Modal, Alert } from 'react-bootstrap'

import { useDispatch, useSelector } from 'react-redux';
import SurrenderAsATechAction from '../../../actions/panelmember/surrender_as_tech_action';

const SurrenderAsTechPanel = (props) => {

    var pathVar = null;
    let panelMember = useSelector((state)=>state.TechReducer.panelmembers);
    let dispatcher = useDispatch();
    React.useEffect(()=>SurrenderAsATechAction_Func(), [])
    const SurrenderAsATechAction_Func = () => {
           dispatcher(SurrenderAsATechAction(pathVar));
    }
    
    const handleSubmit = (event) =>{ 
        pathVar = document.getElementById("pathVariable").value;
        dispatcher(SurrenderAsATechAction(pathVar));
        renderData(panelMember);
        renderData(panelMember);
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
                        <Form.Control id="pathVariable" type="text" placeholder="Panel ID" />
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
    function AlertPanelNotFound() {
        const [show, setShow] = useState(true);
        console.log(show, setShow);
        if (show) {
          return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
              <Alert.Heading>Panel member Not Found</Alert.Heading>
              <p>
                Panel member with the mentioned id was not found. Maybe you entered wrong id. Please check once!
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
            return(
                <div>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Location</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{panelMember.data.panelid}</td>
                            <td>{panelMember.data.location}</td>
                            <td>{panelMember.data.type}</td>
                        </tr>
                    </tbody>
                </Table>
            {/*<Alert><Alert.Heading>Surrendered Successfully!</Alert.Heading></Alert>*/}
            </div>

            );
        }
      
        if(panelMember!==undefined && panelMember===null){
            console.log("called the alert");
            return(<AlertPanelNotFound show="true"/>);
        }
    }        
}

export default SurrenderAsTechPanel;


