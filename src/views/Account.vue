<template>
  <div>
    <h2>Account</h2>
    <p>Name: {{ user.displayName }}</p>
    <p>Email: {{ user.email }}</p>
    <img :src="user.photoURL" alt="Profile Picture" />
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('auth', ['user'])
  }
};
</script>

<style lang="scss" scoped></style>
