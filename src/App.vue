<template>
  <div id="app" class="app-container ">
    <Navigation />
    <router-view />
  </div>
</template>
<script>
import Navigation from '@/components/Navigation.vue';

export default {
  components: {
    Navigation
  }
};
</script>

<style lang="postcss">
#app {
  font-family: 'Noto Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.content-container {
  height: 100vh;
}
</style>
