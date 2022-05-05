<template>
  <div class="header-container">
    <Hamburger
      id="hamburger-container"
      :is-active="menu?.sidebar?.opened || false"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    />
  </div>
  
</template>
<script lang="ts" setup>
import Hamburger from "./Hamburger.vue"
import { useStore } from "vuex";

const { state: { menu }, dispatch } = useStore();

const toggleSideBar = () => {
  dispatch('menu/toggleSideBar');
}
</script>
<style lang="scss" scoped>
.header-container {

}
</style>
