<template>
  <div class="main">
    <el-card>
      <div class="title">友链列表</div>
      <el-row :gutter="20">
        <el-col :span="8" v-for="items in friendList" :key="items._id">
          <div class="notice">
            <div class="head">
              <img :src=items.icon alt="">
            </div>
            <h3>{{ items.name }}</h3>
            <p class="article">
              {{ items.show }}
            </p>
            <div class="myInformation">
              <p>联系我:    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ items.link }}</p>
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
      friendList: []
    }
  },
  created () {
    this.getFriendsList()
  },
  methods: {
    async getFriendsList () {
      const { data: res } = await this.$http.get('/friends')
      this.friendList = res.data
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
  // background: #d3d3d3;
  margin: 0px 15%;
  margin-top: 150px;
  padding: 0 50px;
  padding-bottom: 30px;
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
    border-radius: 5px;
    margin-top: 30px;
    // border-top: 5px solid #6a5acd ;
    border: 1px solid #d3d3d3;
    box-sizing: border-box;
    // border-bottom: 5px solid #6a5acd ;
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
</style>
