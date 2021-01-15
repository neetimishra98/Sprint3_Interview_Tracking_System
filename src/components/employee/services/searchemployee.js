  
import { render } from '@testing-library/react';
import React, { useState } from 'react'
import { Form, Table, Jumbotron, Button, Alert } from 'react-bootstrap'

import { useDispatch, useSelector } from 'react-redux';
import SearchEmployeeAction from '../../../actions/employee/searchemployee_action'


const SearchEmployee = (props) => {

    var pathVar = null;
    let employee = useSelector((state)=>state.PanelMemberReducer);
    let dispatcher = useDispatch();
    React.useEffect(()=>SearchEmployeeAction_Function(), [])
    const SearchEmployeeAction_Function = () => {
            dispatcher(SearchEmployeeAction(pathVar));
    }
    
    const handleSubmit = (event) =>{ 
        pathVar = document.getElementById("pathVariable").value;
        dispatcher(SearchEmployeeAction(pathVar));
        renderData(employee);
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
                        <Form.Label>Search by valid name/id</Form.Label>
                        <Form.Control id="pathVariable" type="text" placeholder="Name or Employee ID" />
                    </Form.Group>
                    <Button variant="dark" type="button" call onClick={handleSubmit}>
                        Search
                    </Button>
                    <hr></hr>
                        {renderData(employee)}
                </Form>
            </Jumbotron>
        </div>
    );

    //ALERT
    function AlertEmployeeNotFound() {
        const [show, setShow] = useState(true);
        console.log(show, setShow);
        if (show) {
          return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
              <Alert.Heading>Employee Not Found</Alert.Heading>
              <p>
                Employee with the mentioned name or id was not found. Maybe you entered wrong name/id. Please check once!
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

    function renderData(employee) {   
        console.log("employee dispatcher object returned from the server : ", employee);
        if(employee!==undefined && employee!==null){
            return(
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                         
                        </tr>
                    </tbody>
                </Table>
            );
        }
        if(employee!==undefined && employee===null){
            console.log("called the alert");
            return(<AlertEmployeeNotFound show="true"/>);
        }
    }        
}


export default SearchEmployee;