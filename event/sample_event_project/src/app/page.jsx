"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import PeopleTable from "../app/(components)/(peopleTable)/page"

export default function Home() {
  const [inputValue, setInputValue] = useState();
  const [showMore, setShowMore] = useState(false);
  const handleSave = () => {
    alert(inputValue)
  }

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleShowMore = () => {
    setShowMore(!showMore);
  }
  return (
    <div style={{backgroundColor: '#f8f9fa'}}>
      <h1>Home Page</h1>
      <button onClick={handleShowMore}>Show More</button>

      {showMore && <div>
        <input type="text" placeholder="Enter Anything" onChange={handleChange} />
        <button onClick={handleSave}>Save</button>

        {inputValue == "use" && <div>
          <h1>About Use</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ullam at vitae exercitationem inventore nobis officia deleniti rerum! Sequi, doloremque perferendis recusandae ad quod omnis ea repudiandae vel ipsum dolorem?</p>
        </div>}
      </div>}


      <div style={{ maxWidth: '400px', margin: '20px auto' }}>

        <PeopleTable />

      </div>

      {/* <input type="text" placeholder="Enter Anything" onChange={handleChange}/>
      <button onClick={handleSave}>Save</button>

      {inputValue == "use" && <div>
        <h1>About Use</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ullam at vitae exercitationem inventore nobis officia deleniti rerum! Sequi, doloremque perferendis recusandae ad quod omnis ea repudiandae vel ipsum dolorem?</p>
      </div>} */}
    </div>
  );
}
