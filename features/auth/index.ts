import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export function auth() {
  return getAuth;
}

export function createUser(id: string, pwd: string) {
  return createUserWithEmailAndPassword(getAuth(), id, pwd);
}
