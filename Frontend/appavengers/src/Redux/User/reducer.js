import { LOGIN_FAILED, LOGIN_REQ, LOGIN_SUCC, LOGOUT_FAILED, LOGOUT_REQ, LOGOUT_SUCC, REGISTER_FAILED, REGISTER_REQ, REGISTER_RESET, REGISTER_SUCC } from "./actionTypes";


const init={
    token:'',
    isLoading:false,
    isError:false,
    isRegistered:0
}


 const LoginReducer=(state=init,action)=>{
    switch(action.type){
        case LOGIN_REQ:
            return {
                ...state,
                token:'',
                isLoading:true,
                isError:false,
                isRegistered:0
            }
        case LOGIN_SUCC:
            return{
                ...state,
                token:action.payload,
                isLoading:false,
                isError:false,
                isRegistered:0
            }
        case LOGIN_FAILED:
            return{
                ...state,
                token:'',
                isLoading:false,
                isError:true,
                isRegistered:0
            }    
        case REGISTER_REQ:
            return {
                ...state,
                token:'',
                isLoading:true,
                isError:false,
                isRegistered:0
            }   
        case REGISTER_SUCC:
            return {
                ...state,
                isLoading:false,
                isError:false,
                isRegistered:1
            }      
        case REGISTER_FAILED:
            return {
                ...state,
                isLoading:false,
                isError:true,
                isRegistered:0
            }  
        case REGISTER_RESET:
            return {
                ...state,
                isLoading:false,
                isError:false,
                isRegistered:0
            }
            
            case LOGOUT_REQ:
                return {
                    ...state,
                    isLoading:false,
                    isError:false,
                    isRegistered:1
                }      
            case LOGOUT_SUCC:
                return {
                    ...state,
                    isLoading:false,
                    isError:false,
                    isRegistered:1,
                    token:null,
                }  
            case LOGOUT_FAILED:
                return {
                    ...state,
                    isLoading:false,
                    isError:false,
                    isRegistered:0
                }        
        default :
            return state;
    }
}

export {LoginReducer}