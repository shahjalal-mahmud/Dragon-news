import moment from "moment/moment";
import logo from "../assets/logo.png"

const Header = () => {

    const dayName = moment().format("dddd");
    const monthAndDate = moment().format("MMMM Do");
    const year = moment().format("YYYY");

    return (
        <div className="flex flex-col justify-center items-center gap-2 py-5">
            <div className="logo">
                <img className="w-[500px]" src={logo} alt="logo" />
            </div>
            <h2 className="font-normal text-lg text-[#706F6F]">Journalism Without Fear or Favour</h2>
            <p className="font-medium text-xl">
                <span className="text-[#403F3F]">{dayName}, </span>
                <span className="text-[#706F6F]">{monthAndDate} </span>
                <span className="text-[#706F6F]">{year}</span>
            </p>
        </div>
    );
};

export default Header;