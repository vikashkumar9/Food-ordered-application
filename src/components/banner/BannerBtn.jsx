import React from "react";
import "./banner.css";
import Link from "next/link";
import Button from "../ui/Button";
const BannerBtn = () => {
  return (
    <div>
      <Link href="/foodproducts">
        <button className="baner_btn">VIEW MENU</button>
      </Link>
    </div>
  );
};
export default BannerBtn;
