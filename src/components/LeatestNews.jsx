import Marquee from "react-fast-marquee";


const LeatestNews = () => {
    return (
        <div className="flex items-center gap-2 bg-[#F3F3F3] p-4">
            <p className="bg-[#D72050] text-white py-2 px-6 font-medium text-xl">
                Latest 
            </p>
            <div>
                <Marquee pauseOnHover={true} loop={0} speed={75} className="font-semibold text-lg">
                Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>
        </div>
    );
};

export default LeatestNews;