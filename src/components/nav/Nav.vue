<template>
  <header id="nav">
    <div class="center">
      <div class="top">
        <div class="top-center">
          <div class="msg">
            <a href="#">欢迎来到医佰康儿童康复智慧平台！</a>
          </div>
          <div class="tel">
            <div class="a">
              <div class="a1"></div>
              <div class="a2">021-80392253</div>
            </div>
            <div class="b">
              <div class="b1"></div>
              <a href="mailto:YBC@YBC365.COM">
                <div class="b2">YBC@YBC365.COM</div>
              </a>
            </div>
            <div class="c" @click="showInput">
              <a href="#">预约评估</a>
            </div>
          </div>
        </div>
      </div>
      <h1 class="logo">
        <a href="/">医佰康</a>
      </h1>
      <nav class="link">
        <ul>
          <li>
            <router-link to="/homepage" active-class="active">首页
              <br>
              <span>HOME</span>
            </router-link>
          </li>
          <li>
            <router-link to="/noopsyche" active-class="active">智能康复
              <br>
              <span>INTELLIGENT</span>
            </router-link>
          </li>
          <li>
            <router-link to="/course" active-class="active">课程中心
              <br>
              <span>COURSE</span>
            </router-link>
          </li>
          <li>
            <router-link to="/news" active-class="active">新闻&科普
              <br>
              <span>NEWS</span>
            </router-link>
          </li>
          <li>
            <router-link to="/about" active-class="active">关于我们
              <br>
              <span>ABOUT US</span>
            </router-link>
          </li>
          <li>
            <router-link to="/publicBenefit" active-class="active">社会公益
              <br>
              <span>WELFARE</span>
            </router-link>
          </li>
          <li>
            <router-link to="/qicai" active-class="active">康复器材
              <br>
              <span>KFQICAI</span>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="box" v-if="blog">
      <div class="input-center animated bounceInLeft">
        <div class="input-box">
          <el-form
            :model="ruleForm2"
            status-icon
            :rules="rules2"
            ref="ruleForm2"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="请留言" prop="content">
              <el-input
                type="textarea"
                v-model="ruleForm2.content"
                maxlength="500"
                resize="none"
                placeholder="请输入要留言的内容（您最多可输入500个字符）"
              ></el-input>
            </el-form-item>

            <el-form-item label="姓名" prop="name">
              <el-input type="text" v-model="ruleForm2.name" maxlength="10" placeholder="请输入姓名"></el-input>
            </el-form-item>

            <el-form-item label="手机号" prop="mobile">
              <el-input v-model="ruleForm2.mobile" placeholder="请输入手机号"></el-input>
            </el-form-item>

            <el-form-item>
              <div class="btn">
                <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                <el-button @click="resetForm('ruleForm2')">重置</el-button>
                <el-button @click="clone">关闭</el-button>
              </div>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { Message } from "element-ui";
export default {
  data() {
    var checkTel = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("手机号不能为空"));
      }
      setTimeout(() => {
        if (!/^1[3456789]\d{9}$/.test(value)) {
          callback(new Error("请输入合法的手机号"));
        } else {
          callback();
        }
      }, 100);
    };
    //留言区域表单验证不能为空
    var validateContent = (rule, value, callback) => {
      if (!value) {
        callback(new Error("留言不能为空"));
      } else {
        callback();
      }
    };
    //姓名区域不能为空验证
    var validateName = (rule, value, callback) => {
      if (!value) {
        callback(new Error("姓名不能为空"));
      } else if (value.length > 10) {
        callback(new Error("长度不能超过10"));
      } else {
        callback();
      }
    };
    return {
      blog: false,

      ruleForm2: {
        mobile: "",
        content: "",
        name: ""
      },
      rules2: {
        mobile: [
          {
            validator: checkTel,
            trigger: "blur"
          }
        ],
        content: [
          {
            validator: validateContent,
            trigger: "blur"
          }
        ],
        name: [
          {
            validator: validateName,
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    showInput() {
      this.blog = !this.blog;
      this.stop();
    },
    clone() {
      this.blog = false;
      this.move();
    },
    stop() {
      var mo = function(e) {
        e.preventDefault();
      };
      document.body.style.overflow = "hidden";
      document.addEventListener("touchmove", mo, false); //禁止页面滑动
    },
    move() {
      var mo = function(e) {
        e.preventDefault();
      };
      document.body.style.overflow = ""; //出现滚动条
      document.removeEventListener("touchmove", mo, false);
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.startPost();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    startPost() {
      this.$http
        .post(API+"/api/v1.0/appointmsg", this.ruleForm2)
        .then(res => {
          if (res.body.errno == 0) {
            this.$message({
              message: "提交成功",
              type: "success"
            });
            this.$refs.ruleForm2.resetFields(); //提交成功后清空表单
          } else {
            this.$message.error("抱歉，提交失败了，请重新在提交一次");
          }
        });
    }
  }
};
</script>

<style scoped>
#nav {
  width: 100%;
  min-width: 1296px;
  padding-bottom: 20px;
  box-shadow: 0px 5px 5px 0px rgba(27, 16, 10, 0.3);
}

#nav .center {
  width: 1296px;
  overflow: hidden;
  zoom: 1;
  margin: 0 auto;
}

#nav .center .logo {
  width: 230px;
  height: 85px;
  background: url("../../../static/img/logo.png") no-repeat center;
  background-size: 100% 100%;
  text-indent: -9999px;
  float: left;
  margin-top: 15px;
  margin-left: 20px;
}

