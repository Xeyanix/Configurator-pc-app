import React from 'react';
import styles from "../common/styles/PrivacyPolicy.module.scss";
import ResponsiveAppBar from "./ResponsiveAppBar";
import Footer from './Footer';

function PrivacyPolicy() {
    return (
        <div className={styles.Box}>
            <ResponsiveAppBar />
            <div className={styles.mainContainer}>
                <section id="privacyPolicySection" className={styles.privacyPolicy}>
                    <div className={styles.header}>
                        <h2>Polityka Prywatności</h2>
                        <p>Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych przekazanych przez Użytkowników w związku z korzystaniem przez nich z usług [Nazwa Twojej Strony] poprzez Serwis.</p>
                        
                        <h3>1. Informacje Ogólne</h3>
                        <p>Administratorem danych osobowych zawartych w serwisie jest [Twoje Imię i Nazwisko / Nazwa Firmy] z siedzibą w [Twój Adres], NIP: [Twój NIP], REGON: [Twój REGON].</p>
                        
                        <h3>2. Dane Osobowe</h3>
                        <p>Dane osobowe zbierane przez Serwis [Nazwa Twojej Strony] są przetwarzane zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych), zwane RODO.</p>
                        
                        <h3>3. Cel Przetwarzania Danych</h3>
                        <p>Dane osobowe Użytkowników przetwarzane są w celu:</p>
                        <ul>
                            <li>świadczenia usług drogą elektroniczną,</li>
                            <li>obsługi zgłoszeń rejestracyjnych,</li>
                            <li>marketingu bezpośredniego własnych produktów lub usług administratora danych,</li>
                            <li>wysyłania newslettera.</li>
                        </ul>
                        
                        <h3>4. Rodzaj Przetwarzanych Danych</h3>
                        <p>Serwis zbiera następujące dane osobowe:</p>
                        <ul>
                            <li>imię i nazwisko,</li>
                            <li>adres e-mail,</li>
                            <li>numer telefonu,</li>
                            <li>adres IP.</li>
                        </ul>
                        
                        <h3>5. Prawa Użytkownika</h3>
                        <p>Użytkownik ma prawo do:</p>
                        <ul>
                            <li>dostępu do treści swoich danych osobowych,</li>
                            <li>ich sprostowania, usunięcia, ograniczenia przetwarzania,</li>
                            <li>przenoszenia danych,</li>
                            <li>wniesienia sprzeciwu,</li>
                            <li>wniesienia skargi do organu nadzorczego.</li>
                        </ul>
                        
                        <h3>6. Kontakt</h3>
                        <p>W sprawach związanych z ochroną danych osobowych prosimy o kontakt pod adresem e-mail: [Twój Adres E-mail].</p>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}

export default PrivacyPolicy;
