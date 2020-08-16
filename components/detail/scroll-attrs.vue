<template>
	<scroll-view scroll-x="" class="scroll-row">
		<view class="scroll-row-item" style="width: 170upx;height: 110upx;" v-for="(item, index) in baseAttrs" :key="index">
			<view class="d-flex flex-column a-center j-center">
				<view class="iconfont line-h-sm" :class="item.icon"></view>
				<view class="line-h-sm">{{ item.title }}</view>
				<view class="text-light-muted line-h-sm uni-ellipsis text-center" style="width: 170upx;">{{ item.desc }}</view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
export default {
	props: ['baseAttrs']
};
</script>

<style>
/deep/.uni-scroll-view::-webkit-scrollbar {
	/* 隐藏滚动条，但依旧具备可以滚动的功能 */
	display: none;
}
</style>
