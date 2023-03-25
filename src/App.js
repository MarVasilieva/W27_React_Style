import styles from "./App.css";
import React from "react";
import Item from "./assets/components/Item";
import green from "./assets/styles/green.css";
import red from "./assets/styles/red.css";
import black from "./assets/styles/black.css";
import blue from "./assets/styles/blue.css";

const items = [
  { tariffname: "Безлимитный 300", price: "300", speed: "до 10 Мбит/сек" },
  { tariffname: "Безлимитный 400", price: "450", speed: "до 50 Мбит/сек" },
  {
    tariffname: "Безлимитный 500",
    price: "550",
    speed: "до 100 Мбит/сек",
    isSelected: true,
  },
  { tariffname: "Безлимитный 600", price: "1000", speed: "до 200 Мбит/сек" },
];
function App() {
  return (
    <div className={styles.App}>
      {items.map((item, index) => (
        <Item
          tariffname={item.tariffname}
          price={item.price}
          speed={item.speed}
          isSelected={item.isSelected}
          theme={
            (index === 1 && green) ||
            (index === 2 && red) ||
            (index === 3 && black) ||
            (index === 0 && blue)
          }
        ></Item>
      ))}
    </div>
  );
}

export default App;
