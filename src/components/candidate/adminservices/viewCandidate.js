import { Form, Table, Jumbotron, Button } from 'react-bootstrap'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import viewByAllAction from '../../../actions/candidate/adminactions/viewByAllAction'
import viewByNameAction from '../../../actions/candidate/adminactions/viewByNameAction'
import viewByLocationAction from '../../../actions/candidate/adminactions/viewByLocationAction'
import viewByQualificationAction from '../../../actions/candidate/adminactions/viewByQualificationAction'
import viewByDesignationAction from '../../../actions/candidate/adminactions/viewByDesignationAction'
import viewByPrimarySkillsAction from '../../../actions/candidate/adminactions/viewByPrimarySkillsAction'
import viewByIdAction from '../../../actions/candidate/adminactions/viewByIdAction'

let dispatch;
const ViewCandidate = () => {

    let candidateList = useSelector(state => state.CandidateReducer.candidates);
  
   dispatch = useDispatch();

  React.useEffect(() => {
      CandidateList()
    }, []);
  
    const CandidateList = () => {
      //dispatch()
    }

  console.log("candidateListsssssssssssssss: ", candidateList);
  if(!Array.isArray(candidateList)) {
      candidateList = [candidateList];
      console.log("Set candidateList to blank array");
  }


    return (
        // All Final Operations and Functions
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Jumbotron style={{ width: 700 }}>
                <Form onSubmit={handleSearch}>
                    <Form.Group controlId="formGroupText" >
                        <Form.Label><b>View Candidate Details</b></Form.Label>
                    </Form.Group>

                    <Form.Group controlId="formBasicView">
                        <Form.Label for="view">View By</Form.Label>
                        <Form.Control as="select" id="view">
                            <option value="All">All</option>
                            <option value="Name">Name</option>
                            <option value="Location">Location</option>
                            <option value="Qualification">Qualification</option>
                            <option value="Designation">Designation</option>
                            <option value="Primary Skills">Primary Skills</option>
                            <option value="ID">ID</option>
                        </Form.Control>

                        <Form.Group controlId="formBasicName" >
                            <Form.Label>Enter Value</Form.Label>
                            <Form.Control type="text" id="name" name="name" placeholder="Enter Value" />
                        </Form.Group>

                        <Form.Group>
                            <Button variant="dark" type="submit">
                                View
                    </Button>
                        </Form.Group>

                    </Form.Group>
                    <Table striped bordered hover variant="dark" size="sm">
                        <thead>
                            <tr>
                                
                                <th>ID</th>
                                <th>Candidate Name</th>
                                <th>Location</th>
                                <th>Qualification</th>
                                <th>Designation</th>
                                <th>Experience</th>
                                <th>Primary Skills</th>
                                <th>Secondary Skills</th>
                                <th>Notice Period</th>
                            </tr>
                        </thead>
                        <tbody>
                        {renderTableData(candidateList)}
                        </tbody>
                    </Table>

                </Form>
            </Jumbotron>
        </div>
    );
}

function renderTableData(candidateList) {
    console.log("candidateList: ", candidateList);
    return candidateList.map((candidate, index) => {
       const {candidateid, candidatename, location, qualification, designation, experience, primaryskills, secondaryskills, noticeperiod} = candidate //destructuring
       return (
          <tr key={candidateid}>
             <td>{candidateid}</td>
             <td>{candidatename}</td>
             <td>{location}</td>
             <td>{qualification}</td>
             <td>{designation}</td>
             <td>{experience}</td>
             <td>{primaryskills}</td>
             <td>{secondaryskills}</td>
             <td>{noticeperiod}</td>
          </tr>
       )
    })
  };
  
  
  
  function handleSearch(event) {
    event.preventDefault();
    const data = new FormData(event.target);
   
    console.log("In handle submit:",data)
    const value = data.get('name');
  
   var e = document.getElementById("view");
  var selected = e.options[e.selectedIndex].value;
   console.log("value :",value);
   console.log("view selected",selected);
    if(selected==="All")
    {
        dispatch(viewByAllAction());
    }else if(selected==="Name")
    {
        
      dispatch(viewByNameAction(value));
    }else if(selected==="Location")
    {
      dispatch(viewByLocationAction(value));
    }else if(selected==="Qualification")
    {
      dispatch(viewByQualificationAction(value));
    }
    else if(selected==="Designation")
    {
      dispatch(viewByDesignationAction(value));
    }
    else if(selected==="Primary Skills")
    {
      dispatch(viewByPrimarySkillsAction(value));
    }
    else if(selected==="ID")
    {
      console.log("IDeeeeeeeeeee",value);
      dispatch(viewByIdAction(value));
    }
    
  }

export default ViewCandidate;