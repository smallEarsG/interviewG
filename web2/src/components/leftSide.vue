<template>
   <el-aside width="3rem"  >
        <div class="logo">
          <img src="../assets/logo.png" alt="">
           <div class="logText">上海正也医药有限公司</div>
        </div>
        <el-menu
        active-text-color="#ffd04b"
        background-color="#2a2b2c "
        class="el-menu-vertical-demo"
        default-active="2"
        text-color=" #b1b3b8"
      >
        <el-sub-menu index="1">
          <template #title>
           <el-icon><Edit /></el-icon>
            <span>功能功能A</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">item one</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><Edit /></el-icon>
            <span>功能功能B</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">item one</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>
            <el-icon><Edit /></el-icon>
            <span>功能功能B</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">item one</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="4">
          <template #title>
            <el-icon><Edit /></el-icon>
            <span>功能功能C</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">item one</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="5">
          <template #title>
            <el-icon><Edit /></el-icon>
            <span>功能功能AD</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">item one</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="6">
          <template #title>
            <el-icon><Edit /></el-icon>
            <span>功能功能AC</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">item one</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
      </el-aside>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>

 .logo{
    padding: .20rem;
    font-size: .15rem;
    color: #b1b3b8;
    img{
      width: .40rem;
    }
  }
  .el-aside{
    height: 929px;
    background-color: #2a2b2c !important;
    .el-menu{
      border:none !important;
    }
  }
</style>