(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/info/edit"],{"01c5":function(e,n,t){"use strict";(function(e){t("0146");u(t("66fd"));var n=u(t("d7e4"));function u(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t("543d")["createPage"])},"0d34":function(e,n,t){"use strict";var u=t("3af5"),r=t.n(u);r.a},"3af5":function(e,n,t){},9974:function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return o})),t.d(n,"a",(function(){return u}));var u={uniForms:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-forms/components/uni-forms/uni-forms")]).then(t.bind(null,"4b70"))},uniFormsItem:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-forms/components/uni-forms-item/uni-forms-item")]).then(t.bind(null,"787c"))},uniEasyinput:function(){return t.e("uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput").then(t.bind(null,"caf7"))},uniDataCheckbox:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox")]).then(t.bind(null,"8c10"))}},r=function(){var e=this,n=e.$createElement;e._self._c},o=[]},d7e4:function(e,n,t){"use strict";t.r(n);var u=t("9974"),r=t("fc4e");for(var o in r)"default"!==o&&function(e){t.d(n,e,(function(){return r[e]}))}(o);t("0d34");var i,s=t("f0c5"),a=Object(s["a"])(r["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],i);n["default"]=a.exports},f9ff:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=t("d7a9"),r={data:function(){return{user:{nickName:"",phonenumber:"",email:"",sex:""},sexs:[{text:"男",value:"0"},{text:"女",value:"1"}],rules:{nickName:{rules:[{required:!0,errorMessage:"用户昵称不能为空"}]},phonenumber:{rules:[{required:!0,errorMessage:"手机号码不能为空"},{pattern:/^1[3|4|5|6|7|8|9][0-9]\d{8}$/,errorMessage:"请输入正确的手机号码"}]},email:{rules:[{required:!0,errorMessage:"邮箱地址不能为空"},{format:"email",errorMessage:"请输入正确的邮箱地址"}]}}}},onLoad:function(){this.getUser()},onReady:function(){this.$refs.form.setRules(this.rules)},methods:{getUser:function(){var e=this;(0,u.getUserProfile)().then((function(n){e.user=n.data}))},submit:function(e){var n=this;this.$refs.form.validate().then((function(e){(0,u.updateUserProfile)(n.user).then((function(e){n.$modal.msgSuccess("修改成功")}))}))}}};n.default=r},fc4e:function(e,n,t){"use strict";t.r(n);var u=t("f9ff"),r=t.n(u);for(var o in u)"default"!==o&&function(e){t.d(n,e,(function(){return u[e]}))}(o);n["default"]=r.a}},[["01c5","common/runtime","common/vendor"]]]);