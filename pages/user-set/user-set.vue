<template>
	<view>
		<card bodyStyle="background: #FFFFFF;" v-if="loginStatus">
			<text slot="title">账号管理</text>
			<uni-list-item title="个人资料"></uni-list-item>
			<uni-list-item title="收货地址" @click="navigate('user-path-list')"></uni-list-item>
		</card>
		<card bodyStyle="background: #FFFFFF;">
			<text slot="title">关于</text>
			<uni-list-item :title="list.title" v-for="(list, listIndex) in list" :key="listIndex" @click="navigate(list.path)"></uni-list-item>
		</card>
		<view class="p-3"><button type="default" class="bg-white" @click="logoutEvent" v-if="loginStatus">退出登录</button></view>
	</view>
</template>

<script>
import card from '@/components/common/card.vue';
import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item.vue';
import { mapState, mapMutations } from 'vuex';
export default {
	components: {
		card,
		uniListItem
	},
	data() {
		return {
			list: [
				{ title: '关于商城', path: 'about' },
				{ title: '意见反馈', path: '' },
				{ title: '协议规则', path: '' },
				{ title: '资质证件', path: '' },
				{ title: '用户协议', path: '' },
				{ title: '隐私政策', path: '' }
			]
		};
	},
	computed: {
		...mapState({
			token: state => state.user.token,
			loginStatus: state => state.user.loginStatus
		})
	},
	methods: {
		...mapMutations(['logout', 'cleatCart']),
		navigate(path) {
			if (!path) return;
			uni.navigateTo({
				url: `/pages/${path}/${path}`
			});
		},
		// 退出登录
		logoutEvent() {
			this.$H.post('/logout', {}, { token: true }).then(res => {
				// 退出登录
				this.logout();
				// 清空购物车
				this.cleatCart();
				uni.showToast({
					title: '退出成功',
					icon: 'none'
				});
				uni.navigateBack({
					delta: 1
				});
			});
		}
	}
};
</script>

<style lang="less">
page {
	background-color: #eeeeee;
}
</style>
