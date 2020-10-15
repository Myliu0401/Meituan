import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const Store = new Vuex.Store({
    state:{

        //用于判断总宽度,从而来实现页面的结构增或减
        Width:null,

        //这两个后面城市列表要用到
        province:'省份',
        city:'城市',

        //头部的地址
        dizhi:'上海',

        //头部的地址列表
        dizhis:[],
        
        //在产品页面要用到
        inputText:'',

        //用于判断登录
        SignIn:false,
    },
    mutations:{
        //存储屏幕总宽度
        modifyWidth(state,value){
             state.Width = value;
        },

        //修改省份
        modifyProvince(state,value){
            state.province = value;
        },

        //修改城市
        modifyCity(state,value){
            state.city = value;
        },

        //修改地址
        modifyDizhi(state,value){
           state.dizhi = value;
        },

        //存储地址列表
        modifyDizhis(state,value){
           state.dizhis = value;
        },

        //存储搜索值
        modifyzhi(state,value){
           state.inputText = value;
        },

        //更改登录
        MySignIn(state,value){
            state.SignIn = value
        }
    },
    actions:{
        MyModiSignIn(context,value){
            context.commit('MySignIn',value);
        }
    }
});

export default Store;