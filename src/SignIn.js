import { auth, provider } from "./firebase-config";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

export function SignIn() {
  const test = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        const credential = GoogleAuthProvider.credentialFromResult(data);
        const token = credential.accessToken;

        const user = data.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
  return (
    <>
      <button onClick={test}>Login</button>
    </>
  );
}
