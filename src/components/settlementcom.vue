<!--
 * @Author: your name
 * @Date: 2021-07-13 11:11:20
 * @LastEditTime: 2021-07-13 15:47:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \shop\src\components\settlementcom.vue
-->
<template>
  <div class="settlement">
    <!-- 找零 -->
    <div class="return">
      <div class="remsg">找零:</div>
      <div class="renum">{{ renum }}</div>
    </div>

    <!-- 应收 -->
    <div class="get return">
      <div class="remsg" style="color: #ffffff">应收:</div>
      <div class="renum" style="color: #ffffff">{{ getnum }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      renum: 0,
      getnum: 50
    }
  }
}
</script>

<style lang="scss" scoped>
.settlement {
  display: flex;
  background: #f2f2f2;
  .return {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 95px;
    width: 50%;
    border-radius: 10px;
    background: #e2f3f0;
    margin: 5px 5px 0px 11px;
    .remsg {
      width: 60px;
      height: 20px;
      margin-right: 81px;
      line-height: 20px;
      font-size: 20px;
      font-family: Source Han Sans CN, Source Han Sans CN-Bold;
      font-weight: 700;
      color: #333333;
    }
    .renum {
      width: 123px;
      height: 46px;
      line-height: 46px;
      font-size: 46px;
      font-family: Source Han Sans CN, Source Han Sans CN-Bold;
      font-weight: 700;
      color: #333333;
      position: relative;
      &::before {
        content: "￥";
        position: absolute;
        top: 0px;
        left: 0px;
        font-size: 30px;
      }
    }
  }
  .get{
      background: #1ed5b3;
  }
}
</style>
