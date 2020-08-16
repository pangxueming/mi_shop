<template>
	<view style="width: 372.5upx;" @click="openDetail">
		<image :src="item.cover" lazy-load mode="widthFix"></image>
		<view class="p-2 pt-1">
			<view class="font-md ">{{ item.title }}</view>
			<view class="d-flex font text-light-muted">{{ item.desc }}</view>
			<view class="d-flex my-1">
				<price>{{ item.pprice }}</price>
				<text class="font-sm text-light-muted line-through ml-1 a-self-end line-h">￥{{ item.oprice }}</text>
			</view>
		</view>
	</view>
</template>

<script>
import price from '@/components/common/price.vue';
export default {
	components: {
		price
	},
	props: {
		item: Object,
		index: Number,
		type: {
			type: String,
			default: 'navigateTo'
		}
	},
	methods: {
		openDetail() {
			uni[this.type]({
				url: '/pages/detail/detail?detail=' + JSON.stringify(this.item)
			});
		}
	}
};
</script>

<style></style>
