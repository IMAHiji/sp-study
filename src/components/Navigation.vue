<template>
  <nav class="container  nav-container mx-auto">
    <ul class="list-reset flex min-h-full">
      <li class="nav-list-item">
        <router-link class="nav-link" to="/">Home</router-link>
      </li>
      <li class="nav-list-item">
        <router-link class="nav-link" to="/protected">Protected</router-link>
      </li>
      <li class="nav-list-item">
        <router-link class="nav-link" to="/study">Study</router-link>
      </li>
      <li class="nav-list-item">
        <router-link class="nav-link" to="/about">About</router-link>
      </li>
      <li v-if="!isUserLoggedIn && networkOnLine" class="nav-list-item">
        <router-link class="nav-link" to="/login">Login</router-link>
      </li>
      <li v-if="isUserLoggedIn && networkOnLine" class="nav-list-item" @click="logout">
        <a class="nav-link">Logout</a>
      </li>
      <li class="nav-list-item">
        <router-link to="/account" class="nav-list-item">
          <img
            v-if="isUserLoggedIn && networkOnLine"
            class="w-10 h-10 rounded-full mr-4"
            :src="user.photoURL"
            alt="Avatar"
          />
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import firebase from 'firebase/app';
import { mapGetters, mapState } from 'vuex';

export default {
  data() {
    return {
      showNav: false
    };
  },
  computed: {
    ...mapGetters('auth', ['isUserLoggedIn']),
    ...mapState('auth', ['user']),
    ...mapState('app', ['networkOnLine'])
  },
  methods: {
    async logout() {
      await firebase.auth().signOut();
    }
  }
};
</script>
<style lang="postcss">
/* a {
  font-weight: bold;
  color: $link;
  &.router-link-exact-active {
    border-bottom: 2px solid $secondary;
  }
} */

.nav-container {
  min-height: 40px;
}

.nav-list-item {
  @apply text-blue mr-3 flex-1 flex items-center justify-center;
  min-height: 40px;
}
.nav-link {
  @apply text-blue;
}
.nav-link:hover {
  @apply text-blue-darker;
}
</style>
