import React from "react";
import itemstyle from "./Itemstyle.css";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pressed: false,
    };
  }
  handleChange = () => {
    this.setState({ pressed: !this.state.pressed });
  };
  render() {
    const { tariffname, price, speed, isSelected } = this.props;
    const theme = this.props.theme;

    return (
      <div className="items">
        <div
          onClick={this.handleChange}
          className={`${itemstyle.itemsBody} ${
            this.state.pressed ? itemstyle.selected : ""
          }`}
        >
          <div className={theme.body}>
            <div className={`${itemstyle["items-tariffname"]}`}>
              <h3>{tariffname}</h3>
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
