<template>
  <div>
    <el-card>
      <div style="padding-bottom: 20px">
        轮播图列表
      </div>
      <el-table :data="tableData">
        <el-table-column label="轮播图">
          <template slot-scope="scope">
            <img class="toutu" :src="scope.row.img" alt="">
          </template>
        </el-table-column>
        <el-table-column label="轮播图标题" prop="title" />
        <el-table-column label="新闻标题" prop="newsId.title" />
        <el-table-column label="排序" prop="sort" />
        <el-table-column label="是否显示">
          <template slot-scope="scope">
            {{scope.row.status ? '显示' : '不显示'}}
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="warning" @click="handleEidt(scope.row._id)" size="mini">
              编辑
            </el-button>
            <el-button type="danger" size="mini">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "swper",
    data(){
      return{
        tableData:[]
      }
    },
    methods:{
      getData(){
        this.$axios.get('/admin/swiper').then(res => {
          // console.log(res)
          if(res.code == 200){
            this.tableData = res.data
          }
        })
      },
      handleEidt(id){
        this.$router.push({name:'Eidtswper', query:{id}})
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
