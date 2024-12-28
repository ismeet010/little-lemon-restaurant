import { auth } from "../../firebaseConfig";
import { User as FirebaseUser } from "firebase/auth"; // Firebase user type
import { User as CustomUser } from "../../store/defines/user/user.data"; // Your custom user type
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { setCurrentUser } from "../../store/slices/user/user.slices"; // Action to update Redux state

// Mapper function to map FirebaseUser to CustomUser
const mapFirebaseUserToCustomUser = (firebaseUser: FirebaseUser): CustomUser => {
  return {
    firebaseUid: firebaseUser.uid,
    email: firebaseUser.email || '',
    username: firebaseUser.displayName || '',
    firstName: firebaseUser.displayName || '',
    profilePicture: firebaseUser.photoURL || '',
    // Add any other properties you need
  };
};

// Login with Google Function
export const loginWithGoogle = async (dispatch: any) => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    // Get user info
    const firebaseUser = result.user;
    const idToken = await firebaseUser.getIdToken();
    
    // Map the Firebase user to your custom user type
    const customUser = mapFirebaseUserToCustomUser(firebaseUser);
    
    // Dispatch the custom user to Redux store
    dispatch(setCurrentUser(customUser)); // Update Redux state with user data
    
    return { user: customUser, idToken };
  } catch (err: any) {
    console.error("Error during Google login: ", err.message);
    throw err;
  }
};

// Signup Function
export const signup = async (email: string, password: string, dispatch: any) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const firebaseUser = userCredential.user;
    const idToken = await firebaseUser.getIdToken();
    
    // Map the Firebase user to your custom user type
    const customUser = mapFirebaseUserToCustomUser(firebaseUser);
    
    // Dispatch the custom user to Redux store
    dispatch(setCurrentUser(customUser)); // Update Redux state with user data
    
    return { user: customUser, idToken };
  } catch (error: any) {
    if (error.code === "auth/email-already-in-use") {
      throw new Error("This email is already associated with an account.");
    }
    throw error;
  }
};

// Login Function
export const login = async (email: string, password: string, dispatch: any) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const firebaseUser = userCredential.user;
    const idToken = await firebaseUser.getIdToken(); // Get Firebase ID token
    console.log("Login Successful: ", firebaseUser, idToken);
    
    // Map the Firebase user to your custom user type
    const customUser = mapFirebaseUserToCustomUser(firebaseUser);
    
    // Dispatch the custom user to Redux store
    dispatch(setCurrentUser(customUser)); // Update Redux state with user data
    
    return { user: customUser, idToken };
  } catch (error) {
    throw error;
  }
};

// Logout Function
export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
};

// Observe Auth State
export const observeAuthState = (callback: (user: any) => void) => {
  return onAuthStateChanged(auth, callback);
};
