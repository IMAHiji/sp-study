<template>
  <nav class="navbar " :class="{ offline: !networkOnLine }" role="navigation">
    <div class="navbar-brand">
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <a
          class="navbar-burger burger"
          :class="{ 'is-active': showNav }"
          role="button"
          data-target="navbar-menu"
          aria-label="menu"
          aria-expanded="false"
          @click="showNav = !showNav"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </a>
    </div>

    <div class="navbar-menu" :class="{ 'is-active': showNav }">
      <div class="navbar-start">
        <div class="navbar-item">
          <router-link to="/">Home</router-link>
        </div>
        <div v-if="!networkOnLine" class="nav-item offline-label">Offline</div>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <router-link to="/protected">Protected</router-link>
        </div>
        <div class="navbar-item">
          <router-link to="/study">Study</router-link>
        </div>
        <div class="navbar-item">
          <router-link to="/about">About</router-link>
        </div>
        <div v-if="!isUserLoggedIn && networkOnLine" class="navbar-item">
          <router-link to="/login">Login</router-link>
        </div>
        <div v-if="isUserLoggedIn && networkOnLine" class="navbar-item logout-item" @click="logout">
          <a>Logout</a>
        </div>
        <div class="navbar-item">
          <router-link to="/account">
            <img
              v-if="isUserLoggedIn && networkOnLine"
              class="user-picture can-hide"
              :src="user.photoURL"
              alt="Avatar"
            />
          </router-link>
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
<style lang="scss">
@import '@/assets/styles/main.scss';

a {
  font-weight: bold;
  color: $link;
  &.router-link-exact-active {
    border-bottom: 2px solid $secondary;
  }
}
</style>
