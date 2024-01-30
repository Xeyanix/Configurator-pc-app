import React from 'react';
import Button from "@mui/material/Button";
import styles from "../../common/styles/ShowPage.module.scss";
import PDFViewer from '../PDFViewer/PDFViewer';
import { Link } from 'react-router-dom';


function ShowPage() {
    return (
        <div>
            <div className={styles.container}>
                <Link to="/">
                    <Button variant="contained">
                        Welcome Page
                    </Button>
                </Link>
                <PDFViewer />
            </div>
        </div>
    );
}

export default ShowPage;
