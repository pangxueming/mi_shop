(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/order-detail/order-detail"],{

/***/ 175:
/*!**************************************************************************************!*\
  !*** D:/Code/Vue/新项目/mi_shop/main.js?{"page":"pages%2Forder-detail%2Forder-detail"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _orderDetail = _interopRequireDefault(__webpack_require__(/*! ./pages/order-detail/order-detail.vue */ 176));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_orderDetail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 176:
/*!*******************************************************************!*\
  !*** D:/Code/Vue/新项目/mi_shop/pages/order-detail/order-detail.vue ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _order_detail_vue_vue_type_template_id_d80893f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-detail.vue?vue&type=template&id=d80893f4& */ 177);
/* harmony import */ var _order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-detail.vue?vue&type=script&lang=js& */ 179);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../HBuilderX/HBuilderX.2.7.14.20200618.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs




/* normalize component */

var component = Object(_HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _order_detail_vue_vue_type_template_id_d80893f4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _order_detail_vue_vue_type_template_id_d80893f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _order_detail_vue_vue_type_template_id_d80893f4___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/order-detail/order-detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 177:
/*!**************************************************************************************************!*\
  !*** D:/Code/Vue/新项目/mi_shop/pages/order-detail/order-detail.vue?vue&type=template&id=d80893f4& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_detail_vue_vue_type_template_id_d80893f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX/HBuilderX.2.7.14.20200618.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../HBuilderX/HBuilderX.2.7.14.20200618.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../HBuilderX/HBuilderX.2.7.14.20200618.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../HBuilderX/HBuilderX.2.7.14.20200618.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../HBuilderX/HBuilderX.2.7.14.20200618.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX/HBuilderX.2.7.14.20200618.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./order-detail.vue?vue&type=template&id=d80893f4& */ 178);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_detail_vue_vue_type_template_id_d80893f4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_detail_vue_vue_type_template_id_d80893f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_detail_vue_vue_type_template_id_d80893f4___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_detail_vue_vue_type_template_id_d80893f4___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 178:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Code/Vue/新项目/mi_shop/pages/order-detail/order-detail.vue?vue&type=template&id=d80893f4& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 179:
/*!********************************************************************************************!*\
  !*** D:/Code/Vue/新项目/mi_shop/pages/order-detail/order-detail.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX/HBuilderX.2.7.14.20200618.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../HBuilderX/HBuilderX.2.7.14.20200618.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../HBuilderX/HBuilderX.2.7.14.20200618.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../HBuilderX/HBuilderX.2.7.14.20200618.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX/HBuilderX.2.7.14.20200618.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./order-detail.vue?vue&type=script&lang=js& */ 180);
/* harmony import */ var _HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 180:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Code/Vue/新项目/mi_shop/pages/order-detail/order-detail.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;














































































