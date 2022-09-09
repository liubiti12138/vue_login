<template>
  <div class="header">
    <FormComponent></FormComponent>
    <WaveComponent></WaveComponent>

    <router-link to="/Login">Login</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import FormComponent from './Form';
import WaveComponent from './Wave';

export default {
  name: "loginComponent",
  data() {
    return {};
  },
  props: {
    msg: String,
  },
  methods: {
    header() {
      // const{ }=this
      // this.$route,push({
      //     name:"Main",
      //     params:{
      //         username:this.name
      //     }
      // })
      // console.log(Wave);
      // console.log(Form);
    },
  },
  components: {
    WaveComponent,
    FormComponent,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  line-height: 1.6;
  width: 100%;
  height: 100%;
}

.header {
  background: linear-gradient(
    60deg,
    rgba(84, 58, 183, 1) 0%,
    rgba(0, 172, 193, 1) 100%
  );
  color: white;
  height: 100vh;
  position: relative;
}

/* .bottom1 {
  position: absolute;
  bottom: 0px;
  width: 100%;
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

/* p {
  font-family: "Lato", sans-serif;
  letter-spacing: 1px;
  font-size: 14px;
  color: #333333;
}

.icon {
  width: 200px;
  vertical-align: middle;
} */

/* .flex {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.waves {
  position: relative;
  width: 100%;
  height: 15vh;
  margin-bottom: -7px;
  min-height: 100px;
  max-height: 150px;
}

.content {
  position: relative;
  height: 20vh;
  text-align: center;
  background-color: white;
} */

/* Animation */

/* .parallax > use {
  animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}

.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}

.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}

.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}

.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}

@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }

  100% {
    transform: translate3d(85px, 0, 0);
  }
} */

/*Shrinking for mobile*/
/* @media (max-width: 100px) {
  .waves {
    height: 1000px;
    min-height: 40px;
  }

  .content {
    height: 30vh;
  }

  h1 {
    font-size: 24px;
  }
} */
</style>