/**
 * Created by zll on 2018/3/29.
 */
import React,{Component}from 'react';
import style from '../css/Swipe.css'
import { deepClone } from '../util'


console.log('obj',obj)
console.log('o',o)


const log = console.log.bind(console)
class Swipe extends Component{
    constructor(props) {
        super(props);
        this.state = {
            count : 0
        }
    }

    componentDidMount (){
        const self=this;
        setInterval(self.handleMove,2000);
    }

    handleMove = ()=>{
        if(this.warpper){
            this.warpper.style.transform = `translateX(${this.state.count*(-960)}px)`
            this.state.count++;
            if(this.state.count >6){
                this.warpper.style.transform = `translateX(0px)`;
                this.state.count=0;
            }
        }
    }



    render(){
      return(
          <div className={style.container}>
                <ul className={style.content} ref = {(warpper) => { this.warpper = warpper }}>
                    <li className={style.item}>1</li>
                    <li className={style.item}>2</li>
                    <li className={style.item}>3</li>
                    <li className={style.item}>4</li>
                    <li className={style.item}>5</li>
                    <li className={style.item}>6</li>
                </ul>
          </div>
      )
    }
}

export default Swipe