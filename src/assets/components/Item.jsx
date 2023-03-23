import React from 'react';
import './Itemstyle.css';

class Item extends React.Component {
    render() {
        const {tariffname,price,speed,isSelected} = this.props;
        const theme = this.props.theme;
        let classitem="";
        if (isSelected) classitem="selected";
        return (
          <div className="items">
            <div className={`items-body  ${classitem}`}>
                <div className='test' >{theme.body}
                <div className='items-tariffname'><h3>{tariffname}</h3></div>
                <div className='items-price'><p>руб</p> <h1>{price}</h1> /мес</div>
                <div className='items-speed'><h3>{speed}</h3></div>
                <div className='items-footer'>
                    <h2>Обьем включенного трафика не ограничен</h2>
                </div>
                </div>
            </div>
           
          </div>
        );
    }
   
  }
  
  export default Item;