/******** new ********/
https://www.almondlee.cn/api/get_my_works?token=23_CEIZ5L4ska-c-peM17VBsf5HAYsTyGuewft2UGTLI9NlQFay02mvRLibAr_eWInwIPFcoNwjDzVO3b2-6jJ_KA&type=all
/******** new ********/




https://www.almondlee.cn/api/enroll?token=23_pmQX5zkPI5IKxpGzRtLQbxxQtW_-_4owazrBmVqMBc_Xp3d0eZCsSebaDM9d7enlHkzI4cKU4nKoxSQFqETsqA&id_work=7





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
post('/curd_communication', {
    toekn: '',
    method: 'add',     //给自己增加一组联系方式
    wx_png: 图片,
    name: 'nightmare',
    phone: 15019229316,
    qq: 754125579
});



get('/get_works', {
    token: '',
    lastWork: 3,            //上拉触底时标记页面底部的任务id
    nextWork: 3,            //下拉刷新时标记页面顶部的任务id
    order: 'created_at',    //根据什么排序['created_at', '']
    orderValue: 1,          //order要大于还是小于什么
    esc: 'true',            //正序 or 倒序
    canEnroll: 'true',      //是否只看可报名
});






get('/sent_work', {
    work_name: '',
    work_tpl: 1,
    work_money: 888,
    work_person_number: 10,
    work_time: 1562903303949,
    work_content: '',
    stop_at: 1562903302317,
    token: '',
    id_senting_work: 3,
    work_url: '',
    file_num: 1,
    begin_work_time: 1562903302317,
    stop_work_time: 1562903302317,
    id_communication='0'
});


get('/get_senting_work_id', {
    token: 'saduifvghjykbfujksxdzbujilf'
});



post('/upload_work_file', {
    file: 图片,
    token: 'gujikzrfhndjikgsdrzfnujikhargu',
    id_work: 1
});


//收藏
get('/collect_product', {
    token: 'gujikzrfhndjikgsdrzfnujikhargu',
    id_product: 2
});


//获取用户收藏的商品
get('/get_collected_product', {
    token: 'gujikzrfhndjikgsdrzfnujikhargu'
});

























get('/upload_product_url', {
    token: "asfgrnjklhsrbfgtksgdf",
    id_product: 1,
    url: 'www',
    content_type: 'tburl'
});

post('/upload_product_img', {
    token: "asfgrnjklhsrbfgtksgdf",
    id_product: 1,
    file: P.jpg
});

//在打开上传表单的页面的时候就要先请求请求此接口, 返回的id_product要保存在缓存里(如果没有提交表单的话下次还是用这个)
get('/before_generate_products',{
    token: 'rgdfsdrgdnhgnjtyd'
});

get('/generate_products', {
    price: '惊爆价300',
    product_name: '名称',
    id_product: 1,
    infs: '商品描述(long)',
    token: 'fghjsdrf',
    urls: JSON.stringify([
        {
            type: 'tburl',
            content: 'www.taobao.com/dfgdfghgh'
        },
        {
            type: 'jdurl',
            content: 'www.jd.com/dasfasfdg'
        }
    ])
});

get('/get_products', {
    id_seller: 1,   //必填
    lastProduct: 'false',
    order: 'updated_at',
    orderValue: 1,
    esc: 'true'
}, {
    id: 'int 此任务在数据库中的唯一id',
    id_openid: '发布者在数据库中的唯一id',
    senter_name: 'char 发布者的昵称',
    senter_img: 'char 发布者头像的链接',
    work_name: 'char 任务名字(标题)',
    work_content: 'char 任务内容',
    work_tpl: 'int 任务类型[0 => "其他", 1 => "答问卷", 2 => "代投票", 3 => "帮转发"]',
    work_money: 'int 赏金/人(单位0.01人民币)',
    work_person_number: 'int 此工作需要多少人',
    stop_at: 'int 报名截止时间',
    senterDatas: 'array 此任务的图片'
}, {
    id: 'int 发布者在数据库中的唯一id',
    openid: 'int 发布者在此公众号的openid',
    money: 'int 金币余额(单位0.01人民币)',
    coin: 'int 积分',
    nick_name: 'char 用户昵称',
    avatar_url: 'char 用户的头像的链接',
    created_at: 'int 用户第一次登录的时间',
    communications: {
        1: {
            name: '名字',
            wx_png: '微信二维码链接',
            phone: '手机号',
            qq: 'qq号',
        },
        2: {
            name: '名字',
            wx_png: '微信二维码链接',
            phone: '手机号',
            qq: 'qq号',
        },
    },
});

//
get('/delete_product_file', {
    token: 'sfgdazrg',
    id_product: 1,
    product_img_id: 2
});

























get('/get_seller_pyq', 'SellerController@getSellerPyq');





get('/search_product', 'ProductsController@searchProduct');


get('/logon', 'SellerController@logon');

get('/login', 'SellerController@login');


//


// post('/login', 'SellerController@login');


get('/get_simple_products', 'ProductsController@getSimpleProducts');

get('/get_seller_info', 'SellerController@getSeller');

get('/upload_seller_img', 'ProductsController@uploadSellerImg');
