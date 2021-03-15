<template>
  <el-container>
    <el-header height="80px">
      <div class="logo">
        <a href="/">
          <img src="../assets/logo.jpg" alt="" />
        </a>
      </div>
      <div>
        <el-menu
          :default-active="activePath"
          class="el-menu-demo"
          router
          mode="horizontal"
        >
          <el-menu-item index="/" @click="saveNavState('/')">首页</el-menu-item>
          <el-menu-item index="/article" @click="saveNavState('/article')"
            >文章</el-menu-item
          >
          <el-menu-item index="/friend" @click="saveNavState('/friend')"
            >友链</el-menu-item
          >
          <el-menu-item index="/discuss" @click="saveNavState('/discuss')"
            >留言板</el-menu-item
          >
          <el-menu-item index="/opus" @click="saveNavState('/opus')"
            >作品展</el-menu-item
          >
          <el-menu-item index="/about" @click="saveNavState('/about')"
            >关于</el-menu-item
          >
        </el-menu>
      </div>
    </el-header>

      <div>
        <router-view></router-view>
      </div>

    <el-footer>
      © 2020 - 南馆的博客 - 闽ICP备19018871号    - Powered by vue & express
    </el-footer>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      // 当前激活菜单的index
      activePath: ''
    }
  },
  created () {
    // console.log(this.$route.path)
    // if (this.$route.path === '/') {
    //   this.activePath = '/'
    // }
    // this.$route.path === '/' ? this.activePath = '/' : this.$route.path === '/article' ? this.activePath = '/article' : this.$route.path === '/friend' ? this.activePath = '/friend' : this.activePath = '/about'
    // if (this.activePath === '/') {
    //   this.activePath = '/'
    // } else {
    if (this.activePath !== '/') {
      this.activePath = window.sessionStorage.getItem('activePath')
    }
  },
  methods: {
    // 保存链接的激活状态
    saveNavState (activePath) {
      window.sessionStorage.setItem('activePath', activePath)
      this.activePath = activePath
    }
  }
}
</script>

<style lang="less">

.el-container{
  min-height: 100%;
}
.el-menu.el-menu--horizontal {
    border-bottom: none;

}

// 头部部分
.el-header,
.el-main {
  padding: 0;

  width: 100%;
}
.el-footer {
  padding: 0;
  width: 100%;
      font-size: 1rem;
    padding: 1.2rem 0;
    color: #333;
    margin-top: 40px;
    text-align: center;
}
.el-header {
   position: fixed;
  background: #fff;
  z-index: 9;
  width: 100%;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 0 10%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo img {
    width: 45px;
  }
  .el-menu {
    height: 80px;
    .el-menu-item {
      height: 80px;
      line-height: 80px;
    }
  }
}

</style>
