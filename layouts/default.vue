<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          :ellipsis="false"
        >
          <el-menu-item index="0">
            <img
              style="width: 100px;height: 100%;"
              src="../assets/image/logo.svg"
              alt="Element logo"
              @click="backHome"
            />
          </el-menu-item>
          <div class="flex-grow" />
          <el-menu-item
            index="4"
            @click="nextMenu"
          >飲食安排</el-menu-item>
          <el-menu-item
            index="1"
            @click="nextMenu"
          >我的夥伴</el-menu-item>
          <el-menu-item
            index="2"
            @click="nextMenu"
          >訓練安排</el-menu-item>
          <el-menu-item
            index="3"
            @click="nextMenu"
          >登入</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <slot />
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import { Search } from '@element-plus/icons-vue';
import { useRouter } from 'vue-router';

const myPlan = ref('');
const planArray = reactive([
  { title: '週一練胸計畫' },
  { title: '週二練背計畫' },
  { title: '週三練腿計畫' },
  { title: '週四練肩計畫' },
  { title: '週五腹肌計畫' }
]);

const router = useRouter();
const nextMenu = (event) => {
  console.log(event.index);

  switch (event.index) {
    case '4':
      router.push({ name: 'arrange' })
      break;
    case '1':
      router.push({ name: 'partner' })
      break;
    case '2':
      router.push({ name: 'train' })
      break;
    case '3':
      router.push({ name: 'register' })
      break;
  }
}

const backHome = (event) => {
  router.push('/');
}
</script>