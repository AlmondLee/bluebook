post('/curd_communication', {
    toekn: '',
    method: 'add',     //给自己增加一组联系方式
    wx_png: 图片,
    wx_id: '',
    locate: '',
    name: 'nightmare',
    phone: 15019229316,
    qq: 754125579
});
return '{"success":"\u589e\u6dfb\u6210\u529f","Communication":{"name":"","phone":"","qq":"","wx_id":"","locate":"god","id_openid":"9","updated_at":"1564379626","created_at":"1564379626","id":7}}'


post('/curd_communication', {
    toekn: '',
    method: 'worker_get',
    id_seller: 1
});
post('/curd_communication', {
    toekn: '',
    method: 'delete',
    id_communication: 1,
});
post('/curd_communication', {
    toekn: '',
    method: 'update',     //更新某一组联系方式
    id_communication: 1,  //要更新的联系方式的id
    wx_png: 图片,
    name: 'nightmare',
    phone: 15019229316,
    qq: 754125579
});
post('/curd_communication', {
    toekn: '',
    method: 'get',     //获取自己的所有联系方式
});