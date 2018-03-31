/**
 * Created by zll on 2018/3/31.
 */
import React, { Component } from 'react'

class Son2 extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <h1>{this.props.msg}</h1>
        )
    }
}


export default Son2