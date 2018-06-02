/**
 * Created by 刘汪洋 on 2016/7/6.
 */

/**
 * 初始化对话框div
 * @returns {*|jQuery|HTMLElement}
 */
function initDialogDiv() {
    if(!$("#dialogBox")[0])//如果不存在创建
    {
        $('body').append('<div id="dialogBox"></div>');

    }
    return $("#dialogBox");
}


/**
 * 标准对话框
 * @param mytitle 标题
 * @param mycontent 内容
 */
function stantardDialog(mytitle,mycontent)
{
    initDialogDiv().dialogBox({
        title: mytitle,
        hasClose: true,
        content:mycontent
    });

}
/**
 * 封装弹窗方法
 * @param time 显示时长
 * @param mytitle 标题
 * @param mycontent 内容
 */
function autoCloseDialog(time,mytitle,mycontent) {
    initDialogDiv().dialogBox({
        autoHide: true,
        time: time,
        title: mytitle,
        content: mycontent
    });
}
/**
 * 遮罩类型弹窗封装
 * @param mytitle 标题
 * @param mycontent 内容
 */
function maskDialog(mytitle,mycontent) {

    initDialogDiv().dialogBox({
        hasClose: true,
        hasMask: true,
        title: mytitle,
        content:mycontent
    });

}

/**
 * 封装按钮弹窗
 * @param myConfirmValue 确认按钮名称
 * @param confirmfun 确认按钮方法
 * @param myCancelValue 取消按钮名称
 * @param mytitle 标题
 * @param mycontent 内容
 */
function btnDialog(myConfirmValue,confirmfun,myCancelValue,mytitle,mycontent) {

    initDialogDiv().dialogBox({
        hasClose: true,
        hasBtn: true,
        confirmValue: myConfirmValue,
        confirm: confirmfun,
        cancelValue: myCancelValue,
        title: mytitle,
        content:mycontent
    });
}

