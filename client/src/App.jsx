import React, { useState } from "react";
import axios from "axios";

function App() {
  const [from, setFrom] = useState("");
  const [text, setText] = useState("");
  const [subject, setSubject] = useState("");
  const [data, setData] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("clicked");

    const respone = await axios.post("http://localhost:3000/gmail", {
      from: from,
      text: text,
      subject: subject,
    });
    console.log(respone.data.message);
    setData(respone.data.message);
    setText("");
    setFrom("");
    setSubject("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          placeholder="enter text"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <input
          type="text"
          value={from}
          placeholder="from"
          onChange={(e) => {
            setFrom(e.target.value);
          }}
        />
        <input
          type="text"
          value={subject}
          placeholder="subject"
          onChange={(e) => {
            setSubject(e.target.value);
          }}
        />
        <button type="submit">Send Email</button>
      </form>
      <div>Status:{data}</div>
    </>
  );
}

export default App;
