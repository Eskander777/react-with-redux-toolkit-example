import { useDispatch } from "react-redux";
import classes from "./CartButton.module.css";
import { useSelector } from "react-redux";

import { cartActions } from "../../store/cart";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const cartShowHandler = () => {
    dispatch(cartActions.showCart());
  };

  return (
    <button className={classes.button} onClick={cartShowHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItems.length}</span>
    </button>
  );
};

export default CartButton;
