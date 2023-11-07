"use client";

import { useState } from "react";

export default function Hello({ name = "World" }) {
  const [inputName, setInputName] = useState("");
  return (
    <main>
      <label htmlFor="name">Name: </label>
      <input
        name="name"
        onChange={(e) => setInputName(e.target.value)}
        type="text"
      />
      <h1>Hellooo {inputName.length > 3 ? inputName : name}</h1>
    </main>
  );
}
