import router from '@/router';
import { isNil } from 'lodash';
import { createNewUserFromFirebaseAuthUser } from '@/utils/helpers';
import UsersDB from '@/firebase/users-db';

export default {
  //Callback to fire when user logs in
  login: async ({ commit }, firebaseAuthUser) => {
    const userFromFirebase = await new UsersDB().read(firebaseAuthUser.uid);

    const user = isNil(userFromFirebase)
      ? await createNewUserFromFirebaseAuthUser(firebaseAuthUser)
      : userFromFirebase;
    commit('setUser', user);
  },

  logout: ({ commit }) => {
    commit('setUser', null);
    const currentRouter = router.app.$route;
    if (currentRouter.meta && currentRouter.meta.authRequired) {
      router.push('/login');
    }
  }
};
