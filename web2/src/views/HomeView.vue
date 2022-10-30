
 <template>
  <div class="common-layout">
    <el-container>
      <left-side />
      <el-container>
        <el-header>
          <div class="iconBtnContainer">
            <div class="Btnicon">
              <img src="../assets/icon10.png" alt="" />
              <div>首页</div>
            </div>
            <div class="Btnicon">
              <img src="../assets/icon10.png" alt="" />
              <div>主数据</div>
            </div>
            <div class="Btnicon">
              <img src="../assets/icon10.png" alt="" />
              <div>辖区管理</div>
            </div>
            <div class="Btnicon">
              <img src="../assets/icon10.png" alt="" />
              <div class="tonxu">
                <div class="tonxuBig">销讯通</div>
                <div class="tonxuTittle">行为管理系统</div>
              </div>
            </div>
          </div>
        </el-header>
        <el-main>
          <div class="littleTitle">
            <el-breadcrumb>
              <el-breadcrumb-item>首页</el-breadcrumb-item>
              <el-breadcrumb-item>年度协议管理</el-breadcrumb-item>
              <el-breadcrumb-item>二级商协议</el-breadcrumb-item>
              <el-breadcrumb-item>新增二级协议</el-breadcrumb-item>
            </el-breadcrumb>
            <h4>新增二级协议</h4>
          </div>
          <div class="line">
            <Title1></Title1>
            <div class="content">
              <el-form :rules="rules">
                <div class="content-container">
                  <div class="content-left">
                    <el-form-item label="协议用户" prop="name">
                      <el-button>选择用户</el-button>
                      <span class="leftText"> 上海正也医药有限公司</span>
                    </el-form-item>
                    <el-form-item label="购进指标">
                      <el-select
                        v-model="value"
                        class="m-2"
                        placeholder="Select"
                      >
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        />
                      </el-select>
                      <el-input
                        style="width: 300px; margin-left: 0.1rem"
                        placeholder="请输入金额/数量"
                      />
                    </el-form-item>
                    <el-form-item label="销售区域">
                      <el-button>选择区域</el-button>
                      <el-tag
                        size="medium"
                        closable
                        style="margin: 0.1rem; height: 32px"
                      >
                        全国
                      </el-tag>
                    </el-form-item>
                    <el-form-item label="购进渠道">
                      <el-select
                        v-model="value"
                        class="m-2"
                        placeholder="Select"
                      >
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        />
                      </el-select>
                      <el-button style="margin-left: 10px"
                        >请选择渠道</el-button
                      >
                    </el-form-item>
                  </div>
                  <div class="content-right">
                    <el-form-item label="协议状态">
                      <el-select
                        v-model="value"
                        class="m-2"
                        placeholder="Select"
                      >
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        />
                      </el-select>
                    </el-form-item>
                    <el-form-item label="纯销指标">
                      <el-select
                        v-model="value"
                        class="m-2"
                        placeholder="Select"
                      >
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        />
                      </el-select>
                      <el-input
                        style="width: 300px; margin-left: 0.1rem"
                        placeholder="请输入金额/数量"
                      />
                    </el-form-item>
                    <el-form-item label="签订时间">
                      <el-date-picker
                        v-model="value1"
                        type="date"
                        placeholder="Pick a day"
                      />
                    </el-form-item>
                  </div>
                </div>
                <div class="table">
                  <el-table
                    :data="tableData"
                    style="width: 100%"
                    :header-cell-style="{
                      background: '#c8c9cc',
                    }"
                  >
                    <el-table-column prop="date" label="指定渠道编码" />
                    <el-table-column prop="name" label="指定渠道名称" />
                    <el-table-column prop="address" label="所在省" />
                  </el-table>
                </div>
              </el-form>
            </div>
            <Title1>产品政策</Title1>
            <div class="nav">
              <el-button type="primary">添加产品</el-button>
              <div class="item">
                购进总指标（万元）:<span class="content_text">￥152.65</span>
              </div>
              <div class="item">
                指标按季度分解（万元）:<span class="content_text"
                  >[Q1]￥12.65,&nbsp;[Q1]￥12.65,&nbsp;[Q1]￥12.65,&nbsp;[Q1]￥12.65,&nbsp;</span
                >
              </div>
              <div class="item">
                纯销售总指标（万元）:<span class="content_text">￥152.65</span>
              </div>
            </div>
            <div class="content">
              <div class="fristTitle">
                <div class="itembox">
                  <div class="item">
                    产品：<el-button>选择产品</el-button>
                    <sapn class="fristTitle_txt">美复胶丸&nbsp; 24粒/盒</sapn>
                  </div>
                  <div class="item date">
                    协议效期：
                    <el-date-picker
                      v-model="value1"
                      type="monthrange"
                      range-separator="-"
                      start-placeholder="Start month"
                      end-placeholder="End month"
                    />
                  </div>
                </div>
                <div class="dBtn">
                  <el-button>删除</el-button>
                </div>
              </div>
              <div class="linediv"></div>
              <el-table
                :data="[{ date: '' }]"
                style="width: 100%"
                :header-cell-style="{
                  background: '#c8c9cc',
                }"
              >
                <el-table-column prop="date" label="协议价（元）">
                  <el-input v-model="input" placeholder="Please input" />
                </el-table-column>
                <el-table-column prop="name" label="票折（元）">
                  <el-input v-model="input" placeholder="Please input" />
                </el-table-column>
                <el-table-column prop="address" label="购进指标量（大单位）">
                  <el-input v-model="input" placeholder="Please input" />
                </el-table-column>
                <el-table-column prop="date" label="购进指标量（小单位）">
                  <el-input v-model="input" placeholder="Please input" />
                </el-table-column>
                <el-table-column prop="name" label="购进金额（万元）">
                  <el-input v-model="input" placeholder="Please input" />
                </el-table-column>
                <el-table-column prop="address" label="纯销指标量（小单位）">
                  <el-input v-model="input" placeholder="Please input" />
                </el-table-column>
                <el-table-column prop="address" label="纯销指标金额（万元）">
                  <el-input v-model="input" placeholder="Please input" />
                </el-table-column>
              </el-table>
              <el-table
                :data="[{ date: '' }]"
                style="width: 100%"
                :header-cell-style="{
                  background: '#c8c9cc',
                }"
              >
                <el-table-column prop="date" label="分销奖励">
                  <el-input v-model="input" placeholder="Please input" />
                </el-table-column>
                <el-table-column prop="name" label="费用科目">
                  <el-select v-model="value" class="m-2" placeholder="Select">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </el-table-column>
                <el-table-column prop="address" label="零售配送">
                  <el-input v-model="input" placeholder="Please input" />
                </el-table-column>
                <el-table-column prop="date" label="费用科目">
                  <el-select v-model="value" class="m-2" placeholder="Select">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </el-table-column>
                <el-table-column prop="name" label="医疗配送商">
                  <el-input v-model="input" placeholder="Please input" />
                </el-table-column>
                <el-table-column prop="address" label="费用科目">
                  <el-select v-model="value" class="m-2" placeholder="Select">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </el-table-column>
                <el-table-column prop="address" label="自定义7">
                  <el-input v-model="input" placeholder="Please input" />
                </el-table-column>
                <el-table-column prop="address" label="自定义8">
                  <el-input v-model="input" placeholder="Please input" />
                </el-table-column>
              </el-table>
            </div>
            <Title1>补充协议</Title1>
            <div class="content2">
              <el-button class="btn" type="primary">新增</el-button>
              <el-tabs
                v-model="activeName"
                type="card"
                class="demo-tabs"
                @tab-click="handleClick"
              >
                <el-tab-pane label="补充协议1" name="first">
                  <div class="pane">
                    <div class="Title">
                      <div>协议内容：</div>
                      <el-button>删除</el-button>
                    </div>
                    <div>
                      <el-input
                        v-model="textarea"
                        :rows="8"
                        type="textarea"
                        class="input"
                        placeholder="Please input"
                      />
                    </div>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="补充协议2" name="second"
                  >Config</el-tab-pane
                >
                <el-tab-pane label="补充协议3" name="third">Role</el-tab-pane>
              </el-tabs>
            </div>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>



