import React, { useState, useEffect } from "react";
import { getJokesRandom } from "./api";

export default function App({ handleSubmit = () => {} }) {
  const [text, setText] = useState("");

  useEffect(() => {
    const fetchText = async () => {
      const text = await getJokesRandom();
      setText(text);
    };
    fetchText();
  }, []);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const clearText = () => {
    setText("");
    handleSubmit();
  };

  return (
    <>
      <input value={text} onChange={handleChange} />
      <button onClick={clearText}>Clear the input</button>
    </>
  );
}
