function ProductCart({ cartCount }) {
    return (
        <div className="cart">
            🛒 Cart
            <span>{cartCount}</span>
        </div>
    )
}

export default ProductCart