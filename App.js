import { useEffect, useState } from "react"
import Products from "./Products"
import './App.css'
function App(){
  var [product,updateproduct]=useState([]);

  console.log(product)
  useEffect(
    ()=>{
      apiFun()
  },[]
)

  async function apiFun(){
    let prodApi=await fetch('https://fakestoreapi.com/products');
    let prodJson=await prodApi.json();
    updateproduct(prodJson)
  }

  if(product.length==0){
    return(
      <h1>Fetching data....</h1>
    )
  }
  return(
  <div className="container">
  {
  product.map(
    (p) => (
      <Products {...p} key={product.id} />
    )
  )
  }
</div>
);
}
export default App





