import React from 'react';

import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';

function ShowPage() {

    return (
        <div>
            NIC TU NIE MA
            <Link to="/">
                <Button variant="contained">
                   Welcome Page
                </Button>
            </Link>
        </div>
    );
}

export default ShowPage;
