<!--
 * @Author: your name
 * @Date: 2021-07-12 14:35:00
 * @LastEditTime: 2021-07-13 17:49:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \MyProject\shop\src\views\About.vue
-->
<template>
  <div class="about">
    <!-- 顶部 -->
    <header-com></header-com>

    <!-- 下部 -->
    <div class="footer">
      <div class="left">
        <!-- 商品详细信息 -->
        <div class="goods">
          <goods-com></goods-com>
        </div>

        <!-- 商品输入 -->
        <div class="goodsinput">
          <goodsinput-com></goodsinput-com>
        </div>

        <!-- 结算 -->
        <div class="settlement">
          <settlement-com></settlement-com>
        </div>
      </div>

      <!-- <button v-on:click="show = !show">
        Toggle
      </button> -->
      <!-- 快捷键提醒 -->
      <div class="help">
        <transition name="fade">
          <help-com v-if="show"></help-com>
        </transition>
      </div>
      <!-- <div class="help">
        <help-com></help-com>
      </div> -->
    </div>
  </div>
</template>
<script>
import headerCom from '../components/headercom.vue'
import goodsCom from '../components/goodscom.vue'
import goodsinputCom from '../components/goodsinputcom.vue'
import settlementCom from '../components/settlementcom.vue'
import helpCom from '../components/helpcom.vue'
export default {
  components: {
    headerCom,
    goodsCom,
    goodsinputCom,
    settlementCom,
    helpCom
  },
  data () {
    return {
      show: true
    }
  },
  created () {
    var _this = this
    document.onkeydown = function (e) {
      const key = window.event.keyCode
      if (key === 27) {
        _this.goHome()
      }
      if (key === 90) {
        _this.show = !_this.show
      }
    }
  },
  methods: {
    goHome () {
      this.$router.push('/')
    },
    closePage () {
      this.show = false
    }
  }
}
</script>
<style lang="scss" scoped>
body {
  margin: 0px;
  padding: 0px;
}
.about {
  width: 1920px;
  height: 1080px;
  opacity: 1;
  background: #f2f2f2;
}
.footer {
  display: flex;
  width: 1920px;
  height: 1020px;
  justify-content: space-between;
  .left {
    width: 100%;
    .goods {
      height: 880px;
    }
    .goodsinput {
      height: 40px;
      background: #e2e2e2;
    }
    .settlement {
      height: 100px;
    }
  }
  .help {
    margin-right: 0px;
    height: 1020px;
    box-shadow: -10px 0px 6px 0px rgba(0, 0, 0, 0.04);
    background: #ffffff;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  width: 0;
  opacity: 0;
}
</style>
