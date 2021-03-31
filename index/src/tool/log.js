/**
 * 描述:日志帮助工具
 * @ClassName log
 * @Author apple
 * @Date 2019-04-20 21:12
 * @Version 1.0
 */

// 应用发布时为true,开发阶段为false
// 很轻松的取消日志
let isBuild = false;

const  Log = (Vue) => {
    Vue.prototype.$log = new Vue({
	    methods:{
	      // 强烈日志...
	    	e(...params){
	    	  
	    	},

				// 普通日志...
		    d(...params){
			    if (!isBuild) {
				    console.log(...params);
			    }
		    },
	    }
    });
};

export default Log;
