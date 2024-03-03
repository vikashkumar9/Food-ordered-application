import Image from "next/image";
import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.css";
import Banner from "@/components/banner/Banner";
import Products from "@/components/HomeProducts/Products";

export default function Home() {
  return (
    <main>
      <Banner />

      <Products />
    </main>
  );
}
