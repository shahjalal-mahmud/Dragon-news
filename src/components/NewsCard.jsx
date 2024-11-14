import React from 'react';
import { FaStar, FaEye } from 'react-icons/fa';

const NewsCard = ({ news }) => {
    const { title, author, rating, total_view, thumbnail_url, details } = news;
    return (
        <div className="border rounded-lg shadow-lg p-4">
            <div className="flex items-center mb-4">
                <img src={author.img} alt={author.name} className="w-10 h-10 rounded-full mr-3" />
                <div>
                    <h3 className="font-semibold">{author.name}</h3>
                    <p className="text-sm text-gray-500">{new Date(author.published_date).toLocaleDateString()}</p>
                </div>
            </div>
            <h2 className="font-bold text-lg mb-2">{title}</h2>
            <img src={thumbnail_url} alt={title} className="w-full h-[500px] object-cover rounded-md mb-4" />
            <p className="text-sm text-gray-700 mb-2">
                {details.length > 100 ? `${details.slice(0, 100)}...` : details}
                <span className="text-blue-500 font-semibold"> Read More</span>
            </p>
            <div className="flex items-center justify-between mt-4">
                <div className="flex items-center">
                    <FaStar className="text-yellow-500 mr-1" />
                    <span className="font-semibold">{rating.number}</span>
                </div>
                <div className="flex items-center text-gray-500">
                    <FaEye className="mr-1" />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
