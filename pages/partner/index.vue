<template>
  <div>
    <div class="w-full h-60 flex justify-center content-center">
      <span class="text-xl font-black m-auto">陪練好夥伴</span>
    </div>
    <div class="grid grid-cols-3 gap-4">
      <div
        v-for="(item, index) in planArray"
        :key="`planCard_${index}`"
      >
        <el-card>
          <!-- <template #header>{{ item.name }}</template>
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            style="width: 100%"
          /> -->
          <div class="flex text-sm">
            <div>
              <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
              <div class="mt-2 text-center">{{ item.name }}</div>
            </div>
            <div class="ml-3 w-full">
              <div class="text-sm">{{ item.info }}</div>
              <div class="my-2">約練數：{{ item.number }}</div>
              <div>最近約練時間：{{ item.time }}</div>
              <div class="flex justify-between mt-2">
                <el-button type="primary">約練</el-button>
                <el-button type="danger">取消</el-button>
              </div>
            </div>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script setup>
const planArray = reactive([
  { name: '林天明', info: '今天的鍛鍊充滿活力！', number: 23, time: '12/14' },
  { name: '小陳', info: '一月沒空 二月健身月！', number: 44, time: '03/23' },
  { name: '我愛羅', info: '一偉人助力，愛健身！', number: 3, time: '01/10' },
  { name: '宇智波', info: '體驗世界的痛楚吧', number: 12, time: '05/24' },
  { name: '林天明', info: '今天的鍛鍊充滿活力！', number: 45, time: '12/24' },
  { name: '信平創真', info: '招待不周！', number: 5, time: '12/30' },
]);
</script>

<style lang="scss" scoped>
</style>