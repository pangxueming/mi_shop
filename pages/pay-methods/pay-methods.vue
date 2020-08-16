<template>
	<view>
		<view class="d-flex flex-column a-center j-center py-5 my-3">
			<text class="text-light-muted font-md">支付金额</text>
			<price priceSize="font-lg" unitSize="font-md">{{ detail.price }}</price>
		</view>
		<view class="px-5">
			<radio-group @change="change">
				<label v-for="(item, index) in options" :key="index">
					<uni-list-item showExtraIcon :leftIcon="item.icon" :title="item.title" :note="item.note" leftIconStyle="font-size:60rpx;">
						<radio slot="right" color="#fd6801" :value="item.value" :checked="payMethods === item.value" />
					</uni-list-item>
				</label>
			</radio-group>
			<view
				class="rounded  text-white font-md w-100 py-2 text-center mt-2"
				:class="loading ? 'bg-secondary' : 'main-bg-color'"
				hover-class="main-bg-hover-color"
				@click="submit"
			>
				{{ loading ? '支付中...' : '确认支付' }}
			</view>
		</view>
	</view>
</template>

<script>
import price from '@/components/common/price.vue';
import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item.vue';
export default {
	components: {
		price,
		uniListItem
	},
	data() {
		return {
			loading: false,
			detail: {
				id: 0,
				price: 0
			},
			payMethods: 'alipay',
			options: [
				{
					title: '支付宝支付',
					note: '推荐使用支付宝支付',
					icon: 'icon-zhifubao text-primary',
					value: 'alipay'
				},
				{
					title: '微信支付',
					note: '',
					icon: 'icon-weixinzhifu text-success',
					value: 'wxpay'
				}
			]
		};
	},
	onLoad(e) {
		if (!e.detail) {
			return uni.showToast({
				title: '支付失败',
				icon: 'none'
			});
		}
		this.detail = JSON.parse(e.detail);
	},
	methods: {
		// 支付
		submit() {
			// 防止重复支付
			if (this.loading) return;
			this.loading = true;
			this.$H
				.get('/payment/' + this.detail.id + '/' + this.payMethods, {}, { token: true, native: true })
				.then(res => {
					console.log(res);
					uni.requestPayment({
						provider: this.payMethods,
						orderInfo: res.data, //微信、支付宝订单数据
						success: res => {
							// 为了防止重复支付问题
							uni.redirectTo({
								url: '../pay-result/pay-result'
							});

							console.log('success:' + JSON.stringify(res));
						},
						fail: err => {
							uni.showModal({
								title: '提示',
								content: '支付失败',
								showCancel: false
							});
							console.log('fail:' + JSON.stringify(err));
						},
						complete() {
							this.loading = false;
						}
					});
				})
				.catch(err => {
					this.loading = false;
					console.log(err);
					uni.showToast({
						title: '支付失败',
						icon: 'none'
					});
				});
		},
		// 切换支付方式
		change(e) {
			this.payMethods = e.detail.value;
		}
	}
};
</script>

<style></style>
