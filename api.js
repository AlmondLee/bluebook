get('/sent_work', {
    'work_name': '',    //*
    'work_tpl': 1,  //任务类型*
    'work_money': 100,  //每个工作者的任务报酬*
    'work_personNumber': 11,    //工作者人数*
    'work_time': 15906564589,   //发布时间*
    'work_content': 'full discribe of work',    //工作描述*
    'stop_at': 15906564589, //报名截止时间*
    'token': 'dasgsxfjnkbjlkjghdfsafhc',//*
    'id_senting_work': 1,   //get_senting_work_id返回的id*
    'work_url': 'www.baidu.com',    //任务链接
    'file_num': 1,  //已上传的图片数
    'begin_workTime': 15906564589,  //工作开始时间*
    'stop_workTime': 15906564589,   //工作结束时间*
    'id_communication': 0
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
