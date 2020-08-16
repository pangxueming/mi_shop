<template>
	<view class="p-2 w-100">
		<!-- 标题 -->
		<view class="font-lg text-dark mb-3">{{ detail.title }}</view>
		<!-- 内容 -->
		<u-parse className="uparse" :content="context" @preview="preview" @navigate="navigate"></u-parse>
	</view>
</template>

<script>
import uParse from '@/components/u-parse/u-parse.vue';
var htmlString = `
	<p>
		<img src="../../static/images/detail/detailImg1.jpg">
		<img src="../../static/images/detail/detailImg2.jpg">
		<img src="../../static/images/detail/detailImg3.jpg">
		<img src="../../static/images/detail/detailImg4.jpg">
		<img src="../../static/images/detail/detailImg5.jpg">
		<img src="../../static/images/detail/detailImg6.jpg">
		<img src="../../static/images/detail/detailImg7.jpg">
		<img src="../../static/images/detail/detailImg8.jpg">
		<img src="../../static/images/detail/detailImg9.jpg">
		<img src="../../static/images/detail/detailImg10.jpg">
		<img src="../../static/images/detail/detailImg11.jpg">
		<img src="../../static/images/detail/detailImg12.jpg">
		<img src="../../static/images/detail/detailImg13.jpg">
		<img src="../../static/images/detail/detailImg14.jpg">
		<img src="../../static/images/detail/detailImg15.jpg">
	</p>
	    `;

export default {
	components: {
		uParse
	},
	data() {
		return {
			detail: {},
			context: htmlString
		};
	},
	onLoad(e) {
		console.log(e.detail);
		if (!e.detail) {
			return uni.navigateBack({
				delta: 1
			});
		}
		//初始化数据
		this.detail = JSON.parse(e.detail);
		// 设置页面标题
		uni.setNavigationBarTitle({
			title: this.detail.title
		});
	},
	methods: {
		preview(src, e) {
			// do something
		},
		navigate(href, e) {
			// do something
		}
	}
};
</script>

<style>
page {
	overflow-x: hidden;
}
.uparse .p {
	padding: 0 !important;
}
.uparse view {
	line-height: 0 !important;
}
</style>
