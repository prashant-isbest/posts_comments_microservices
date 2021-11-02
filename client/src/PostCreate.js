import React, { useState } from "react";
import axios from "axios";

export default function PostCreate() {
  const [title, setTitle] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(event);
    console.log("title is " + title);

    await axios.post("http://localhost:4000/posts", {
      title: title,
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>{title}</h1>
        <label htmlFor="thelabel">Title</label>
        <br />
        <input
          type="text"
          id="thelabel"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
