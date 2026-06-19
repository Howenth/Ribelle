import { FaStar } from "react-icons/fa6";

export const Cardlist = ()=>{
    return(
        <div className="assessment-container">
                        <div className="assessment-item">
                            <div className="assessment-item-x">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <p className="assessment-text-1" >"Replaced my entire t-shirt drawer. They wash better every time."</p>
                            <p className="assessment-text-2">— Mara K.</p>
                        </div>
                        <div className="assessment-item">
                            <div className="assessment-item-x">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <p className="assessment-text-1" >"The fit is unreal. I bought one and came back for four more."</p>
                            <p className="assessment-text-2">— Daniel R.</p>
                        </div>
                        <div className="assessment-item">
                            <div className="assessment-item-x">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <p className="assessment-text-1" >"Finally a brand that means what it says about sustainability."</p>
                            <p className="assessment-text-2">— Priya S.</p>
                        </div>
                    </div>
    )
}

export default Cardlist;