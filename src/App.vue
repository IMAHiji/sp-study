<template>
  <div id="app" class="app-container">
    <Navigation />
    <div class="section">
      <router-view />
    </div>
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

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Noto+Sans');
@import '@/assets/styles/main.scss';

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
