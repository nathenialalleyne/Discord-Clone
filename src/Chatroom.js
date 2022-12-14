import { db, auth, provider } from "./firebase-config";
import moment from "moment";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { useCollectionData } from "react-firebase-hooks/firestore";
import { useEffect, useState } from "react";

export function ChatRoom(prop) {
  const [messageText, setMessageText] = useState("");
  const [displayText, setDisplayText] = useState([]);

  const messageRef = collection(db, "messages");

  const addMessage = async () => {
    await addDoc(messageRef, {
      createdAt: Date(),
      message: messageText,
      uid: prop.id,
    });
  };

  useEffect(() => {
    const getMessages = () => {
      return getDocs(messageRef);
    };

    getMessages().then((data) => {
      setDisplayText(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  return (
    <>
      <>
        {displayText.map((x) => {
          return <div>{x.message}</div>;
        })}
      </>
      <input
        id="test"
        onChange={(e) => {
          setMessageText(e.target.value);
        }}
      ></input>
      <button onClick={addMessage}>send</button>
    </>
  );
}
