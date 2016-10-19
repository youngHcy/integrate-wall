

var request = require('request');
var md5 = require('blueimp-md5');


/**
 * 将List转换为Hash对象
 * @param list
 * @returns {{}}
 */
exports.list2Hash = function list2Hash(list){

    var hash = {};

    (list || []).forEach(function (v) {
        hash[v] = v;
    });

    return hash;
};

/**
 * 请求数据做
 * @param requestData
 * @returns {*}
 */
exports.signData = function signData(requestData) {

    var requestDate = (new Date).toISOString().split('T')[0];
    var requestDataString = Object.getOwnPropertyNames(requestData).map(function (vKey) {
            return [vKey, '=', requestData[vKey]].join('');
        }).join('') + 'openplatform' + requestDate;
    // SIGN
    requestData.sign = md5(requestDataString);

    // console.info('\nDBUG:', 'Sign Data: ', requestDataString, requestData.sign);
    return requestData;
};

/**
 * 获取本机地址
 */
exports.getLocalAddr = function() {

    var networkInterfaces = require("os").networkInterfaces();
    var matches = [];

    Object.keys(networkInterfaces).forEach(function (item) {
        networkInterfaces[item].forEach(function (address) {
            if (address.internal === false && address.family === "IPv4") {
                matches.push(address.address);
            }
        });
    });
    return matches;
};

