/**
 * Created by zll on 2018/3/31.
 */
export default (state=0,action)=>{
    switch (action.type){
        case 'INCREMENT':
            return state+1
        case 'DECREMENT':
            return state-1
        default:
            return state
    }
}