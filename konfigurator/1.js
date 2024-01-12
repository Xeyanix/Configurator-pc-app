import React, { useState } from 'react';
import commonColumnsStyles from '../../common/styles/Columns.module.scss';
import CPUs from '../../common/consts/cpu';
import RAMs from '../../common/consts/ram';

const ProductList = (props) => {
    const [wybranaPlyta, setWybranaPlyta] = useState(null);
    const [koszyk, setKoszyk] = useState([]);
    const [showMotherboardList, setShowMotherboardList] = useState(true);
    const [showCpuList, setShowCpuList] = useState(false);

    const [wybranyProcesor, setWybranyProcesor] = useState(null);
    const [showRamList, setShowRamList] = useState(false);


    const handlePlytaClick = (motherboard) => {
        setWybranaPlyta(motherboard);
        setShowMotherboardList(false);
    };

    const handleShowMotherboardList = () => {
        setWybranaPlyta(null);
        setShowMotherboardList(true);
    };

    const handleShowCpuList = () => {
        setWybranyProcesor(null);
        setShowRamList(false);
        setShowCpuList(true);
    };

    const dodajDoKoszyka = (item) => {
        setKoszyk((prevKoszyk) => [...prevKoszyk, item]);
        props.dodawanie(item);
        if (item.compatibleMotherboards) {
            setWybranyProcesor(item);
            setShowRamList(true);
            setShowCpuList(false);
        }
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
                            <>
                                <h4>Kompatybilne procesory dla: {wybranaPlyta?.name}</h4>
                                <h4>Wybierz Procesor:</h4>
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
                            </>



                            
                            {wybranyProcesor && (
                                <>
                                    <h3>Wybrany Procesor: {wybranyProcesor?.name}</h3>
                                    {!showCpuList && (
                                    <button
                                        className={commonColumnsStyles.myButton}
                                        onClick={handleShowCpuList}
                                    >
                                        Wyświetl listę Procesorów
                                    </button>
                                       )}
                                </>
                            )}

                            {showRamList && (
                                <>
                                    <h3>Pamięci RAM dla: {wybranyProcesor?.name}</h3>
                                    <div>
                                        {RAMs.map((ram) => (
                                            <li key={ram.id}>
                                                {ram.name}
                                                <button
                                                    className={commonColumnsStyles.myButton}
                                                    onClick={() => {
                                                        dodajDoKoszyka(ram);
                                                    }}
                                                >
                                                    Dodaj do koszyka
                                                </button>
                                            </li>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    )}
                </div>
            </header >
        </div >
    );
};
export default ProductList;
