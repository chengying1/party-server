<template>
  <div>
    <el-row>
      <el-col :span="4" ><SideBar></SideBar></el-col>
      <el-col :span="20" style="height: 100vh; overflow-y: scroll" >
        <Header></Header>
        <!--<el-card class="box-card">-->
          <router-view />

      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import SideBar from '@/components/SideBar'
  export default {
    name: "layout",
    components:{
      Header,
      SideBar
    }
  }
</script>

<style scoped>
.box-card{
  /*width: 100%;*/
  height: 500px;
  margin: 20px;
}
</style>
