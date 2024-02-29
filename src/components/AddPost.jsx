import React from "react";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const AddPost = () => {
  const [body, setBody] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "posts"), {
        body: body,
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          placeholder="what are you working on"
          value={body}
          onChange={(e) => {
            setBody(e.currentTarget.value);
          }}
        />
        <input
          className=" btn btn-dark form-control my-3"
          type="submit"
          value="send"
        />
      </form>
    </div>
  );
};

export default AddPost;
