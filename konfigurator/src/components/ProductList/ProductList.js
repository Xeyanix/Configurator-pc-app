import React, { useState } from 'react';
import commonColumnsStyles from '../../common/styles/Columns.module.scss';
import CPUs from '../../common/consts/cpu';

const ProductList = (props) => {
    const [wybranaPlyta, setWybranaPlyta] = useState(null);
    const [koszyk, setKoszyk] = useState([]);
    const [showMotherboardList, setShowMotherboardList] = useState(true);

    const handlePlytaClick = (motherboard) => {
        setWybranaPlyta(motherboard);
        setShowMotherboardList(false);
    };

    const dodajDoKoszyka = (item) => {
        setKoszyk((prevKoszyk) => [...prevKoszyk, item]);
        props.dodawanie(item);
    };

    const renderMotherboardOptions = () => {
        return props.Motherboards.map((motherboard) => (
            <div
                onClick={() => {
                    handlePlytaClick(motherboard);
                }}
                key={motherboard.id}
            >
                {motherboard.name}, {motherboard.chipset} <br />
                <button
                    className={commonColumnsStyles.myButton}
                    onClick={() => {
                        dodajDoKoszyka(motherboard);
                    }}
                >
                    Dodaj do koszyka
                </button>
            </div>
        ));
    };

    const compatibleCPU = wybranaPlyta
        ? CPUs.filter((cpu) => cpu.compatibleMotherboards.includes(wybranaPlyta.id))
        : [];

    const handleShowMotherboardList = () => {
        setWybranaPlyta(null);
        setShowMotherboardList(true);
    };

    return (
        <div className={commonColumnsStyles.App}>
            <header className={commonColumnsStyles.AppHeader}>
                <div className={commonColumnsStyles.smallerFont}>
                    {!wybranaPlyta && showMotherboardList ? (
                        <>
                            <h2>Wybierz płytę główną:</h2>
                            <div>{renderMotherboardOptions()}</div>
                        </>
                    ) : (
                        <div>
                            <h3>Wybrana płyta główna: {wybranaPlyta?.name}</h3>
                            {!showMotherboardList && (
                                <button
                                    className={commonColumnsStyles.myButton}
                                    onClick={handleShowMotherboardList}
                                >
                                    Wyświetl listę płyt głównych
                                </button>
                            )}

                            <h4>Kompatybilne procesory dla: {wybranaPlyta?.name}</h4>
                            <div>
                                {compatibleCPU.map((cpu) => (
                                    <li key={cpu.id}>
                                        {cpu.name}
                                        <button
                                            className={commonColumnsStyles.myButton}
                                            onClick={() => {
                                                dodajDoKoszyka(cpu);
                                            }}
                                        >
                                            Dodaj do koszyka
                                        </button>
                                    </li>
                                ))}
                            </div>
                            {!wybranaPlyta && (
                                <button
                                    className={commonColumnsStyles.myButton}
                                    onClick={handleShowMotherboardList}
                                >
                                    Wybierz inną płytę główną
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </header>
        </div>
    );
};
export default ProductList;
