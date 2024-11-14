import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/news/categories")
        .then((result) => result.json())
        .then((data) => setCategories(data.data.news_category));
    }, [])
    return (
        <div className="">
            <h2 className="font-semibold text-xl">All Caterogy ({categories.length})</h2>
            <div className="flex flex-col gap-2 py-5">
                {
                    categories.map(category => 
                    <button key={category.category_id} className="btn justify-start pl-20 text-lg font-medium text-[#9F9F9F]">
                        <NavLink to={`/category/${category.category_id}`}>{category.category_name}</NavLink>
                    </button>)
                }
            </div>
        </div>
    );
};

export default LeftNavbar;