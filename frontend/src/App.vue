<template>
  <div class="back">
    <button class="menu-toggle" @click="toggleMenu">☰</button>
    <div v-if="isMenuVisible" class="sideMenu">
      <button class="menu-toggle" @click="toggleMenu">☰</button>
      <HistoryMenu/>
    </div>
    <div class="block">
      <div class="content">
        <img alt="Vue app" src="./assets/super_saian_god.jpg" style="height: 100vh; width: 100vw">
      </div>
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import HistoryMenu from "./components/HistoryMenu.vue";

export default {
  name: 'App',
  components: {
    HistoryMenu,
    HelloWorld
  },
  data() {
    return {
      isMenuVisible: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuVisible = !this.isMenuVisible;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.back {
  background-image: url("./assets/super_saian_god.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100vw;
  position: fixed;
  height: 100vh;
  opacity: .9;
  display: flex;
}

* {
  margin: 0;
}

.menu-toggle {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: rgba(255, 255, 255, 0.7);
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  z-index: 2;
}

.block {
  z-index: 1;
  background-color: rgba(20, 20, 20, .9);
  height: 100vh;
  width: 65%;
  border-left: 6px solid darkgoldenrod;
  border-right: 6px solid darkgoldenrod;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 17.5%;
}

.content {
  border-radius: 50%;
  height: 38vw;
  width: 38vw;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px solid #c7550a;
}

.sideMenu {
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  background-color: rgba(155, 155, 155, 0.8);
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
  z-index: 2;
}
</style>
