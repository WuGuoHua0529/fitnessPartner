<template>
  <div>
    <div class="w-full h-60 flex justify-center content-center">
      <span class="text-xl font-black m-auto">還敢不認真練啊！</span>
    </div>
    <div class="grid grid-cols-4 gap-4">
      <div class="col-span-1">
        <el-collapse>
          <el-collapse-item title="分類">
            <el-checkbox
              v-for="(item, index) in categoryOptions"
              :key="`categoryOptions_${index}`"
              :label="item.label"
              :value="item.value"
              class="w-full"
            />
          </el-collapse-item>
        </el-collapse>
      </div>
      <div class="col-span-3">
        <el-tabs
          v-model="tabsActive"
          class="demo-tabs"
          @tab-click="handleClick"
        >
          <el-tab-pane
            label="熱門計畫"
            name="hot"
          >
            <div class="mt-10 grid grid-cols-3 gap-2">
              <el-card
                v-for="(item, index) in planArray"
                :key="`planCard_${index}`"
              >
                <template #header>
                  <p>{{ item.title }}</p>
                  <p class="text-[#d1d5db] text-xs mt-1">{{ item.info }}</p>
                </template>
                <p class="text-[#f59e0b] text-xs mt-1">計畫項目</p>
                <div class="mt-3">
                  <div class="grid grid-cols-4 gap-2">
                    <div class="row_minOptions">1</div>
                    <div class="row_minOptions">1</div>
                    <div class="row_minOptions">1</div>
                    <div class="row_minOptions">1</div>
                    <div class="row_minOptions">1</div>
                    <div class="row_minOptions">1</div>
                    <div class="row_minOptions">1</div>
                    <div class="row_minOptions">1</div>
                  </div>
                </div>
                <template #footer>
                  <div class="flex justify-between content-center">
                    <div class="flex justify-between content-center">
                      <el-icon class="h-full m-auto">
                        <Star />
                      </el-icon>
                      <span class="ml-1">{{ item.number }}</span>
                    </div>
                    <p class="text-[#d1d5db] text-xs mt-1 mr-1">By {{ item.author }}</p>
                  </div>
                </template>
              </el-card>
            </div>
          </el-tab-pane>
          <el-tab-pane
            label="新發佈"
            name="second"
          >Config</el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Star } from '@element-plus/icons-vue'

const tabsActive = ref('hot');

const categoryOptions = reactive([
  { label: '胸部', value: 'a' },
  { label: '背部', value: 'b' },
  { label: '二頭肌', value: 'c' },
  { label: '肩膀', value: 'e' },
  { label: '腿部', value: 'f' }
])

const planArray = reactive([
  { title: '阿威鍛鍊', info: '今天的鍛鍊充滿活力！', number: 1245, author: 'Alexander Smith' },
  { title: '超級腹肌日', info: '別忘了多喝水！', number: 5, author: 'Sophia Johnson' },
  { title: '自由鍛鍊計畫', info: '保持專注，不要放棄！', number: 4645, author: 'Daniel Martinez' },
  { title: '高碳重訓', info: '每天進步一點點！', number: 1245, author: 'Isabella Brown' },
  { title: '腹肌成長中', info: '腹肌訓練可是需要耐心的。', number: 2547657, author: 'William Taylor' }
]);
</script>

<style lang="scss" scoped>
.info_plan {
  color: #d1d5db;
}

.row_minOptions {
  border: 1px solid black;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>