<!--
 * @Author: JL Guan
 * @Date: 2022-04-13 09:14:37
 * @description: file description
 * @LastEditTime: 2022-06-07 15:14:07
 * @FilePath: \vite-builder\src\modules\hello\hello.vue
-->
<template>
  <div>{{ hello }}</div>
  <el-button>Default</el-button>
  <el-button type="primary">Primary</el-button>
  <el-button type="success">Success</el-button>
  <el-button type="info">Info</el-button>
  <el-button type="warning">Warning</el-button>
  <el-button type="danger">Danger</el-button>
  <el-button>中文</el-button>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const hello = ref('hello')
</script>

<style lang="scss"></style>
