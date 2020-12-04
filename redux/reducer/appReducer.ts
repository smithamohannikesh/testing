import { InitialState } from "@react-navigation/native";
import CONSTS from '../../consytants/constants'
const initialState={
    users:[],
    user:{
        name:{
            first:"",
            last:"",
        },email:""
    }
   
}
interface Users{
    name:
    {
        first:String,
        last:String
    },
    email:String
}
export const appReducer=(state=initialState,action:any)=>{
    switch(action.type){
        case(CONSTS.GET_USERS):
        const postValue=[...state.users,...action.payload]
        return ({...state,users:postValue})
        default:return state;
    }
}