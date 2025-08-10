"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState();
  const handleSave = () => {
    alert(inputValue)
  }

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }
  return (
    <div>
      <h1>Home Page</h1>

      <input type="text" placeholder="Enter Anything" onChange={handleChange}/>
      <button onClick={handleSave}>Save</button>

      {inputValue == "use" && <div>
        <h1>About Use</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ullam at vitae exercitationem inventore nobis officia deleniti rerum! Sequi, doloremque perferendis recusandae ad quod omnis ea repudiandae vel ipsum dolorem?</p>
      </div>}
    </div>
  );
}
