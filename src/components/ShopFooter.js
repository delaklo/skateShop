import './shopElements.scss';



const ShopFooter = ()=>{



    return(
        <footer className='shopFooter'>
            <div className='footer__top'>
            <div className="footer__section_1">
                <a href="#">Call-centre schedule</a>
            </div>
            <div className="footer__section_2">
                <ul>
                    <li>Information about Company</li>
                    <li><a href='#'>About Us</a></li>
                    <li><a href='#'>Terms of Use</a></li>
                    <li><a href='#'>Jobs</a></li>
                    <li><a href='#'>Contacts</a></li>
                    <li><a href='#'>All categories</a></li>
                </ul>
            </div>
            <div className="footer__section_3">
            <ul>
                    <li>Support</li>
                    <li><a href='#'>Delivery and payment</a></li>
                    <li><a href='#'>Credit</a></li>
                    <li><a href='#'>Warranty</a></li>
                    <li><a href='#'>Return of goods</a></li>
                    <li><a href='#'>Service Centers</a></li>
                </ul>
            </div>
            <div className="footer__section_4">
            <ul>
                    <li>Services</li>
                    <li><a href='#'>Bonus Account</a></li>
                    <li><a href='#'>Rozetka Premium</a></li>
                    <li><a href='#'>Gift certificates</a></li>
                    <li><a href='#'>Rozetka Exchange</a></li>
                </ul>
            </div>
            <div className="footer__section_5">
            <ul>
                    <li>For Partners</li>
                    <li><a href='#'>Sell on Rozetka</a></li>
                    <li><a href='#'>Cooperation with us</a></li>
                    <li><a href='#'>Franchising</a></li>
                    <li><a href='#'>Rent of premises</a></li>
                </ul>
            </div>
            </div>
            <hr />
            <div className='footer__bottom'>
            <span className='footer__copy'>© 2022–2023 SkateShop. Find what you want!</span>
            </div>

        </footer>
    )
}

export default ShopFooter;