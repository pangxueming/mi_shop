<template>
	<view class="animated fadeIn faster" style="overflow: hidden;">
		<loading-plus v-if="beforeReady"></loading-plus>

		<uni-nav-bar :right-text="isEdit ? '完成' : '编辑'" title="购物车" statusBar fixed @clickRight="isEdit = !isEdit"></uni-nav-bar>
		<!-- 购物车为空 -->
		<view class="py-5 d-flex a-center j-center bg-white border" v-if="disableSelectAll">
			<view class="iconfont icon-gouwuche text-light-muted" style="font-size: 50rpx;"></view>
			<text class="text-light-muted mx-2">购物车为空</text>
			<view class="px-2 py-1 border border-light-secondary main-bg-color text-white" hover-class="main-bg-hover-color" style="border-radius: 10rpx;">去逛逛吧</view>
		</view>
		<!-- 购物车商品列表 -->
		<view class="bg-white d-flex px-1 flex-column" v-else>
			<!-- 列表 -->
			<view class="d-flex a-center py-3 border-bottom border-light-secondary" v-for="(item, index) in list" :key="index">
				<label class="radio d-flex a-center j-center flex-shrink" style="height: 80rpx; width: 80rpx;" @click="selectItem(index)">
					<radio :value="item.id" :checked="item.checked" color="#FD6801" />
				</label>
				<image :src="item.cover" mode="widthFix" style="width: 150rpx;height: 150rpx;" class="border border-light-secondary p-2 rounded flex-shrink"></image>
				<view class="d-flex flex-1 flex-column pl-2">
					<view class="text-dark" style="font-size: 35rpx;">{{ item.title }}</view>
					<!-- 属性规格 -->
					<view class="d-flex text-muted mb-1 " :class="isEdit ? 'p-1 bg-light-secondary mb-2' : ''" @tap.stop="showPopup(index, item)" v-if="item.skus_type === 1">
						{{ item.skusText }}
						<view class="iconfont icon-bottom font-md ml-auto pr-2" v-if="isEdit"></view>
					</view>
					<view class="mt-auto d-flex j-sb">
						<price>{{ item.pprice }}</price>
						<view class="a-self-end">
							<uni-number-box :min="item.minnum" :value="item.num" :max="item.maxnum" @change="changeNum($event, item, index)"></uni-number-box>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="text-center main-text-color font-md font-weight mt-3">为你推荐</view>
		<view class="position-relative d-flex a-center j-center text-secondary mb-5 pt-3">
			<view style="background-color: #FFFFFF; z-index: 2;" class="px-5 position-absolute">买的人还买了</view>
			<view class="position-absolute" style="height: 1rpx;left: 0; right: 0;background-color: #DDDDDD;"></view>
		</view>

		<!-- 为你推荐 -->
		<view class="row j-sb bg-white pt-2"><common-list v-for="(item3, index3) in hotList" :item="item3" :index="index3" :key="index3"></common-list></view>

		<!-- 占位 -->
		<view style="height:120upx;"></view>
		<!-- 合计 -->
		<view class="d-flex j-center position-fixed left-0 right-0 bottom-0 border-top border-light-secondary" style="height: 100upx; z-index: 9999999; background-color: #fff;">
			<label class="radio d-flex a-center j-center flex-shrink" style=" width: 120rpx;" @click="doSelectAll">
				<radio color="#FD6801" :checked="checkedAll" :disabled="disableSelectAll" />
			</label>
			<template v-if="!isEdit">
				<view class="flex-1 d-flex a-center j-center font-md">
					合计
					<price>{{ totalPrice.toFixed(2) }}</price>
				</view>
				<view class="flex-1 d-flex a-center j-center font-md main-bg-color text-white" hover-class="main-bg-hover-color" @tap="orderComfirm">结算</view>
			</template>
			<template v-else>
				<view class="flex-1 d-flex a-center j-center font-md main-bg-color text-white">移入收藏</view>
				<view class="flex-1 d-flex a-center j-center font-md bg-danger text-white" hover-class="main-bg-hover-color" @tap="doDelGoods">删除</view>
			</template>
		</view>

		<!-- 修改属性 -->
		<sku-popup></sku-popup>
	</view>
