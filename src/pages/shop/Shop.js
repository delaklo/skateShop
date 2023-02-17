import React, {useState, useCallback} from 'react';
import { Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import NavbarShop from '../../components/NavbarShop';
import Filter from '../../components/Filter';
import "./Home.scss"
import Items from '../../components/Items';

import { PRODUCTS, brands } from '../../app/data';


const Shop = ()=>{
    
//const globalScore = useSelector(selectScore);
const [filtered, setFiltered] = useState({
    products: PRODUCTS,
    filters: new Set(),
  })


    
  const handleFilterChange = useCallback(event => {
    setFiltered(previousState => {
      let filters = new Set(previousState.filters);
      let products = PRODUCTS;
      
      if (event.target.checked) filters.add(event.target.value);
      else filters.delete(event.target.value);
      
      if (filters.size) {
        products = products.filter(product => {
          return filters.has(product.category);
        })
      }
      
      return {
        filters,
        products,
      }
    })
  }, [setFiltered]);

// const filterBySearch = useCallback(event => {
//   // Access input value
//   const query = event.target.value;
//   // Create copy of item list
//   var updatedList = [...PRODUCTS];
//   // Include all elements which includes the search query
//   updatedList = updatedList.filter((item) => {
//     return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
//   });
//   // Trigger render with updated values
//   console.log(updatedList)
//   //setFilteredList(updatedList);
// })

    return(
        <div>
            <NavbarShop 
            />
            <h2 className='shop__title'>SkateBoards</h2>
            <Container className='d-flex' style={{margin: 0}}>
            <Filter categories={brands} onFilterChange={handleFilterChange} />
            <Items products={filtered.products}/>

            </Container>

        </div>
    )
}

export default Shop;