import commonColumnsStyles from '../../common/styles/Columns.module.scss'


function Cart({ cart, removeItem }) {

  const countByProduct = cart.reduce((acc, product) => {
    acc[product.id] = (acc[product.id] || 0) + 1;
    return acc;
  }, {});

  const cartItems = Object.keys(countByProduct).map((productId) => {
    const product = cart.find((p) => p.id === parseInt(productId));
    return {
      ...product,
      count: countByProduct[productId]
    };
  });

  const totalPrice = cart.reduce((acc, product) => acc + product.price, 0);

  const ProductsLists = cartItems.map((item) => (

    <li
      key={item.id} >
      {item.name} - ${item.price} x{item.count}
      {/* {Motherboards.name} ${Motherboards.price} */}
      < button onClick={() => removeItem(item.id)
      }> Remove</button >
    </li >

  ));

  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <div>
          <h2>Cart</h2>
          {cart.length === 0 ? (
            <p>Your shopping cart is empty.</p>
          ) : (
            <ul>

              {ProductsLists}
            </ul>
          )}
          <p id="total"> Total Price: ${totalPrice}
          </p>


        </div>
      </header>
    </div>
  );
}
export default Cart;
