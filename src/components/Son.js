/**
 * Created by zll on 2018/3/31.
 */
import React, {Component} from 'react'
class Son extends Component{
    constructor(props){
        super(props)
    }

    handleClick = () => {
        this.props.method('sonsonson')
    }


    render(){
        return(
            <div>
                {this.props.name}<br/>
                <button onClick = {this.handleClick}>Son button</button>
            </div>
        )
    }
}
export default Son;