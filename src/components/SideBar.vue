<template>
  <div class="sidebar">
    <el-menu
      router :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>首页</span>
        </template>
          <el-menu-item index="/login">首页</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>管理员管理</span>
        </template>
        <el-menu-item index="/layout/user">管理员列表</el-menu-item>
        <el-menu-item index="/layout/adduser">添加管理员</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span slot="title">新闻管理</span>
        </template>
        <el-menu-item index="/layout/news">新闻列表</el-menu-item>
        <el-menu-item index="/layout/addnews">添加新闻</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span slot="title">轮播图管理</span>
        </template>
        <el-menu-item index="/layout/swper">轮播图列表</el-menu-item>
        <el-menu-item index="/layout/addswper">添加轮播图</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "sideBar"
  }
</script>

<style scoped >
.el-menu-vertical-demo{
  /*position: fixed;*/
  /*top: 0;*/
  /*left: 0;*/
  /*bottom: 0;*/
  height: 100vh;
}
  /*.sidebar{*/

  /*}*/
</style>
