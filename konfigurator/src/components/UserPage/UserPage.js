import React from "react";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';

function UserPage() {

  return (
    <div>
      Zostałes zalogowany
      <Link to="/configuratorPc">
        <Button variant="contained" color="success">
          Wyloguj
        </Button>
      </Link>
    </div>
  );
}

export default UserPage;
