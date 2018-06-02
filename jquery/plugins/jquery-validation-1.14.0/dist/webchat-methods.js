/**
 * Created by mingmingruyue on 2016/5/3.
 */
// QQ验证
$.validator.addMethod("isQQ", function(value, element) {
    var qq = /^[1-9]{1}[0-9]{4,11}$/;
    return this.optional(element) || (qq.test(value));
}, "请正确填写您的QQ号码");
//手机号验证
$.validator.addMethod("mobileCN", function(value, element) {
    var tel = /^1[3|4|5|8][0-9]\d{4,8}$/;
    return this.optional(element) || (tel.test(value));
}, "请输入正确的手机号码");

//身份证号验证
$.validator.addMethod("isIdCard", function(value, element) {
    var idCard = /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/;
    return this.optional(element) || (idCard.test(value));
}, "请正确填写您的身份证号");

//时间验证
$.validator.addMethod("after",function(value,element,param ){

    return compare(formatDate( $(param).val()),formatDate(value));
},"<font color='#E47068'>结束日期必须大于开始日期</font>");

//所选日期时间必须是当前日期之后
$.validator.addMethod("afterNow",function(value,element){

    return compare(new Date(),formatDate(value));
},"<font color='#E47068'>活动开始时间必须大于当前时间</font>");


//----------------方法封装-------------------------
/**
 * 格式化日期字符串
 * @param time 日期
 * @returns {string|*|{dist}|XML|void}
 */
function formatDate(time) {
    var reg = new RegExp('-','g');
    return time.replace(reg,'/');//正则替换
}
/**
 * 方法封装
 * @param startTime 开始时间
 * @param endTime 结束时间
 * @returns {boolean}
 */
function compare(startTime,endTime)
{
    startTime = new Date(parseInt(Date.parse(startTime),10));
    endTime = new Date(parseInt(Date.parse(endTime),10));
    return startTime < endTime;
    
}