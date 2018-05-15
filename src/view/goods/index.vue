<template>
  <div class="goods">
    <!--<van-swipe class="goods-swipe" :autoplay="3000">-->
    <!--<van-swipe-item v-for="thumb in goods.thumb" :key="thumb">-->
    <!--<img :src="thumb">-->
    <!--</van-swipe-item>-->
    <!--</van-swipe>-->

    <!--<van-cell-group>-->
    <!--<van-cell>-->
    <!--<div class="goods-title">{{ goods.title }}</div>-->
    <!--<div class="goods-price">{{ formatPrice(goods.price) }}</div>-->
    <!--</van-cell>-->
    <!--<van-cell class="goods-express">-->
    <!--<van-col span="10">运费：{{ goods.express }}</van-col>-->
    <!--<van-col span="14">剩余：{{ goods.remain }}</van-col>-->
    <!--</van-cell>-->
    <!--</van-cell-group>-->

    <!--<van-cell-group class="goods-cell-group">-->
    <!--<van-cell value="进入店铺" icon="shop" is-link @click="sorry">-->
    <!--<template slot="title">-->
    <!--<span class="van-cell-text">有赞的店</span>-->
    <!--<van-tag type="danger">官方</van-tag>-->
    <!--</template>-->
    <!--</van-cell>-->
    <!--<van-cell title="线下门店" icon="location" is-link @click="sorry"/>-->
    <!--</van-cell-group>-->

    <!--<van-cell-group class="goods-cell-group">-->
    <!--<van-cell title="查看商品详情" is-link @click="sorry"/>-->
    <!--</van-cell-group>-->

    <!--<van-goods-action>-->
    <!--<van-goods-action-mini-btn icon="chat" @click="sorry">-->
    <!--客服-->
    <!--</van-goods-action-mini-btn>-->
    <!--<van-goods-action-mini-btn icon="cart" @click="onClickCart">-->
    <!--购物车-->
    <!--</van-goods-action-mini-btn>-->
    <!--<van-goods-action-big-btn @click="sorry">-->
    <!--加入购物车-->
    <!--</van-goods-action-big-btn>-->
    <!--<van-goods-action-big-btn primary @click="sorry">-->
    <!--立即购买-->
    <!--</van-goods-action-big-btn>-->
    <!--</van-goods-action>-->
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>

<script>
  import {
    Tag,
    Col,
    Icon,
    Cell,
    CellGroup,
    Swipe,
    Toast,
    SwipeItem,
    GoodsAction,
    GoodsActionBigBtn,
    GoodsActionMiniBtn,
    AddressList
  } from 'vant';

  // export default {
  //   components: {
  //     [Tag.name]: Tag,
  //     [Col.name]: Col,
  //     [Icon.name]: Icon,
  //     [Cell.name]: Cell,
  //     [CellGroup.name]: CellGroup,
  //     [Swipe.name]: Swipe,
  //     [SwipeItem.name]: SwipeItem,
  //     [GoodsAction.name]: GoodsAction,
  //     [GoodsActionBigBtn.name]: GoodsActionBigBtn,
  //     [GoodsActionMiniBtn.name]: GoodsActionMiniBtn
  //   },
  //
  //   data() {
  //     return {
  //       goods: {
  //         title: '美国伽力果（约680g/3个）',
  //         price: 2680,
  //         express: '免运费',
  //         remain: 19,
  //         thumb: [
  //           'https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg',
  //           'https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg'
  //         ]
  //       }
  //     };
  //   },
  //
  //   methods: {
  //     formatPrice() {
  //       return '¥' + (this.goods.price / 100).toFixed(2);
  //     },
  //
  //     onClickCart() {
  //       this.$router.push('cart');
  //     },
  //
  //     sorry() {
  //       Toast('暂无后续逻辑~');
  //     }
  //   }
  // };
  export default {
    components: {[AddressList.name]: AddressList},
    data() {
      return {
        chosenAddressId: '1',
        list: [
          {
            id: '1',
            name: '张三',
            tel: '13000000000',
            address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
          },
          {
            id: '2',
            name: '李四',
            tel: '1310000000',
            address: '浙江省杭州市拱墅区莫干山路 50 号'
          }
        ]
      }
    },

    methods: {
      onAdd() {
        Toast('新增收货地址');
      },
      onEdit(item, index) {
        Toast('编辑收货地址:' + index);
      }
    }
  }
</script>

<style lang="less">
  .goods {
    padding-bottom: 50px;

    &-swipe {
      img {
        width: 7.5rem;
        height: 7.5rem;
        display: block;
      }
    }

    &-title {
      font-size: 16px;
    }

    &-price {
      color: #f44;
    }

    &-express {
      color: #999;
      font-size: 12px;
      padding: 5px 15px;
    }

    &-cell-group {
      margin: 15px 0;

      .van-cell__value {
        color: #999;
      }
    }
  }
</style>
