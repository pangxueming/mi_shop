<template>
	<view class="bg-white rounded border border-light-secondary d-flex mb-3" @click="$emit('click')">
		<view class="d-flex flex-1 flex-column j-center px-3">
			<view class="font-md" :class="item.disable || !item.status ? 'text-light-muted' : ''">{{ item.title }}</view>
			<view class="text-secondary">{{ item.start_time | formatTime }}~{{ item.end_time | formatTime }}</view>
		</view>
		<view
			class="d-flex flex-column a-center j-center text-white"
			:class="item.disable || !item.status ? 'bg-secondary' : 'main-bg-color'"
			style="width: 220rpx;height: 200rpx;"
		>
			<view style="font-size: 42rpx; line-height: 1.4;">
				{{ item.price }}
				<text class="font">{{ item.type === 0 ? '元' : '折扣' }}</text>
			</view>
			<view class="font">{{ item.desc }}</view>
			<view class="rounded  bg-white w-50 main-text-color text-center" :class="item.disable || !item.status ? 'text-secondary' : 'main-text-color'">
				<slot>{{ item.status ? '去使用' : '已失效' }}</slot>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		item: Object,
		index: Number
	},

	filters: {
		formatTime(shorttime) {
			shorttime = shorttime.toString().length < 13 ? shorttime * 1000 : shorttime;
			let date = new Date(shorttime);
			let parseNumber = num => {
				return num < 10 ? '0' + num : num;
			};
			return (
				date.getFullYear() +
				'-' +
				parseNumber(date.getMonth() + 1) +
				'-' +
				parseNumber(date.getDate()) +
				' ' +
				parseNumber(date.getHours()) +
				':' +
				parseNumber(date.getMinutes())
			);
		}
	}
};
</script>

<style></style>
