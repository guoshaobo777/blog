<template>
  <div class="main">
    <el-card>
      <div class="about-page">
        <el-row :gutter="20">
          <el-col :span="24">
            <div class="line">
              <div class="title">关于我</div>
            </div>
            <div class="about-row">
              Hello, 我是南馆，一个不知名的前端开发工程师
            </div>
            <div class="about-row">like：编程 爬山 游戏</div>
            <div class="about-row">
              个人毕业于某二本，2020年计算机科学与技术专业毕业，毕业后开始自学开发，从c/c++，到php,java，然后到现在的前端开发，学习和从事过多种技术栈开发，基本能够独立开发市面上常见的web网页以及app。<br />
              独立开发过仿同花顺客户端和app
              、桌面端压力测试工具、常见门户网站、cms、金融风控系统。
              现阶段工作主要参与前端大屏开发， 实现数据的可视化。
            </div>
            <div class="line">
              <div class="title">关于本站</div>
            </div>
            <div class="about-row">
              建立本站主要是记录个人的一些学习资料以，工作方面涉及商业部分所以作品展主要是一些是闲时的简单开发。
            </div>
            <div class="about-row">
              站名叫淡若清风，主要是备案时候需要起个名字，由于阿隆涉及名称，不能使用，所以随意起了这个名字，个人域名还是采用了最早想用的名字betteralong，
              翻译是更好的阿隆，也译为陈果老师的《好的孤独》，希望未来的自己变得更好。
            </div>
            <div class="about-row">
              本站技术栈<br />
              前端&nbsp;&nbsp; vue + ElementUI + axios <br />
              后端&nbsp;&nbsp; node + express + mongoDB
            </div>
          </el-col>

        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {}
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
  .about-page {
    padding: 20px;
    .line {
      display: block;
      height: 1px;
      width: 100%;
      margin: 24px 0;
      background-color: #dcdfe6;
      position: relative;
      .title {
        position: absolute;
        background-color: #fff;
        padding: 0 20px;
        color: #303133;
        left: 20px;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        font-size: 1.2rem;
      }
    }
    .about-row {
      margin-bottom: 1.1rem;
      line-height: 1.6rem;
      font-size: 1.2rem;
      padding: 0.6rem 0.8rem;
      color: #666;
    }
  }
}
</style>
