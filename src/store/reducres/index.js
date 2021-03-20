import * as Actions from '../actions';


const initialState ={
    people:null
}
function Reducers(state=initialState,actions){
    switch (actions.type) {
        case Actions.PEOPLE_DATA:
            console.log(actions.payload,"inside reducers")
            return {
                ...state,
                people:actions.payload
            };
    
        default:
            return state;
    }
}

export default Reducers;
