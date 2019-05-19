<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-menu">
      <div class="navbar-start">
        <router-link
          v-for="(item, index) in routes"
          :key="index"
          :to="item.link"
          class="navbar-item"
          >{{ item.text }}</router-link
        >
      </div>
      <div class="nabar-end">
        <router-link to="/account"
          ><img
            v-if="isUserLoggedIn && networkOnLine"
            class="w-10 h-10 rounded-full mr-4"
            :src="user.photoURL"
            alt="Avatar"
        /></router-link>
        <a v-if="isUserLoggedIn && networkOnLine" @click="logout">
          logout
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
import firebase from 'firebase/app';
import { mapGetters, mapState } from 'vuex';

export default {
  data() {
    return {
      showNav: false,
      routes: [
        {
          link: '/',
          text: 'Home'
        },
        {
          link: '/study',
          text: 'Study'
        },
        {
          link: '/about',
          text: 'About'
        }
      ]
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
