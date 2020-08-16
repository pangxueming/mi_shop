/
<template>
	<view>
		<view class="p-2">
			<view class="d-flex a-center py-2 border-bottom border-light-secondary">
				<text class="text-muted">用户评价({{ total }})</text>
				<text class="main-text-color ml-auto mr-1">{{ good_rate * 100 + '%' }}</text>
				<text class="text-muted">满意</text>
			</view>
			<view class="d-flex flex-wrap pt-2" style="margin-right: -20rpx;">
				<view
					class="px-2 py border rounded mr-2 mb-2 cate-item"
					v-for="(item, index) in cateList"
					:key="index"
					:class="cateIndex === index ? 'active' : ''"
					@tap="cateChange(index)"
				>
					{{ item.name }}
				</view>
			</view>
			<divider />
		</view>

		<view class="p-2 d-flex a-start border-bottom border-light-secondary" v-for="(list, listIndex) in list" :key="listIndex">
			<image :src="list.user.avatar" mode="widthFix" style="width: 90rpx;height: 90rpx;" class="rounded flex-shrink"></image>
			<view class="pl-2 flex-1">
				<view class="d-flex a-center">
					<text class="font-md text-primary font-weight">{{ list.user.nickname }}</text>
					<view class="iconfont icon-iconfontxuanzhong4  main-text-color ml-auto">
						<text class="pl-1 font">{{ list.rating | rating }}</text>
					</view>
				</view>
				<view class="line-h-md font-md">{{ list.review.data }}</view>
				<view class="row">
					<view class="span24-8 p-1" v-if="list.review.image.length > 0" v-for="(image, imageList) in list.review.image" :key="imageList">
						<image :src="image" mode="widthFix" style="height: 100rpx;"></image>
					</view>
				</view>
				<view class="d-flex a-center">
					<text class="text-light-muted ">{{ list.review_time }}</text>
					<view class="d-flex text-light-muted ml-auto a-center mr-1">
						{{ list.goods_num }}
						<text class="iconfont icon-dianzan text-muted ml-1"></text>
					</view>
					<text class="d-flex text-light-muted a-center"><text class="iconfont icon-pinglun text-muted"></text></text>
				</view>
				<!-- 客服回复 -->
				<!-- 
					 <view class="d-flex flex-wrap bg-light-secondary rounded p-2 a-center" v-for="(item3, index3) in item.extra" :key="index3">
					<template v-if="!item3.user"> 				
						<text class="main-text-color">官方回复：</text>
						{{ item3.data }}
						<view class="iconfont icon-dianzan text-light-muted line-h-md ml-2">
							<text class="text-muted pl-1 font">赞客服 {{ item3.good_num }}</text>
						</view>
					 </template>
				 </view> -->
			</view>
		</view>
		<!-- 上拉加载更多 -->
		<view class="d-flex a-center j-center text-light-muted font-md py-3">{{ loadtext }}</view>
	</view>
</template>

<script>
import divider from '@/components/common/divider.vue';
export default {
	data() {
		return {
			id: 0,
			cateIndex: 0,
			cateList: [{ name: '全部', value: '' }, { name: '好评', value: '/good' }, { name: '中评', value: '/middle' }, { name: '差评', value: '/bad' }],
			total: 0,
			good_rate: 0,
			list: [],
			page: 1,
			//
			loadtext: '上拉加载更多'
		};
	},
	components: {
		divider
	},
	onLoad(e) {
		this.id = e.id;
		this.__init();
	},
	onReachBottom() {
		console.log('上拉加载更多');
		if (this.loadtext !== '上拉加载更多') return;

		this.page++;
		this.loadtext = '加载中...';
		this.getData();
	},
	// 监听下拉刷新
	onPullDownRefresh() {
		this.getData(() => {
			uni.showToast({
				title: '刷新成功',
				icon: 'none'
			});
			uni.stopPullDownRefresh();
		}, true);
	},
	filters: {
		rating(value) {
			if (value === 3) {
				return '中评';
			} else if (value > 3) {
				return '好评';
			} else {
				return '差评';
			}
		}
	},
	methods: {
		// 初始化
		__init() {
			this.getData();
		},
		// 加载数据
		getData(callback = false, refresh = false) {
			let value = this.cateList[this.cateIndex].value;
			this.$H.get(`/goods/${this.id}/comments${value}?page=${this.page}`).then(res => {
				this.total = res.total;
				this.good_rate = res.good_rate;
				this.list = !refresh ? [...this.list, ...res.list] : [...res.list];
				this.loadtext = res.list.length < 10 ? '没有更多了' : '上拉加载更多';
				if (typeof callback === 'function') {
					callback(true);
				}
			});
		},
		cateChange(index) {
			this.cateIndex = index;
			setTimeout(() => {
				uni.showLoading({
					title: '加载中...'
				});
			}, 500);
			this.getData(res => {
				uni.hideLoading();
				if (res) {
					setTimeout(() => {
						uni.showToast({
							title: '加载成功',
							icon: 'none'
						});
					}, 500);
				}
			}, true);
		}
	}
};
</script>

<style>
.cate-item {
	background-color: #ffebec !important;
	color: #7d6d6c !important;
	border-color: #f4e0e1 !important;
}
.cate-item.active {
	background-color: #ff6b01 !important;
	color: #ffffff !important;
	border-color: #de7232 !important;
}
</style>
