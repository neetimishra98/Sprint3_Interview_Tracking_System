
import { Form, Table, Jumbotron, Button, Modal } from 'react-bootstrap';

import { render } from '@testing-library/react';
import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import DeletePanelMemberAction from '../../../actions/panelmember/deletepanelmember_action'

const DeletePanelMember = (props) => {

    var pathVar = null;
    let panelMember = useSelector((state) => state.PanelMemberReducer.panelmembers);
    let dispatcher = useDispatch();
    React.useEffect(() => DeletePanelMemberAction_Function(), [])
    const DeletePanelMemberAction_Function = () => {
        dispatcher(DeletePanelMemberAction(pathVar));
    }

    const handleSubmit = (event) => {
        pathVar = document.getElementById("pathVariable").value;
        console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",pathVar);
        dispatcher(DeletePanelMemberAction(pathVar));
        renderData(panelMember);
        console.log(pathVar);
    }

    console.log("PanelMemberList: ", panelMember);
    if (!Array.isArray(panelMember)) {
        panelMember = [];
        console.log("Set Panel Member to blank array");
    }

    return (
        // All Final Operations and Functions
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Jumbotron style={{ width: 600 }}>
                <Form>
                    <Form.Group controlId="formGroupText">
                        <Form.Label for ="pathVariable">Delete by valid Name</Form.Label>
                        <Form.Control id="pathVariable" type="text" placeholder="Employee Name" />
                    </Form.Group>
                    <Button variant="dark" type="button" call onClick={handleSubmit}>
                        Delete
                    </Button>
                    <hr></hr>
                    {renderData(panelMember)}
                </Form>
            </Jumbotron>
        </div>
    );

    //MODAL
    function Box() {
        const [show, setShow] = useState(true);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        return (
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Employee Name Not Found</Modal.Title>
                </Modal.Header>
                <Modal.Body>Entered incorrect or blank name</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        OK
                </Button>
                </Modal.Footer>
            </Modal>
        );
    }

    function renderData(panelMember) {
        console.log("panel member dispatcher object returned from the server : ", panelMember);
        return panelMember.map((panelmember, index) => {
            const Employeeid = panelmember.employeeEntity.employeeid;
            const EmployeeName = panelmember.employeeEntity.name;
            const { panelid, location, type } = panelmember //destructuring
            return (
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>PanelID</th>
                            <th>Location</th>
                            <th>Type</th>
                            <th>EmployeeID</th>
                            <th>EmployeeName</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{panelid}</td>
                            <td>{location}</td>
                            <td>{type}</td>
                            <td>{Employeeid}</td>
                            <td>{EmployeeName}</td>
                        </tr>
                    </tbody>
                </Table>
            )
        });
    }
}

export default DeletePanelMember;