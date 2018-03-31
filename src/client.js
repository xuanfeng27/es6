/**
 * Created by zll on 2018/3/31.
 */

import {applyMiddleware, createStore} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import axios from 'axios'

const initState = {isFetch:false,fetched:false,error:null,data:[]}
const reducer = (state=initState,action)=>{
    switch (action.type){
        case 'FETCH_USERS_START':{
            return {...state,isFetch:true}
            break;
        }
        case 'RECEIVE_SUCESS':{
            return {...state,isFetch:false,fetched:true,data:action.payload}
            break;
        }
        case 'ERR':{
            return {...state,error:action.err}
            break;
        }
        default:
            return state
    }
}

const middleware = applyMiddleware(thunk, logger)
const store = createStore(reducer,middleware)


store.dispatch((a)=>{
    a({type:'FETCH_USERS_START'})
    axios.get('http://rest.learncode.academy/api/wstern/users')
        .then((res)=>{
            a({type:'RECEIVE_SUCESS',payload:res.data})
        })
        .catch((err)=>{
            a({type:'ERR',err:err})
        })
})