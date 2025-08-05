import {
  GoogleAuthProvider,
  // FacebookAuthProvider,
  // OAuthCredential,
  // signInWithCredential,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export function createUser(id: string, pwd: string) {
  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, id, pwd);
}

export function signInUser(id: string, pwd: string) {
  return signInWithEmailAndPassword(getAuth(), id, pwd);
}

export function googleSignIn() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}

export function userSignOut() {
  return signOut(auth);
}
