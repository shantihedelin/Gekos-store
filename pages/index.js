import { addToCart, deleteFromCart } from "@/redux/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const cartProducts = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  // Räkna ut den totala summan av varorna:
  const total = cartProducts.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProducts();
  }, []);

  // const products = [
  //   { id: 1, name: "Banana", price: 1000 },
  //   { id: 2, name: "Potato", price: 2000 },
  //   { id: 3, name: "Mushroom", price: 3000 },
  //   { id: 4, name: "Flowers", price: 4000 },
  //   { id: 5, name: "Tesla", price: 5000 },
  //   { id: 6, name: "Candy", price: 6000 },
  //   { id: 7, name: "Chair", price: 199 },
  //   { id: 8, name: "Desk", price: 1299 },
  //   { id: 9, name: "Table", price: 899 },
  //   { id: 10, name: "Laptop", price: 1499 },
  //   { id: 11, name: "Phone", price: 999 },
  //   { id: 12, name: "Mouse", price: 49 },
  // ];

  function handleAddToCart(product) {
    dispatch(addToCart(product));
  }

  function handleDeleteFromCart(id) {
    dispatch(deleteFromCart({ id }));
  }

  return (
    <>
      <Head>
        <title>Gekos Store | Very Expensive products</title>
        <meta
          name="desciption"
          content="Shop the most expensive product online with Gekos Store. Add items to cart and checkout easily."
        ></meta>
        <meta
          name="keywords"
          content="e-commerce, Gekos, expensive products, online store, shopping"
        ></meta>
        <meta property="og:title" content="Gekos Store"></meta>
        <meta
          property="og:description"
          content="Shop the most expensive products online with Gekos Store."
        ></meta>
        <meta property="og:image" content="/pexels.jpg"></meta>
        <meta
          property="og:url"
          content="https://online-store-redux-zeta.vercel.app/"
        ></meta>
        <meta
          property="og:url"
          content="https://online-store-redux-zeta.vercel.app/checkout"
        ></meta>
      </Head>
      <main>
        <div>
          <h1>Gekos store</h1>
          <h2 className="text-base">Very expensive store</h2>
          <div className="store-container">
            <ul className="the-store">
              {products.map((product) => (
                <li key={product.id} className="store">
                  {product.title} - {product.price}kr &nbsp;
                  <img src={product.image} className="h-20"></img>
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
                {product.name} - {product.price}kr (Quantity: {product.quantity}
                )
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
    </>
  );
}

export default Home;
