<template>
  <div class="main">
    <div class="banner">
      <div class="banner-img"></div>
    </div>
    <el-card>
      <div class="content">
        <div class="notify">
          <div class="quote">没有未来的未来不是我想要的未来</div>
        </div>
        <div class="hot">
          <div class="title">
            文章推荐 <a @click="skip('/article')">更多>></a>
          </div>
          <div class="items-list">
            <div
              class="item"
              v-for="items in articlesList"
              :key="items._id"
              v-show="items.ishot"
              @click="$router.push(`/article/${items._id}`)"
            >
              <img :src="items.icon" alt="" />
              <div class="bj"></div>
              <div class="txt">
                <div class="art-title">{{ items.title }}</div>

              </div>
            </div>
          </div>
        </div>
        <div class="hot recommend">
          <div class="title">
            友链推荐 <a @click="skip('/friend')">更多>></a>
          </div>
          <div class="items-list">
            <div
              class="friend-item"
              v-for="items in friendsList"
              :key="items._id"
              v-show="items.isreco"
              @click="hret(items.link)"
            >

            <div class="avatar">
              <img :src=items.icon alt="">
            </div>

              <div class="txt">
                <div class="friend-name">{{items.name}}</div>
              </div>
            </div>

          </div>
        </div>
        <!-- <div class="recommend">推荐</div> -->
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      articlesList: [],
      friendsList: []
    }
  },
  created () {
    this.getArticlesList()
    this.getFriendsList()
  },
  methods: {
    // 跳转
    skip (path) {
      this.$router.push(path)
    },
    // 跳转外链
    hret (link) {
      // window.location.href = link
      window.open(link)
    },
    // 获取文章列表
    async getArticlesList () {
      const { data: res } = await this.$http.get('/articles')
      this.articlesList = res.data
    },
    // 获取友链列表
    async getFriendsList () {
      const { data: res } = await this.$http.get('/friends')
      this.friendsList = res.data
      console.log(res)
    }
  }
}
</script>

<style scoped lang="less">
.main {
  position: relative;
  // height: 1320px;
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
    background-image: url('../assets/banner1.jpg');
  }
}
.content {
  max-width: 900px;
  margin: 0 auto;
}
.notify {
  width: 900px;
  margin: 60px auto;
  border-radius: 3px;
  .quote {
    padding: 20px;
    border-left: 3px solid #6a5acd;
    background-color: #fbfbfb;
    /* padding: 15px 20px; */
    border-radius: 3px;
  }
}
.hot {
  width: 100%;
  height: auto;
  margin-top: 30px;
  margin-bottom: 60px;
  .title {
    color: #757575;
    font-size: 16px;
    font-weight: 400;
    padding-bottom: 15px;
    border-bottom: 1px dashed #ececec;
    a {
      color: #757575;
      font-size: 14px;
      font-weight: 100;
      float: right;
      cursor: pointer;
    }
  }
  .items-list {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    position: relative;
    .friend-item {
      width: 32.9%;
      position: relative;

      .avatar {
        width: 150px;
        height: 150px;
        margin: 0 auto;
        img {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          margin: 0 auto;
        }
      }
      .txt {
        text-align: center;
        margin-top: 5px;
      }
    }
    .item {
      width: 32.9%;
      position: relative;
      cursor: pointer;
      .bj {
        width: 296px;
        height: 176px;
        background: black;
        position: absolute;
        opacity: 0.5;
        top: 0;
      }
      .txt {
        width: 296px;
        height: 176px;
        position: absolute;
        top: 0;
        color: #ffff;
        text-align: center;
        padding-top: 50px;
        .art-title {
          margin-bottom: 15px;
          font-size: 10px;
          font-size: 1.6rem;
          font-weight: 700;
          line-height: 1.5rem;
          color: #fff;
        }
      }
      img {
        height: 176px;
        width: 296px;
      }
    }
  }
}
.recommend {
  margin-bottom: 70px;
}
.el-card {
  width: 70%;
  margin: -40px 15%;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
