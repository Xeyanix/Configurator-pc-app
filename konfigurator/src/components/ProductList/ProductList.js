import React from 'react';
import commonColumnsStyles from '../../common/styles/Columns.module.scss';
// import Motherboards from '../../common/consts/motherboard';

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
{/* =======
    const handleMotherboardChange = (event) => {
        const selectedMotherboardId = parseInt(event.target.value);
        const selectedMotherboard1 = Motherboards.find(
            (m) => m.id === selectedMotherboardId

        );
        setSelectedMotherboard(selectedMotherboard1);
    };

    const handlePCUChange = (event) => {
        const selectCPUId = parseInt(event.target.value);
        const selectCPU = CPUs.find((cpu) => cpu.id === selectCPUId);
        setSelectedCPU(selectCPU);
    };

    const handleRAMChange = (event) => {
        const selectRAMId = parseInt(event.target.value);
        const selectRAM = RAMs.find((ram) => ram.id === selectRAMId);
        setSelectedRAM(selectRAM);
    };

    const calculateTotalPrice = () => {
        let totalPrice = 0;

        if (selectedMotherboard) totalPrice += selectedMotherboard.price;
        if (selectedCPU) totalPrice += selectedCPU.price;
        if (selectedRAM) totalPrice += selectedRAM.price;


        return totalPrice;
    }

    const productsList = props.Motherboards.map((motherboard) => (
        <li
            onClick={() => props.dodawanie(motherboard)}
            key={motherboard.name}>
            {motherboard.name}
        </li>
    ));

    return (
        <div className={commonColumnsStyles.App}>
            <p>Total price: ${calculateTotalPrice()}</p>

            <header className={commonColumnsStyles.AppHeader}>
                <div>
                    <form>
                        <p>Compatible Motherboards</p>



                       {Motherboards.map((motherboard) => (
                            <div
                                key={Motherboards.id}
                            >
                                <input
                                    type="radio"
                                    id={motherboard.name}
                                    name="motherboard"
                                    value={motherboard.id}
                                    onChange={handleMotherboardChange}
                                    onClick={() => props.dodawanie(motherboard)}
                                />
                                <label htmlFor={motherboard.name}>{motherboard.name} ${motherboard.price}</label>
                            </div>
                        ))} 



                        {selectedMotherboard && (
                            <div>
                                <p>Compatible CPUs</p>
                                {CPUs.map((cpu) => (
                                    <div key={cpu.id}>
                                        <input
                                            type="radio"
                                            id={cpu.name}
                                            name="cpu"
                                            value={cpu.id}
                                            onChange={handlePCUChange}
                                            onClick={() => props.dodawanie(cpu)}

                                        />
                                        <label htmlFor={cpu.name}>{cpu.name} ${cpu.price}</label>
                                    </div>
                                ))}

                                {selectedCPU && (
                                    <div>
                                        <h2>RAMs </h2>
                                        {RAMs.map((ram) => (
                                            <div key={ram.id}>
                                                <input
                                                    type="radio"
                                                    id={ram.name}
                                                    name="ram"
                                                    value={ram.id}
                                                    onChange={handleRAMChange}
                                                    onClick={() => props.dodawanie(ram)}
                                                />
                                                <label htmlFor={ram.name}>{ram.name} ${ram.price}</label>
                                            </div>
                                        ))}

                                    </div>
                                )}
                            </div>
                        )}


                        {/* <ul>{productsList}</ul> */}

                    {/* </form > */}
                {/* </div>
            </header> */}

        </div>
      </header >
    </div >
  );
}



export default ProductList;
