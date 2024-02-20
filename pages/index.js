import { addToCart, deleteFromCart } from "@/redux/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";

function Home() {
  const cartProducts = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  // Räkna ut den totala summan av varorna:
  const total = cartProducts.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );

  const products = [
    { id: 1, name: "Banana", price: 1000 },
    { id: 2, name: "Potato", price: 2000 },
    { id: 3, name: "Mushroom", price: 3000 },
    { id: 4, name: "Flowers", price: 4000 },
    { id: 5, name: "Tesla", price: 5000 },
    { id: 6, name: "Candy", price: 6000 },
  ];

  function handleAddToCart(product) {
    dispatch(addToCart(product));
  }

  function handleDeleteFromCart(id) {
    dispatch(deleteFromCart({ id }));
  }

  return (
    <main>
      <div>
        <h1>Next.js E-commerce</h1>
        <h2 className="text-base">Very expensive store</h2>
        <div className="store-container">
          <ul className="the-store">
            {products.map((product) => (
              <li key={product.id} className="store">
                {product.name} - {product.price}kr &nbsp;
                <button
                  onClick={() => {
                    handleAddToCart(product);
                  }}
                >
                  Add to Cart
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <h2>Shopping Cart</h2>
        <ul className="shopping-list">
          {cartProducts.map((product) => (
            <li key={product.id} className="shopping-cart">
              {product.name} - {product.price}kr (Quantity: {product.quantity})
              <button
                onClick={() => {
                  handleDeleteFromCart(product.id);
                }}
              >
                Remove from Cart
              </button>
            </li>
          ))}
          <p>Total Sum: {total}kr</p>
          <Link href={"checkout"}>Go to Checkout</Link>
        </ul>
      </div>
    </main>
  );
}

export default Home;
