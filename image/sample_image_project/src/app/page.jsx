import Image from "next/image";
import styles from "./page.module.css";
import img1 from "../../public/wallhaven-jxoxjm.jpg"

export default function Home() {
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
  );
}
