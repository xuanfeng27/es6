/**
 * Created by zll on 2018/3/31.
 */
import React,{Component} from 'react'

class List extends Component{
    constructor(props){
        super(props)
        this.state = {
            data : [{value : 1}]
        }
    }

    handleIncrement = ()=> {
        this.state.data.push({value:Math.random().toFixed(1)*10})
        this.setState({
            data:this.state.data
        })
    }

    handleDecrement = ()=> {
        this.state.data.pop(this.state.data.length-1)
        this.setState({
            data:this.state.data
        })
    }

    render(){
        return(
            <div>
                <button onClick={this.handleIncrement}>+</button><br/>
                <button onClick={this.handleDecrement}>-</button><br/>
                <ul>
                    {this.state.data.map((item,idx)=>(
                        <input key={idx} value={item.value} readOnly={true}/>
                    ))}
                </ul>
            </div>
        )
    }
}
export default List;