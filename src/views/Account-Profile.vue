<template>
  <div>
    <h2>Account</h2>
    <p>Name: {{ user.displayName }}</p>
    <p>Email: {{ user.email }}</p>
    <!-- <figure class="image is-128x128">
      <img :src="user.photoURL" alt="Profile Picture" />
    </figure> -->
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
