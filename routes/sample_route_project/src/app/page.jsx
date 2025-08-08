import Image from "next/image";
import styles from "./page.module.css";
import { Gothic_A1 } from "next/font/google";
import Link from "next/link";
export default function Home() {
  return (
    <div>
    <h1>Home Page</h1>

    <div>
      <ul>
        <li><Link href={"/products/meat"}>Meats</Link></li>
        <li><Link href={"/products/vegis"}>Vegies</Link></li>
        <li><Link href={"/products/groceries"}>Groceries</Link></li>
      </ul>
    </div>
    </div>
  );
}
