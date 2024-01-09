import React, { useState } from 'react';
import commonColumnsStyles from '../../common/styles/Columns.module.scss';
import Motherboards from '../../common/consts/motherboard';
import CPUs from '../../common/consts/cpu';

function ProductList(props) {
    const [wybranaPlyta, setWybranaPlyta] = useState(null);
    const [koszyk, setKoszyk] = useState([]);

    const handlePlytaClick = (motherboard) => {
        setWybranaPlyta(motherboard);
    };

    const dodajDoKoszyka = (procesor) => {
        setKoszyk(prevKoszyk => [...prevKoszyk, procesor]);
    };

    const productsList = Motherboards.map((motherboard) => (
        <div
            onClick={() => {
                handlePlytaClick(motherboard);
            }} //po kliknieciu pokazuje kompatybilne procesory 
            key={motherboard.id}>
            {motherboard.name} ,
            {motherboard.chipset} <br />
            <button className={commonColumnsStyles.myButton} onClick={() => {
                dodajDoKoszyka(motherboard);
                props.dodawanie(motherboard);
            }}> Dodaj do koszyka
            </button>
        </div>
    ));

    const kompatybilneProcesory = wybranaPlyta
        ? CPUs.filter(cpu => cpu.compatibleMotherboards.includes(wybranaPlyta.id))
        : [];

    return (
        <div className={commonColumnsStyles.App}>
            <header className={commonColumnsStyles.AppHeader}>
                <div className={commonColumnsStyles.smallerFont}>
                    <h2>Wybierz płytę główną:</h2>
                    <div>{productsList}</div>
                    {wybranaPlyta && (
                        <div>
                            <h3>Kompatybilne procesory dla: {wybranaPlyta.name}</h3>
                            <div>
                                {kompatybilneProcesory.map(cpu => (
                                    <li
                                        key={cpu.id}
                                    >
                                        {cpu.name}
                                        <button
                                            className={commonColumnsStyles.myButton}
                                            onClick={() => {
                                                dodajDoKoszyka(cpu)
                                                props.dodawanie(cpu);
                                            }}>Dodaj do koszyka
                                        </button>
                                    </li>
                                ))}
                            </div>
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
                    )}
                </div>
            </header >
        </div >
    );
}

export default ProductList;

//w momencie gdy dodam dwie płyty glowne i jedna usune
//to ma pokazywac kompatybilnosc do plyty ktora zostala w koszyku1
// ma sie zmieniać " kompatybilne procesory dla : "Nazwa aktualnej plyty w koszyku1 "


