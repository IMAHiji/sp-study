import UsersDB from '@/firebase/users-db';
import CharactersDB from '@/firebase/characters-db';
/**
 * Create new user from firebase auth user infos
 */
// eslint-disable-next-line
export const createNewUserFromFirebaseAuthUser = async firebaseAuthUser => {
  const providerData = firebaseAuthUser.providerData[0];
  const { displayName, photoURL, email } = providerData;
  const userDb = new UsersDB();
  const user = {
    displayName,
    photoURL,
    email
  };

  return await userDb.create(user, firebaseAuthUser.uid);
};

// Character Helpser
export const createNewCharacterInDatabase = async formPayload => {
  const { character, english, pinyin } = formPayload;
  const charactersDb = new CharactersDB();
  const newEntry = {
    character,
    english,
    pinyin
  };
  return await charactersDb.create(newEntry);
};

export const getAllCharacters = async () => {
  console.log('get all characters fired');
  const charactersDb = new CharactersDB();
  return await charactersDb.readAll();
};
