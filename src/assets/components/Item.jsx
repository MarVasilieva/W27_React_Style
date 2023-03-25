import React from 'react';
import Itemstyle from './Itemstyle.css';

class Item extends React.Component {
    render() {
        const {tariffname,price,speed,isSelected} = this.props;
        const theme = this.props.theme;
        let classitem="";
        if (isSelected) classitem="selected";
        return (
          <div className="items">
            <div className={`itemsBody  ${classitem}`}>
                <div className={theme.body}>
                <div className='itemsTariffname'><h3>{tariffname}</h3></div>
                <div className='itemsPrice'><p>руб</p> <h1>{price}</h1> /мес</div>
                <div className='itemsSpeed'><h3>{speed}</h3></div>
                <div className='itemsFooter'>
                    <h2>Обьем включенного трафика не ограничен</h2>
                </div>
                </div>
            </div>
           
          </div>
        );
    }
   
  }
  
  export default Item;