import Header from "../Component/Header"
import Footer from "../Component/Footer"

export const Shop = () => {
    return(
        <>
            <Header></Header>
            <section className="sc-6">
                <div className="sc-6-content">
                    <p className="sc-6-text">Shop</p>
                    <h1 className="sc-6-title">All pieces</h1>
                    <p className="sc-6-text-1">Free shipping on orders over $75 · 30-day returns · Carbon-neutral every order.</p>
                </div>
            </section>
            <section className="sc-7">
                <div className="sc-7-content">
                    <div className="sc-7-item">
                        <p className="sc-7-text">0 pieces</p>
                    </div>
                    <div className="sc-7-item">
                        <p className="sc-7-text-1">Sort</p>
                        <select className="select-sc-7" name="" id="">
                            <option value="">Featured</option>
                            <option value="">Price: low to high</option>
                            <option value="">Price: high to low</option>
                            <option value="">Alphabetical</option>
                        </select>
                    </div>
                </div>
                    aqui va componete
            </section>
            <Footer></Footer>
        </>
    )
}
export default Shop;