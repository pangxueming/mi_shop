<template>
	<view>
		<divider></divider>
		<card>
			<view class="" slot="title">申请售后的产品</view>
			<view class="d-flex a-center px-2 py-3">
				<image src="../../static/images/demo/cate_03.png" mode="widthFix" style="width: 100rpx;height: 100rpx;"></image>
				<view class="flex-1 ml-3">
					<view class="font-md">商品名称</view>
					<view class="font text-light-muted">维修服务:剩余100天</view>
				</view>
			</view>
		</card>
		<divider></divider>
		<card headerTitle="维修服务" bodyPadding><zcm-radio-group :label="label1" :selected.sync="label1.selected"></zcm-radio-group></card>
		<divider></divider>
		<card headerTitle="问题描述" bodyPadding>
			<view class="position-relative">
				<textarea
					placeholder="请详细描述你遇到的问题"
					:maxlength="maxlength"
					style="width: 100%;height: 400rpx;box-sizing: border-box;"
					class="border rounded p-2"
					v-model="content"
				></textarea>
				<view class="position-absolute  font" style="bottom:5rpx;right: 10rpx;">{{ remain }}/{{ maxlength }}</view>
			</view>
		</card>
		<view class="py-3 px-5"><view class="rounded main-bg-color text-white text-center py-2" hover-class="main-bg-hover-color">下一步</view></view>
	</view>
</template>

<script>
import card from '@/components/common/card.vue';
import zcmRadioGroup from '@/components/common/radio-group.vue';
export default {
	components: {
		card,
		zcmRadioGroup
	},
	data() {
		return {
			label1: {
				selected: 0,
				list: [{ name: '维修' }]
			},
			content: '',
			maxlength: 50
		};
	},
	computed: {
		// 剩余可输入
		remain() {
			return this.maxlength - this.content.length;
		}
	},
	methods: {}
};
</script>

<style></style>
