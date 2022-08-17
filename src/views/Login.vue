<template>
  <div id="box-login">
    <div class="box">
      <el-row style="height: 100%">
        <el-col :span="12" class="box-left"><h1>后台管理系统</h1></el-col>
        <el-col :span="12">
          <div class="box-title">
            <div class="box-title-line"></div>
            <h3>欢迎登录</h3>
          </div>
          <el-form label-position="top" ref="loginFormRef" :model="loginForm">
            <el-form-item label="账户" >
              <el-input
              class="input"
                v-model="loginForm.username"
              />
            </el-form-item>
            <el-form-item label="密码">
              <el-input
                v-model="loginForm.password"
                type="Password"
              />
            </el-form-item>
            <label >
              <span>忘记密码</span>
              <span style="display: block;float: right">注册账户</span>
            </label>
            <el-form-item style="margin-top: 12px">
              <el-button type="primary" @click="submitForm()">登录</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import  {useRouter} from "vue-router"

import {InitData} from "../types/login"

export default defineComponent({
  setup() {
    const router = useRouter();
    const data = reactive(new InitData());
    //点击登录按钮
    const submitForm = () => {
    console.log(data.loginForm)
      router.push("/Home")
    }
    return { ...toRefs(data),submitForm};
  },
});
</script>


<style lang="scss" scoped>
#box-login {
  width: 100%;
  height: 100%;
  background: url("../assets/image/login.jpeg");
  display: flex;
  justify-content: center;
  align-items: center;
  .box {
    width: 800px;
    height: 400px;
    background: #fff;
    // display: flex;
    border-radius: 10px;
    .box-left {
      width: 100%;
      height: 100%;
      background: url("../assets/image/logins.jpeg");
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .box-title{
      display: flex;
      width: 100%;
      height: 80px;
      //justify-content: center;
      align-items: center;
      .box-title-line {
        width: 3px;
        height: 20px;
        background-color: rgb(126, 114, 218);
        margin-left: 8%;
      }
      h3 {
        //line-height: 100px;
        margin-left: 2%;
        // color: yellow;
      }
    }


  }
}
 .el-button {
   width: 100%;
   border: none;
   border-radius: 0;
   font-size: 16px;

}
</style>