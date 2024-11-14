import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../components/NewsCard';

const CategoryPage = () => {
    const { data: news } = useLoaderData();  
    const { id } = useParams();
    const [data, setData] = useState(news);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`);
            const result = await response.json();
            setData(result.data); 
        };

        fetchData();
    }, [id]);

    return (
        <div>
            <h2 className='font-semibold text-xl'>Dragon News Home</h2>
            <p className='text-gray-400 text-sm py-2'>
                {news.length} News Found On This Category
            </p>
            <div>
                {
                    news.map(singleNews => <NewsCard key={singleNews._id} news={singleNews}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryPage;
