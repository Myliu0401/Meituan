import axios from 'axios';

axios.defaults.baseURL = 'https://open.duyiedu.com';

//请求拦截器
axios.interceptors.request.use((shuju) => {
    const obj = shuju.params ? shuju.params : {} ;
    shuju.params = {
        appkey: '1008611_1585931647877',
        ...obj
    };
    return shuju;
});

//响应拦截器
axios.interceptors.response.use((shuju) => {
    if (shuju.data.msg === '成功' && shuju.status === 200) {
        return shuju.data
    } else {
        console.log(122)
        return shuju.data;
    }
})

const ajax = {
    //搜索框输入,请求ajax
    searchContentRequest() {
        return axios.get('/api/meituan/header/search.json', {})
    },

    //搜索框聚焦,请求ajax
    searchBoxFocus() {
        return axios.get('/api/meituan/header/searchHotWords.json')
    },

    //请求左侧导航栏数据
    leftNavigation() {
        return axios.get('/api/meituan/index/nav.json')
    },


    //请求热门城市数据
    hotCities() {
        return axios.get('/api/meituan/city/hot.json')
    },

    //获取最近访问城市
    recentCityVisit() {
        return axios.get('/api/meituan/city/recents.json')
    },


    //获取城市列表
    listOfCities() {
        return axios.get('/api/meituan/city/cityList.json')
    },

    //获取省份列表
    listOfProvinces() {
        return axios.get('/api/meituan/city/province.json')
    },

    //获取当前位置
    currentLocation() {
        return axios.get('/api/meituan/city/getPosition.json')
    },

    //获取搜索的产品,因为后端数据只有一个种产品,所以搜索后都是同一种产品
    productsSearched() {
        return axios.get('/api/meituan/list/goodsList.json')
    },

    //获取分类列表
    classificationList() {
        return axios.get('/api/meituan/list/classify.json')
    },

    //推荐商圈
    recommendBusinessDistrict() {
        return axios.get('/api/meituan/list/areaList.json')
    },

    //推荐产品列表
    ListOfRecommendedProducts() {
        return axios.get('/api/meituan/list/recommend.json')
    },

    //用户登录接口
    userLogin(config) {
        return axios.get('/api/meituan/login', config)
    },

    //注册用户的接口
    registeredUsers(config){
        return axios.get('/api/meituan/register',config)
    }
};


export default ajax;