/**
 * Created by zll on 2018/3/31.
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { render } from 'react-dom'
import {applyMiddleware, createStore } from 'redux'
import {Provider,connect} from 'react-redux'
import thunk from 'redux-thunk'
import axios from 'axios'

//
//
// mapStateToProps会订阅 Store，每当state更新的时候，就会自动执行，重新计算 UI 组件的参数，从而触发 UI 组件的重新渲染。
//
// /

class Counter extends Component {
    constructor(props){
        super(props)
    }
    render(){
        const {value,onIncreaseClick} = this.props
        return(
            <div>
                {value.length>0? value.map((item,idx)=>(<p key={idx}>{item.id}</p>)) :''}
                <button onClick={onIncreaseClick}>Increase</button>
            </div>
        )
    }
}

// Counter.propTypes = {
//     value: PropTypes.number,
//     onIncreaseClick: PropTypes.func
// }

//Action
const increaseAction = (a)=>{
    a({type:'FETCH_USERS_START'})
    axios.get('http://rest.learncode.academy/api/wstern/users')
        .then((res)=>{
            a({type:'RECEIVE_SUCESS',payload:res.data})
        })
        .catch((err)=>{
            a({type:'ERR',err:err})
        })
}

//action creator



//Reducer
const init = {payload:[], isFetch : false, isFetched : false, err : null}
function counter(state = init, action) {
    switch (action.type){
        case 'FETCH_USERS_START':
            return {...state, isFetch: true}
            break;
        case 'RECEIVE_SUCESS':
            return {...state, isFetch: false, isFetched: true, payload : action.payload}
            break;
        case 'ERR':
            return {...state, isFetched : true, err : action.err}
            break;
        default:
            return state
    }
}


//Store
const middleware = applyMiddleware(thunk)
const store = createStore(counter,middleware)

//Map Redux state to component props

function mapStateToProps(state) {
    return {
        value:state.payload
    }
}


//Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick:()=>dispatch(increaseAction)
    }
}


//Connected Component
const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)


render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)
