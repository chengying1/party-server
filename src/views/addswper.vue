<template>
  <div>
    <el-card>
      <div>
        添加轮播图
      </div>
      <el-form :model="formData" label-position="left" label-width="100px">
        <el-form-item label="轮播图头图">
          <upload v-model="formData.img"></upload>
        </el-form-item>
        <el-form-item label="轮播图标题">
          <el-input v-model="formData.title" ></el-input>
        </el-form-item>
        <el-form-item label="新闻">
          <el-select v-model="formData.newsId">
            <el-option
              v-for="item in news"
              :value="item._id"
              :key="item._id"
              :label="item.title"/>
          </el-select>
        </el-form-item>
        <el-form-item label="排序" prop="sort">
          <el-input-number v-model="formData.sort" :min="1" ></el-input-number>
        </el-form-item>
        <el-form-item label="是否显示">
          <el-switch
            v-model="formData.status"
            :active-value="1"
            :inactive-value="0"
            active-text="显示"
            inactive-text="不显示">
          </el-switch>
        </el-form-item>
        <el-form-item >
          <el-button type="primary" @click="handlesubmit" v-if="!isEidt">提交</el-button>
          <el-button type="primary" @click="handlesave" v-else>保存修改</el-button>
        </el-form-item>
      </el-form>
    </el-card>

  </div>
</template>

<script>
  import upload from '@/components/upload'
  export default {
    components:{upload},
    name: "addswper",
    data(){
      return{
        formData:{
          title:'',
          img:'',
          newsId:'',
          status:'',
          sort:'',
        },
        news:[],
        isEidt:false
      }
    },
    methods:{
      getnews(){
        // console.log(this.formData)
        this.$axios.get('/admin/news')
          .then(res => {
            this.news = res.data
            // console.log(res.data)
          })
      },
      handlesubmit(){
        this.$axios.post('/admin/swiper', this.formData).then(res => {
          if(res.code == 200){
            this.$message.success(res.msg)
            this.$router.push({name:'swper'})
          }
        })
      },
      getEidtData(){
        const id = this.$route.query.id
        this.$axios.get(`/admin/swiper/${id}`).then(res => {
          this.formData = res.data
          console.log(res)
        })
      },
      handlesave(){
        const id = this.$route.query.id
        this.$axios.patch(`/admin/swiper/${id}`,this.formData).then(res => {
          if(res.code == 200){
            this.$message.success(res.msg)
            this.$router.push({name:'swper'})
          }
        })
      }
    },

    created(){
        if(this.$route.name == 'Eidtswper'){
          this.isEidt = true
        }else{
          this.isEidt = false
        }
      this.getnews()
      if(this.isEidt){
        this.getEidtData()
      }
    },
    watch:{
      $route(to, from){
        if(to.name == 'Eidtswper'){
          this.isEidt = true
        }else{
          this.isEidt = false
          this.formData = {
            title:'',
              img:'',
              newsId:'',
              status:'',
              sort:'',
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
