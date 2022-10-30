<template>
      <div class="title">
              <div class="titleLine" />
              <div class="titleContent">
                <el-icon><WarningFilled /></el-icon><div class="txt"><slot>主体协议</slot></div>
              </div>
              <div class="titleLine" />
           </div>
</template>
<style lang="less" scoped>
 .title{
      padding: .3rem .2rem;
      display: flex;
      align-items: center;
      .titleLine{
        flex: 1;
        border-top: 1px dashed  #b1b3b8;
      }
      .titleContent{
        padding: 0 .15rem;
        display: flex;
        align-items: center;
        color: blue;
        .txt{
          color: #000;
          margin-left: .1rem ;
        }
      }
    }
</style>