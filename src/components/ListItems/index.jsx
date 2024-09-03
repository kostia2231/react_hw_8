import React, { useState, useEffect } from "react";
import styles from "./ListItems.module.css";

export default function Listitems() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function addItem() {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  }
  function reload() {
    window.location.reload();
  }

  useEffect(() => {
    console.log("Компонент ListItems обновлен");
  }, [items]);

  return (
    <>  
      <div className={styles.appWrapper}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type your something"
        />
        <button onClick={addItem}>Add</button>
        <button onClick={reload}>Reload</button>
        <div>
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                {index + 1}.{item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
