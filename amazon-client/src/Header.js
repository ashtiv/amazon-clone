import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();
    const handleAuthenticaton = () => {
        if (user) {
            auth.signOut();
        }
    }
    console.log(basket);
    return <nav className='header navbar navbar-expand-lg'>
        
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt='' />
            </Link>
            <div className="header__search col">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>
        
        <button class="navbar-toggler text-light border-light" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon text-light border-light"></span>
        </button>
        <div className="header__nav collapse navbar-collapse row" id="navbarSupportedContent">
            <Link to={!user && '/login'} className='header__link col'>
                <div onClick={handleAuthenticaton} className="header__option">
                    <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
                    <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                </div>
            </Link>
            <Link to="/orders" className='header__link col'>
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
            </Link>
            <Link to="/" className='header__link col'>
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
            </Link>
            <Link to="/checkout" className='col'>
                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                </div>
            </Link>
        </div>
    </nav>
}

export default Header
