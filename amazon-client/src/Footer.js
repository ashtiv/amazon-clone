import { margin } from '@mui/system';
import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"

function Footer() {
    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                width: "98%",
                marginBottom: "30px",
                marginLeft: "100px",
                marginRight: "100px",
                marginTop: "50px"
            }}
        />
    );
    return (
        <nav className='mainfooter navbar container-fluid'>
            <div class="navFooterBackToTop">
                <a href='#top'>
                    <span class="navFooterBackToTopText">
                        Back to top
                    </span>
                </a>
            </div>
            <div className='Footer'>
                <div class="Footer2 container-fluid">
                    <div class="navAccessibility">
                        <div class="navFooterColHead">Get to Know Me</div>
                        <li>
                            <a href="https://www.linkedin.com/in/ashish-tiwari-8b95671bb" class="nav_a">About Me</a>
                        </li>
                        <li>
                            <a href="https://github.com/ashtiv?tab=repositories" class="nav_a">Other Projects</a>
                        </li>
                    </div>
                    <div class="navAccessibility">
                        <div class="navFooterColHead">Connect with Me</div>
                        <li>
                            <a href="https://www.linkedin.com/in/ashish-tiwari-8b95671bb"
                                class="nav_a">LinkedIn</a>
                        </li>
                        <li>
                            <a href="https://github.com/ashtiv"
                                class="nav_a">Github</a>
                        </li>
                    </div>
                    <div class="navAccessibility">
                        <div class="navFooterColHead">Let Us Help You</div>
                        <li>
                            <Link to="/">
                                <a class="nav_a">Homepage</a>
                            </Link>
                        </li>
                        <li>
                            <Link to="/checkout">
                                <a class="nav_a">Your Cart</a>
                            </Link>
                        </li>
                        <li>
                            <a href="https://play.google.com/store/apps/details?id=in.amazon.mShop.android.shopping&hl=en_IN&gl=US" class="nav_a">Amazon App Download</a>
                        </li>

                    </div>
                </div>
                <ColoredLine color="white" />
                <a href='/'>
                    <img className="bottomlogo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt='' />
                </a>
            </div>
        </nav>

    )
}

export default Footer
