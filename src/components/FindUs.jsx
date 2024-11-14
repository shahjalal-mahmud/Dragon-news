import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
    return (
        <div>
            <h2 className="font-semibold text-xl">Find Us On</h2>
            <div>
                <div className="join flex join-vertical font-medium text-xl *:bg-base-100 *:py-3">
                    <button className="btn join-item justify-start text-[#3B599C]"><FaFacebook></FaFacebook> Facebook</button>
                    <button className="btn join-item justify-start text-[#58A7DE]"><FaTwitter></FaTwitter> Twitter</button>
                    <button className="btn join-item justify-start text-[#D82D7E]"><FaInstagram></FaInstagram> Instagram</button>
                </div>
            </div>
        </div>
    );
};

export default FindUs;