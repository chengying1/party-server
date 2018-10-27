<template>
  <div class="header">
    <div class="touxiang">
    <el-dropdown>
  <div class="el-dropdown-link">
    <img class="img" src="../assets/weixi.png" alt="">
  </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>退出登录</el-dropdown-item>
        <el-dropdown-item>个人信息</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    </div>
    <div class="mianbao">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    </div>
    
  </div>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped lang="scss">
.header{
  /*position: fixed;*/
  /*top: 0;*/
  width: 100%;
  height: 80px;
  overflow: hidden;
  /*line-height: 80;*/
  border-bottom: 1px solid #6666;

  .mianbao{
    margin: auto 10px;
    margin-top: 60px;
  }
}
 .touxiang{
   /*position: fixed;*/
   /*top: 20px;*/
   /*right: 20px;*/
   float: right;
   margin-top: 20px;

   .img{
     width: 40px;
     height: 40px;
     border-radius: 50%;
   }
 }
</style>
