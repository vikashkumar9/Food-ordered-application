"use client";
import { useState, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";
import Button from "../ui/Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Context } from "@/components/Cartcontext/UserContext";
const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { products } = useContext(Context);
  const noOfItems = products.length;
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo_links}>
          <div className={styles.logo_image}>
            <Image src="/logo.jpg" alt="Logo" width={100} height={50} />
          </div>{" "}
          <div className={styles.menu} onClick={toggleSidebar}>
            {isSidebarOpen ? <RxCross1 /> : <GiHamburgerMenu />}
          </div>
          <div>
            <ul
              className={`${isSidebarOpen ? styles.open : styles.header_links}`}
            >
              <li className={styles.link}>
                <Link href="/">Home</Link>
              </li>
              <li className={styles.link}>
                <Link href="/foodproducts">Menu</Link>
              </li>
              <li className={styles.link}>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Button className={styles.link}>
                  <Link href="/login">Login</Link>
                </Button>
              </li>
            </ul>
          </div>
          <div className={styles.cart_contact}>
            <Link href="/cart">
              <div className={styles.cart}>
                <AddShoppingCartIcon className={styles.icon} />
                <p className={styles.noof_items}>{noOfItems}</p>
              </div>
            </Link>

            <Link href="/contact">
              <Button>Contact Us </Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
