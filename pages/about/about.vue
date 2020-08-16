<template>
	<view>
		<view class="d-flex flex-column j-center a-center py-5 my-3">
			<image src="/static/images/xiaomi.png" mode="widthFix" style="width: 100rpx;height: 100rpx;"></image>
			<view class="text-light-muted font">小米商城 1.0.0</view>
		</view>

		<view class="bg-white">
			<uni-list-item title="版本更新" showArrow></uni-list-item>
			<uni-list-item title="了解小米" showArrow></uni-list-item>
			<uni-list-item title="官方微博" showArrow></uni-list-item>
			<uni-list-item title="廉洁小米" showArrow></uni-list-item>
			<uni-list-item title="APP分享" showArrow></uni-list-item>
			<uni-list-item title="授权直供店" showArrow></uni-list-item>
			<uni-list-item title="清理缓存" showArrow></uni-list-item>
		</view>
		<view class="position-absolute font text-light-muted d-flex j-center a-center w-100 p-3" style="bottom:10rpx; right:0; left:0;">探索黑科技，小米为发烧而生！</view>
	</view>
</template>

<script>
import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item.vue';
export default {
	components: {
		uniListItem
	},
	data() {
		return {};
	},
	methods: {}
};
</script>

<style>
page {
	background-color: #eeeeee;
}
</style>
