"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ Import router
import PeopleTable from "../app/(components)/(peopleTable)/page";
import User from "../app/(components)/(UserPage)/page";

export default function Home() {
  const router = useRouter(); // ✅ Initialize router
  const [inputValue, setInputValue] = useState();
  const [showMore, setShowMore] = useState(false);

  const handleSave = () => {
    alert(inputValue);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const goToTimeline = () => {
    router.push("/timeline"); // ✅ Navigate to /timeline
  };

  return (
    <div style={{ backgroundColor: "#f8f9fa", padding: "20px" }}>
      {/* ✅ Top bar with Timeline button */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>Home Page</h1>
        <button onClick={goToTimeline} style={{ padding: "8px 16px", cursor: "pointer" }}>
          Timeline
        </button>
      </div>

      <button onClick={handleShowMore}>Show More</button>

      {showMore && (
        <div>
          <input type="text" placeholder="Enter Anything" onChange={handleChange} />
          <button onClick={handleSave}>Save</button>

          {inputValue == "use" && (
            <div>
              <h1>About Use</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ullam at vitae
                exercitationem inventore nobis officia deleniti rerum! Sequi, doloremque
                perferendis recusandae ad quod omnis ea repudiandae vel ipsum dolorem?
              </p>
            </div>
          )}
        </div>
      )}

      <div style={{ maxWidth: "400px", margin: "20px auto" }}>
        <PeopleTable />
      </div>

      <div style={{ maxWidth: "400px", margin: "20px auto" }}>
        <User
          user={{
            id: 1013,
            firstName: "Kehan",
            lastName: "Perera",
            age: 22,
            country: "Sri Lanka",
          }}
        />
      </div>
    </div>
  );
}
