import React from 'react'
import Image from "next/image";
import img1 from "../../../public/wallhaven-jxoxjm.jpg"

function page() {
  return (
    <div>
      <h1>
        Image Page
      </h1>

      {/* <img src={img1.src} /> */}

      <Image 
      src={img1}
      alt="Sample Image"
      style={{width: "100%", objectFit: "cover"}}
      />

    </div>
  )
}

export default page