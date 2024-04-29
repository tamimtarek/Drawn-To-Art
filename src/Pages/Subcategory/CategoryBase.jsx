import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import BaseCategory from "./BaseCategory";



const CategoryBase = () => {
    const [category, setCategory] = useState([]);
    const {subcategory_name} = useParams();
    console.log(subcategory_name);
    useEffect(()=>{
        fetch(`https://drawn-to-art-server.vercel.app/subcategory/${subcategory_name}`)
        .then(res => res.json())
        .then(data => setCategory(data))
    },[subcategory_name])
    console.log(category);
    return (
        <div>
            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-center mt-8 mb-8">
                <span className="text-red-600">{subcategory_name}</span> Categories</h2>
            <div className="flex flex-col md:flex-row justify-center gap-8">
            {
                category.map(cate => <BaseCategory key={cate._id} cate={cate}></BaseCategory>)
            }
        </div>
        </div>
    );
};

export default CategoryBase;