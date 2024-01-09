import React, { useState } from 'react';
import commonColumnsStyles from '../../common/styles/Columns.module.scss';
import styles from './LastViewed.module.scss';

function LastViewed(props) {

    const [koszyk] = useState([]);

    return (
        <div className={styles.LastViewed}>
            <header className={styles.AppHeader}>
                <div className={commonColumnsStyles.smallerFont}>
                    <h4>Ostatnio dodane do koszyka</h4>
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