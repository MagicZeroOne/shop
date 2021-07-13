<!--
 * @Author: your name
 * @Date: 2021-07-12 14:35:00
 * @LastEditTime: 2021-07-13 15:04:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \MyProject\shop\src\views\Home.vue
-->
<template>
  <div class="home">
    <!-- 背景图 -->
    <div class="background">
      <img src="../assets/img/蒙版组 3.png" height="100%" width="100%" alt="" />
    </div>

    <!-- 中间登录部分 -->
    <div class="center">
      <!-- 左边的图片 -->
      <div class="left">
        <img
          src="../assets/img/资源 4.png"
          width="623px"
          height="474px"
          opacity="1"
          alt=""
        />
      </div>

      <!-- 右边的文字和输入框 -->
      <div class="right">
        <!-- 文字 -->
        <div class="head">XXX智慧收银系统</div>

        <!-- 账号密码输入框 -->
        <input type="text" class="username" value="ZERO" placeholder="账号" />
        <input
          type="password"
          class="password"
          value="zhong123456"
          placeholder="密码"
        />

        <!-- 登录按钮 -->
        <button class="login" @click="goSettlement">登录</button>

        <!-- 版本号 -->
        <div class="footer">桌面端 V1.0.1</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data () {
    return {}
  },
  methods: {
    goSettlement: function () {
      this.$router.push('/about')
    }
  }
}
</script>
<style scoped>
input {
  padding: 0px;
  outline: none;
  border: 1px solid;
}
input:focus {
  border: 1px solid #1ed5b3;
}
body {
  margin: 0px;
  padding: 0px;
}
.home {
  position: relative;
}
.center {
  position: absolute;
  float: left;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 980px;
  height: 478px;
  opacity: 1;
  background: #ffffff;
  border-radius: 16px;
}
.left {
  float: left;
  width: 623px;
  height: 474px;
  opacity: 1;
}
.right {
  float: left;
  margin-right: -360px;
  height: 478px;
  width: 360px;
}
.head {
  float: left;
  margin-top: 68px;
  margin-right: 60px;
  width: 293px;
  height: 50px;
  opacity: 1;
  font-size: 36px;
  font-family: Alibaba PuHuiTi, Alibaba PuHuiTi-Regular;
  font-weight: 400;
  text-align: left;
  color: #333333;
}
.username {
  float: left;
  margin-top: 50px;
  margin-right: 57px;
  padding: 0 0 0 13px;
  width: 298px;
  height: 43px;
  opacity: 1;
  background: #ffffff;
  border-radius: 6px;
}
.password {
  float: left;
  margin-top: 24px;
  margin-right: 57px;
  padding: 0 0 0 13px;
  width: 298px;
  height: 43px;
  opacity: 1;
  background: #ffffff;
  border-radius: 6px;
}
.login {
  padding: 0px;
  border: 0px;
  float: left;
  margin-top: 38px;
  margin-right: 57px;
  width: 300px;
  height: 45px;
  opacity: 1;
  background: #1ed5b3;
  border-radius: 6px;
  box-shadow: 0px 6px 10px 0px rgba(30, 213, 179, 0.2);
  font-size: 18px;
  font-family: Source Han Sans CN, Source Han Sans CN-Medium;
  font-weight: 500;
  color: #ffffff;
}
.footer {
  float: right;
  margin-top: 78px;
  margin-right: 14px;
  height: 14px;
  opacity: 1;
  font-size: 14px;
  font-family: Source Han Sans CN, Source Han Sans CN-Medium;
  font-weight: 500;
  text-align: left;
  color: #333333;
}
</style>
