import {
  // FacebookAuthProvider,
  // OAuthCredential,
  // signInWithCredential,
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  // signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

// TODO: firebase social login (ref. https://stackoverflow.com/questions/78530296/module-firebase-auth-has-no-exported-member-signinwithpopup)
export function auth() {
  return getAuth;
}

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
  // signInWithPopup(auth, provider)
  //   .then((result) => {
  //     // This gives you a Google Access Token. You can use it to access the Google API.
  //     const credential = GoogleAuthProvider.credentialFromResult(result);
  //     const token = credential.accessToken;
  //     // The signed-in user info.
  //     const user = result.user;
  //     // IdP data available using getAdditionalUserInfo(result)
  //     // ...
  //   })
  //   .catch((error) => {
  //     // Handle Errors here.
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // The email of the user's account used.
  //     const email = error.customData.email;
  //     // The AuthCredential type that was used.
  //     const credential = GoogleAuthProvider.credentialFromError(error);
  //     // ...
  //   });
}

export function updateUserInfo(newUserInfo) {
  const auth = getAuth();
  updateProfile(auth.currentUser, newUserInfo)
    .then(() => {
      // Profile updated!
      // ...
    })
    .catch((error) => {
      // An error occurred
      // ...
    });
}

export function userSignOut() {
  const auth = getAuth();
  return signOut(auth);
}

export const onAuth = onAuthStateChanged;
