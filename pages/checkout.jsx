import Link from "next/link";

export default function checkout() {
  return (
    <div>
      <Link href="/">Go back</Link>
      <h1>Checkout</h1>
      <p>Here is your cart</p>
      <p>Here you can see all the items in your shoppingcart.</p>
    </div>
  );
}
