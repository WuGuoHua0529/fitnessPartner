<template>
  <div>
    <div class="w-full flex">
      <el-input
        v-model="myPlan"
        :prefix-icon="Search"
        placeholder="尋找你的計畫"
        class="mr-3"
      />
      <el-button>創建時間</el-button>
      <el-button>創建計畫</el-button>
    </div>
    <div class="mt-10 grid grid-cols-3 gap-6">
      <el-card
        v-for="(item, index) in planArray"
        :key="`planCard_${index}`"
      >
        <template #header>{{ item.title }}</template>
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          style="width: 100%"
        />
      </el-card>
    </div>
  </div>
</template>

<script setup>
import { Search } from '@element-plus/icons-vue'

const myPlan = ref('');
const planArray = reactive([
  { title: '週一練胸計畫' },
  { title: '週二練背計畫' },
  { title: '週三練腿計畫' },
  { title: '週四練肩計畫' },
  { title: '週五腹肌計畫' }
]);
</script>

<style>
</style>