<template>
  <div id="app" class="app-container">
    <Navigation />
    <div class="content-container">
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
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
