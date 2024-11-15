import Marquee from "react-fast-marquee";

const LeatestNews = () => {
    return (
        <div className="flex items-center gap-2 bg-[#F3F3F3] p-4">
            <p className="bg-[#D72050] text-white py-2 px-6 font-medium text-xl whitespace-nowrap">
                Breaking News
            </p>
            <div>
                <Marquee pauseOnHover={true} loop={0} speed={75} className="font-semibold text-lg">
                    📣 Big News: The hunt for &nbsp;<span className="text-red-500">Preo's</span>&nbsp; perfect match is ON!   💘    Who will be “The One”?   👀   Stay tuned for updates!   🚨💍❤️    📣 Big News: The hunt for &nbsp;<span className="text-red-500">Preo's</span>&nbsp; perfect match is ON!   💘    Who will be “The One”?   👀   Stay tuned for updates!   🚨💍❤️
                </Marquee>
            </div>
        </div>
    );
};

export default LeatestNews;
