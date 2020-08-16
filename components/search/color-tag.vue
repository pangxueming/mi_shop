<template>
	<view class="px-2 py-1 border d-inline-block m-1" :style="getStyle" @click="$emit('click')">{{ item.name }}</view>
</template>

<script>
export default {
	props: {
		item: Object,
		color: {
			type: Boolean,
			default: true
		}
	},
	computed: {
		getStyle() {
			if (!this.color) {
				return `border:0;background:#f5f5f5`;
			}
			let color = {
				bordercolor: ['#eea6aa', '#dd6a4b', '#98d58d', '#9dbe93', '#bccd99'],
				backgroundcolor: ['#f8eae9', '#ffbec6', '#e8f6f6', '#e4f5e2', '#f2f6e8']
			};
			let index = Math.floor(Math.random() * color.bordercolor.length);
			let bordercolor = color.bordercolor[index];
			let backgroundcolor = color.backgroundcolor[index];
			return `background-color: ${backgroundcolor};background-color: ${bordercolor};`;
		}
	}
};
</script>

<style></style>
