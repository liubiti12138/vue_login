<template>
  <div class="main_content">
    <h1>{{ msg }}</h1>
    <button @click="exit">退出</button>
    <div class="main">
      <img
        src="https://picsum.photos/id/1040/300/300"
        alt="a house on a mountain"
      />
      <img src="https://picsum.photos/id/106/300/300" alt="sime pink flowers" />
      <img
        src="https://picsum.photos/id/136/300/300"
        alt="big rocks with some trees"
      />
      <img
        src="https://picsum.photos/id/1039/300/300"
        alt="a waterfall, a lot of tree and a great view from the sky"
      />
      <img src="https://picsum.photos/id/110/300/300" alt="a cool landscape" />
      <img
        src="https://picsum.photos/id/1047/300/300"
        alt="inside a town between two big buildings"
      />
      <img
        src="https://picsum.photos/id/1057/300/300"
        alt="a great view of the sea above the mountain"
      />
    </div>
    <i class="el-icon-picture-outline-round"></i>
  </div>
</template>

<script>
export default {
  name: "mainComponent",
  data() {
    return {
      msg: "欢迎登录",
    };
  },
  methods: {
    exit() {
      this.$router.push("/login");
    },
  },
};
</script>>

<style>
.main {
  --s: 130px; /* control the size */
  --g: 10px;  /* control the gap */
  display: grid;
  margin: calc(var(--s) + var(--g));
}

.main > img {
  grid-area: 1/1;
  width: var(--s);
  aspect-ratio: 0.866;
  object-fit: cover;
  clip-path: polygon(0% 25%,0% 75%,50% 100%,100% 75%,100% 25%,50% 0);
  transform: translate(var(--_x,0),var(--_y,0)) scale(var(--_t,1));
  cursor: pointer;
  filter: grayscale(80%);
  transition: .2s linear;
}
.main > img:hover {
  filter: grayscale(0);
  z-index: 1;
  --_t: 1.2;
}

.main > img:nth-child(1) {--_x: calc(-100% - var(--g))}
.main > img:nth-child(7) {--_x: calc( 100% + var(--g))}
.main > img:nth-child(3),
.main > img:nth-child(5) {--_y: calc(-75% - .87*var(--g))}
.main > img:nth-child(4),
.main > img:nth-child(6) {--_y: calc( 75% + .87*var(--g))}
.main > img:nth-child(3),
.main > img:nth-child(4) {--_x: calc(-50% - .5*var(--g))}
.main > img:nth-child(5), 
.main > img:nth-child(6) {--_x: calc( 50% + .5*var(--g))}


body {
  margin: 0;
  min-height: 100vh;
  /* display: grid; */
  place-content: center;
  /* background: #aabbfb; */
}
</style>