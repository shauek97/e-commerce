import styles from "./Header.module.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";



export default function NavLinks() {

  const [inputVisible, setInputVisible] = useState(false)

  return (
    <>
    <h2>O nas</h2>
    <h2>O nas</h2>
    <h2>O nas</h2>
    <h2>O nas</h2>
  
    {inputVisible ? <input placeholder="search"></input> : null}

    <div className={styles.searchIcon} onClick={() => setInputVisible(!inputVisible)}><AiOutlineSearch/></div>
   </>
  );
}
