import { BsTruck } from "react-icons/bs";
import { GoShieldCheck } from "react-icons/go";
import { RiLeafLine } from "react-icons/ri";
import { LuRecycle } from "react-icons/lu";

export const Flexcard = ()=>{
    return(
        <section className="sc-2">
                        <div className="sc-icon">
                            <div className="sc-card">
                                <div className="sc-card-icon">
                                    <BsTruck />
                                </div>
                                <div className="sc-card-text">
                                    <h3 className="cd-text">Natural first</h3>
                                    <p className="cd-text">Renewable fibres over synthetics, every time.</p>
                                </div>
                            </div>
                            <div className="sc-card">
                                <div className="sc-card-icon">
                                    <GoShieldCheck />
                                </div>
                                <div className="sc-card-text">
                                    <h3 className="cd-text">Built to last</h3>
                                    <p className="cd-text">Reinforced seams. Tested for years, not seasons.</p>
                                </div>
                            </div>
                            <div className="sc-card">
                                <div className="sc-card-icon">
                                    <RiLeafLine />
                                </div>
                                <div className="sc-card-text">
                                    <h3 className="cd-text">Carbon-neutral</h3>
                                    <p className="cd-text">Every order, every country, always.</p>
                                </div>
                            </div>
                            <div className="sc-card">
                                <div className="sc-card-icon">
                                    <LuRecycle />
                                </div>
                                <div className="sc-card-text">
                                    <h3 className="cd-text">Fair makers</h3>
                                    <p className="cd-text">Living wages and safe ateliers, full stop.</p>
                                </div>
                            </div>
                        </div>
                    </section>
    )
}

export default Flexcard;