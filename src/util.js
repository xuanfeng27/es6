/**
 * Created by zll on 2018/3/29.
 */
const deepClone = (obj) =>{
    let o = obj.constructor===Array?[]:{}
    for(let p in obj){
        o[p] = typeof obj[p]==="object"?deepClone(obj[p]):obj[p];
    }
    return o;
}




export { deepClone }