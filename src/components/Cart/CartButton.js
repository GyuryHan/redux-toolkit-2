import classes from "./CartButton.module.css";

import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.cart.totalQuantity);

  const toggleHandler = () => {
    dispatch(uiActions.isVisible());
  };

  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{count}</span>
    </button>
  );
};

export default CartButton;
