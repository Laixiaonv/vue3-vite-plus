<template>
  <div>
    <n-button @click="getCode">Default</n-button>
  </div>
</template>

<script lang="ts" setup>
import { getSms, editPhone } from '@api/login'

const getCode = () => {
    const query = {
      phone: 18868343273,
      smsType: 0
    }
    getSms(query)
      .then(() => {
        // this.$message({
        //   message: '验证码已发送',
        //   type: 'sucess'
        // })
        this.disable = false
      })
      .catch(() => {
        // this.time = 60 // 60秒过后button上的文字初始化,计时器初始化;
        // clearInterval(this.timer)
        // this.isRequest = false
      })
  }
</script>

<style  lang='scss' scoped>

</style>
