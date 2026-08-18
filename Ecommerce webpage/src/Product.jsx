function Product({ product, addToCart }) {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />

            <div className="product-info">
                <p className="category">{product.category}</p>
                <h3>{product.name}</h3>
                <p className="price">₹{product.price}</p>
                <p className="stock">Stock: {product.stock}</p>

                <button onClick={() => addToCart(product)}>
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default Product