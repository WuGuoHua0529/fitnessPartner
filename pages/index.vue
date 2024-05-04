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
      <el-button @click="openPlanDialog">創建計畫</el-button>
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

    <el-dialog
      v-model="planDialog"
      :show-close="false"
      class="base_dialog"
      width="80%"
    >
      <div class="grid grid-cols-3">
        <div class="rounded-l-3xl bg-gray-800 h-[70vh] p-5">
          <div class="text-xl font-bold text-white">週一練胸計畫</div>
          <div class="mt-4">
            <p class="text-lg font-bold text-white">創立者</p>
            <p class="mt-2 text-gray-300">陳大威</p>
          </div>
          <div class="mt-4">
            <p class="text-lg font-bold text-white">計畫組合</p>
            <ul class="ul_planDetail mt-2 text-gray-300">
              <li>上胸</li>
              <li>下胸</li>
              <li>胸背</li>
            </ul>
          </div>
        </div>
        <div class="rounded-r-3xl w-full col-span-2 bg-gray-900">
          <div class="border-b-2 border-gray-300 h-24 text-white text-xl flex items-center justify-center">
            計畫資訊
          </div>
          <div>
            <el-collapse
              v-model="collapseName"
              accordion
              class="info_collapse"
            >
              <el-collapse-item
                title="鍛鍊細項"
                name="1"
              >
                <div>
                  Consistent with real life: in line with the process and logic of real
                  life, and comply with languages and habits that the users are used to;
                </div>
              </el-collapse-item>
              <el-collapse-item
                title="時間設定"
                name="2"
              >
                <div>
                  Consistent with real life: in line with the process and logic of real
                  life, and comply with languages and habits that the users are used to;
                </div>
              </el-collapse-item>
              <el-collapse-item
                title="夥伴資訊"
                name="3"
              >
                <div>
                  Consistent with real life: in line with the process and logic of real
                  life, and comply with languages and habits that the users are used to;
                </div>
              </el-collapse-item>
            </el-collapse>
          </div>
        </div>
      </div>
    </el-dialog>
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

const planDialog = ref(false);

function openPlanDialog () {
  planDialog.value = true;
}

const collapseName = ref('1');
</script>

<style lang="scss" scoped>
.ul_planDetail {
  li {
    display: flex;
    justify-content: start;
    align-items: center;
    height: 50px;
    margin: 10px;
    border-radius: 10px;
    padding: 10px;
    &:hover {
      background-color: #78787854;
    }
  }
}
</style>