
$.extend($.validator.messages, {
    required: '必选字段',
    remote: '请修正该字段',
    email: '请输入正确的电子邮件',
    url: '请输入合法的网址',
    date: '请输入合法的日期',
    dateISO: '请输入合法的日期 (ISO).',
    number: '请输入正确的手机号码',
    digits: '只能输入整数',
    creditcard: '请输入合法的信用卡号',
    equalTo: '请再次输入相同的值',
    accept: '请输入拥有合法后缀名的字符串',
    maxlength: $.validator.format('请输入一个长度最多是 {0} 的字符串'),
    minlength: $.validator.format('请输入一个长度最少是 {0} 的字符串'),
    rangelength: $.validator.format('请输入正确的手机号码'),
    range: $.validator.format('请输入一个介于 {0} 和 {1} 之间的值'),
    max: $.validator.format('请输入一个最大为 {0} 的值'),
    min: $.validator.format('请输入一个最小为 {0} 的值'),
    agree: 'Please accept our policy'
});
