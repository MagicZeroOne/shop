<!--
 * @Author: your name
 * @Date: 2021-07-13 11:11:58
 * @LastEditTime: 2021-07-13 18:00:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \shop\src\components\helpcom.vue
-->
<template>
  <div class="help">
    <div class="head">
      <div class="left" @click="closepage">
        <div class="msg1">收起(F1)</div>
        <div class="img">
          <img
            src="../assets/img/路径 17.png"
            alt=""
            width="6px"
            height="12px"
          />
        </div>
        <div class="img">
          <img
            src="../assets/img/路径 45.png"
            alt=""
            width="6px"
            height="12px"
          />
        </div>
      </div>
      <div class="right">常用快捷键(F1)</div>
    </div>
    <div class="content">
      <div class="mymsg">数量</div>
      <table class="pure-table pure-table-bordered">
        <tr>
          <th>数量加</th>
          <th>+</th>
          <th>数量减</th>
          <th>-</th>
        </tr>
        <tr>
          <th>数量</th>
          <th>+</th>
          <th>无码商品</th>
          <th>w</th>
        </tr>
        <tr>
          <th>删除</th>
          <th>I</th>
          <th>退货</th>
          <th>A</th>
        </tr>
        <tr>
          <th>挂单</th>
          <th>R</th>
          <th>回复挂单</th>
          <th>O</th>
        </tr>
        <tr>
          <th>查询订单</th>
          <th>R</th>
          <th>查询库存</th>
          <th>N</th>
        </tr>
      </table>

      <div class="mymsg">数量</div>
      <table class="pure-table pure-table-bordered">
        <tr>
          <th>优惠</th>
          <th>/</th>
          <th>整单优惠</th>
          <th>Z</th>
        </tr>
        <tr>
          <th>赠送</th>
          <th>S</th>
          <th>积分兑换</th>
          <th>D</th>
        </tr>
      </table>

      <div class="mymsg">数量</div>
      <table class="pure-table pure-table-bordered">
        <tr>
          <th>会员交易</th>
          <th>M</th>
          <th>添加会员</th>
          <th>F8</th>
        </tr>
        <tr>
          <th>会员储值</th>
          <th>K</th>
          <th></th>
          <th></th>
        </tr>
      </table>

      <div class="mymsg">数量</div>
      <table class="pure-table pure-table-bordered">
        <tr>
          <th>向上选中</th>
          <th>⬆</th>
          <th>向下选中</th>
          <th>⬇</th>
        </tr>
        <tr>
          <th>确定</th>
          <th>Enter</th>
          <th>取消/返回</th>
          <th>Esc</th>
        </tr>
        <tr>
          <th>清除输入项</th>
          <th>Backspace</th>
          <th>拼音码</th>
          <th>Caps_Lock</th>
        </tr>
        <tr>
          <th>开钱箱</th>
          <th>C</th>
          <th>交接班</th>
          <th>H</th>
        </tr>
        <tr>
          <th>小票机开关</th>
          <th>F12</th>
          <th>打印标签</th>
          <th>F9</th>
        </tr>
        <tr>
          <th>最小化</th>
          <th>F5</th>
          <th>锁屏</th>
          <th>L</th>
        </tr>
        <tr>
          <th>消息提醒</th>
          <th>T</th>
          <th>更新要点</th>
          <th>F11</th>
        </tr>
        <tr>
          <th>同步数据</th>
          <th>F7</th>
          <th>设置</th>
          <th>F2</th>
        </tr>
        <tr>
          <th>常用快捷键</th>
          <th>F11</th>
          <th></th>
          <th></th>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    closepage () {
      this.$parent.closePage()
    }
  }
}
</script>

<style lang="scss" scoped>
table {
  border-collapse: collapse;
  border-spacing: 0;
  padding: 0px;
  margin-left: 26px;
}

td,
th {
  padding: 0px;
  width: 90px;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  font-weight: 400;
  border: 1px solid #d8d8d8;
  font-family: Source Han Sans CN, Source Han Sans CN-Regular;
  &:nth-child(odd){
    background-color: #efefef;;
  }
}

.help {
  width: 410px;
  .head {
    height: 33px;
    width: 410px;
    display: flex;
    border: 1px solid #ebebeb;
    .left {
      display: flex;
      width: 116px;
      background: #1ed5b3;
      border: 1px solid #ebebeb;
      align-items: center;
      .msg1 {
        width: 54px;
        line-height: 33px;
        margin-left: 15px;
        opacity: 1;
        font-size: 14px;
        font-family: Source Han Sans CN, Source Han Sans CN-Medium;
        font-weight: 500;
        text-align: left;
        color: #ffffff;
      }
      .img {
        margin-left: 10px;
      }
    }
    .right {
      width: 294px;
      line-height: 33px;
      font-size: 16px;
      color: #333333;
    }
  }
  .content {
    height: 988px;
    width: 410px;
    .mymsg {
      width: 32px;
      height: 16px;
      margin: 32px 0 9px 31px;
      font-size: 16px;
      font-weight: 700;
      line-height: 16px;
      font-family: Source Han Sans CN, Source Han Sans CN-Bold;
      color: #333333;
    }
  }
}
</style>
