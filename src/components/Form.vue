<template>
  <div class="container">
    <!-- <el-form>
      <h2>欢迎登录</h2>
      <el-input v-model="input1" placeholder="请输入账号"></el-input>
      <el-input
        placeholder="请输入密码"
        v-model="input2"
        show-password
      ></el-input>
      <el-button type="success" @click="submit">登录</el-button>
    </el-form> -->
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="userName">
        <el-input
          v-model.number="ruleForm.userName"
          placeholder="请输入内容"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input
          type="password"
          v-model="ruleForm.pass"
          autocomplete="off"
          placeholder="请输入内容"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >提交</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "FormComponent",
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入用户名"));
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        userName: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        userName: [{ validator: checkAge, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      console.log('🚀 ~ formName', formName);
      this.$router.push('/main');
      // return;
      // this.$refs[formName].validate((valid) => {
      //   if (valid) {
      //     alert("submit!");
      //   } else {
      //     console.log("error submit!!");
      //     return false;
      //   }
      // });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    submit() {
      this.$message.error("恭喜你，这是一条成功消息");
      // console.log("我跳转", this);
      //字符串形式直接跳转
      // this.$router.push("/main");
    },
    shuru() {
      if (this.input1 === "") {
        alert("不可登录，请填好信息");
      } else {
        alert("登录成功！");
      }
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 300px;
}

/deep/ .el-form {
  width: 500px;
}
/* #form {
  background: linear-gradient(60deg, rgba(84, 58, 183, 1) 0%, rgba(0, 172, 193, 1) 100%);
  color: white;
  width: 400px;
  padding: 20px 20px 10px;
}

#form label {
  display: block;
}

#form input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #2996bc;
  outline: none;
}

.btn {
  display: block;
  width: 100%;
  padding: 10px 15px;
  border: 0;
  background: #333;
  color: #fff;
  border-radius: 5px;
  margin: 5px 0;
  background: linear-gradient(60deg, rgb(50 105 187) 0%, rgb(36 124 189) 100%);
}

.btn:hover {
  background: rgb(80, 165, 221);
  cursor: pointer;
}

.bottom {
  width: 360px;
} */

/* .container { */
/* margin: auto; */
/* width: 500px; */
/* overflow: auto; */
/* padding: 3rem 2rem;
  display: flex;
  justify-content: center; */
/*水平方向*/
/* align-items: center; */
/*垂直方向*/
/* height: 85%;
  flex-direction: column;
} */
</style>