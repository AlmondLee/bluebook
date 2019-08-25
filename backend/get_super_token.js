//获取url中的参数
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) {
        return unescape(r[2]);
    }
    return null; //返回参数值
}


function getSuperToken () {
    var superToken = '';
    if (getUrlParam('refresh')!=null || $.cookie('super_token') == undefined) {
        superToken = getUrlParam('super_token');
        $.cookie('super_token', superToken, {
            path: '/'
        });
    } else {
        superToken = $.cookie('super_token');
    }

    return superToken;
}
