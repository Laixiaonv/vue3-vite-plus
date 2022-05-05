<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :class="{'sidebar-open': menu?.sidebar?.opened }"
    :collapse="!props?.isCollapse"
    active-text-color="#2c75dd"
    text-color="#fff"
    background-color="#072f68"
    @open="handleOpen"
    @close="handleClose"
    :collapse-transition = "false"
    mode="vertical"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group>
        <template #title><span>Group One</span></template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title><span>item four</span></template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon><icon-menu /></el-icon>
      <template #title>Navigator Two</template>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <el-icon><document /></el-icon>
      <template #title>Navigator Three</template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <template #title>Navigator Four</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
  Location,
  Document,
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons-vue'

const props = withDefaults(
  defineProps<{ 
    isCollapse: boolean 
  }>(),{
    isCollapse: false
  }
)
const isCollapse = ref(true)
console.log('isCollapse', props.isCollapse, isCollapse)

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
  .el-menu-vertical-demo {
    height: 100%;
    width: 64px ;
    transition: width .28s ease-in-out;
    background-color: #072f68;
    // &.el-menu--collapse {
    //   width: 64px !important
    // }
    &:not(.el-menu--collapse){
      width: 250px;			//宽度自己掌握
      height: 100%;
    }
  }
</style>

