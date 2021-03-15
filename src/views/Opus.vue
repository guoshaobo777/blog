<template>
  <div class="main">
    <div class="title">作品展</div>
    <div class="opus-list">
      <div class="content-width">
        <div class="list-warp" v-for="items in opusList" :key="items._id">
          <div class="opus-content">
            <div class="opus-img">
              <img :src="items.opus_pic" alt="">
            </div>
            <div class="opus-title">{{items.opus_name}}</div>
            <div class="opus-show">{{items.opus_show}}</div>
          </div>
          <div class="opus-btn-group">
            <div class="github" @click="skip(items.opus_git_link)">github</div>
            <div class="opus" @click="skip(items.opus_link)">view</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      opusList: []
    }
  },
  created () {
    this.getOpusesList()
  },
  methods: {
    // 获取作品列表
    async getOpusesList () {
      const { data: res } = await this.$http.get('/opuses/', {
        params: this.queryInfo
      })
      this.opusList = res.data
    },
    // 跳转外链
    skip (link) {
      window.open(link)
    }
  }
}
</script>

<style scoped lang="less">
*{
  box-sizing: border-box;
}
.main {
  position: relative;
  // height: 1340px;
}
.title{
  text-align: center;
  font-size: 30px;
  font-weight: bolder;
  margin-top: 100px;
}
.opus-list{
  width: 90%;
  max-width: 1280px;
  margin: 0 auto;
  // height: 300px;
  // background: red;
  padding: 20px;
  .content-width{
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .list-warp{
      // background: red;
      width: 32%;
      height: 300px;
      padding: 10px 27px 0;
      color: #555;
      margin-bottom: 1.3rem;
      background: rgba(0,0,0,.02);
      border: 1px solid #f1f1f1;
      .opus-content{
        height: 254px;
        padding: 15px 0 0 0;
        border-bottom: 2px solid #eee;
        .opus-img{
          display: flex;
          align-items: center;
          justify-content: center;
          img{
            width: 160px;
            height: 120px;
          }
        }
        .opus-title{
          font-size: 1.2rem;
          padding: .2rem;
          margin: 15px 0;
          text-align: center;
        }
        .opus-show{
          font-size: 1rem;
          line-height: 1.4rem;
          overflow: hidden;
        }
      }
      .opus-btn-group{
        height: 33px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        div{
          line-height: 46px;
          color: #555;
          cursor: pointer;
        }
        div:hover{
          color: #6a5acd;
        }
      }
    }
    // .center{
    //   margin: 0 20px;
    // }
  }
}
</style>
