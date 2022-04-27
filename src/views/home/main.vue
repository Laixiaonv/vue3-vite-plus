<script setup lang="ts">
import { ref, reactive, watch } from "vue";
import { ElMessage } from 'element-plus'

defineProps<{ msg: string }>();

const count = ref(0);
const input = ref("element-plus");

const curDate = ref('')

const formData = reactive({
    userName: '',
    password: ''
})
watch(formData, (newVal,oldVal) => {
  console.log(newVal, newVal.password, oldVal, oldVal.password)
})

const toast = () => {
  ElMessage.success('Hello')
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <!-- example components -->
  <el-button @click="toast">El Message</el-button>
  <el-button type="primary" @click="count++">count is: {{ count }}</el-button>
  <br />
  <el-input v-model="input" style="width: 200px; margin: 20px" />
  <el-input v-model="formData.userName" style="width: 200px; margin: 20px" />
  <br />
  <el-date-picker v-model="curDate" type="date" placeholder="Pick a day"></el-date-picker>
</template>

<style>
.el-button {
  margin: 4px;
}
</style>
