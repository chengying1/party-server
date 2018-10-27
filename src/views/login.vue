<template>
  <div class="login">
    <el-form class="box">
      <el-form-item class="user">
      <el-input placeholder="用户名" v-model="formData.username"></el-input>
      </el-form-item>
      <el-form-item class="password">
        <el-input type="password" placeholder="密码" v-model="formData.password"></el-input>
      </el-form-item>
      <el-form-item >
      <el-button class="button" type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "login",
    data(){
      return{
        formData:{
          username:'',
          password:''
        }
      }
    },
    methods:{
      login(){
        this.$axios.post('/admin/adminUser/login',this.formData).then(res => {
          if(res.code == 200){
            this.$message.success(res.msg)
            this.$router.push('/layout')
          }else {
            this.$message(res.msg)
          }
        })
      }
    },
    // created(){
    //   this.login()
    // }
  }
</script>

<style scoped lang="scss">
.login{
  /*background: url("../assets/bj.gif") no-repeat;*/
  /*background-size: cover;*/
  background: slategray;
  width: 100vw;
  height: 100vh;
  text-align: center;
  .box{
    margin: 0 auto;
    padding-top: 200px;
    width: 350px;
    height: 350px;
    .button{
      width: 350px;
    }
  }
}
</style>
