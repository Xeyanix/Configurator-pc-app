import React from 'react';

function LandingPage() {
    const redirectToCV = () => {
        // Update the URL to the CV page
        window.location.href = "/cv";
    }

    const redirectToConfigurator = () => {
        // Update the URL to the configurator project
        window.location.href = "/configurator";
    }

    return (
        <div>
            <header style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '2rem' }}>
                <h1>Twoje Portfolio</h1>
            </header>

            <section style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '80vh' }}>
                <div className="option cv-option" style={{ textAlign: 'center', padding: '2rem', width: '45%', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s ease-in-out', cursor: 'pointer' }} onClick={redirectToCV}>
                    <h2>Moje CV</h2>
                    <p>Znajdź wszystkie informacje o mnie w moim CV.</p>
                </div>

                <div className="option configurator-option" style={{ textAlign: 'center', padding: '2rem', width: '45%', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s ease-in-out', cursor: 'pointer' }} onClick={redirectToConfigurator}>
                    <h2>Projekt Konfiguratora</h2>
                    <p>Przejrzyj mój projekt konfiguratora i zobacz, co mogę dla Ciebie zrobić.</p>
                </div>
            </section>

            <footer style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '1rem', position: 'fixed', bottom: '0', width: '100%' }}>
                <p>&copy; 2024 Twoje Portfolio. Wszelkie prawa zastrzeżone.</p>
            </footer>
        </div>
    );
}

export default LandingPage;
