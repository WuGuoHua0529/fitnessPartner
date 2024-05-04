<template>
  <div class="mt-20">
    <el-form
      ref="ruleFormRef"
      style="max-width: 600px"
      :model="ruleForm"
      status-icon
      :rules="rules"
      label-width="auto"
      class="demo-ruleForm m-auto"
    >
      <el-form-item
        label="姓名"
        prop="pass"
      >
        <el-input
          v-model="ruleForm.pass"
          type="password"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item
        label="電話"
        prop="checkPass"
      >
        <el-input
          v-model="ruleForm.checkPass"
          type="password"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item
        label="所在區域"
        prop="age"
      >
        <el-input v-model.number="ruleForm.age" />
      </el-form-item>
      <el-form-item
        label="身份"
        prop="age1"
      >
        <el-input v-model.number="ruleForm.age1" />
      </el-form-item>
      <el-form-item
        label="目的"
        prop="age2"
      >
        <el-input v-model.number="ruleForm.age2" />
      </el-form-item>
      <div class="flex justify-center content-center">
        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm(ruleFormRef)"
          >
            送出
          </el-button>
          <el-button @click="resetForm(ruleFormRef)">返回</el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const ruleFormRef = ref(null);
const ruleForm = reactive({
  pass: '',
  checkPass: '',
  age: '',
  age1: '',
  age2: '',

})

const submitForm = (formEl) => {
}

const resetForm = (formEl) => {
}
</script>

<style lang="scss" scoped>
</style>