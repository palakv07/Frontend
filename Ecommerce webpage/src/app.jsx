import { useState } from "react"
import Product from "./Product"
import ProductCart from "./Productcart"
import { useTheme } from "./ThemeContext"

function App() {
    const { theme, toggleTheme } = useTheme()
    const [cartCount, setCartCount] = useState(0)
    const products = [
        {
            id: 1,
            name: "Wireless Headphones",
            category: "Electronics",
            price: 1499,
            stock: 25,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
        },
        {
            id: 2,
            name: "Smart Watch",
            category: "Electronics",
            price: 2499,
            stock: 18,
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
        },
        {
            id: 3,
            name: "Running Shoes",
            category: "Fashion",
            price: 1999,
            stock: 32,
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
        },
        {
            id: 4,
            name: "Backpack",
            category: "Accessories",
            price: 999,
            stock: 15,
            image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
        },
        {
            id: 5,
            name: "Sunglasses",
            category: "Fashion",
            price: 799,
            stock: 20,
            image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500"
        }
    ]

    function addToCart(product) {
        setCartCount(cartCount + 1)
    }
    return (
        <div className={`dashboard ${theme}`}>

            <header>
                <div>
                    <h1>ShopDashboard</h1>
                    <p>Product Management Dashboard</p>
                </div>

                <div className="header-actions">
                    <button className="theme-toggle" onClick={toggleTheme}>
                        {theme === "light" ? " Dark" : " Light"}
                    </button>
                    <ProductCart cartCount={cartCount} />
                </div>
            </header>

            <main>
                <div className="products-section">

                    <div className="section-header">
                        <div>
                            <h2>Products</h2>
                            <p>Manage your ecommerce products</p>
                        </div>

                        <button className="add-product">
                            + Add Product
                        </button>
                    </div>

                    <div className="products">

                        {products.map((product) => (
                            <Product
                                key={product.id}
                                product={product}
                                addToCart={addToCart}
                            />
                        ))}

                    </div>

                </div>

            </main>
        </div>
    )
}

export default App