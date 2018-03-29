/**
 * Created by zll on 2018/3/29.
 */

/**
 * function less
 * */
import React, { Component } from 'react'

for(var i = 0; i< 5; i++){
    (function (a) {
        setTimeout(function () {
            console.log(a)
        },1000*a)
    })(i)
}

function Animal(name) {
    this.name = name
    //浪费内存
    // this.eat = function () {
    //
    // }
}

Animal.prototype.eat = function () {
    
}


var cat = new Animal('cat')

console.log('cat',cat)

class Layout extends Component{
    constructor(props){
        super(props)
        this.state = {
            count  : 0
        }
    }

    handleIncrement =()=>{
        this.setState(function (prevState) {
            return { count : prevState.count +1}
        })
        this.setState(function (prevState) {
            return { count : prevState.count +1}
        })


    }

    render(){
        return(<main>
            count : {this.state.count}
            <button onClick = {this.handleIncrement}>+++++++</button>
        </main>)
    }
}

export default Layout