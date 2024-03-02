"use client";
import { createContext, useState } from "react";
export const Context = createContext([]);

export default function UserContext({ children }) {
  const [products, setProducts] = useState([]);
  return (
    <Context.Provider value={{ products, setProducts }}>
      {children}
    </Context.Provider>
  );
}