#nav .center .logo a {
  display: block;
  width: 220px;
  height: 85px;
}

#nav .center .link {
  padding: 30px 0 5px 0;
  float: right;
}

#nav .center .link li {
  float: left;
  text-align: center;
  width: 90px;
  margin-right: 20px;
}
#nav .center .link li:last-child {
  margin-right: 10px;
}

#nav .center .link li span {
  color: #c9caca;
  font-size: 12px;
}

#nav .center .link li a {
  text-decoration: none;
  color: #000;
  padding: 5px 0;
  display: block;
  line-height: 28px;
  font-size: 15px;
  border-radius: 5px;
  transition: 0.2s;
}

#nav .center .link li a:hover,
.active {
  background-color: #4dc1c9;
  color: #fff !important;
  transform: scale(1.1);
}
#nav .top {
  width: 100%;
  height: 70px;
}
#nav .top .top-center {
  width: 1296px;
  margin: 0 auto;
  line-height: 70px;
  display: flex;
}
#nav .top .top-center .msg {
  width: 600px;
  height: 70px;
}
#nav .top .top-center .msg a {
  color: #38a4bd;
  font-size: 14px;
  margin-left: 30px;
  text-decoration: none;
}
#nav .top .top-center .tel {
  flex: 1;
  align-items: center;
  display: flex;
  justify-content: space-around;
}
#nav .top .top-center .tel .a {
  width: 160px;
  height: 30px;
  line-height: 30px;
  display: flex;
  justify-content: space-around;
}
#nav .top .top-center .tel .a .a1 {
  width: 30px;
  height: 30px;
  border: 1px dashed #38a4bd;
  box-sizing: border-box;
  border-radius: 50%;
  background: url("../../../static/img/tel.png") no-repeat center;
}
#nav .top .top-center .tel .a .a2 {
  color: #637373;
  font-size: 14px;
}
#nav .top .top-center .tel .b {
  width: 200px;
  height: 30px;
  display: flex;
  line-height: 30px;
  justify-content: space-around;  
}
#nav .top .top-center .tel .b .b1 {
  width: 30px;
  height: 30px;
  border: 1px dashed #38a4bd;
  box-sizing: border-box;
  border-radius: 50%;
  background: url("../../../static/img/msg.png") no-repeat center;
}
#nav .top .top-center .tel .b .b2 {
  color: #637373;
  font-size: 14px;
}
#nav .top .top-center .tel .c {
  width: 130px;
  height: 30px;
  border-radius: 20px;
  color: #fff;
  font-size: 14px;
  line-height: 30px;
  text-align: center;
  background-color: #2bc4ca;
}
#nav .top .top-center .tel .c a {
  color: #fff;
  text-decoration: none;
}
/* .line {
  width: 1920px;
  height: 1px;
  background-color: #ebebeb;
  box-shadow: 0px 1px 1px 0px rgba(218, 220, 224, 0.74);
} */
.box {
  width: 100%;
  min-width: 1296px;
  height: 100%;
  position: absolute;
  top: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 9999;
}
.input-center {
  width: 1296px;
  margin: 290px auto;
  margin-bottom: 45px;
}

.input-box {
  width: 1296px;
  height: 340px;
  background-color: #daf2f3;
  border: dashed 1px #898989;
  font-family: "微软雅黑";
}

.demo-ruleForm {
  padding: 50px 50px 0 0;
}

.btn {
  text-align: center;
}
.el-button {
  width: 150px;
}
</style>
