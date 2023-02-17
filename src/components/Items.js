
import Row from 'react-bootstrap/Row';

import './shopElements.scss';
import ShopItem from './ShopItem';

function Items(props) {

  return (
    <Row id="row">
        {props.products.length === 0 ? (<div>Sold Out!</div>) : props.products.map(product =>
        <ShopItem product={product.title} img={product.image} price={product.price}
        size={product.size} material={product.material} country={product.country} id={product.id} key={product.id} />
            )}
    </Row>
  );
}

export default Items;