import { useEffect, useMemo, useState } from "react"
import './App.css'
import { data } from "react-router-dom";

function App(){
    let [Timer,setTime]=useState(new Date().toLocaleTimeString());

    let [product,setProducts]=useState([])
    
    
    useEffect(()=>{
        dataFetch();
    },[])

    async function dataFetch(){
        let data=await fetch('https://fakestoreapi.in/api/products');
        let jsonData=await data.json();
        console.log(jsonData.products)
        setProducts(jsonData.products)
    }
    
    
    const [searchText,setText]=useState("");
    let filteredproduct=useMemo(()=>{
        return product.filter((f)=>{
            return f.title.toLowerCase().includes(searchText.toLowerCase())
        })
    },[product,searchText])


    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date().toLocaleTimeString());
        },1000)
    },[])

    
    return(
        <>
            <h1>{Timer}</h1>
            <input value={searchText} onChange={(e)=>{
                setText(e.target.value)
            }} /><br/><br/>

            <table >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>TITLE</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredproduct.map((p) => (
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.title}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default App