<template>
  <div>
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
                src="/test.png"
                alt="Element logo"
              />
            </el-menu-item>
            <div class="flex-grow" />
            <el-menu-item index="1">登入</el-menu-item>
          </el-menu>

        </el-header>
        <el-container>

          <el-aside width="200px">
            <el-scrollbar>
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
              >
                <el-menu-item index="ㄅ">
                  <el-icon><icon-menu /></el-icon>
                  <span>訓練安排</span>
                </el-menu-item>
                <el-menu-item index="2">
                  <el-icon><icon-menu /></el-icon>
                  <span>飲食安排</span>
                </el-menu-item>
                <el-menu-item index="3">
                  <el-icon>
                    <document />
                  </el-icon>
                  <span>我的夥伴</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <el-icon>
                    <document />
                  </el-icon>
                  <span>訓練場地</span>
                </el-menu-item>
                <el-menu-item index="5">
                  <el-icon>
                    <document />
                  </el-icon>
                  <span>統計數據</span>
                </el-menu-item>
              </el-menu>
            </el-scrollbar>
          </el-aside>

          <!-- <el-aside width="200px">Aside</el-aside> -->
          <el-main>
            <NuxtWelcome />
          </el-main>
        </el-container>
      </el-container>
    </div>

  </div>
</template>
<script setup>
const handleOpen = (key, keyPath) => {
  // console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  // console.log(key, keyPath)
}
</script>

<style>
.flex-grow {
  flex-grow: 1;
}
</style>