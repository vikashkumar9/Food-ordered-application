"use client";
import { useState, useContext, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";
import Button from "../ui/Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Context } from "@/components/Cartcontext/UserContext";
import { usePathname, useRouter } from "next/navigation";
const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [logindetails, setLogindetails] = useState();
  const { products } = useContext(Context);
  const router = useRouter();
  const pathname = usePathname();
  const noOfItems = products.length;
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  const handleLogout = () => {
    localStorage.removeItem("loginData");
    setLogindetails(null);
    router.push("/login");
  };
  useEffect(() => {
    const data = localStorage.getItem("loginData");
    if (data) {
      setLogindetails(JSON.parse(data));
      if (pathname === "/login") {
        router.push("/foodproducts");
      }
    } else {
      router.push("/login");
    }
  }, []);
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

              {logindetails && logindetails.name ? (
                <ul>
                  <li>{logindetails.name}</li>
                  <li>
                    <Button onClick={handleLogout}>Logout</Button>
                  </li>
                </ul>
              ) : (
                <li>
                  <Button className={styles.link}>
                    <Link href="/login">Login</Link>
                  </Button>
                </li>
              )}
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