<script>
import { computed, onMounted, ref } from "vue";
import LeftSide from "@/components/leftSide.vue";
import Title1 from "@/components/title.vue";
export default {
  name: "HomeView",
  components: {
    LeftSide,
    Title1,
  },
  setup() {
    const tableData = [
      {
        date: "2016-05-03",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-02",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-04",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-01",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
    ];
    const activeName = ref("first");
    return { tableData, activeName };
  },
};
</script>
<style lang="less" scoped>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.common-layout {
  font-size: 0.2rem;
  width: 19.2rem;
  overflow: hidden;
  height: 929px;
  .el-header {
    height: 0.6rem;
    background: #2a2b2c;
    // box-shadow: inset 0px 0px 16px 0px #000;
    .iconBtnContainer {
      width: 7rem;
      padding-left: 0.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.16rem;
      color: #b1b3b8;
      height: 100%;
      .Btnicon {
        display: flex;
        align-items: center;
        img {
          width: 0.4rem;
          height: 0.4rem;
        }
        .tonxu {
          color: #fff;
          .tonxuBig {
            font-size: 18px;
            font-weight: bold;
            font-family: emoji;
          }
          .tonxuTittle {
            font-size: 12px;
          }
        }
      }
    }
  }
  .el-container {
  }
  .el-main {
    --el-main-padding: none !important;
    .littleTitle {
      padding: 0.2rem;
      background: #fff;
      h4 {
        margin-top: 0.2rem;
      }
    }
    .line {
      background: rgb(238, 236, 236);
      padding-bottom: 40px;
      box-sizing: border-box;
      height: 800px;
      overflow: auto;
      .content {
        margin: 0.2rem;
        padding: 0.2rem;
        box-sizing: border-box;
        background: #fff;
        .content-container {
          display: flex;
          .content-left,
          .content-right {
            flex: 1;
          }

          .content-left {
            .leftText {
              margin-left: 0.1rem;
              display: inline-block;
              color: #b1b3b8;
            }
          }
        }
        .table {
          width: 13.72rem;
          margin-left: 0.82rem;
        }
        .fristTitle {
          padding: 0.1rem 0.2rem;
          display: flex;

          .itembox {
            flex: 1;
            display: flex;
            align-items: center;
          }
          .item {
            display: flex;
            align-items: center;
            .fristTitle_txt {
              color: blue;
              font-size: 0.18rem;
              margin-left: 0.1rem;
            }
          }
          .date {
            margin-left: 0.8rem;
          }
        }
        .linediv {
          height: 1px;
          background: #b1b3b8;
          width: 102.5%;
          margin: 0.1rem -16px;
        }
      }
      .content2 {
        margin: 0.2rem;
        padding: 0.2rem;
        box-sizing: border-box;
        position: relative;

        .btn {
          position: absolute;
          right: 20px;
        }

        .pane {
          background: #fff;
          border: 1px solid #b1b3b8;
          padding: 20px;
        }
        .Title {
          display: flex;
          justify-content: space-between;
        }
        .input {
          border: #eeecec 1px solid;
          // height: 1.93rem;
          width: 100%;

          margin: 10px 0;
        }
      }
      .nav {
        display: flex;
        justify-content: flex-start;
        display: flex;
        padding: 0 0.2rem;
        align-items: center;
        .item {
          font-size: 0.14rem;
          margin-left: 0.6rem;
          color: #b1b3b8;
          .content_text {
            font-weight: 600;
            color: #000;
          }
        }
      }
    }
  }
}
</style>