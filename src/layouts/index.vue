<template>
  <div class="layout-container">
    <div class="app-wrapper__title">
      <img :src="projectInfo.logo" class="sidebar-logo">
      <span class="sidebar-title">{{ projectInfo?.title }}</span>
    </div>
    <div class="layout-wrap">
      <div class="sidebar-wrap" :class="{'sidebar-open': menu?.sidebar?.opened }">
       <BaseSide />
      </div>
      <div class="layout-main">
        <BaseHeader />
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import BaseHeader from './BaseHeader.vue'
import BaseSide from './BaseSide.vue'
import Logo from '@/assets/images/logo.png'
import { ref } from '@vue/runtime-core'
import { useStore } from "vuex";

const projectInfo = {
  title: '绿城服务·非住宅数据统计平台',
  logo: Logo
}

const { state: { menu } } = useStore();

</script>
<style  lang="scss" scoped>
@import '@/assets/styles/mixin.scss';
@import '@/assets/styles/variables.scss';

.layout-container {
  height: 100%;
  width: 100%;
  .layout-wrap {
    height: calc(100% - 60px);
    width: 100%;
    display: flex;
  }
  .layout-main {
    flex: 1
  }
}

.sidebar-wrap {
  height: 100%;
  overflow: hidden;
  transition: width .28s;
  // background-color: #072f68;
}

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  overflow-y: hidden;
  &__title {
    height: 64px;
    display: flex;
    align-items: center;
    .sidebar-logo {
      margin: 0 24px;
      width: 30px;
      height: 30px;
    }
    .sidebar-title {
      font-family: PingFangSC-Semibold;
      font-size: 18px;
      color: #333333;
    }
  }

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 64px;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
  padding: 0;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}

.mobile .fixed-header {
  width: 100%;
}
</style>
