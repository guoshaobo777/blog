<template>
  <div class="main">
    <div class="banner">
      <div class="banner-img"></div>
    </div>
    <el-card>
      <div class="title">文章正文</div>
      <el-row :gutter="20">
        <el-col :span="17">
          <div class="editor markdown-body" v-html="contentHtml"></div>
        </el-col>
        <el-col :span="7">
          <div class="notice">
            <h3>公告</h3>
            <p class="article">
              这里是南馆的个人博客，总结自己在前端领域的所学
              <br />分为文章板块，链接板块，作品板块和留言板
              <br />如果内容对您有所帮助，欢迎点赞评论
            </p>
            <div class="myInformation">
              <p>联系我: www.baidu.com</p>
              <a href="https://github.com/guoshaobo777">
                <i class="iconfont icon-GitHub" style="color: black"></i>
              </a>
              <a href="">
                <i class="iconfont icon-csdn" style="color: #f56c6c"></i>
              </a>
              <a href="">
                <i class="iconfont icon-qq" style="color: #409eff"></i>
              </a>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-card>
    <!-- <el-card> -->
      <!-- <el-button>查询评论列表</el-button> -->
      <!-- <el-form :model="addForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="名称" prop="name">
          <el-input v-model="addForm.name"></el-input>
        </el-form-item>
        <el-form-item label="内容" prop="content">
          <el-input v-model="addForm.content"></el-input>
        </el-form-item>
      </el-form>
      <el-button @click="addDiscuss()" >添加评论</el-button>
      <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="content"
        label="内容">
      </el-table-column>
    </el-table>

    </el-card> -->
  </div>
</template>

<script>
export default {
  props: {
    id: {}
  },
  data () {
    return {
      contentHtml: '',
      tableData: [
        {}
      ],
      addForm: {
        name: '',
        content: ''
      }
    }
  },
  created () {
    this.getActicleById()
    // this.getDiscussList()
  },
  methods: {
    async getActicleById () {
      const { data: res } = await this.$http.get('/articles/' + this.id)
      console.log(res)
      this.contentHtml = res.render
    }
    // async getDiscussList () {
    //   const { data: res } = await this.$http.get('/discusses')
    //   console.log(res)
    //   this.tableData = res.data
    // },
    // async addDiscuss () {
    //   const { data: res } = await this.$http.post('/discusses', this.addForm)
    //   console.log(res)
    //   this.getDiscussList()
    // }
  }
}
</script>

<style scoped lang="less">
@import '../../assets/css/github-markdown.css';
@import '../../assets/css/materialdesignicons.min.css';

.editor {
  padding: 20px 40px;
}
.main {
  position: relative;
}
.banner {
  margin-top: 80px;
  width: 100%;
  height: 340px;
  background: #e1d6b8;
  .banner-img {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-position: 55% top;
    background-image: url('../../assets/banner1.jpg');
  }
}
.el-card {
  width: 70%;
  // height: 1038px;
  margin: -40px 15%;
  box-sizing: border-box;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
  .title {
    text-align: center;
    font-size: 20px;
    font-weight: bolder;
  }

  .notice {
    line-height: 1.8em;
    width: 100%;
    padding-top: 20px;
    margin-top: 30px;
    background-color: #fff;
    box-sizing: border-box;
    box-shadow: 5px 5px 20px #e4e3e3;
    h3 {
      margin-bottom: 10px;
      padding: 0 20px;
    }
    .article {
      line-height: 1.8em;
      margin-bottom: 15px;
      padding: 0 20px;
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

</style>
