<template>
  <div class="main">
    <div class="banner">
      <div class="banner-img"></div>
    </div>
    <el-card>
      <div class="title">文章列表</div>
      <el-row :gutter="20">
        <el-col :span="15">
          <ul>
            <li @click="skip(items._id)" v-for="items in articlesList" :key="items._id">
              <span>{{items.addTime.split('T')[0]}}</span>
              {{items.title}}

            </li>
          </ul>
          <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="queryInfo.pagenum"
      :page-sizes="[3, 5, 7]"
      :page-size="queryInfo.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total=total>
    </el-pagination>
        </el-col>
        <el-col :span="9">
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
                <i class="iconfont icon-csdn" style="color: #F56C6C"></i>
              </a>
              <a href="">
                <i class="iconfont icon-qq" style="color: #409EFF"></i>
              </a>
            </div>
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
      articlesList: [],
      // 分页查询区域
      queryInfo: {
        query: '',
        pagenum: 1,
        pagesize: 3
      },
      total: 0
    }
  },
  created () {
    this.getArticlesList()
  },
  methods: {
    // 监听pagesize改变事件
    handleSizeChange (newSize) {
      this.queryInfo.pagesize = newSize
      this.getArticlesList()
    },
    // 监听pagenum改变事件
    handleCurrentChange (newPage) {
      this.queryInfo.pagenum = newPage
      this.getArticlesList()
    },
    // 获取文章列表
    async getArticlesList () {
      const { data: res } = await this.$http.get('/articles/', {
        params: this.queryInfo
      })
      this.total = res.total
      this.articlesList = res.data
      console.log(res)
    },
    // 跳转文章页面
    skip (id) {
      this.$router.push('/article/' + id)
    }
  }
}
</script>

<style scoped lang="less">
.main {
  position: relative;
  // height: 1340px;
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
  ul {
    margin-top: 30px;
    li {
      cursor: pointer;
      list-style: none;
      width: 100%;
      height: 100px;
      position: relative;
      margin-bottom: 30px;
      line-height: 1.5em;
      word-break: break-all;
      font-size: 19px;
      background-color: #fff;
      box-shadow: 5px 5px 20px #e4e3e3;
      border-left: 12px solid #e1d6b8;
      box-sizing: border-box;
      padding: 30px 20px 40px 250px;
      transition: 0.4s;
      span {
        position: absolute;
        left: 60px;
        color: #575757;
      }
    }
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
      a {
        margin-right: 10px;
        i {
        font-size: 25px;
        margin-right: 20px;
        margin-top: 10px;
      }
      }
    }
  }
}
</style>
