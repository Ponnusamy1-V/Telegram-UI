<template>
  <div class="tgme_background_wrap"></div>
  <div class="message-app">
    <MessageSpace class="right-bar"></MessageSpace>
  </div>
</template>

<script>
import MessageSpace from './components/RightBar.vue'
export default {
  name: 'App',
  components: {
    MessageSpace
  }
}
</script>

<style>
:root {
  --left-width: 35%;
  --right-width: 65%;
}

.tgme_background_wrap {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  display: block;
  opacity: 0.96;
  background-image: url('/src/assets/background.svg');
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
}

.right-bar {
  width: 100%;
  height: 100vh;
}

.message-app {
  display: flex;
  flex-direction: row;
}
</style>
