<template>
  <div class="container">
    <el-form>
      <h2>欢迎登录</h2>
      <el-input v-model="input1" placeholder="请输入账号"></el-input>
      <el-input
        placeholder="请输入密码"
        v-model="input2"
        show-password
      ></el-input>
      <el-button type="success" onclick="tiaozhuan">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "FormComponent",
  data () {
    return {
      input1: '',
      input2: ''
    };
  },
  methods: {
    tiaozhuan() {
      // console.log("我跳转", this);
      //字符串形式直接跳转
      this.$router.push("/main");
    },
    shuru() {
      // if(input1.value=""){
      //   alert("不可登录，请填好信息");
      // }else{
      //   alert("登录成功！")
      // }
    },
  },
};
</script>

<style scoped>
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