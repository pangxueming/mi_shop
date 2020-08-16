<template>
	<view>
		<view class="p-2 ">
			<view class="mb-2 p-2 bg-white rounded" hover-class="main-bg-hover-color" v-for="(item, index) in msg" :key="index" @click="open(item)">
				<view class="text-dark font-md">{{ item.title }}</view>
				<view class="font-md text-light-muted">{{ item.desc }}</view>
				<view class="font  text-light-muted">{{ item.createTime }}</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			msg: [{ title: '小米11预售', desc: '超级网络，支持5G', createTime: '2020-09-10' }, { title: '红米k31预售', desc: '超级网络，全网最高性能比', createTime: '2020-10-10' }]
		};
	},
	methods: {
		open(item) {
			uni.navigateTo({
				url: '../msg-detail/msg-detail?detail=' + JSON.stringify(item)
			});
		}
	}
};
</script>

<style>
page {
	background-color: #eeeeee;
}
</style>
