import { useDispatch } from 'react-redux';
import addTechInterviewAction from '../actions/add_techinterview';

const AddTechInterview = (props) => {
    const dispatch = useDispatch();
    dispatch(addTechInterviewAction());
};

export default AddTechInterview;