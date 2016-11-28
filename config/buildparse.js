/**
 * @file 解析build命令
 */
'use strict';

var childProcess = require('child_process');

// 默认选择OL环境
var envFlag = process.argv[2] || 'ol';
var argTemp = [].slice.call(process.argv, 3);
var argList = [];
// 命令参数
argTemp.forEach(function (item) {
    argList.push('--', item);
});
argList.unshift('run', envFlag);

childProcess.spawnSync('npm', argList, {
    cwd: process.cwd(),
    env: process.env,
    stdio:  'inherit',
    shell:  true
});
