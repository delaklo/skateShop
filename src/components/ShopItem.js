import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import ShopBasketSvg from './svg/ShopBasketSvg';
import { Link } from 'react-router-dom';

import './shopElements.scss';


const ShopItem = (props)=>{


  const [isShown, setIsShown ] = useState(false);


    return(
        <Card  id="item"
        ><div className={isShown ? "item_expand" : "item_small"}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}>
       <Link to={"/item/" + props.id}> <Card.Img variant="top" src={props.img} id='img__skate' width="50px" height="280px" /></Link>
        <Card.Body>
          <Card.Title id='item__title'>{props.product}</Card.Title>
          
          <Card.Text id='item__price'>
            {props.price}₴
            <div className='svg_wrapper'><ShopBasketSvg color={'lime'} /></div>
          </Card.Text>
          {isShown &&(
            <div className='item__desc'>
          <div>Size: {props.size}</div>
          <div>Material: {props.material}</div>
          <div>Country: {props.country}</div>
          </div>
          )}
        </Card.Body>
        </div>
      </Card>
 
    )
}

export default ShopItem;