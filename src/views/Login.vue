<template>
  <div class="page-wrapper">
    <h1 class="login-page-title">Login page</h1>

    <!-- Loader -->
    <div v-show="user === undefined" data-test="loader">Authenticating...</div>

    <!-- Offline instruction -->
    <div v-show="!networkOnLine" data-test="offline-instruction">
      Please check your connection, login feature is not available offline.
    </div>

    <p v-if="loginError">{{ loginError }}</p>
    <!-- Auth UI -->
    <b-button type="is-info" @click="login">
      Login with google
    </b-button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { isNil } from 'lodash';
import firebase from 'firebase/app';
import { desktop as isDesktop } from 'is_js';

export default {
  data: () => ({
    loginError: null
  }),
  head: {
    title: {
      inner: 'Login'
    },
    meta: [
      {
        name: 'description',
        content: 'Sign in',
        id: 'desc'
      }
    ]
  },
  computed: {
    ...mapState('auth', ['user']),
    ...mapState('app', ['networkOnLine'])
  },
  watch: {
    user: {
      handler(user) {
        if (!isNil(user)) {
          const redirectUrl = isNil(this.$route.query.redirectUrl)
            ? '/about'
            : this.$route.query.redirectUrl;
          this.$router.push(redirectUrl);
        }
      },
      immediate: true
    }
  },
  methods: {
    ...mapMutations('auth', ['setUser']),
    async login() {
      this.loginError = null;
      const provider = new firebase.auth.GoogleAuthProvider();
      this.setUser(undefined);

      try {
        // Firebase signin with popup is faster than redirect
        // but we can't use it on mobile because it's not well supported
        // when app is running as standalone on ios & android
        isDesktop()
          ? await firebase.auth().signInWithPopup(provider)
          : await firebase.auth().signInWithRedirect(provider);
      } catch (err) {
        this.loginError = err;
        this.setUser(null);
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
