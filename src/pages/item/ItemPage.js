

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { PRODUCTS } from "../../app/data";
import NavbarShop from "../../components/NavbarShop";


import './ItemPage.scss'
import { Navbar } from "react-bootstrap";
import AllAbout from "./components/AllAbout";
import Characteristics from "./components/Characteristics";
import ReviewForm from "./components/ReviewForm";
import QuestionForm from "./components/QuestionForm";


const ItemPage = ()=>{

    const [details, setDetails] = useState([]);
    let { id } = useParams();

    const [section, setSection] = useState(0);

    useEffect(() => {
        const getDetails = PRODUCTS.map((item) => {
          if (item.id == id) {
            return setDetails(item);
          }
          
        });
      }, [id]);

      

    return(
        <div>
            <NavbarShop />   
            <div className="itempage__title"> {details.title}</div>   
       <div className="itempage__menu">

       <div className={ section == 0 ? "itempage__menu__option line" : "itempage__menu__option"}
       onClick={()=>setSection(0)}>All About Item</div>

      <div className={ section == 1 ? "itempage__menu__option line" : "itempage__menu__option"}
       onClick={()=>setSection(1)}>Characteristics</div>

    <div className={ section == 2 ? "itempage__menu__option line" : "itempage__menu__option"}
       onClick={()=>setSection(2)}>Leave a review</div>

    <div className={ section == 3 ? "itempage__menu__option line" : "itempage__menu__option"}
       onClick={()=>setSection(3)}>Questions</div>

    <div className={ section == 4 ? "itempage__menu__option line" : "itempage__menu__option"}
       onClick={()=>setSection(4)}>Photos</div>

       </div>

       {section == 0 &&(
      
      <AllAbout image={details.image} price={details.price} seller={details.seller} title={details.title}
      material={details.material} limit={details.limit} wheel={details.wheels} size={details.size}/>
       )}
       {section == 1 &&(<Characteristics title={details.title}
      material={details.material} limit={details.limit} wheel={details.wheels} size={details.size}/>)}
       {section == 2 &&(<div><ReviewForm /></div>)}
       {section == 3 &&(<div><QuestionForm /></div>)}
       {section == 4 &&(<h1 style={{padding: '80px', margin: "auto"}}>There are no photos!</h1>)} 
        </div>
    )
}

export default ItemPage;