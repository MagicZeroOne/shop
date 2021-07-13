<!--
 * @Author: your name
 * @Date: 2021-07-13 11:10:48
 * @LastEditTime: 2021-07-13 15:16:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \shop\src\components\goodsinputcom.vue
-->
<template>
  <div class="outer">
    <div class="left">
      <div class="msg">商品条形码：</div>

      <div class="input">
        <input
          type="text"
          placeholder="请扫描或输入商品条形码，输入后按Enter键。"
        />
      </div>
    </div>

    <div class="button">结算模式</div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.outer {
  display: flex;
  justify-content: space-between;
  position: relative;
  .left {
    display: flex;
    .msg {
      margin-left: 16px;
      line-height: 40px;
      opacity: 1;
      font-size: 18px;
      font-family: Source Han Sans CN, Source Han Sans CN-Bold;
      font-weight: 700;
      text-align: left;
      color: #333333;
    }
    .input {
      input {
        width: 600px;
        height: 36px;
        border: 0px;
        padding: 0px 0 0px 14px;
        margin-top: 2px;
        &::placeholder{
            color: #bcbcbc;
        }
      }
    }
  }

  .button {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 12px;
    margin: auto;
    width: 101px;
    height: 34px;
    line-height: 34px;
    color: #ffffff;
    font-size: 16px;
    opacity: 1;
    background: #1ed5b3;
    border-radius: 17px;
  }
}
</style>
