import { Form, Table, Jumbotron, Button, Modal } from 'react-bootstrap'
import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import GiveTechRatingAction from '../../../actions/interviewscheduler/givetechratingaction'

const GiveTechRating = (props) => {

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
                        <Form.Control type="text" placeholder="Interview ID" id="searchParameter"/>
                    </Form.Group>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <th>Interview ID</th>
                            
                        </thead>
                        <tbody id="table_content">
                        </tbody>
                    </Table>
                    <Button variant="dark" type="submit" call>
                        Search
                    </Button>
                </Form>
            </Jumbotron>
        </div>
    );
}

export default GiveTechRating;