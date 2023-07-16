const bcrypt = require("bcrypt");

const encode = (myPlaintextPassword) => {
    return new Promise((resolve, reject) => {
        console.log("encode",myPlaintextPassword)
        //第二个参数是盐
        bcrypt.hash(myPlaintextPassword, 10, function (err, hash) {
            if(err){

                reject(err)
            }else{
                //成功则返回加密后的hash值
                resolve(hash)
            }
        })
    })
}

const compare = (raw,hash)=>{
    return new Promise((resolve,reject)=>{
        bcrypt.compare(raw,hash,(err,result)=>{
            if(err){
                reject(err)
            }else{
                resolve(result)
            }
        })
    })
}
module.exports = {encode,compare}
