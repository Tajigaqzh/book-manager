const request = require('request');

function reqPme(options) {
    return new Promise((resolve, reject) => {
        request(options, (error, response, body) => {
            if (error) {
                reject(error);
            }
            resolve(body);
        })
    }).catch(error => console.log('caught', error));  //捕获异常

}
module.exports = reqPme
