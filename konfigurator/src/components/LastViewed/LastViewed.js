import styles from './LastViewed.module.scss'
import { useEffect, useState } from "react";

function LastViewed(props) {
    const [LastViewedProducts, setLastViewedProducts] = useState([]);

    useEffect(() => {
        setLastViewedProducts(props.cart);
    }, [props.cart]);

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

    const lastViewedItems = cartItems.map((product) => (
        <li
            key={product.id} style={{ display: 'inline-block', margin: '10px' }}>
            <div>{product.name}</div>
            <div>{product.chipset}</div>
            <hr />
        </li >
    ));

    return (
        <div className={styles.LastViewed}>
            <header>
                <div className={styles.font}>
                    <h4>Ostatnio dodane do koszyka</h4>

                    {props.cart.length === 0 ? (
                        <p>Ostatnio nic nie dodawałes do koszyka</p>
                    ) : (
                        <div>{lastViewedItems}</div>
                    )}

                </div>
            </header >
        </div >
    );
}

export default LastViewed;
