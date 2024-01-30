import React from 'react';
import styles from '../../common/styles/Contact.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Contact() {
    const linkDoLinkedIn = "https://www.linkedin.com/in/jan-goralewski/";
    const linkDoInstagram = "https://www.instagram.com/bboyjohnny/";
    const linkDoFacebook = "https://www.facebook.com/jan.goralewski2";

    return (
        <div id="contactSection" className={styles.contactSection}>
            <div >
                <h2
                    className="wp-block-heading has-background"
                    style={{
                        backgroundColor: '#b0786a',
                        marginBottom: 'var(--wp--preset--spacing--40)',
                        textTransform: 'uppercase',
                    }}
                >
                    Zapraszam do kontaktu
                </h2>
                <p
                    style={{
                        marginTop: 'var(--wp--preset--spacing--30)',
                        marginBottom: 'var(--wp--preset--spacing--20)',
                        fontSize: 'clamp(0.875rem, 0.875rem + ((1vw - 0.2rem) * 0.531), 1.3rem)',
                        textTransform: 'uppercase',
                    }}
                >
                    <strong>Social media</strong>
                </p>

                <ul class="wp-block-social-links has-visible-labels has-icon-color is-style-logos-only is-horizontal is-layout-flex wp-container-core-social-links-layout-1 wp-block-social-links-is-layout-flex">
                    <li
                        class="wp-social-link wp-social-link-instagram has-contrast-color wp-block-social-link"
                        data-darkreader-inline-color="">
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            // href="https://www.instagram.com/bboyjohnny/"
                            href="https://www.linkedin.com/in/jan-goralewski/"
                            class="wp-block-social-link-anchor">

                            <a href={linkDoLinkedIn} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                            </a> &nbsp;

                            <span class="wp-block-social-link-label">Janek Góralewski</span>

                        </a>
                        <br />
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://www.linkedin.com/in/jan-goralewski/"
                            class="wp-block-social-link-anchor">

                            <a href={linkDoInstagram} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </a> &nbsp;

                            <span class="wp-block-social-link-label">Bboy Johnny</span>

                        </a>
                        <br />
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://www.facebook.com/jan.goralewski2"
                            class="wp-block-social-link-anchor">

                            <a href={linkDoFacebook} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a> &nbsp;

                            <span class="wp-block-social-link-label">Janek Góralewski</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div >
    );
}

export default Contact;









