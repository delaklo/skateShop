import ShopBasketSvg from '../../../components/svg/ShopBasketSvg';
import '../ItemPage.scss';
import Characteristics from './Characteristics';
import QuestionForm from './QuestionForm';
import ReviewForm from './ReviewForm';

const AllAbout = (props)=>{



    return(
    <div className="itempage__allAbout">
        <div className="itempage__firstBlock">
          <img src={props.image} width="450px" height="480px" />
          <div className="itempage__sideinfo">
            <div className="itempage__available">&#10004;	Available</div>
            <div className="itempage__sideinfo__1">
            <div className="sideinfo__price">{props.price}₴</div>
            <button className='itempage__btn__buy'><ShopBasketSvg color={'white'} />
             
            <span>Buy Now</span></button>
            <button className='itempage__btn__credite'><span>Buy In Credite</span></button>
            </div>
            <div className="itempage__sideinfo__1">
              Seller: &nbsp; <b>{props.seller}</b>
            </div>
            <div className="itempage__sideinfo__1">
               <b>Pay Method.</b> &nbsp; Credit card, Apple Pay, Google Pay, PrivatPay, Mastercard, Amazon Pay, Visa.
            </div>
            <div className="itempage__sideinfo__1">
               <b>Guaranty.</b> &nbsp; Return / Change the item within 14 days period.
            </div>
          </div>
        </div>
        <div className='itempage__secondBlock'>
          <div className='characterictics_block'>
        <Characteristics title={props.title}material={props.material}
        limit={props.limit} wheel={props.wheel} size={props.size}/>
            </div>
            <div className='review_block'>
              <ReviewForm />
            </div>
        </div>
        <div className='itempage_thirdBlock'>
          <QuestionForm />
        </div>
       </div>
    )
}

export default AllAbout;