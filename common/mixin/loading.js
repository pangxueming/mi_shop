export default {
	data() {
		return {
			beforeReady: true,
		}
	},
	onReady() {
		//this.$nextTick(()=>{}) 就是在页面完全加载之后再执行
		this.$nextTick(() => {
			setTimeout(() => {
				this.beforeReady = false
			}, 500)
		})
	}
}
