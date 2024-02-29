import React from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "../firebase";
const ref = collection(db, "posts");
const Posts = () => {
  const [data, isLoading] = useCollectionData(ref);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="d-flex flex-column g-2 mb-3 ">
      {data.map((post) => (
        <div id={post.id} className="p-4 rounded bg-info  mt-3">
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
