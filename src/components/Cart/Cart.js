import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const isCartShow = useSelector((state) => state.cart.isOpen);

  const cartItemsEl = cartItems.map((item, idx) => (
    <CartItem key={idx} item={item} />
  ));

  return (
    <>
      {isCartShow && (
        <Card className={classes.cart}>
          <h2>Your Shopping Cart</h2>
          <ul>{cartItemsEl.length > 0 ? cartItemsEl : "Your cart is empty"}</ul>
        </Card>
      )}
    </>
  );
};

export default Cart;
