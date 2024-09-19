import Link from "next/link";
import Head from "next/head";

export default function checkout() {
  return (
    <>
      <Head>
        <title>Checkout | Gekos Store</title>
        <meta
          name="description"
          content="Complete your purchase at Gekos Store. Review your cart and finish your order easily."
        ></meta>
        <meta
          name="keywords"
          content="checkout, store, buy online, shopping cart"
        ></meta>
        <meta property="og:title" content="Checkout | Gekos Store"></meta>
        <meta property="og:description" content="Finish your order at Gekos Store and review your cart." ></meta>
        <meta property="og:image" content="/pexels2.jpg"></meta>
      </Head>
      <div>
        <Link href="/">Go back</Link>
        <h1>Checkout</h1>
        <p>Here is your cart</p>
        <p>Here you can see all the items in your shoppingcart.</p>
      </div>
    </>
  );
}
