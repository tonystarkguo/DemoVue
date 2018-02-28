'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _HelloWorld = require('@/components/HelloWorld');

var _HelloWorld2 = _interopRequireDefault(_HelloWorld);

var _login = require('@/components/login');

var _login2 = _interopRequireDefault(_login);

var _home = require('@/components/home');

var _home2 = _interopRequireDefault(_home);

var _Airplane = require('@/components/Airplane');

var _Airplane2 = _interopRequireDefault(_Airplane);

var _Train = require('@/components/Train');

var _Train2 = _interopRequireDefault(_Train);

var _CityList = require('@/components/CityList');

var _CityList2 = _interopRequireDefault(_CityList);

var _mintUi = require('mint-ui');

var _mintUi2 = _interopRequireDefault(_mintUi);

require('vue-event-calendar/dist/style.css');

var _vueEventCalendar = require('vue-event-calendar');

var _vueEventCalendar2 = _interopRequireDefault(_vueEventCalendar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueEventCalendar2.default, { locale: 'cn' }); //可以设置语言，支持中文和英文
//1.1.10之后的版本，css被放在了单独的文件中，方便替换
_vue2.default.use(_mintUi2.default);
_vue2.default.use(_vueRouter2.default);

exports.default = new _vueRouter2.default({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: _HelloWorld2.default
  }, {
    path: '/Login',
    name: 'Login',
    component: _login2.default
  }, {
    path: '/Home',
    name: 'Home',
    component: _home2.default
  }, {
    path: '/Airplane',
    name: 'Airplane',
    component: _Airplane2.default,
    children: [{
      // 当 /user/:id/profile 匹配成功，
      // UserProfile 会被渲染在 User 的 <router-view> 中
      path: 'Starcity',
      component: _CityList2.default
    }, {
      // 当 /user/:id/profile 匹配成功，
      // UserProfile 会被渲染在 User 的 <router-view> 中
      path: 'Endcity',
      component: _CityList2.default
    }]
  }, {
    path: '/Train',
    name: 'Train',
    component: _Train2.default
  }, {
    path: "*",
    redirect: '/HelloWorld/'
  }]
});

//# sourceMappingURL=index-compile.js.map