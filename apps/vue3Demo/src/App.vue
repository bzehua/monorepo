<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { add, subtract } from '@monorepo/utils'
import { ref } from 'vue'
const num1 = ref(5)
const num2 = ref(3)
const sum = ref(add(num1.value, num2.value))
const difference = ref(subtract(num1.value, num2.value))
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <div class="card">
    <h2>使用 utils 包的计算示例：</h2>
    <p>{{ num1 }} + {{ num2 }} = {{ sum }}</p>
    <p>{{ num1 }} - {{ num2 }} = {{ difference }}</p>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
