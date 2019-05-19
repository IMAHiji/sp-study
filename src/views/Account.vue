<template>
  <div>
    <ul>
      <li>
        <router-link to="profile">Profile</router-link>
      </li>
      <li>
        <router-link to="characters">Characters</router-link>
      </li>
    </ul>
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
