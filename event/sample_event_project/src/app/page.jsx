"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import PeopleTable from "../app/(components)/(peopleTable)/page"

export default function Home() {
  const [inputValue, setInputValue] = useState();
  const [showMore, setShowMore] = useState(false);
    const [inputValue1, setInputValue1] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted value:', inputValue);
    // You can add more logic here (e.g., send to API)
    setInputValue('');
  };
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
    <div>
      <h1>Home Page</h1>
      <button onClick={handleShowMore}>Show More</button>

      {showMore && <div>
        <input type="text" placeholder="Enter Anything" onChange={handleChange}/>
      <button onClick={handleSave}>Save</button>

      {inputValue == "use" && <div>
        <h1>About Use</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ullam at vitae exercitationem inventore nobis officia deleniti rerum! Sequi, doloremque perferendis recusandae ad quod omnis ea repudiandae vel ipsum dolorem?</p>
      </div>}
        </div>}

        <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '20px auto' }}>
      <input
        type="text"
        placeholder="Enter here..."
        value={inputValue1}
        onChange={(e) => setInputValue1(e.target.value)}
        style={{
          padding: '10px',
          width: '70%',
          marginRight: '10px',
          border: '1px solid #ccc',
          borderRadius: '4px'
        }}
      />
      <button
        type="submit"
        style={{
          padding: '10px 20px',
          backgroundColor: '#0070f3',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Submit
      </button>
    </form>

    <PeopleTable/>

      {/* <input type="text" placeholder="Enter Anything" onChange={handleChange}/>
      <button onClick={handleSave}>Save</button>

      {inputValue == "use" && <div>
        <h1>About Use</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ullam at vitae exercitationem inventore nobis officia deleniti rerum! Sequi, doloremque perferendis recusandae ad quod omnis ea repudiandae vel ipsum dolorem?</p>
      </div>} */}
    </div>
  );
}
