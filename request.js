var request = require('request-promise');
let URLS = process.env.REQUEST_URLS.split(';');
console.log(URLS);
URLS.map((v,i,a)=>{
    setTimeout(()=>{
        request(v).then(res=>{
            res = JSON.parse(res);
            console.log(res.message);
            if(res.code==200){
                console.log(v,'上车成功');
            }else if(res.code==400){
                console.log(v,'失败或已经上车过了');
            }else{
                console.log(v,'上车失败');
            }
        }).catch(err=>{
            console.log(v,'上车失败');
            console.log(err)
        })
    },i+2000)
})
