/**
 * Created by zll on 2018/3/31.
 */
import React, { Component } from 'react';
import Son from './Son'
import Son2 from './Son2'

class Father extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:'father',
            msg:''
        }
    }
    message = (a)=>{
        console.log(a)
        this.setState({
            msg:a
        })
    }


    render(){
        return(
            <div>
                <Son ref={(myMethod)=>{this.myMethod = myMethod}}  name={this.state.name} method = {(parm)=>{this.message(parm)}}/>
                <Son2 msg={this.state.msg}/>
            </div>
        )
    }
}
export default Father;