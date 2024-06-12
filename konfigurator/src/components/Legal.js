import React from 'react';
import styles from "../common/styles/legal.module.scss";
import ResponsiveAppBar from "./ResponsiveAppBar";
import Footer from './Footer';

function Legal() {

    return (
        <div className={styles.Box}>
            <ResponsiveAppBar />
            <div className={styles.mainContainer}>
                <section id="aboutSection" className={styles.about}>
                    <div class="container" className={styles.header}>

                        <h1> Polityka Prywatności - WebTune</h1>
                        <div class="container" className={styles.header}>


                            <h1>I. WPROWADZENIE</h1>
                            <p>Dziękujemy za odwiedzenie naszej strony internetowej. Dbamy o prywatność naszych użytkowników i traktujemy ją z najwyższą powagą...</p>
                            <p>Niniejsza Polityka Prywatności ma na celu poinformowanie Cię o tym, jak zbieramy, używamy, przetwarzamy i chronimy Twoje dane osobowe podczas korzystania z naszej strony internetowej...</p>
                            <p>Zachęcamy do zapoznania się z poniższym dokumentem, aby dowiedzieć się więcej o naszych praktykach w zakresie ochrony danych osobowych...</p>
                            <p>Korzystając z naszej strony, akceptujesz postanowienia tej Polityki Prywatności. Jeśli nie zgadzasz się z jakimkolwiek z jej punktów, prosimy o niekorzystanie z naszej strony...</p>
                            <p>Niniejsza Polityka Prywatności dotyczy wyłącznie naszej strony internetowej i jest zgodna z obowiązującymi przepisami prawa, w tym z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych (RODO).</p>


                            <h1>II. DEFINICJE</h1>
                            <ul>
                                <li><strong>Dane osobowe</strong> - wszelkie informacje dotyczące zidentyfikowanej lub możliwej do zidentyfikowania osoby fizycznej...</li>
                                <li><strong>Przetwarzanie</strong> - jakiekolwiek operacje lub zestawy operacji wykonywane na danych osobowych lub zestawach danych osobowych...</li>
                                <li><strong>Administrator danych</strong> - osoba fizyczna, osoba prawna, jednostka organizacyjna lub organ publiczny, który samodzielnie lub wspólnie z innymi decyduje o celach i środkach przetwarzania danych osobowych...</li>
                                <li><strong>Odbiorca</strong> - osoba fizyczna, osoba prawna, jednostka organizacyjna lub organ publiczny, którym ujawnia się dane osobowe, niezależnie od tego, czy jest to strona trzecia...</li>
                                <li><strong>Zgoda</strong> - każde dobrowolne, konkretne, świadome i jednoznaczne wyrażenie woli, którym osoba, której dane dotyczą, w formie oświadczenia lub wyraźnej czynności potwierdzającej, pozwala na przetwarzanie dotyczących jej danych osobowych...</li>
                                <li><strong>Naruszenie ochrony danych osobowych</strong> - naruszenie bezpieczeństwa prowadzące, przypadkowo lub nieumyślnie, do zniszczenia, utraty, modyfikacji, nieuprawnionego ujawnienia lub nieuprawnionego dostępu do przekazywanych, przechowywanych lub inaczej przetwarzanych danych osobowych...</li>
                            </ul>

                            <h1>III. ADMINISTRATOR DANYCH</h1>
                            <p>Administratorem danych jest "Fundacja jakas tam " z siedzibą w Białymstoku 12-134, ul. xxx 4/43...</p>
                            <p>Zależy nam na ochronie Twojej prywatności...</p>
                            <p>W przypadku jakichkolwiek pytań dotyczących przetwarzania Twoich danych osobowych lub chęci skorzystania z przysługujących Ci praw w zakresie ochrony danych osobowych, zachęcamy do kontaktu z nami.</p>
                            <p>
                                Podczas korzystania z naszej strony internetowej możemy zbierać różne rodzaje danych osobowych od użytkowników w różnych celach.
                                Poniżej przedstawiamy podstawowe kategorie danych osobowych, które możemy zbierać, oraz cele ich przetwarzania.
                            </p>
                            <p><b>1. Dane zbierane automatycznie</b></p>
                            <p>
                                Podczas odwiedzania naszej strony internetowej możemy automatycznie zbierać pewne informacje o Twoim urządzeniu, zachowaniach przeglądania i danych demograficznych, takie jak adres IP, rodzaj przeglądarki internetowej, strefa czasowa, odwiedzone strony i inne dane analityczne.
                                Te informacje są zbierane za pomocą plików cookie, pikseli śledzenia i podobnych technologii.
                            </p>
                            <p><b>2. Dane kontaktowe</b></p>
                            <p>
                                Gdy skontaktujesz się z nami za pośrednictwem formularza kontaktowego na naszej stronie internetowej, możemy poprosić Cię o podanie swojego imienia, adresu e-mail i innych danych kontaktowych.
                                Te dane są zbierane wyłącznie w celu udzielenia odpowiedzi na Twoje zapytanie i utrzymania kontaktu z Tobą.
                            </p>
                            <p><b>3. Cele przetwarzania danych osobowych</b></p>
                            <p>
                                Gromadzone przez nas dane osobowe są przetwarzane w celu zapewnienia funkcjonalności naszej strony internetowej, analizy zachowań użytkowników, dostosowania treści i reklam do indywidualnych preferencji oraz udzielenia odpowiedzi na zapytania użytkowników.
                            </p>

                            <h1>IV. CEL PRZETWARZANIA DANYCH</h1>
                            <p>Dane osobowe zbierane przez administratora danych są przetwarzane w celu zapewnienia prawidłowego funkcjonowania naszej strony internetowej oraz dostarczenia użytkownikom najwyższej jakości usług...</p>

                            <p>Konkretnie, przetwarzamy Twoje dane w następujących celach:</p>


                            <ul>
                                <li><strong>Komunikacja</strong> - Twoje dane mogą być używane do komunikacji z Tobą w sprawach związanych z naszymi usługami lub odpowiedzi na Twoje zapytania, jeśli wyraziłeś na to zgodę.</li>
                                <li><strong>Realizacja usług</strong> - jeśli skorzystasz z naszych usług, Twoje dane będą przetwarzane w celu wykonania usług np. realizacji wyceny.</li>
                                <li><strong>Zapewnienie bezpieczeństwa</strong> - Twoje dane mogą być przetwarzane w celu zapewnienia bezpieczeństwa naszej strony internetowej oraz ochrony przed działaniami niepożądanymi lub niezgodnymi z prawem.</li>
                                <li><strong>  Marketing - jeśli wyraziłeś zgodę, Twoje dane mogą być używane do celów marketingowych, w tym do wysyłki ofert promocyjnych czy informacji o nowościach.</strong>...</li>
                            </ul>




                            <h1>V. KATEGORIE PRZETWARZANYCH DANYCH</h1>
                            <p>W związku z korzystaniem z naszej strony internetowej oraz oferowanych przez nas usług możemy zbierać i przetwarzać następujące kategorie danych osobowych:</p>
                            <p>
                                Nasza strona internetowa może korzystać z plików cookie i podobnych technologii śledzenia w celu zapewnienia funkcjonalności strony, analizy zachowań użytkowników, dostosowania treści i reklam oraz zapamiętania preferencji użytkowników.
                                Możesz zarządzać preferencjami dotyczącymi plików cookie za pomocą ustawień przeglądarki internetowej.
                            </p>
                            <ul>
                                <li><strong>Dane identyfikacyjne</strong> - takie jak imię, nazwisko, numer telefonu, adres e-mail czy średnie miesięczne zużycie prądu.</li>
                                <li><strong>Dane komunikacyjne</strong> - informacje, które dostarczasz nam w trakcie komunikacji, np. podczas kontaktu z naszym działem obsługi klienta.</li>
                                <li><strong>Dane techniczne</strong> - informacje zbierane automatycznie podczas korzystania z naszej strony, takie jak adres IP, typ przeglądarki, czas dostępu, strony odwiedzane oraz inne dane związane z działaniami użytkownika na stronie.</li>
                                <li><strong>Dane związane z preferencjami</strong> - informacje dotyczące Twoich preferencji, zainteresowań oraz innych danych, które pomagają nam dostosować ofertę do Twoich potrzeb.</li>
                                <li><strong>Dane marketingowe</strong> - informacje dotyczące Twojej reakcji na nasze kampanie marketingowe, takie jak reakcje na e-maile, kliknięcia w linki promocyjne oraz inne dane związane z Twoim zaangażowaniem w działania marketingowe.</li>
                            </ul>


                            <h1>VI. PODSTAWY PRAWNE PRZETWARZANIA</h1>
                            <p>Przetwarzanie danych osobowych odbywa się zawsze na określonej podstawie prawnej. Poniżej przedstawiamy główne podstawy prawne, na których opieramy się przetwarzając Twoje dane osobowe:</p>
                            <ul>
                                <li><strong>Zgoda</strong> - w niektórych przypadkach przetwarzanie Twoich danych osobowych odbywa się na podstawie wyrażonej przez Ciebie zgody. Zgoda taka jest dobrowolna i możesz ją w każdym momencie wycofać. Przykłady sytuacji, w których przetwarzamy dane na podstawie zgody, to np. zapisanie się na newsletter czy zgoda na przetwarzanie danych w celach komunikacji w odpowiedzi na formularz kontaktowy.</li>
                                <li><strong>Umowa</strong> - jeśli zawierasz z nami umowę (np. zakup produktu lub usługi), przetwarzanie Twoich danych jest niezbędne do jej wykonania. Dotyczy to m.in. danych niezbędnych do realizacji zamówienia, wystawienia faktury czy kontaktu w sprawach związanych z umową.</li>
                                <li><strong>Przepisy prawa</strong> - w niektórych sytuacjach jesteśmy zobowiązani do przetwarzania Twoich danych na podstawie obowiązujących przepisów prawa, np. w celu przechowywania dokumentów księgowych.</li>
                                <li><strong>Legitymacja interesu</strong> - w niektórych sytuacjach przetwarzanie danych odbywa się na podstawie naszego prawnie uzasadnionego interesu, którym może być np. analiza i ulepszanie naszych usług, zapewnienie bezpieczeństwa naszej strony internetowej czy prowadzenie statystyk.</li>
                                <li><strong>Zgoda organu publicznego</strong> - w pewnych okolicznościach możemy przetwarzać Twoje dane na podstawie zgody lub polecenia organu publicznego.</li>
                                <li><strong>Ochrona życia i zdrowia</strong> - w sytuacjach wyjątkowych możemy przetwarzać Twoje dane w celu ochrony Twojego życia i zdrowia.</li>
                            </ul>

                            <h1>VII. ODBIORCY DANYCH</h1>
                            <p>W związku z realizacją naszej działalności oraz świadczeniem usług przez naszą stronę internetową, Twoje dane osobowe mogą być udostępniane lub przekazywane następującym kategoriom odbiorców:</p>
                            <ul>
                                <li><strong>Dostawcy usług IT</strong> - firmy i podmioty świadczące na naszą rzecz usługi technologiczne, takie jak hosting, obsługa i utrzymanie naszej strony internetowej, czy systemy do zarządzania bazami danych.</li>
                                <li><strong>Partnerzy biznesowi</strong> - podmioty, z którymi współpracujemy w zakresie oferowania produktów, usług czy realizacji konkretnych projektów.</li>
                                <li><strong>Agencje marketingowe i reklamowe</strong> - podmioty, które pomagają nam w promocji naszych usług, prowadzeniu kampanii reklamowych czy analizie efektywności działań marketingowych.</li>
                                <li><strong>Dostawcy usług księgowych i audytorskich</strong> - firmy świadczące na naszą rzecz usługi z zakresu księgowości, audytu czy doradztwa podatkowego.</li>
                                <li><strong>Organy publiczne</strong> - w sytuacjach, gdy jesteśmy zobowiązani do udostępnienia danych na mocy obowiązujących przepisów prawa, Twoje dane mogą być przekazywane organom państwowym, takim jak urzędy skarbowe czy organy ścigania.</li>
                            </ul>
                            <p>Po upływie wskazanych okresów przechowywania, Twoje dane osobowe są trwale usuwane lub anonimizowane, co oznacza, że nie można już na ich podstawie zidentyfikować konkretnej osoby.</p>


                            <h1>VIII. OKRES PRZECHOWYWANIA DANYCH</h1>
                            <p>Dane osobowe użytkowników naszej strony internetowej są przechowywane przez okres niezbędny do realizacji celów, w których zostały zebrane:</p>
                            <ul>
                                <li><strong>Dane komunikacyjne</strong> - przechowywane są przez czas niezbędny do obsługi Twojego zapytania lub realizacji Twojego zgłoszenia.</li>
                                <li><strong>Dane związane z działaniami marketingowymi</strong> - przechowywane są do momentu wycofania przez Ciebie zgody na przetwarzanie danych w celach marketingowych lub wniesienia sprzeciwu wobec takiego przetwarzania.</li>
                                <li><strong>Dane techniczne</strong> - przechowywane są przez okres nie dłuższy niż 365 dni od Twojej ostatniej wizyty na naszej stronie.</li>
                                <li><strong>Dane związane z realizacją umów</strong> - przechowywane są przez okres trwania umowy oraz przez okres przedawnienia roszczeń wynikających z umowy.</li>
                            </ul>



                            <h1>IX. PRAWA OSOBY, KTÓREJ DANE DOTYCZĄ</h1>
                            <p>Każda osoba, której dane osobowe przetwarzamy, ma określone prawa związane z ochroną swoich danych. Poniżej przedstawiamy główne prawa, które przysługują Ci w związku z przetwarzaniem Twoich danych osobowych przez nas:</p>
                            <ul>
                                <li><strong>Prawo dostępu do danych</strong> - masz prawo uzyskać od nas potwierdzenie, czy przetwarzane są Twoje dane osobowe, a jeśli tak, masz prawo dostępu do tych danych oraz uzyskania dodatkowych informacji o tym przetwarzaniu.</li>
                                <li><strong>Prawo do sprostowania</strong> - jeśli Twoje dane, które przetwarzamy, są nieprawidłowe lub niekompletne, masz prawo żądać ich sprostowania lub uzupełnienia.</li>
                                <li><strong>Prawo do usunięcia danych ("prawo do bycia zapomnianym")</strong> - w określonych sytuacjach masz prawo żądać usunięcia Twoich danych osobowych, np. gdy dane te nie są już niezbędne do celów, w których zostały zebrane.</li>
                                <li><strong>Prawo do ograniczenia przetwarzania</strong> - w pewnych okolicznościach masz prawo żądać ograniczenia przetwarzania Twoich danych osobowych, np. gdy kwestionujesz prawidłowość tych danych.</li>
                                <li><strong>Prawo do przenoszenia danych</strong> - masz prawo otrzymać swoje dane osobowe, które nam dostarczyłeś, w strukturyzowanym, powszechnie używanym formacie nadającym się do odczytu maszynowego, oraz masz prawo przesłać te dane innemu administratorowi.</li>
                                <li><strong>Prawo do wniesienia skargi</strong> - jeśli uznasz, że przetwarzanie Twoich danych osobowych narusza przepisy RODO, masz prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych lub innego właściwego organu nadzorczego.</li>
                                <li><strong>Prawo do cofnięcia zgody</strong> - jeśli przetwarzanie Twoich danych odbywa się na podstawie Twojej zgody, masz prawo ją w każdym momencie cofnąć. Cofnięcie zgody nie wpływa na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej cofnięciem.</li>
                            </ul>
                            <p>Aby skorzystać z powyższych praw, skontaktuj się z nami. Zobowiązujemy się odpowiedzieć na Twoje żądanie bez zbędnej zwłoki, nie później jednak niż w ciągu tygodniu od otrzymania żądania.</p>



                            <h1>X. BEZPIECZEŃSTWO DANYCH</h1>
                            <p>Dbamy o bezpieczeństwo Twoich danych osobowych i stosujemy odpowiednie środki techniczne i organizacyjne, aby je chronić przed utratą, nieuprawnionym dostępem, zmianą czy rozpowszechnianiem. Poniżej przedstawiamy główne środki, które wdrożyliśmy, aby zapewnić ochronę Twoich danych:</p>
                            <ul>
                                <li><strong>Szyfrowanie</strong> - wszystkie dane przesyłane między Twoim urządzeniem a naszą stroną są szyfrowane za pomocą technologii SSL/TLS, co zapewnia ochronę przed przechwyceniem informacji przez osoby trzecie.</li>
                                <li><strong>Zabezpieczenia fizyczne</strong> - nasze serwery oraz systemy informatyczne są umieszczone w zabezpieczonych lokalizacjach, do których dostęp mają jedynie upoważnione osoby.</li>
                                <li><strong>Kontrola dostępu</strong> - dostęp do danych osobowych mają jedynie te osoby w naszej organizacji, które potrzebują tych danych do realizacji swoich obowiązków. Wszyscy pracownicy są szkoleni w zakresie ochrony danych osobowych i zobowiązani do zachowania tajemnicy.</li>
                                <li><strong>Regularne kopie zapasowe</strong> - regularnie tworzymy kopie zapasowe danych, co pozwala na ich odzyskanie w przypadku awarii czy innych nieprzewidzianych zdarzeń.</li>
                                <li><strong>Aktualizacje i patche</strong> - regularnie aktualizujemy nasze systemy i aplikacje, aby zapewnić ich bezpieczeństwo i ochronę przed znanymi zagrożeniami.</li>
                                <li><strong>Audyt i monitoring</strong> - regularnie przeprowadzamy audyty bezpieczeństwa oraz monitorujemy nasze systemy w poszukiwaniu potencjalnych zagrożeń.</li>
                                <li><strong>Prawo do cofnięcia zgody</strong> - jeśli przetwarzanie Twoich danych odbywa się na podstawie Twojej zgody, masz prawo ją w każdym momencie cofnąć. Cofnięcie zgody nie wpływa na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej cofnięciem. Aby skorzystać z powyższych praw, skontaktuj się z nami. Zobowiązujemy się odpowiedzieć na Twoje żądanie bez zbędnej zwłoki, nie później jednak niż w ciągu tygodniu od otrzymania żądania.</li>
                            </ul>

                            <h1>XI. BEZPIECZEŃSTWO DANYCH</h1>
                            <p>Dbamy o bezpieczeństwo Twoich danych osobowych i stosujemy odpowiednie środki techniczne i organizacyjne, aby je chronić przed utratą, nieuprawnionym dostępem, zmianą czy rozpowszechnianiem. Poniżej przedstawiamy główne środki, które wdrożyliśmy, aby zapewnić ochronę Twoich danych:</p>
                            <ul>
                                <li><strong>Szyfrowanie</strong> - wszystkie dane przesyłane między Twoim urządzeniem a naszą stroną są szyfrowane za pomocą technologii SSL/TLS, co zapewnia ochronę przed przechwyceniem informacji przez osoby trzecie.</li>
                                <li><strong>Zabezpieczenia fizyczne</strong> - nasze serwery oraz systemy informatyczne są umieszczone w zabezpieczonych lokalizacjach, do których dostęp mają jedynie upoważnione osoby.</li>
                                <li><strong>Kontrola dostępu</strong> - dostęp do danych osobowych mają jedynie te osoby w naszej organizacji, które potrzebują tych danych do realizacji swoich obowiązków. Wszyscy pracownicy są szkoleni w zakresie ochrony danych osobowych i zobowiązani do zachowania tajemnicy.</li>
                                <li><strong>Regularne kopie zapasowe</strong> - regularnie tworzymy kopie zapasowe danych, co pozwala na ich odzyskanie w przypadku awarii czy innych nieprzewidzianych zdarzeń.</li>
                                <li><strong>Aktualizacje i patche</strong> - regularnie aktualizujemy nasze systemy i aplikacje, aby zapewnić ich bezpieczeństwo i ochronę przed znanymi zagrożeniami.</li>
                                <li><strong>Audyt i monitoring</strong> - regularnie przeprowadzamy audyty bezpieczeństwa oraz monitorujemy nasze systemy w poszukiwaniu potencjalnych zagrożeń.</li>
                                <li><strong>Procedury reagowania na incydenty</strong> - w przypadku wykrycia naruszenia bezpieczeństwa danych osobowych, mamy wdrożone procedury pozwalające na szybkie reagowanie i minimalizowanie potencjalnych szkód.</li>
                            </ul>


                            <h1>XII. KONTAKT W SPRAWIE DANYCH OSOBOWYCH</h1>
                            <p>Jeśli masz pytania, wątpliwości lub chciałbyś skorzystać z przysługujących Ci praw w zakresie ochrony danych osobowych, zachęcamy do bezpośredniego kontaktu z nami. Jesteśmy otwarci na wszelkie sugestie i gotowi udzielić odpowiedzi na Twoje pytania dotyczące przetwarzania Twoich danych osobowych.</p>
                            <h2>Administrator danych:</h2>
                            <ul>
                                <li>Fundacja Centrum Rozwoju Przedsiębiorczości SmartBiz</li>
                                <li>ul. Wyględowska 4/43, Warszawa 02-654</li>
                                <li>NIP: 5214026198</li>
                                <li>REGON: 525734879</li>
                                <li>KRS: 0001044665</li>
                            </ul>
                            <h2>Kontakt do administratora danych:</h2>
                            <ul>
                                <li>E-mail: <a href="mailto:biuro@rework.biz.pl">biuro@rework.biz.pl</a></li>
                                <li>Telefon: 798 743 067</li>
                            </ul>
                            <h2>Kontakt do właściciela strony:</h2>
                            <ul>
                                <li>E-mail: <a href="mailto:biuro@digidraft.pl">biuro@digidraft.pl</a></li>
                                <li>Telefon: 514 316 481</li>
                            </ul>
                            <p>Zachęcamy do kontaktu w pierwszej kolejności drogą elektroniczną. Jeśli jednak wolisz skontaktować się z nami osobiście lub listownie, zapraszamy do naszej siedziby pod wskazanym wyżej adresem.</p>

                            <h1>XIII. ZMIANY W POLITYCE PRYWATNOŚCI</h1>
                            <p>Dbamy o to, aby nasza polityka prywatności była zawsze aktualna i odzwierciedlała rzeczywiste praktyki związane z przetwarzaniem danych osobowych. W związku z tym może się zdarzyć, że będziemy musieli wprowadzić do niej zmiany. W przypadku wprowadzenia istotnych zmian w polityce prywatności, poinformujemy o tym naszych użytkowników poprzez:</p>
                            <ul>
                                <li><strong>Post na Facebooku</strong> - opublikujemy oddzielny post na naszej oficjalnej stronie na Facebooku dostępnej pod adresem <a href="https://www.facebook.com/sungrantbialystok">https://www.facebook.com/sungrantbialystok</a> - informując o wprowadzonych zmianach w polityce prywatności.</li>
                                <li><strong>Aktualizacja daty</strong> - na górze polityki prywatności zawsze znajduje się data ostatniej aktualizacji, dzięki czemu łatwo można zauważyć, kiedy dokonano ostatnich zmian.</li>
                            </ul>

                            <h1>XIV. PLIKI COOKIES I INNE TECHNOLOGIE ŚLEDZENIA:</h1>
                            <p>Nasza strona internetowa korzysta z plików cookies oraz innych technologii śledzenia, aby poprawić jakość świadczonych przez nas usług, dostosować treści do preferencji użytkowników oraz monitorować ruch na stronie.</p>
                            <p><strong>Czym są pliki cookies?</strong> - Pliki cookies to małe pliki tekstowe przechowywane na Twoim urządzeniu (komputerze, smartfonie, tablecie), które pozwalają na rozpoznanie Twojego urządzenia i dostosowanie strony internetowej do Twoich preferencji.</p>
                            <p><strong>Rodzaje plików cookies:</strong></p>
                            <ul>
                                <li><strong>Sesji</strong> - są tymczasowe i pozostają na Twoim urządzeniu tylko przez czas korzystania z naszej strony.</li>
                                <li><strong>Stałe</strong> - pozostają na Twoim urządzeniu przez określony czas lub do momentu ich ręcznego usunięcia.</li>
                            </ul>
                            <p><strong>Inne technologie śledzenia</strong> - oprócz plików cookies korzystamy również z innych technologii śledzenia, takich jak piksele, tagi i skrypty, aby analizować trendy, administrować stroną, śledzić ruch użytkowników na stronie oraz zbierać informacje demograficzne o naszej bazie użytkowników jako całości.</p>
                            <p><strong>Jak zarządzać plikami cookies?</strong> - Większość przeglądarek internetowych domyślnie akceptuje pliki cookies, ale możesz zmienić ustawienia swojej przeglądarki, aby je odrzucać lub informować Cię o ich wysyłaniu. Pamiętaj jednak, że wyłączenie plików cookies może wpłynąć na funkcjonalność naszej strony i uniemożliwić korzystanie z niektórych jej funkcji.</p>
                            <p><strong>Analityka i reklama</strong> - korzystamy z narzędzi analitycznych oraz reklamowych (np. Google Analytics, Facebook Pixel), które używają plików cookies i innych technologii śledzenia do zbierania informacji o Twoim zachowaniu na stronie, Twojej lokalizacji oraz urządzeniu, z którego korzystasz. Informacje te są przez nas analizowane w celu poprawy jakości usług oraz skuteczności kampanii reklamowych.</p>


                            <h1>XV. PODSUMOWANIE</h1>
                            <p>Dbamy o Twoją prywatność i zobowiązujemy się do jej ochrony. Nasza polityka prywatności ma na celu zapewnienie Ci pełnej informacji o tym, jak przetwarzamy Twoje dane osobowe, jakie prawa Ci przysługują oraz jak możesz się z nami skontaktować w sprawie ochrony danych osobowych.</p>
                            <p>Zachęcamy do regularnego odwiedzania naszej strony i sprawdzania aktualności polityki prywatności, aby być na bieżąco z ewentualnymi zmianami. Jeśli masz jakiekolwiek pytania lub wątpliwości związane z przetwarzaniem Twoich danych osobowych, nie wahaj się z nami skontaktować. Dziękujemy za zaufanie i korzystanie z naszej strony.</p>


                        </div>
                    </div>
                </section>
            </div>

            <div id="contactSection">
                <Footer />
            </div>
        </div>
    );
}

export default Legal;
