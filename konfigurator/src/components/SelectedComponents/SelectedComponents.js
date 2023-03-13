import commonColumnsStyles from '../../common/styles/Columns.module.scss'
import { useEffect, useState } from "react";

function SelectedComponents(props) {


  
  
  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
    
        <ul>SelectedComponents</ul>
      </header>
    </div>
  );
}

export default SelectedComponents;