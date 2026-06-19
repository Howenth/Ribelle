
export const Footer = ()=>{
    return(
        <footer className="foooter">
            <div className="container-footer">
                <div className="container-flex">
                    <div className="box-footer">
                        <h2 className="title-box-footer">Quietly considered clothing.</h2>
                        <p className="description-box-footer">City Threads makes everyday essentials from natural materials, designed to last and made to feel like nothing at all.</p>
                        <form className="footer-form-1" action="">
                            <input className="input-email-1" type="email" placeholder="Email address" />
                            <button className="submit-email-1">Subscribe
                                </button>   
                        </form>                  
                    </div>
                    <div className="box-footer">
                        <h4 className="box-footer-title">Shop</h4>
                        <ul className="ul-footer">
                            <li className="box-footer-text"><a className="a-footer" href="/">Men</a></li>
                            <li className="box-footer-text"><a className="a-footer" href="/">Women</a></li>
                            <li className="box-footer-text"><a className="a-footer" href="/">New arrivals</a></li>
                            <li className="box-footer-text"><a className="a-footer" href="/">Gift cards</a></li>
                        </ul>
                    </div>
                    <div className="box-footer">
                        <h4 className="box-footer-title">Help</h4>
                        <ul className="ul-footer">
                            <li className="box-footer-text"><a className="a-footer" href="/">Shipping</a></li>
                            <li className="box-footer-text"><a className="a-footer" href="/">Returns</a></li>
                            <li className="box-footer-text"><a className="a-footer" href="/">Size guide</a></li>
                            <li className="box-footer-text"><a className="a-footer" href="/">Contact</a></li>
                        </ul>
                    </div>
                    <div className="box-footer">
                        <h4 className="box-footer-title">About</h4>
                        <ul className="ul-footer">
                            <li className="box-footer-text"><a className="a-footer" href="/">Our story</a></li>
                            <li className="box-footer-text"><a className="a-footer" href="/">Materials</a></li>
                            <li className="box-footer-text"><a className="a-footer" href="/">Sustainability</a></li>
                            <li className="box-footer-text"><a className="a-footer" href="/">Stores</a></li>
                        </ul>
                    </div>
                </div>
                <div className="content-b">
                    <div className="box-b">
                        <span className="item-b">© 2026 City Threads, Inc.</span>
                        <div className="flex-b">
                            <a className="a-footer" href="/">Privacy</a>
                            <a className="a-footer" href="/">Terms</a>
                            <a className="a-footer" href="/">Accessibility</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;