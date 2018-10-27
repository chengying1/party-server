<template>
  <div>
    <el-card>
      <div style="padding-bottom: 20px">
        新闻列表
      </div>
      <el-table :data="tableData">
        <el-table-column label="新闻标题" prop="title" />
        <el-table-column label="作者" prop="author.nickname" />
        <el-table-column label="新闻头图">
          <template slot-scope="scope">
            <img class="toutu" :src="scope.row.img" alt="">
          </template>
        </el-table-column>
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
    name: "news",
    data(){
      return{
        tableData:[]
      }
    },
    methods:{
      getData(){
        this.$axios.get('/admin/news').then(res => {
          console.log(res)
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
