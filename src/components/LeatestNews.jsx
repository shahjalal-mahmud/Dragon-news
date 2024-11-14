import Marquee from "react-fast-marquee";


const LeatestNews = () => {
    return (
        <div className="flex items-center gap-2 bg-[#F3F3F3] p-4">
            <p className="bg-[#D72050] text-white py-2 px-6 font-medium text-xl">
                Latest 
            </p>
            <div>
                <Marquee pauseOnHover={true} loop={0} speed={75} className="font-semibold text-lg">
                Breaking News: We are on a mission to find the perfect life partner for Preo! Stay tuned for updates as the search intensifies... Will she finally meet "The One"?   💍👀❤️  Who knows, maybe someone is out there waiting for her as we speak...
                </Marquee>
            </div>
        </div>
    );
};

export default LeatestNews;