import React, { useState } from 'react';
import Button from "@mui/material/Button";
import styles from "./Scroll.module.scss";

function Scroll(props) {
    const [setScrollPosition] = useState(0);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        setScrollPosition(0);
    };
    return (
        <div className={styles.scrollButton}>
            <Button onClick={scrollToTop} variant="contained" color="success">
                Scroll to Top
            </Button>
        </div>
    );
}

export default Scroll;