</template>

<script>
import loading from '@/common/mixin/loading.js';

import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue';
import price from '@/components/common/price.vue';
import uniNumberBox from '@/components/uni-ui/uni-number-box/uni-number-box.vue';
import zcmRadioGroup from '@/components/common/radio-group.vue';
import commonList from '@/components/common/common-list.vue';
import skuPopup from '@/components/cart/sku-popup.vue';

export default {
	mixins: [loading],
	components: {
		uniNavBar,
		price,
		uniNumberBox,
		commonList,
		skuPopup
	},
	data() {
		return {
			isEdit: false,
			hotList: []
		};
	},
	onLoad() {
		this.getData();
	},
	onPullDownRefresh() {
		this.getData();
	},
	beforeDestroy() {
		uni.$off('updateCart');
	},
	computed: {
		...mapState({
			list: state => state.cart.list,
			selectAll: state => state.cart.list,
			selectedList: state => state.cart.selectedList,
			loginStatus: state => state.user.loginStatus
		}),
		...mapGetters(['checkedAll', 'totalPrice', 'disableSelectAll'])
	},
	methods: {
		...mapMutations(['selectItem', 'initCartList', 'unSelectAll']),
		...mapActions(['updateCartList', 'doSelectAll', 'doDelGoods', 'doShowPopup']),
		changeNum(e, item, index) {
			if (item.num === e) return;
			uni.showLoading({
				title: '加载中'
			});
			this.$H.post('/cart/updatenumber/' + item.id, { num: e }, { token: true }).then(res => {
				console.log(res);
				item.num = e;
				uni.hideLoading();
			});
		},
		//结算页面
		orderComfirm() {
			if (!this.loginStatus) {
				return uni.showToast({
					title: '请登录账号',
					icon: 'none'
				});
			}
			if (this.selectedList.length === 0) {
				return uni.showToast({
					title: '请选择购买的商品',
					icon: 'none'
				});
			}
			uni.navigateTo({
				url: '../order-comfirm/order-comfirm?detail=' + JSON.stringify(this.selectedList)
			});
		},
		showPopup(index, item) {
			// if (!this.isedit) return;
			this.$H.get('/cart/' + item.id + '/sku', {}, { token: true }).then(res => {
				// 商品规格（选项部分）
				let check = item.skusText.split(',');
				res.selects = res.goods_skus_card.map((v, i) => {
					let selected = 0;
					let list = v.goods_skus_card_value.map((v1, i1) => {
						if (check[i] === v1.value) {
							selected = i1;
						}
						return {
							id: v1.id,
							name: v1.value
						};
					});
					return {
						id: v.id,
						title: v.name,
						selected,
						list: list
					};
				});
				// 商品规格（匹配价格）
				res.goods_skus.forEach(item => {
					let arr = [];
					for (let key in item.skus) {
						arr.push(item.skus[key].value);
					}
					item.skusText = arr.join(',');
				});

				this.doShowPopup({
					index: index,
					data: res
				});
			});
		},
		// 获取数据
		getData() {
			// 获取购物车数据
			this.updateCartList()
				.then(res => {
					uni.stopPullDownRefresh();
				})
				.catch(err => {
					uni.stopPullDownRefresh();
				});
			// 获取热门推荐
			this.$H.get('/goods/hotlist').then(res => {
				this.hotList = res.map(v => {
					return {
						id: v.id,
						cover: v.cover,
						title: v.title,
						desc: v.desc,
						oprice: v.min_oprice,
						pprice: v.min_price
					};
				});
			});
		}
	}
};
</script>

<style></style>
