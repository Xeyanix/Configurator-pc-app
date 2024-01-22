import commonColumnsStyles from '../../common/styles/Columns.module.scss'
import { useEffect, useState } from "react";

function Cart(props) {
  const [productsToBuy, setProductsToBuy] = useState([]);
  const [removeAllClicked, setRemoveAllClicked] = useState([]);

  useEffect(() => {
    setProductsToBuy(props.cart);
  }, [props.cart]);

  const removeFromShoppingList = (event, id) => {
    props.removeByRightClick(productsToBuy.filter((Motherboards) => Motherboards.id !== id));
    event.preventDefault();
  };

  const removeAllItems = () => {
    props.removeAll();
    setRemoveAllClicked(true);
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

  const totalPrice = () => {
     const Price = props.cart.reduce((acc, product) => acc + product.price, 0);
    return Price.toLocaleString('pl-PL', { minimumFractionDigits: 2 });
  };

  const AddedItem = cartItems.map((Motherboards) => (
    <li
      onContextMenu={(event) => { removeFromShoppingList(event, Motherboards.id); }}
      key={Motherboards.id} >
      {Motherboards.name} - {Motherboards.price} zł x{Motherboards.count} {" "}
      <button className={commonColumnsStyles.myButton} onClick={() => props.remove(Motherboards.id)}>Usuń</button >
    </li >
  ));

  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <div className={commonColumnsStyles.smallerFont}>
          <h2>Koszyk</h2>
          {props.cart.length === 0 ? (
            <p>Twój koszyk jest pusty</p>
          ) : (
            <div>
              <ul>{AddedItem}</ul>
              <button
                className={commonColumnsStyles.myButton}
                onClick={removeAllItems}
              >
                Usuń wszystko
              </button>
            </div>
          )}
          <p id="total"> Łącznie: {totalPrice()} PLN</p>
        </div>
      </header>
    </div>
  );
}

export default Cart;

