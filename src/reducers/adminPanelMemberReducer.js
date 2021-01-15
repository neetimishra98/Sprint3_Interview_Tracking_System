 const PanelMemberReducer = (state = { panelmembers: [] }, action) => {
        switch (action.type) {
    
            // JUST ADD ALL CASES OF REDUCER HERE....
    
            //CASE TO SHOW PANEL MEMBERS
            case 'SHOW_PANELMEMBER':
                state.panelmembers = action.payload;
                console.log('SHOW_PANELMEMBER', state.panelmembers);
                return state;
    
            //CASE TO DELETE PANEL MEMBER
            case 'DELETE_PANELMEMBER':
                state.panelmembers = action.payload;
                console.log('DELETE_PANELMEMBER:', state.panelmembers);
                return state;
    
            default:
                return state;
    
        }
    }
    export default PanelMemberReducer;