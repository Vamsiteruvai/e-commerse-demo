function Products({title,price,image,rating}){
    return(
        <div className="card">
            <img src={image} className="img"/>
            <p>{title}</p>
            <p>{price}</p>
            <p>{rating.rate}</p>
        </div>
    )
}
export default Products