var _time = _interopRequireDefault(__webpack_require__(/*! @/common/lib/time.js */ 181));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var timer = null;var orderListItem = function orderListItem() {__webpack_require__.e(/*! require.ensure | components/order/order-list-item */ "components/order/order-list-item").then((function () {return resolve(__webpack_require__(/*! @/components/order/order-list-item.vue */ 380));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var uniListItem = function uniListItem() {__webpack_require__.e(/*! require.ensure | components/uni-ui/uni-list-item/uni-list-item */ "components/uni-ui/uni-list-item/uni-list-item").then((function () {return resolve(__webpack_require__(/*! @/components/uni-ui/uni-list-item/uni-list-item.vue */ 282));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var price = function price() {__webpack_require__.e(/*! require.ensure | components/common/price */ "components/common/price").then((function () {return resolve(__webpack_require__(/*! @/components/common/price.vue */ 265));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var card = function card() {__webpack_require__.e(/*! require.ensure | components/common/card */ "components/common/card").then((function () {return resolve(__webpack_require__(/*! @/components/common/card.vue */ 248));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var commonButton = function commonButton() {__webpack_require__.e(/*! require.ensure | components/common/common-button */ "components/common/common-button").then((function () {return resolve(__webpack_require__(/*! @/components/common/common-button.vue */ 385));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default = { components: { orderListItem: orderListItem, uniListItem: uniListItem, price: price, card: card, commonButton: commonButton }, data: function data() {return { id: 0, no: '', address: { province: '', city: '', district: '', address: '', zip: 0, name: '', phone: '' }, total_price: 0, remark: '', paid_time: null, payment_method: '', payment_no: '', refund_status: 'pending', ship_status: '', extra: null, create_time: '', update_time: '', reviewed: 0, order_items: [], couponUserItem: [], end_time: 0, timeDown: '' };}, computed: { // 商品总价
    price: function price() {var p = 0;this.order_items.forEach(function (item) {p += item.pprice * item.num;});return p.toFixed(2);}, path: function path() {var _this$address = this.address,province = _this$address.province,city = _this$address.city,district = _this$address.district,address = _this$address.address;return "".concat(province, " ").concat(city, " ").concat(district, " ").concat(address);}, // 订单状态
    status: function status() {return this.$U.formatStatus({ paid_time: this.paid_time, refund_status: this.refund_status, ship_status: this.ship_status });}, coupon: function coupon() {if (Array.isArray(this.couponUserItem) && this.couponUserItem.length === 0) {return '未使用';}var _this$couponUserItem$ = this.couponUserItem.coupon,type = _this$couponUserItem$.type,value = _this$couponUserItem$.value;if (type === 0) {return '-￥' + value;} else {return '打' + value + '折';}}, timeDownText: function timeDownText() {var msg = '';switch (this.status) {case '待支付':
          msg = '取消';
          break;
        case '待收货':
          msg = '确认';
          break;
        case '待发货':
          return '等待商家发货';
          break;
        case '退款中':
          return '等待商家审核';
          break;
        case '已签收':
          return '订单已签收';
          break;}

      if (msg !== '' && this.timeDown !== '') {
        return "\u8FD8\u5DEE ".concat(this.timeDown, " \u81EA\u52A8").concat(msg);
      }
      return '';
    } },

  onLoad: function onLoad(e) {
    if (!e.id) {
      uni.showToast({
        title: '订单不存在',
        icon: 'none' });

      return uni.navigateBack({
        delta: 1 });

    }
    this.id = e.id;
  },
  onUnload: function onUnload() {
    if (timer) {
      clearInterval(timer);
    }
  },
  onShow: function onShow() {
    // 获取订单详情
    this.getData();
  },
  methods: {
    // 开启定时器
    openTimeDown: function openTimeDown() {var _this = this;
      if (this.status === '待支付' || this.status === '待收货') {
        if (timer) {
          clearInterval(timer);
        }
        timer = setInterval(function () {
          var now = new Date().getTime() / 1000;
          if (now > _this.end_time) {
            uni.switchTab({
              url: '../index/index' });

            uni.showToast({
              title: _this.status === '待支付' ? '订单已关闭' : '订单已确认',
              icon: 'none' });

            _this.timeDown = '';
            return clearInterval(timer);
          }
          _this.timeDown = _time.default.timeDown(_this.end_time);
        }, 1000);
      }
    },
    getData: function getData() {var _this2 = this;
      this.$H.
      get(
      '/order/' + this.id,
      {},
      {
        token: true }).


      then(function (res) {
        console.log(res);
        _this2.end_time = res.end_time ? res.end_time : 0;
        _this2.no = res.no;
        _this2.address = res.address;
        _this2.total_price = res.total_price;
        _this2.remark = res.remark;
        _this2.paid_time = res.paid_time;
        _this2.payment_method = res.payment_method;
        _this2.payment_no = res.payment_no;
        _this2.refund_status = res.refund_status;
        _this2.ship_status = res.ship_status;
        _this2.extra = res.extra;
        _this2.create_time = res.create_time;
        _this2.update_time = res.update_time;
        _this2.reviewed = res.reviewed;
        // 整理商品列表数据
        var order_items = res.orderItems.map(function (v) {
          var attrs = [];
          if (v.skus_type === 1 && v.goodsSkus && v.goodsSkus.skus) {
            var skus = v.goodsSkus.skus;
            for (var k in skus) {
              attrs.push(skus[k].value);
            }
          }
          return {
            id: v.goods_id,
            cover: v.goodsItem.cover,
            title: v.goodsItem.title,
            pprice: v.price,
            attrs: attrs.join(','),
            num: v.num };

        });
        // 开启定时器
        _this2.openTimeDown();
        _this2.order_items = order_items;
        _this2.couponUserItem = res.couponUserItem;
      });
    },
    // 去支付
    openPayMethods: function openPayMethods() {
      // 跳转到支付页面
      uni.navigateTo({
        url:
        '/pages/pay-methods/pay-methods?detail=' +
        JSON.stringify({
          id: this.id,
          price: this.total_price }) });


    },
    // 取消订单
    closeOrder: function closeOrder() {var _this3 = this;
      uni.showModal({
        content: '是否要取消该订单？',
        success: function success(res) {
          if (res.confirm) {
            uni.showLoading({
              title: '取消订单中...',
              mask: false });

            _this3.$H.
            post(
            '/closeorder/' + _this3.id,
            {},
            {
              token: true }).


            then(function (res) {
              uni.hideLoading();
              uni.navigateBack({
                delta: 1 });

              uni.showToast({
                title: '取消订单成功',
                icon: 'none' });

            }).
            catch(function (err) {
              uni.hideLoading();
            });
          }
        } });

    },
    // 申请退款
    applyRefund: function applyRefund() {
      uni.navigateTo({
        url:
        '/pages/order-refund/order-refund?detail=' +
        JSON.stringify({
          id: this.id }) });


    },
    // 查看物流
    openLogistics: function openLogistics() {
      uni.navigateTo({
        url:
        '/pages/logistics-detail/logistics-detail?detail=' +
        JSON.stringify({
          id: this.id }) });


    },
    // 确认收货
    received: function received() {var _this4 = this;
      uni.showModal({
        content: '是否要确认收货？',
        success: function success(res) {
          if (res.confirm) {
            uni.showLoading({
              title: '确认收货中...',
              mask: false });

            _this4.$H.
            post(
            '/order/' + _this4.id + '/received',
            {},
            {
              token: true }).


            then(function (res) {
              uni.hideLoading();
              uni.navigateBack({
                delta: 1 });

              uni.showToast({
                title: '确认收货成功',
                icon: 'none' });

            }).
            catch(function (err) {
              uni.hideLoading();
            });
          }
        } });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ })

},[[175,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/order-detail/order-detail.js.map