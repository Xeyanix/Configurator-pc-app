import commonColumnsStyles from '../../common/styles/Columns.module.scss'
import { useEffect, useState } from "react";

function Cart(props) {
  const [productsToBuy, setProductsToBuy] = useState([]);

  useEffect(() => {
    setProductsToBuy(props.cart);
  }, [props.cart]);

  const removeFromShoppingList = (event, id) => {
    props.remove1(productsToBuy.filter((Motherboards) => Motherboards.id !== id));
    event.preventDefault();
  };

  const countByProduct = props.cart.reduce((acc, product) => {
    acc[product.id] = (acc[product.id] || 0) + 1;
    return acc;
  }, {});

  const cartItems = Object.keys(countByProduct).map((productId) => {
    const product = props.cart.find((p) => p.id === parseInt(productId));

    return {
      ...product,
      count: countByProduct[productId]
    };

  });

  const totalPrice = props.cart.reduce((acc, product) => acc + product.price, 0);

  const DUPA = cartItems.map((Motherboards) => (
    <li
      onContextMenu={(event) => { removeFromShoppingList(event, Motherboards.id); }}
      key={Motherboards.id} >
      {Motherboards.name} - ${Motherboards.price} x{Motherboards.count}
      <button onClick={() => props.remove(Motherboards.id)}> Remove</button >
    </li >
  ));

  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <div>
          <h2>Cart</h2>
          {props.cart.length === 0 ? (
            <p>Your shopping cart is empty.</p>
          ) : (
            <ul>{DUPA}</ul>
          )}
          <p id="total"> Total Price: ${totalPrice}
          </p>


        </div>
      </header>
    </div>
  );
}
export default Cart;
