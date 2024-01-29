import React, { useState } from 'react';
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';
import Box from "@mui/material/Box";
import styles from "../../common/styles/MainPage.module.scss";
import { useLocation } from "react-router-dom";


function MainPage() {
  const { state } = useLocation();
  const loggedInUser = state?.loggedInUser;
  const [setScrollPosition] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setScrollPosition(0);
  };


  return (
    <div>


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
              Płyta główna to centralny element komputera, na którym montowane są pozostałe podzespoły. Wybór odpowiedniej płyty zależy od rodzaju procesora, ilości slotów pamięci RAM i innych funkcji, takich jak obsługa karty graficznej czy liczba portów USB.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionHeading}>Procesor</h2>
            <p className={styles.sectionParagraph}>
              Procesor pełni rolę mózgu komputera, odpowiadając za wykonywanie operacji. Wybór odpowiedniego procesora zależy od rodzaju zastosowań komputera - od prostych zadań biurowych po zaawansowane gry czy prace graficzne.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionHeading}>Pamięć RAM</h2>
            <p className={styles.sectionParagraph}>
              Pamięć RAM wpływa na ogólną wydajność systemu, umożliwiając równoczesne wykonywanie wielu zadań. Ważne jest dostosowanie ilości i szybkości pamięci RAM do potrzeb użytkownika i wymagań programów.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionHeading}>Chłodzenie procesora</h2>
            <p className={styles.sectionParagraph}>
              Chłodzenie procesora jest istotne dla utrzymania odpowiedniej temperatury podczas intensywnego użytkowania. Istnieje wiele rodzajów chłodzeń, w tym powietrzne i ciekłe, a wybór zależy od mocy procesora i preferencji użytkownika.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionHeading}>Karta graficzna</h2>
            <p className={styles.sectionParagraph}>
              Karta graficzna odpowiada za renderowanie grafiki. Dla graczy i profesjonalistów graficznych ważne jest wybranie karty o odpowiedniej mocy obliczeniowej, obsługującej najnowsze technologie graficzne.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionHeading}>Dysk twardy</h2>
            <p className={styles.sectionParagraph}>
              Dysk twardy przechowuje system operacyjny, programy i dane. Dobór odpowiedniego dysku zależy od potrzeb użytkownika, a SSD może znacznie przyspieszyć czas ładowania systemu i programów.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionHeading}>Zasilacz</h2>
            <p className={styles.sectionParagraph}>
              Zasilacz dostarcza energię do wszystkich komponentów komputera. Ważne jest, aby jego moc była wystarczająca dla wszystkich podzespołów, a także zwrócenie uwagi na efektywność energetyczną.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionHeading}>Obudowa</h2>
            <p className={styles.sectionParagraph}>
              Obudowa nie tylko chroni podzespoły, ale także wpływa na wentylację i estetykę. Wybór zależy od preferencji użytkownika, liczby dostępnych miejsc na chłodzenie oraz wielkości planowanego zestawu.
            </p>
          </div>


          <form className={styles.mainPageWrapper} >
            <Box sx={{ m: 2 }}>
              <Link to={`/configurator?user=${loggedInUser}`}>
                <Button variant="contained">
                  Skonfiguruj
                </Button>
              </Link>
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

      <p>&copy; {new Date().getFullYear()}{' '}
        <Link to="/" onClick={scrollToTop} >
          Configurator
        </Link>
        . All rights reserved.</p>
    </div>
  );
}

export default MainPage;
