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

const quickSort = (arr)=>{
    if(arr.length <=1){
        return arr
    }
    let midIdx = Math.floor(arr.length/2);
    let mid = arr.splice(midIdx,1)[0];
    let left = [],right = [];
    for(let i=0,len=arr.length;i<len;i++){
        if(arr[i]>mid){
            right.push(arr[i])
        }else {
            left.push(arr[i])
        }
    }
    return quickSort(left).concat(mid,quickSort(right))
}

const ajax = (type,url)=>{

    const P = new Promise((reslove,reject)=>{
        const xhr = new XMLHttpRequest();
        const handle = function () {
            if (this.readyState !== 4) {
                return;
            }
            if(xhr.readyState==4&&xhr.status==200){
                reslove(xhr.response)
            }else {
                reject(new Error('sss'))
            }
        }
        xhr.open(type,url,true)
        xhr.onreadystatechange = handle;
        xhr.send(null)
    })
    return P;
}

const foo=(function () {
    var secret = 'secret';
    return {
        get_secret:function () {
            return secret
        },
        new_secret:function (new_secret) {
            secret = new_secret;
        }
    }
}())



export { deepClone ,quickSort, ajax ,foo}