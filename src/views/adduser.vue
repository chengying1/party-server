<template>
  <div>
    <el-card>
      <div style="padding-bottom: 20px">
        添加管理员
      </div>
      <el-form :model="formData" label-position="left" label-width="80px">
        <el-form-item label="用户头像">
          <upload v-model="formData.avatar"></upload>
        </el-form-item>
        <el-form-item label="用户名" required>
          <el-input v-model="formData.username"></el-input>
        </el-form-item>
        <el-form-item label="密码"required>
          <el-input v-model="formData.password" type="password"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="formData.nickname"></el-input>
        </el-form-item>
        <el-form-item label="工作">
          <el-input v-model="formData.job"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="formData.sex">
            <el-option label="男" value="1"></el-option>
            <el-option label="女" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="签名">
          <el-input v-model="formData.desc"></el-input>
        </el-form-item>
        <el-form-item >
         <el-button type="primary" @click="handlesubmit">提交</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  import upload from '@/components/upload'
  export default {
    components:{
      upload
    },
    name: "adduser",
    data(){
      return{
        formData:{
          username:'',
          nickname:'',
          avatar:'',
          password:'',
          desc:'',
          job:'',
          phone:'',
          sex:''
        }
      }
    },
    methods:{
      handlesubmit(){
        // console.log(this.formData)
        this.$axios.post('/admin/adminUser',this.formData)
          .then(res => {
            if(res.code == 200){
              this.$router.push({name:'user'})
              this.$message.success(res.msg)
            }
          })
      }
    }
  }
</script>

<style scoped>

</style>
