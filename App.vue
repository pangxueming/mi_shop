<script>
export default {
	onUniNViewMessage(e) {
		let data = e.data;
		if (data.from && data.from === 'index') {
			//通知分类页修改数据
			uni.$emit('index', data);
		}
	},

	onLaunch: function() {
		console.log('App Launch');
		// 初始化登录状态
		this.$store.commit('initUser');
		// 更新购物车数据
		this.$store.dispatch('updateCartList');
		// 监听购物车更新
		uni.$on('updateCart', () => {
			this.$store.dispatch('updateCartList');
		});
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style lang="less">
/* 解决头条小程序组件内引入字体不生效的问题 */
/* #ifdef MP-TOUTIAO */
@font-face {
	font-family: uniicons;
	src: url('/static/uni.ttf');
}
/* #endif */

/* 官方ui库 */
@import url('./common/uni.css');
/* 第三方动画库 */
@import url('./common/animate.css');
/* 自定义字体图标库 */
@import url('./common/icon.css');
/* ui基础库 */
@import url('./common/zcm-main.css');
/* 公共样式 */
@import url('./common/common.css');
</style>
