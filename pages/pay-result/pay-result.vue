<template>
	<view>
		<view class="d-flex flex-column a-center j-center py-5 my-3">
			<text class="iconfont icon-iconfontxuanzhong4 main-text-color line-h" style="font-size: 120rpx;"></text>
			<text class="text-dark font-lg">支付成功</text>
		</view>
		<view class="px-5">
			<view class="rounded main-bg-color text-white font-md w-100 py-2 text-center mt-2" hover-class="main-bg-hover-color" @click="openDetail">查看订单</view>
			<view class="rounded border text-dark  font-md w-100 py-2 text-center mt-2" hover-class="bg-light" @click="openIndex">返回首页</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			id: 0
		};
	},
	onLoad(e) {
		console.log(e);
		this.id = e.id;
	},
	methods: {
		openIndex() {
			uni.switchTab({
				url: '/pages/index/index'
			});
		},
		openDetail() {
			uni.navigateBack({
				delta: 1
			});
		}
	}
};
</script>

<style></style>
