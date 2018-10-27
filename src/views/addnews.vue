<template>
  <div>
    <el-card>
      <div>
        添加新闻
      </div>
      <el-form :model="formData" label-position="left" label-width="80px">
        <el-form-item label="新闻头图">
          <upload v-model="formData.img"></upload>
        </el-form-item>
        <el-form-item label="新闻标题" required>
          <el-input v-model="formData.title" ></el-input>
        </el-form-item>
          <el-form-item label="作者">
            <el-select v-model="formData.author">
              <el-option
                v-for="(item, index) in users"
                :value="item._id"
                :key="index"
                :label="item.nickname"/>

            </el-select>
          </el-form-item>
        <el-form-item label="新闻内容"required>
          <quill-editor
            v-model="formData.content"
            ref="myQuillEditor"
            :options="editorOption"
            @change="onEditorChange($event)"
          >
          </quill-editor>
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
  import axios from 'axios'
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
  import {quillEditor, Quill} from 'vue-quill-editor'
  import {container, ImageExtend, QuillWatch} from 'quill-image-extend-module'

  Quill.register('modules/ImageExtend', ImageExtend)
  export default {
    components: {quillEditor,upload},
    name: "addnews",
    data(){
      return{
        formData:{
          title:'',
          content:'',
          contentText:'',
          img:'',
          author:'',
          type:'',
        },
        token:'',
        users:[],
        editorOption: {
          modules: {
            ImageExtend: {
              loading: true,
              name: 'file',
              action: "https://upload-z1.qiniup.com",
              response: (res) => {
                return res.url
              },
              change: (xhr, formData) => {
                // xhr.setRequestHeader('myHeader','myValue')
                formData.append('token', this.token)
              }
            },

            toolbar: {
              container: container,
              handlers: {
                'image': function () {
                  QuillWatch.emit(this.quill.id)
                }
              }
            }
          }
        }
      }
    },
    methods:{
      getUser() {
        this.$axios.get('/admin/adminUser').then(res => {
          if(res.code == 200){
            this.users = res.data
          }
        })
      },
      getToken(){
        axios.get('http://upload.yaojunrong.com/getToken')
          .then(res => {
            if(res.data.code == 200){
              this.token = res.data.data
            }
          })
      },
      onEditorChange({ quill, html, text }) {
          this.formData.contentText = text
        },
      handlesubmit(){
        console.log(this.formData)
        this.$axios.post('/admin/news',this.formData).then(res => {
          if(res.code == 200){
            this.$message.success(res.msg)
            this.$router.push({name:'news'})
          }
        })
      }
  },
    created(){
      this.getToken()
      this.getUser()
    }
  }
</script>

<style>
.ql-container{
  min-height: 200px;
}
</style>
