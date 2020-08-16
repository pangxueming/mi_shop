<template>
	<view>
		<view class="row p-2 border-bottom border-light-secondary animated fadeIn fast" @click="openDetail">
			<view class="span-6"><image :src="item.titleImg" mode="widthFix" class="w-100"></image></view>
			<view class="span-14 pl-3 d-flex flex-column line-h-md">
				<view class="font-md font-weight">{{ item.title }}</view>
				<view class="font text-light-muted mb-auto">{{ item.desc }}</view>
				<price>{{ item.pprice }}</price>
				<view class="font-sm text-light-muted">{{ item.comment_num }} 条评论 {{ item.good_num }}好评</view>
			</view>
		</view>
	</view>
</template>

<script>
import price from '@/components/common/price.vue';
export default {
	data() {
		return {};
	},
	components: {
		price
	},
	props: {
		item: Object,
		index: Number
	},
	methods: {
		openDetail() {
			uni.navigateTo({
				url: '/pages/detail/detail?detail=' + JSON.stringify(this.item)
			});
		}
	}
};
</script>

<style></style>
