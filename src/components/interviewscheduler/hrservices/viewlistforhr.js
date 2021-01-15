//Hr Interview Scheduler Services Component : CHECK WARNING.info FOR NOTES.....
import React from 'react'
import { Form, Table, Jumbotron, Button ,Alert} from 'react-bootstrap';
import  { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ShowListForHrAction from '../../../actions/interviewscheduler/showlistforhr_action';



const ViewListForHr = (props) => {

    var hrinterviewlist = null;
    let member = useSelector((state)=>state.HRReducer.viewmemberforhr);
    let dispatcher = useDispatch();
    React.useEffect(()=>ShowListForHrAction_Function(), [])
        const ShowListForHrAction_Function = () => {
            dispatcher(ShowListForHrAction(hrinterviewlist));
        }
    
    const handleSubmit = (event) =>{ 
        hrinterviewlist = document.getElementById("vareab").value;
        dispatcher(ShowListForHrAction(hrinterviewlist));
        renderTableDataHr(member);
    }


    return (

        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Jumbotron style={{ width: 700 }}>
                <Form>
                    <Form.Group controlId="formGroupText">
                        <Form.Label> View Candidate Using interviewid</Form.Label>
                        <Form.Control id="vareab" type="text" placeholder="Interview ID"/>
                        <br></br>
                        <br></br>
                        <Button variant="dark" type="button" call onClick={handleSubmit}>
                            Search
                        </Button>
                    </Form.Group>
                        <tbody id="table_content">
                        {renderTableDataHr(member)}
                        </tbody>
                </Form>
            </Jumbotron>
        </div>
    );


 //ALERT
 function AlertInterviewMemberNotFound() {
    const [show, setShow] = useState(true);
    console.log(show, setShow);
    if (show) {
      return (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Interview Not Found</Alert.Heading>
          <p>
            Interview with the mentioned  id was not found. Maybe you entered id. Please check once!
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

    function renderTableDataHr(member) {   
        console.log("interview member dispatcher object returned from the server : ", member);
        if(member!==undefined && member!==null  && member.length!==0){
            return(
           <Table striped bordered hover size="sm">

                <thead>
                    <tr>
                            <th>Candidate ID</th>
                            <th>Candidate Name</th>
                            <th>Location</th>
                            <th>Qualification</th>
                            <th>Designation</th>
                            <th>Experience</th>
                            <th>Primary<br></br>Skills</th>
                            <th>Secondary <br></br>Skills</th>
                            <th>Notice <br></br>Period</th>
                        </tr>
                        </thead>
                    <tbody>


                <tr>
                    <td>{member.data.candidateid}</td>
                    <td>{member.data.candidatename}</td>
                    <td>{member.data.location}</td>
                    <td>{member.data.qualification}</td>
                    <td>{member.data.designation}</td>
                    <td>{member.data.experience}</td>
                    <td>{member.data.primaryskills}</td>
                    <td>{member.data.secondaryskills}</td>
                    <td>{member.data.noticeperiod}</td>
                </tr>
                </tbody>
                </Table>
            );
        }

            if(member!==undefined && member===null){
                console.log("called the alert");
            return(<AlertInterviewMemberNotFound show="true"/>);
        }
    
    }        
}

export default ViewListForHr;