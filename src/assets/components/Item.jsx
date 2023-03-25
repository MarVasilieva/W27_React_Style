import React from "react";
import itemstyle from "./Itemstyle.css";

class Item extends React.Component {
  render() {
    const { tariffname, price, speed, isSelected } = this.props;
    const theme = this.props.theme;

    let classitem = "";
    return (
      <div className="items">
        <div
          className={`${itemstyle.itemsBody} + ${
            isSelected ? itemstyle.selected : ""
          }`}
        >
          <div className={theme.body}>
            <div className={`${itemstyle["items-tariffname"]}`}>
              <h3>{tariffname} </h3>
            </div>
            <div className={`${itemstyle.itemsPrice} ${price}`}>
              <p>руб</p> <h1>{price}</h1> /мес
            </div>
          </div>
          <div className={`${itemstyle.itemsSpeed}`}>
            <h3>{speed}</h3>
          </div>
          <div className={`${itemstyle.itemsFooter}`}>
            <h2>Обьем включенного трафика не ограничен</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
