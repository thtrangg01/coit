import firebase from "@/firebase";

const auth = firebase.auth();
class AuthService {
  signIn(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  signUp(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  forgotPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  signOut() {
    return auth.signOut();
  }

  getCurrentUser() {
    return auth.currentUser;
  }
}

export default new AuthService();
