import firebase from 'firebase/app';
import { isNil } from 'lodash';

import store from '@/store';

firebase.auth().onAuthStateChanged(firebaseUser => {
  const actionToDispatch = isNil(firebaseUser) ? 'logout' : 'login';
  console.log('Actionto dispatch', actionToDispatch);
  store.dispatch(`auth/${actionToDispatch}`, firebaseUser);
});
