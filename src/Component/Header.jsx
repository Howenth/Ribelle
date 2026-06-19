import Navbar from "./Navbar";

export const Header = ()=>{
    return(
        <header className="header">
            <div className="content-nav">
                <Navbar></Navbar>
            </div>
            <div className="header-animation">
                <div className="content-animation">
                    <span>Complimentary shipping over $75</span>
                    <span>·</span>
                    <span>Carbon-neutral every order</span>
                    <span>·</span>
                    <span>30-day free returns</span>
                    <span>·</span>
                    <span>Made with natural materials</span>
                    
                    <span>Complimentary shipping over $75</span>
                    <span>·</span>
                    <span>Carbon-neutral every order</span>
                    <span>·</span>
                    <span>30-day free returns</span>
                    <span>·</span>
                    <span>Made with natural materials</span>
                </div>
            </div>
        </header>
    )
}
export default Header;