<template>
  <div class="tabBar">
    <footer>
      <ul class="footer border">
          <li class="active">
            <van-icon  name="wap-home-o" />
            <span>首页</span>
          </li>
          <li>
            <van-icon name="shop-collect-o" />
            <span>分类</span>
          </li>
          <li>
            <van-icon  name="shopping-cart-o" />
            <span>购物车</span>
          </li>
          <li>
            <van-icon  name="friends-o" />
            <span>我的</span>
          </li>
      </ul>
    </footer>
  </div>
</template>
<script>

export default {

};
</script>
<style lang="scss" scoped>
@import "~./tabBar.scss";
</style>