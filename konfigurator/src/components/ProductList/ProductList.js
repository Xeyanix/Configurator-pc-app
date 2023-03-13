import React from 'react';
// import styles from './Results.module.scss';
import commonColumnsStyles from '../../common/styles/Columns.module.scss';
import { useState } from 'react';


function ProductList() {
    const [selectedMotherboard, setSelectedMotherboard] = useState(null);
    const [selectedCPU, setSelectedCPU] = useState(null);
    const [selectedRAM, setSelectedRAM] = useState(null);

    const Motherboards = [
        { id: 1, name: 'ASUS ROG Strix B550-F Gaming', price: 100 },
        { id: 2, name: 'GIGABYTE AORUS X570 Master', price: 250 },
        { id: 3, name: 'MSI MAG B550 Tomahawk', price: 350 },
    ];

    const CPUs = [
        { id: 1, name: 'AMD Ryzen 9 5900X', price: 100 },
        { id: 2, name: 'Intel Core i9-11900K', price: 250 },
        { id: 3, name: 'AMD Ryzen 7 5800X', price: 50 },
    ];

    const RAMs = [
        { id: 1, name: 'Corsair Vengeance LPX 8GB', price: 700 },
        { id: 2, name: 'Corsair Vengeance LPX 16GB', price: 120 },
        { id: 3, name: 'G.Skill Ripjaws V 8GB', price: 60 },
    ];

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

    return (
        <div className={commonColumnsStyles.App}>
            <header className={commonColumnsStyles.AppHeader}>

                <div>
                    <h1>PC Configurator</h1>
                    <form>
                        <p>Compatible Motherboards</p>
                        {Motherboards.map((motherboard) => (
                            <div key={motherboard.id}>
                                <input
                                    type="radio"
                                    id={motherboard.name}
                                    name="motherboard"
                                    value={motherboard.id}
                                    onChange={handleMotherboardChange}
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
                                                />
                                                <label htmlFor={ram.name}>{ram.name} ${ram.price}</label>
                                            </div>
                                        ))}

                                    </div>
                                )}
                            </div>
                        )}
                        <p>Selected Components</p>
                        <p> Motherboard: {selectedMotherboard ? selectedMotherboard.name : 'None'}</p>
                        <p> CPU: {selectedCPU ? selectedCPU.name : 'None'}</p>
                        <p> RAM: {selectedRAM ? selectedRAM.name : 'None'}</p>
                        <p>Total price: ${calculateTotalPrice()}</p>
                    </form >
                </div>
            </header>
        </div>

    );
};


export default ProductList;


