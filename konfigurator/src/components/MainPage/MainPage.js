import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import TextField from "@mui/material/TextField";
import styles from "./MainPage.module.scss";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function MainPage() {
  let navigate = useNavigate();

  const [userfirstName] = useState("");
  const [userLastName] = useState("");

  const redirectToConfigurator = (e) => {
    e.preventDefault();
    window.localStorage.setItem(
      "user",
      JSON.stringify({ userfirstName, userLastName })
    );
    navigate("/configuratorPC");
  };

  return (
    <div>
      <form className={styles.mainPageWrapper} onSubmit={redirectToConfigurator}>
        <Box sx={{ m: 2 }}>
          <Button
            // disabled={userfirstName || !userLastName}
            variant="contained"
            type="submit"
          >
            Skonfiguruj
          </Button>
        </Box>
      </form>
      <div>
        <h1>Witaj w Kofiguratorze Swojego komputera - PC</h1>
        <p>
          Alternatywą dla kupowania gotowego zestawu PC jest samodzielne zbudowanie go od podstaw. Takie rozwiązanie ma sporo zalet, wśród których największą jest pełna kontrola nad doborem podzespołów i dopasowaniem ich do własnych potrzeb oraz budżetu, którym dysponujemy. W przyszłości można też łatwo modernizować nasz komputer, bez obawy o naruszenie gwarancji na cały zestaw. Każdy zakupiony przez nas komponent będzie mieć bowiem własną gwarancję. Samodzielne składanie komputera PC może wydawać się skomplikowane, ale w rzeczywistości każdy powinien sobie z tym zadaniem poradzić. Wszystkie podzespoły dostarczane są ze szczegółową instrukcją montażu, aby uniknąć wszelkich problemów. Aby maksymalnie ułatwić cały proces doboru sprzętu komputerowego stworzyliśmy Konfigurator Komputera PC, który krok po kroku pomoże Ci wybrać optymalne elementy zestawu, dbając, aby były ze sobą kompatybilne. Jeśli wybrany przez Ciebie komponent okaże się niezgodny z pozostałymi, zostaną zaproponowane alternatywy o zbliżonych parametrach.
        </p>
        <div>
          Po skompletowaniu wszystkich podzespołów możesz również zdecydować się na usługę montażu, którą sprawnie i szybko wykonają specjaliści Komputronik.

          Gotowy i przetestowany sprzęt zostanie wówczas dostarczony pod wskazany przez Ciebie adres.
        </div>
        <div>

          Budżet i przeznaczenie komputera

          Zacząć powinniśmy od określenia, jaką kwotę jesteśmy w stanie przeznaczyć na zakup nowego komputera. Istotne jest także jego przeznaczenie. Inne parametry powinien mieć komputer do biura, a inne wydajny komputer dla graczy.
        </div>
        <div>
          <h2>O Nas</h2>
          <p>
            Jesteśmy pasjonatami nowoczesnych technologii i staramy się dostarczać
            najwyższej jakości produkty naszym klientom.
          </p>
        </div>
        <div>
          <h2>Płyta Główna</h2>
          <p>

          </p>
        </div>
        <div>
          <h2>Procesor</h2>
          <p>

          </p>
        </div>
        <div>
          <h2>Pamięć RAM</h2>
          <p>

          </p>
        </div>
        <div>
          <h2>Chłodzenie procesora</h2>
          <p>

          </p>
          <div>
            <h2>Karta graficzna</h2>
            <p>

            </p>
          </div>
          <div>
            <h2>Dysk twardy</h2>
            <p>

            </p>
          </div>
          <div>
            <h2>Zasilacz</h2>
            <p>

            </p>
          </div>
          <div>
            <h2>Obudowa</h2>
            <p>

            </p>
          </div>
          <div>
            <h2>Kontakt</h2>
            <p>
              Skontaktuj się z nami pod adresem email: kontakt@example.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
