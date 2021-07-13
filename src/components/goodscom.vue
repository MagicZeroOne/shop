<!--
 * @Author: your name
 * @Date: 2021-07-13 11:10:04
 * @LastEditTime: 2021-07-13 18:18:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \shop\src\components\goodscom.vue
-->
<template>
  <div class="goods">
        <!-- 内容 -->
        <div class="tableCell">
          <table>
            <tr>
              <th>序号</th>
              <th>条形码</th>
              <th>商品名称</th>
              <th>数量</th>
              <th>单价</th>
              <th>现价</th>
              <th>小计</th>
            </tr>
            <tr>
              <th>序号</th>
              <th>条形码</th>
              <th>商品名称</th>
              <th>数量</th>
              <th>单价</th>
              <th>现价</th>
              <th>小计</th>
            </tr>
          </table>
        </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      itemList: []
    }
  }
}
</script>

<style lang="scss" scoped>
table{
  width: 100%;
  // background-color: #c8c8c8
}
tr:nth-child(odd){
  background-color: red;
}

</style>
