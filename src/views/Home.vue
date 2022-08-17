<template>
  <div id="home">
    <el-container>
      <el-aside width="200px">
        <el-menu
          router
          active-text-color="#ebeffa"
          background-color="#0236b1"
          class="el-menu-vertical-demo"
          default-active="1"
          text-color="#c0c9e6"
          @open="handleOpen"
          @close="handleClose"
          unique-opened='true'
        >
          <h1>xxxxxx管理平台</h1>
          <el-menu-item index="1" route="/index">
            <el-icon><HomeFilled /></el-icon>
            <span>首页</span>
          </el-menu-item>
          <el-sub-menu index="2">
            <template #title>
              <el-icon><Menu /></el-icon>
              <span>任务管理</span>
            </template>
            <el-menu-item index="2-1">数据统计</el-menu-item>
            <el-menu-item index="2-2">item one</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <el-icon><User /></el-icon>
              <span>用户管理</span>
            </template>
            <el-menu-item index="3-1" route="/user/index"> 账户管理</el-menu-item>
            <el-menu-item index="3-2">导航二</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="4">
            <template #title>
              <el-icon><Setting /></el-icon>
              <span>系统管理</span>
            </template>
            <el-menu-item index="4-1">导航一</el-menu-item>
            <el-menu-item index="4-2">导航二</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="5">
            <template #title>
              <el-icon><Delete /></el-icon>
              <span>日志管理</span>
            </template>
            <el-menu-item index="5-1">导航一</el-menu-item>
            <el-menu-item index="5-2">导航二</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header height="80px" style="background-color: #fff">
          <el-row>
            <el-col class="header-left" :span="12"
              ><div>
                <img
                  style="width: 35px; height: 35px"
                  src="../assets/image/recovery.png"
                />
              </div>
              <span>欢迎使用xxxxx平台，当前时间：14:57:26</span><span></span
            ></el-col>
            <el-col :span="12" class="header-right"
              ><div class="head">
                <img
                  style="width: 100%; height: 100%"
                  src="../assets/image/head.jpg"
                />
              </div>
              滴滴</el-col
            >
          </el-row>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent,toRefs } from "vue";
import  {useRouter} from 'vue-router'
export default defineComponent({
  name: "Home",
  components: {},
  setup() {
    const router = useRouter();
    console.log(router.getRoutes())
    return {...toRefs(router)}
  },
});
</script>

<style lang="scss" scoped>
.el-aside .el-menu {
  height: calc(100vh);
}
.el-menu-vertical-demo {
  h1 {
    color: #fff;
    height: 80px;
    width: 100%;
    font-size: 20px;
    text-align: center;
    background-color: #0236b1;
    margin: 0;
    line-height: 80px;
  }
}

.header-left {
  display: flex;
  line-height: 80px;
  img {
    vertical-align: middle;
    margin-right: 20px;
  }
  // align-items: center;
}
.header-right {
  display: flex;
  align-items: center;
  justify-content: right;
  .head {
    width: 50px;
    height: 50px;
    // border: 1px solid #000;
    // background-color: #0236b1;
    border-radius: 50px;
    margin-right: 10px;
    img {
      border-radius: 50px;
    }
  }
}
</style>