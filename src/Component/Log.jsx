import { IoArrowForward } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import Cardlist from "./Cardlist";
import Flexcard from "./Flexcard"
import { IoEllipse } from "react-icons/io5";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg"


export const Log = ()=>{
    return(
        <main className="main">
            <section className="sc-1">
                <div className="sc-item">
                    <span className="content-l">
                        <IoEllipse className="elipse"></IoEllipse>
                        <span className="l-item">New season · save 20% with code CITY20</span>
                    </span>
                    <h1 className="sc-1-title">Essentials that feel like nothing at all.</h1>
                    <p className="sc-1-description">Naturally made. Built to last. Loved by over 120,000 people in 38 countries.</p>
                    <div className="sc-content-button">
                        <button className="sc-button button-c">
                            <a href="Shop">
                                Shop bestsellers
                            </a>
                            <IoArrowForward></IoArrowForward>
                            </button>
                        <button className="sc-button button-d">
                            <a className="his" href="About">
                                Our story
                            </a>
                            
                        </button>
                    </div>
                    <div className="sc-content-val">
                        <div className="flex-val">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <span className="text-val">4.9 · 14,200+ reviews</span>
                    </div>
                </div>
                <div className="sc-item">
                    <div className="sc-item-content">
                        <img className="sc-item-img" src={img1} alt="" />
                    </div>
                </div>
            </section>
            <Flexcard></Flexcard>
            <section className="sc-3">
                <div className="sc-grid">
                    <a className="sc-item-grid" href="Shop">
                        <img className="sc-item-grid-img" src={img1} alt="" />
                        <div className="sc-item-box-text">
                            <p className="item-box-text">For Him</p>
                            <h3 className="item-box-title">The Everyday Tee</h3>
                            <p className="item-box-text-1">From $48 · Merino-soft.</p>
                            <span className="sc-grid-animate">
                                Shop now 
                                <IoArrowForward />
                            </span>
                        </div>
                    </a>
                    <a className="sc-item-grid" href="Shop">
                        <img className="sc-item-grid-img" src={img2} alt="" />
                        <div className="sc-item-box-text">
                            <p className="item-box-text">For her</p>
                            <h3 className="item-box-title">The Lounge Set</h3>
                            <p className="item-box-text-1">From $98 · Lighter than air.</p>
                            <span className="sc-grid-animate">
                                Shop now 
                                <IoArrowForward />
                            </span>
                        </div>
                    </a>
                </div>
            </section>
            <section className="sc-4">
                <div className="sc-4-container">
                    <div className="sc-4-item">
                        <div className="sc-4-content">
                            <p className="sc-4-description">Bestsellers</p>
                            <h2 className="sc-4-title">This week's favourites</h2>
                        </div>
                        <a className="sc-item-4" href="Shop">
                            <span className="sc-4-icon">
                                <p className="sc-4-icon-text">Shop now</p>
                                <IoArrowForward />
                            </span>
                        </a>
                    </div>
                    <div className="sc-4-item"></div>
                </div>
            </section>
            <section className="sc-5">
                <div className="sc-assessment">
                    <p className="assessment-description">Loved by 120,000+</p>
                    <h2 className="assessement-title">"The softest thing I own."</h2>
                </div>
                <Cardlist></Cardlist>
            </section>
            <section className="sc-6">
                <div className="sc-6-content">
                    <h2 className="sc-6-title">Get 10% off your first order.</h2>
                    <p className="sc-6-description">Join the list for early access to drops, restocks and members-only prices.</p>
                    <form className="footer-form" action="">
                            <input className="input-email" type="email" placeholder="your@email.com" />
                            <button className="submit-email">Get my 10%</button>   
                        </form>
                </div>
            </section>
        </main>
    )
}

export default Log;