<template>
  <div class="input">
    <div class="input-center">
      <div class="title" v-rainbow>
        预约评估
      </div>
      <div class="input-box">
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm" >

          <el-form-item label="请留言" prop="content">
            <el-input type="textarea" v-model="ruleForm2.content" maxlength="500"  resize="none" placeholder="请输入要留言的内容（您最多可输入500个字符）"></el-input>
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
            </div>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { Message } from 'element-ui';
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
      this.$http.post("http://wx.ybc365.com/api/v1.0/appointmsg", this.ruleForm2).then(res => {
        if (res.body.errno == 0) {
          this.$message({
             message:'提交成功',
             type: 'success'
           })
           this.$refs.ruleForm2.resetFields(); //提交成功后清空表单
        } else {
          this.$message.error('抱歉，提交失败了，请重新在提交一次');
        }

        
      });
    }
  }
};
</script>

<style scoped>
.input-center {
  width: 1296px;
  margin: 0 auto;
  margin-bottom: 45px;
}

.title {
  text-align: center;
  font-family: "微软雅黑";
  font-size: 40px;
  color: #3e3a39;
  letter-spacing: 3px;
  position: relative;
  margin-bottom: 56px;
}

.title:after {
  content: "";
  display: block;
  width: 95px;
  height: 7px;
  background-color: #24b5b8;
  position: absolute;
  bottom: -22px;
  right: 50%;
  margin-right: -48px;
  border-radius: 3px;
}

.input-box {
  width: 1296px;
  height: 319px;
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
