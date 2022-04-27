<template>
  <Main msg="Hello Vue 3.0 + Element Plus + Vite" />
</template>

<script setup lang="ts">
import Main from './main.vue'
import { ref } from 'vue'
 
const msg = ref('Hello')
const count = ref(710)
</script>
 
<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
}
</style>