const initialState =[];
export default function(state = initialState, action){
    switch(action.type){
        case "ADD_DETAIL" :
                let a=0;
                state.map(_s => {
                    if(_s.name == action.payload.name){
                        _s.value=action.payload.value;
                        a=1;
                    }
                })
                if(a){
                    return [...state];
                }else{
                    return [...state, action.payload]
                }
        case "SUBMIT_USER" :
                console.log("Submit user detail ", state)
        default : 
                return state;

    }
    
}