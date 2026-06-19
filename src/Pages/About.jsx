import Header from "../Component/Header"
import Footer from "../Component/Footer"
import Flexcard from "../Component/Flexcard"
import { IoArrowForward } from "react-icons/io5";
import img2 from "../assets/2.jpg";


export const About = () => {
    return(
        <>
            <Header></Header>
            <section className="sc-8">
                <p className="sc-8-text">Our story</p>
                <h1 className="sc-8-title">Less, but better - for you and the planet.</h1>
                <p className="sc-8-text-1">We started in 2021 with one belief: everyday clothes should feel like nothing at all, last for years, and leave the world a little better than we found it.</p>
            </section>
            <section className="sc-9">
                <div className="box-sc-9">
                    <div className="sc-9-container">
                        <div className="sc-9-content">
                            <img className="sc-9-img" src={img2} alt="" />
                        </div>
                        <div className="sc-9-content-text">
                            <h2 className="sc-9-title">Made from what grows.</h2>
                            <p className="sc-9-text">Merino wool from New Zealand. Eucalyptus pulp from sustainably managed forests. Sugarcane-based foam soles. Every fibre is chosen because it can grow back.</p>
                            <p className="sc-9-text">We work with a small atelier in Lisbon that pays fair wages, runs on renewable energy, and ships every order carbon-neutral — at no extra cost to you.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Flexcard ></Flexcard>
            <section className="sc-10">
                <div className="sc-10-item">
                    <h1 className="sc-10-title">Try us for 30 days. Love it, or send it back free.</h1>
                    <a className="sc-10-button" href="#">
                        Shop the collection 
                        <IoArrowForward></IoArrowForward>
                    </a>
                </div>
            </section>
            
            <Footer></Footer>
        </>
    )
}
export default About;