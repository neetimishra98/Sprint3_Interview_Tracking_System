import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import UserLoginAction from '../actions/loginAction';
import Login from '../models/Login';
import { Form, Table, Jumbotron, Button } from 'react-bootstrap';
import {} from '../../src/index.css';

let dispatch;
let history;
let email; 
let password;

 
export const MultipleLoginComponent = (props) =>{
    dispatch = useDispatch();
    history = useHistory();

    return (
        // All Final Operations and Functions
        <div>
             <Jumbotron style={{width: 600, height:400,textAlign:"center", backgroundColor:'rgba(15,15,15,0.4)', filter: 'blur(10)', color: 'white'}}>

                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formGroupText">
                        <Form.Label>Login</Form.Label>
                    </Form.Group>

                    <Form.Control size="sl" as="select" name="role">
                        <option>Role</option>
                        <option>Administrator</option>
                        <option>Technical</option>
                        <option>Human Resources</option>
                    </Form.Control>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Enter Email</Form.Label>
                        <Form.Control type="text" id="Email" name="email" placeholder="Enter Email" onBlur={validateUserEmail}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Enter Password</Form.Label>
                        <Form.Control type="password" id="Password" name="pwd" placeholder="Enter Password" onBlur={validateUserPassword}/>
                    </Form.Group>

                    
                    <Form.Group controlId="formBasicButton">
                    <Button variant="success" type="submit">LOG IN </Button>
                    </Form.Group>

                    
                </Form>
            </Jumbotron>
        </div>
    );

}

function validateUserEmail(event)
 {
     const data = event.target.value;

     let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
     let str = data;

     if(regex.test(str) && str != "" && str != null)
     {
     }
     else
     {
         alert("Enter valid Email");
     }
 }

 function validateUserPassword(event)
 {
     const data = event.target.value;

     let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
     let str = data;

     if(regex.test(str) && str != "" && str != null)
     {
     }
     else
     {
         alert("Enter valid password and Password must contain a number.");
     }
 }
function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const emailId = data.get('email');
    const password = data.get('pwd');
    const role = data.get('role');
console.log(role);
    const loginObj = new Login(emailId, password,role);
    dispatch(UserLoginAction(loginObj)).then(response => {
        alert("Login Successful!!");
        if(role==="Administrator"){
            history.push('/admin');

        }
        else if(role==="Technical"){
            history.push('/tech');

        }
        else if(role==="Human Resources"){
            history.push('/hr');

        }else{

            history.push('/home');
        }
     })
     .catch(error => {
         alert("Invalid Credentials");
        return Promise.reject(error.response)
     });;
}
export default MultipleLoginComponent;