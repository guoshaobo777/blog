<template>
  <div class="main">
    <el-card>
      <div class="title">留言板</div>
      <el-row :gutter="20">
          <el-col :span="16">
              <ul>
                  <li v-for="items in discussesList" :key="items._id">
                      <img  :src=items.avatar alt="">
                      <span class="name">{{items.name}}说：</span>
                      <span class="content">{{items.content}}</span>
                      <!-- <span class="date">{{(items.addTime).split('T')[0]}}</span> -->
                  </li>
              </ul>
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="queryInfo.pagenum"
                :page-sizes="[1, 3, 4]"
                :page-size="queryInfo.pagesize"
                layout="total, sizes, prev, pager, next, jumper"
                :total=total>
              </el-pagination>
          </el-col>
          <el-col :span="8">
            <div class="notice">
              <h3>发表留言</h3>
              <el-form :model="addForm" ref="addFormRef" label-width="100px" class="demo-ruleForm">
                <el-form-item label="头像" prop="avatar">
                    <el-upload
              class="avatar-uploader"
              action='http://localhost:3000/blog/api/upload'
              :show-file-list="false"
              :on-success="addHandleAvatarSuccess"
            >
              <img v-if="addForm.avatar" :src="addForm.avatar" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
                </el-form-item>
                <el-form-item label="留言人" prop="name">
                    <el-input v-model="addForm.name"></el-input>
                </el-form-item>
                <el-form-item label="留言内容" prop="name">
                    <el-input type="textarea" placeholder="请输入内容" v-model="addForm.content"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button @click="saveDiscuss()">确认</el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      discussesList: [],
      // 分页查询区域
      queryInfo: {
        query: '',
        pagenum: 1,
        pagesize: 4
      },
      total: 0,
      addForm: {
        avatar: '',
        name: '',
        content: ''
      }
    }
  },
  created () {
    this.getDiscussesList()
  },
  methods: {
    // 监听pagesize改变事件
    handleSizeChange (newSize) {
      this.queryInfo.pagesize = newSize
      this.getDiscussesList()
    },
    // 监听pagenum改变事件
    handleCurrentChange (newPage) {
      this.queryInfo.pagenum = newPage
      this.getDiscussesList()
    },
    // 获取文章列表
    async getDiscussesList () {
      const { data: res } = await this.$http.get('/discusses/', {
        params: this.queryInfo
      })
      this.total = res.total
      this.discussesList = res.data
      console.log(res)
    },
    addHandleAvatarSuccess (res) {
      this.addForm.avatar = res.url
    },
    async saveDiscuss () {
      const { data: res } = await this.$http.post('/discusses', this.addForm)
      this.getDiscussesList()
      console.log(res)
      this.addForm = {
        avatar: '',
        name: '',
        content: ''
      }
    }
  }
}
</script>

<style scoped lang="less">
.main {
  position: relative;
  // height: 1340px;
}

.el-card {
  width: 70%;
  // height: 1038px;
  margin: 0px 15%;
  margin-top: 150px;
  box-sizing: border-box;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
  .title {
    text-align: center;
    font-size: 30px;
    font-weight: bolder;
  }
  ul {
    margin-top: 30px;
    li{
    //   cursor: pointer;
      list-style: none;
      width: 100%;
      height: 100px;
      position: relative;
      margin-bottom: 30px;
      line-height: 1.9em;
    //   word-break: break-all;
      font-size: 19px;
      background-color: #fff;
      box-shadow: 5px 5px 20px #e4e3e3;
      border-left: 12px solid #6a5acd;
      box-sizing: border-box;
      padding: 30px 20px 40px 50px;
      transition: 0.4s;
      img{
          width: 80px;
          height: 80px;
          margin-top: -20px;
          border-radius: 50%;
      }
      .name{
          position: absolute;
          left: 150px;
      }
      .content{
          position: absolute;
          left: 300px;
      }
      .date {
        position: absolute;
        right: 60px;
        color: #575757;
      }
    }
  }

  .notice {
    line-height: 1.8em;
    width: 100%;
    padding-top: 20px;
    padding-right: 30px;
    padding-bottom: 20px;
    margin-top: 30px;
    background-color: #fff;
    box-sizing: border-box;
    box-shadow: 5px 5px 20px #e4e3e3;
    .head{
      width: 200px;
      height: 200px;
      padding: 0 80px;
      margin: 0 auto;
      margin-bottom: 20px;
      img{

        width: 200px;
      height: 200px;
      border-radius: 50%;
      }
    }
    h3 {
      margin-bottom: 10px;
      padding: 0 20px;
    }
    .article {
      line-height: 1.8em;
      margin-bottom: 15px;
      padding: 0 20px;

      height: 30px;
      overflow: hidden;
      text-overflow: ellipse;
    }
    .myInformation {
      padding: 10px 20px 20px;
      background-color: #f6f6f6;
      a i {
        font-size: 25px;
        margin-right: 20px;
        margin-top: 10px;
      }
    }
  }
}
/* 图片上传 */
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
  border: 1px dashed #d9d9d9;

}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 108px;
  border: 1px dashed #d9d9d9;

  height: 108px;
  line-height: 108px;
  text-align: center;
}
.avatar {
  width: 108px;
  height: 108px;
  display: block;
}
</style>
