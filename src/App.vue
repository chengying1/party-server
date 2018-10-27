<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  *{
    padding: 0;
    margin: 0;
  }
.clearfix::after{
  content: '';
  display: block;
  clear: both;
}
  .fll{
    float: left;
  }
  .flr{
    float: right;
  }
  .el-card{
    min-height: calc( 100vh - 160px );
    div{
      height: 30px;
      line-height: 30px;
    }
  }
  .el-submenu .el-menu-item{
   min-width: 0;
  }
</style>
