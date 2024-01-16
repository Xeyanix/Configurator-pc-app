import React from "react";
import { useNavigate } from "react-router-dom";
// import TextField from "@mui/material/TextField";
import styles from "./MainPage.module.scss";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function MainPage() {
  let navigate = useNavigate();

  const redirectToConfigurator = (e) => {
    e.preventDefault();
    navigate("/configurator");
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.maintext}>
        <h1 className={styles.mainHeading}>Witaj w Konfiguratorze Swojego komputera - PC</h1>
        <p className={styles.sectionParagraph}>
          Alternatywą dla kupowania gotowego zestawu PC jest samodzielne zbudowanie go od podstaw. Takie rozwiązanie ma sporo zalet, wśród których największą jest pełna kontrola nad doborem podzespołów i dopasowaniem ich do własnych potrzeb oraz budżetu, którym dysponujemy. W przyszłości można też łatwo modernizować nasz komputer, bez obawy o naruszenie gwarancji na cały zestaw. Każdy zakupiony przez nas komponent będzie mieć bowiem własną gwarancję. Samodzielne składanie komputera PC może wydawać się skomplikowane, ale w rzeczywistości każdy powinien sobie z tym zadaniem poradzić. Wszystkie podzespoły dostarczane są ze szczegółową instrukcją montażu, aby uniknąć wszelkich problemów. Aby maksymalnie ułatwić cały proces doboru sprzętu komputerowego stworzyliśmy Konfigurator Komputera PC, który krok po kroku pomoże Ci wybrać optymalne elementy zestawu, dbając, aby były ze sobą kompatybilne. Jeśli wybrany przez Ciebie komponent okaże się niezgodny z pozostałymi, zostaną zaproponowane alternatywy o zbliżonych parametrach.
        </p>
        <div className={styles.additionalText}>
          Po skompletowaniu wszystkich podzespołów możesz również zdecydować się na usługę montażu, którą sprawnie i szybko wykonają specjaliści Komputronik.
          Gotowy i przetestowany sprzęt zostanie wówczas dostarczony pod wskazany przez Ciebie adres.
        </div>
        <div className={styles.section}>
          Budżet i przeznaczenie komputera
          zacząć powinniśmy od określenia, jaką kwotę jesteśmy w stanie przeznaczyć na zakup nowego komputera. Istotne jest także jego przeznaczenie. Inne parametry powinien mieć komputer do biura, a inne wydajny komputer dla graczy.
        </div>
        <div className={styles.section}>
          <h2 className={styles.sectionHeading}>O Nas</h2>
          <p className={styles.sectionParagraph}>
            Jesteśmy pasjonatami nowoczesnych technologii i staramy się dostarczać
            najwyższej jakości produkty naszym klientom.
          </p>
        </div>
        <div className={styles.section}>
          <h2 className={styles.sectionHeading}>Płyta Główna</h2>
          <p className={styles.sectionParagraph}>

          </p>
        </div>
        <div className={styles.section}>
          <h2 className={styles.sectionHeading}>Procesor</h2>
          <p className={styles.sectionParagraph}>

          </p>
        </div>
        <div className={styles.section}>
          <h2 className={styles.sectionHeading}>Pamięć RAM</h2>
          <p className={styles.sectionParagraph}>

          </p>
        </div>
        <div className={styles.section}>
          <h2 className={styles.sectionHeading}>Chłodzenie procesora</h2>
          <p className={styles.sectionParagraph}>

          </p>
          <div className={styles.section}>
            <h2 className={styles.sectionHeading}>Karta graficzna</h2>
            <p className={styles.sectionParagraph}>

            </p>
          </div>
          <div className={styles.section}>
            <h2 className={styles.sectionHeading}>Dysk twardy</h2>
            <p className={styles.sectionParagraph}>

            </p>
          </div>
          <div className={styles.section}>
            <h2 className={styles.sectionHeading}>Zasilacz</h2>
            <p className={styles.sectionParagraph}>

            </p>
          </div>
          <div className={styles.section}>
            <h2 className={styles.sectionHeading}>Obudowa</h2>
            <p className={styles.sectionParagraph}>

            </p>
          </div>
          <form className={styles.mainPageWrapper} onSubmit={redirectToConfigurator}>
            <Box sx={{ m: 2 }}>
              <Button
                variant="contained"
                type="submit"
              >
                Skonfiguruj
              </Button>
            </Box>
          </form>
          <div className={styles.contactSection}>
            <h2 className={styles.sectionHeading}>Kontakt</h2>
            <p className={styles.sectionParagraph}>
              Skontaktuj się z nami pod adresem email: kontakt@example.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
