<template>
  <div>
    <el-card>
      <div style="padding-bottom: 20px">
        管理员列表
      </div>
      <el-table :data="tableData">
        <el-table-column label="姓名" prop="nickname" />
        <el-table-column label="手机号" prop="phone" />
        <el-table-column label="头像" prop="avatar">
          <template slot-scope="scope">
            <img class="toutu" :src="scope.row.avatar" alt="">
          </template>
        </el-table-column>
        <el-table-column label="性别" prop="sex" />
        <el-table-column label="个性签名" prop="desc" />
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button>
              按钮
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "user",
    data(){
      return{
        tableData:[]
      }
    },
    methods:{
      getData(){
        this.$axios.get('/admin/adminUser').then(res => {
          // console.log(res)
         if(res.code == 200){
           this.tableData = res.data
         }
        })
      }
    },
    created(){
      this.getData()
    }
  }
</script>

<style scoped>
.toutu{
  width: 80px;
  height: 80px;
}
</style>
