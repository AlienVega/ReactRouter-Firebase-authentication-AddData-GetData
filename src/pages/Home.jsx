import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useCallback } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Posts from "../components/Posts";
import AddPost from "../components/AddPost";
const Home = () => {
  const [user, isLoading] = useAuthState(auth);
  const handleSingOut = useCallback(() => {
    signOut(auth);
  }, []);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <div className="d-flex justify-content-between container mb-4">
        <div>
          <h1>{user.displayName}</h1>
          <h2>{user.email}</h2>
        </div>
        <button className="btn btn-danger" onClick={handleSingOut}>
          SignOut
        </button>
      </div>
      <AddPost />
      <Posts />
    </div>
  );
};

export default Home;
