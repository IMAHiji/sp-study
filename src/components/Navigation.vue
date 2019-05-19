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
        <div class="buttons">
          <b-button tag="router-link" to="/account" class="navbar-item"
            ><img
              v-if="isUserLoggedIn && networkOnLine"
              class="w-10 h-10 rounded-full mr-4"
              :src="user.photoURL"
              alt="Avatar"
          /></b-button>
          <b-button
            v-if="isUserLoggedIn && networkOnLine"
            tag="router-link"
            to="#"
            class="navbar-item"
            @click="logout"
          >
            logout
          </b-button>
        </div>
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
<style lang="scss">
.is-active {
  border-bottom: 2px solid green;
}
</style>
