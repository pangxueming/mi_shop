<template>
  <view>
    <!-- #ifdef MP -->
    <!-- 自定义导航 -->
    <view class="d-flex a-center" style="height: 90rpx;">
      <!-- 左边 -->
      <view style="width: 85rpx;" class="d-flex a-center j-center"><text class="iconfont icon-xiaoxi"></text></view>
      <!-- 中间 -->
      <view class="flex-1 bg-light rounded d-flex a-center text-light-muted" style="height: 65rpx;" @click="openSearch">
        <text class="iconfont icon-sousuo mx-2"></text>
        智能积木
      </view>
      <!-- 右边 -->
      <view style="width: 85rpx;" class="d-flex a-center j-center"><text class="iconfont icon-richscan_icon"></text></view>
    </view>
    <!-- #endif -->
    <!-- 顶部选项卡 -->
    <scroll-view scroll-x class="border-bottom scroll-row" style="height: 80rpx;" :scroll-into-view="scrollinto" :scroll-with-animation="true">
      <view
        class="scroll-row-item px-3"
        @click="changeTab(index)"
        style="height: 80rpx;line-height: 80rpx;"
        v-for="(item, index) in tabBars"
        :key="index"
        :class="tabIndex === index ? 'main-text-color' : ''"
        :id="'tab' + index"
      >
        <text class="font-md">{{ item.name }}</text>
      </view>
    </scroll-view>

    <swiper :duration="150" :current="tabIndex" :style="'height:' + scrollH + 'px;'" @change="onChangeTab">
      <swiper-item v-for="(item, index) in newsitems" :key="index">
        <scroll-view scroll-y="true" :style="'height:' + scrollH + 'px;'" @scrolltolower="loadmore(index)">
          <template v-if="item.list.length > 0">
            <block v-for="(list, listIndex) in item.list" :key="listIndex">
              <!-- 轮播图组件 -->
              <swiper-image v-if="list.type === 'swiper'" :resdata="list.data" />

              <template v-else-if="list.type === 'indexnavs'">
                <!-- 首页分类 -->
                <index-nav :resdata="list.data" />
                <divider />
              </template>

              <template v-else-if="list.type === 'threeAdv'">
                <!-- 三图广告 -->
                <three-adv :resdata="list.data" />
                <divider />
              </template>
              <!-- 大图广告位 -->
              <!-- <card headTitle="每日精选" bodyCover="/static/images/demo/demo4.jpg" /> -->

              <!-- 公共列表组件 750 - 5 = 745   372.5-->
              <view class="row j-sb" v-else-if="list.type === 'list'">
                <block v-for="(item2, index2) in list.data" :key="index2"><common-list :item="item2" :index="index2" /></block>
              </view>
            </block>

            <!-- 上拉加载更多 -->
            <divider />
            <view class="d-flex a-center j-center text-light-muted font-md py-3">{{ item.loadtext }}</view>
          </template>
          <template v-else-if="item.firstLoad === 'ing' || item.firstLoad === 'before'">
            <view class="d-flex w-100 j-center a-center pt-5"><text class="font-md" style="color: #6c757d;">加载中...</text></view>
          </template>

          <template v-else>
            <!-- 无数据 -->
            <view class="d-flex w-100 j-center a-center pt-5"><text class="font-md" style="color: #6c757d;">暂无数据</text></view>
          </template>
        </scroll-view>
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
import $H from '@/common/lib/request.js';

import swiperImage from '@/components/index/swiper-image.vue';
import indexNav from '@/components/index/index-nav.vue';
import threeAdv from '@/components/index/three-adv.vue';
import card from '@/components/common/card.vue';
import commonList from '@/components/common/common-list.vue';
export default {
  components: {
    swiperImage,
    indexNav,
    threeAdv,
    card,
    commonList
  },
  data() {
    return {
      scrollinto: '',
      scrollH: 500,
      tabIndex: 0,
      tabBars: [],
      newsitems: []
    };
  },
  created() {
    // 初始化事件
    this.__init();
  },
  onLoad() {
    // 获取可视区域高度
    uni.getSystemInfo({
      success: res => {
        // #ifndef MP
        let navbarH = 0;
        // #endif
        // #ifdef MP
        let navbarH = uni.upx2px(90);
        // #endif
        this.scrollH = res.windowHeight - uni.upx2px(82) - navbarH;
      }
    });
  },
  methods: {
    openSearch() {
      uni.navigateTo({
        url: '../search/search'
      });
    },
    // 初始化事件
    async __init() {
      // 获取顶部选项卡
      $H.get('/index_category/data').then(res => {
        this.tabBars = res.category;
        // 根据顶部选项卡生成页面
        let arr = [];
        for (var i = 0; i < this.tabBars.length; i++) {
          let obj = {
            list: [],
            // 1.上拉加载更多 2.加载中... 3.没有更多了
            loadtext: '上拉加载更多',
            // 首次加载 before加载之前 after加载之后 ing加载中
            firstLoad: 'before'
          };
          // 获取首屏数据
          if (i === 0) {
            obj.list = res.data;
            obj.firstLoad = 'after';
          }
          arr.push(obj);
        }
        this.newsitems = arr;
      });
    },
    // 切换选项卡
    changeTab(index) {
      if (this.tabIndex === index) {
        return;
      }
      this.tabIndex = index;
      this.scrollinto = 'tab' + index;
      if (this.newsitems[index].firstLoad === 'after') {
        return;
      }
      this.addData();
    },
    // 监听滑动列表
    onChangeTab(e) {
      this.changeTab(e.detail.current);
    },
    // 加载数据
    async addData(callback = false) {
      // 拿到当前索引
      let index = this.tabIndex;
      let obj = this.newsitems[index];
      // 拿到当前分类id
      let id = this.tabBars[index].id;
      // 拿到当前分类的分页数
      let page = Math.ceil(obj.list.length / 5) + 1;
      // 请求前
      if (page === 1) {
        obj.firstLoad = 'ing';
      }
      let data = await $H.get('/index_category/' + id + '/data/' + page);
      // 请求完数据
      if (page === 1) {
        obj.firstLoad = 'after';
      }

      if (data) {
        // 赋值
        obj.list = [...obj.list, ...data];
        // 没有更多
        obj.loadtext = data.length < 5 ? '没有更多了' : '上拉加载更多';
      }
      // 执行回调函数
      if (typeof callback === 'function') {
        callback();
      }
    },
    // 上拉加载更多
    loadmore(index) {
      let item = this.newsitems[index];
      // 是否处于可加载状态
      if (item.loadtext !== '上拉加载更多') return;
      // 模拟加载
      item.loadtext = '加载中...';

      this.addData(() => {
        uni.showToast({
          title: '加载成功'
        });
      });
    }
  }
};
</script>

<style></style>
