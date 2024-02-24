import React, { useState, useEffect } from 'react';
import styles from '../../common/styles/Columns.module.scss';

function ProductList(props) {
  const [selectedMotherboard, setSelectedMotherboard] = useState(null);
  const [koszyk, setKoszyk] = useState([]);
  const [showMotherboardList, setShowMotherboardList] = useState(true);
  const [showCpuList, setShowCpuList] = useState(false);
  const [selectedCpu, setSelectedCpu] = useState(null);
  const [showRamList, setShowRamList] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts(); // Pobieranie produktów z API
  }, []); // Pusty tablica zależności - wykonuje się tylko raz po renderowaniu komponentu

  const fetchProducts = () => {
    fetch('http://localhost:8000/products/motherboards') // Endpoint API dla płyt głównych
      .then(response => response.json())
      .then(data => {
        props.setMotherboards(data); // Ustawiamy pobrane produkty z API
        setLoading(false); // Ustawiamy stan na załadowane dane
      })
      .catch(error => console.error('Error fetching Motherboards:', error));
  };

  const handlePlytaClick = (motherboard) => {
    setSelectedMotherboard(motherboard);
    setShowMotherboardList(false);
  };

  const handleCPUsClick = (cpu) => {
    setSelectedCpu(cpu);
    setShowRamList(true);
  };

  const handleShowMotherboardList = () => {
    setSelectedMotherboard(null);
    setShowMotherboardList(true);
  };

  const handleShowCpuList = () => {
    setSelectedCpu(null);
    setShowRamList(false);
  };

  const handleDodajDoKoszyka = (item) => {
    setKoszyk((prevKoszyk) => [...prevKoszyk, item]);
    props.dodawanie(item);
    if (item.compatibleMotherboards) {
      setSelectedCpu(item);
      setShowRamList(true);
      setShowCpuList(false);
    }
  };

  const RenderMotherboardOptions = () => (
    <div>
      <h2>Wybierz płytę główną:</h2>
      <div className={styles.productsListNames}>
        {props.Motherboards && props.Motherboards.map((motherboard) => (
          <div key={motherboard.id} onClick={() => handlePlytaClick(motherboard)}>
            {motherboard.name}, {motherboard.chipset} <br />
            <button className={styles.myButton} onClick={() => handleDodajDoKoszyka(motherboard)}>
              Dodaj do koszyka
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const RenderCPUsOptions = () => (
    <div>
      <h3>Kompatybilne procesory dla: {selectedMotherboard?.name}</h3>
      <h2>Wybierz Procesor:</h2>
      <div className={styles.productsListNames}>
        {selectedMotherboard &&
          props.CPUs.filter((cpu) => cpu.compatibleMotherboards.includes(selectedMotherboard.id)).map((cpu) => (
            <div key={cpu.id} onClick={() => handleCPUsClick(cpu)}>
              {cpu.name}<br />
              <button className={styles.myButton} onClick={() => handleDodajDoKoszyka(cpu)}>
                Dodaj do koszyka
              </button>
            </div>
          ))}
      </div>
    </div>
  );

  const RenderRAMOptions = () => (
    <div>
      <h3>Wybrana Pamięć RAM: {selectedCpu?.name}</h3>
      <h2>Wybierz RAM:</h2>
      <div className={styles.productsListNames}>
        {props.RAMs && props.RAMs.map((ram) => (
          <li key={ram.id}>
            {ram.name}
            <br />
            <button className={styles.myButton} onClick={() => handleDodajDoKoszyka(ram)}>
              Dodaj do koszyka
            </button>
          </li>
        ))}
      </div>
    </div>
  );

  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <div className={styles.smallerFont}>
          {!selectedMotherboard && showMotherboardList ? (
            <RenderMotherboardOptions />
          ) : (
            <div>
              <h3>Wybrana płyta główna: {selectedMotherboard?.name}</h3>
              {!showMotherboardList && (
                <button className={styles.myButton} onClick={handleShowMotherboardList}>
                  Wyświetl listę płyt głównych
                </button>
              )}

              {selectedMotherboard && !selectedCpu && <RenderCPUsOptions />}

              {selectedCpu && (
                <>
                  <h3>Wybrany Procesor: {selectedCpu?.name}</h3>
                  {!showCpuList && (
                    <button className={styles.myButton} onClick={handleShowCpuList}>
                      Wyświetl listę Procesorów
                    </button>
                  )}
                </>
              )}
              {showRamList && <RenderRAMOptions />}
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default ProductList;
