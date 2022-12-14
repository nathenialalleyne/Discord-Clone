import { useEffect, useState } from "react";
import { db, auth, provider } from "./firebase-config";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { async } from "@firebase/util";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";

import { SignIn } from "./SignIn";
import { ChatRoom } from "./Chatroom";

function App() {
  const [newName, setNewName] = useState("");
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const [user] = useAuthState(auth);

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
    <div className="App">
      <>{user ? <ChatRoom id={user.uid} /> : <SignIn />}</>
    </div>
  );
}

export default App;
