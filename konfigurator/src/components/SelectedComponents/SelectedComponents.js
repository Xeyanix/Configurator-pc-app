import commonColumnsStyles from '../../common/styles/Columns.module.scss'
import { useEffect, useState } from "react";


function SelectedComponents(props) {
  const [productsToBuy, setProductsToBuy] = useState([]);
  // const [selectedMotherboard, setSelectedMotherboard] = useState(null);
  // const [selectedCPU, setSelectedCPU] = useState(null);
  // const [selectedRAM, setSelectedRAM] = useState(null);

  useEffect(() => {
    setProductsToBuy(props.SelectedItems);
  }, [props.SelectedItems]);

  const removeFromSelectedList = (event, id) => {
    props.remove(productsToBuy.filter((Motherboards) => Motherboards.id !== id));
    event.preventDefault();
  };


  const ProductsLists = productsToBuy.map((Motherboards, index) => (
    <li
      onContextMenu={(event) => { removeFromSelectedList(event, Motherboards.id); }}
      key={index}>
      {Motherboards.name} ${Motherboards.price}
    </li>
  ));

  const calculateTotalPrice = () => {
    let totalPrice = 0;

    // if (selectedMotherboard) totalPrice += selectedMotherboard.price;
    // if (selectedCPU) totalPrice += selectedCPU.price;
    // if (selectedRAM) totalPrice += selectedRAM.price;


    return totalPrice;
  }

  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <div>
          <form>
            <p>Selected Components</p>
            {ProductsLists}
            <p>Total Price: $${calculateTotalPrice()}</p>
          </form >
        </div>
      </header>
    </div>

  );
}

export default SelectedComponents;