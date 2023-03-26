import React from 'react';
import commonColumnsStyles from '../../common/styles/Columns.module.scss';
import Motherboards from '../../common/consts/motherboard';

function ProductList(props) {

  const productsList = props.Motherboards.map((motherboard) => (
    <li
      onClick={() => props.dodawanie(motherboard)}
      key={motherboard.id}>
      {motherboard.name},
      {/* {motherboard.chipset} */}
    </li>
  ));

  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <div>
          <h2>Items :</h2>
          <ul>{productsList}</ul>
        </div>
      </header >
    </div >
  );
}



export default ProductList;
