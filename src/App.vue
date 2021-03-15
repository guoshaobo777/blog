<template>
  <div id="app">
    <vue-particles
        color="#6A5ACD"
        :particleOpacity="0.7"
        :particlesNumber="60"
        shapeType="circle"
        :particleSize="4"
        linesColor="#6A5ACD"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="2"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        class="lizi"
      >
      </vue-particles>
    <router-view/>
  </div>
</template>

<style lang="less">
  .lizi{
    width: 100%;
    position: absolute;
    height: 100%;

  }
</style>
