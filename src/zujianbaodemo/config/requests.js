/**
 * @file 配置HTTP请求地址
 */

var requestDomain = '';

if(envMode.MODE_MK){
    // MK环境的域名地址
    requestDomain = envMode.addr;
}else if(envMode.MODE_QA){
    // QA环境的域名地址
    requestDomain = envMode.addr;
}else if(envMode.MODE_OL){
    // OL环境的域名地址
    requestDomain = envMode.addr;
}

export default {
    // DEMO：接口示例
    demoAjax:       requestDomain + '/doc/demo/get',
    // DEMO：获取城市列表
    cityList:   requestDomain + '/tp/tpmis/getcitylist'
};
