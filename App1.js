import { useEffect, useState } from "react";
import ProductCard from "./Product-card";

import './App.css'


function App() {
    const [products, updateProducts] = useState([]);


    useEffect(
        () => {
            getProducts()

        }, []
    )


    async function getProducts() {
        let res = await fetch("https://fakestoreapi.com/products");
        let productlist = await res.json();
        updateProducts(productlist)


    }



    if (products.length == 0) {
        return (<h1>Fetching data...</h1>)
    }

    return (
        <>
            <div className="product-list">
                {
                    products.map((p) => <ProductCard   {...p} key={p.id} ></ProductCard>)
                }

            </div>
        </>
    )
}

export default App