export default  (state, action)=>{
    switch(action.type){
        case "TOGGLE_BUTTON" :  return { buttonToggler :  action.payload }
    default:  return state;
    
    }

}