import styles from './LastViewed.module.scss'
import { useEffect, useState } from "react";

function LastViewed(props) {
    const [koszyk] = useState([]);

    const [productsToBuy, setProductsToBuy] = useState([]);

    useEffect(() => {
        setProductsToBuy(props.cart);
    }, [props.cart]);

    const removeFromShoppingList = (event, id) => {
        props.removeByRightClick(productsToBuy.filter((Motherboards) => Motherboards.id !== id));
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

    const AddedItem = cartItems.map((Motherboards) => (
        <li
            onContextMenu={(event) => { removeFromShoppingList(event, Motherboards.id); }}
            key={Motherboards.id} >
            {Motherboards.name} 
        </li >
    ));

    return (
        <div className={styles.LastViewed}>
            <header>
                <div className={styles.font}>
                    <h4>Ostatnio dodane do koszyka</h4>

                    {props.cart.length === 0 ? 
                    (
                        <p>Ostatnio dodane nic tu nie ma </p>
                    ) 
                    : (
                        <ul>{AddedItem}</ul>
                    )}

                    <div>
                        {koszyk.map(item => (
                            <div key={item.id} style={{ display: 'inline-block', margin: '10px' }}>
                                <div>{item.name}</div>
                                <div>{item.chipset}</div>
                                <hr />
                            </div>
                        ))}
                    </div>
                </div>
            </header >
        </div >
    );
}

export default LastViewed;