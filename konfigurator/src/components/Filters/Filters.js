// import React from "react";
// import styles from '../../common/styles/Columns.module.scss';

// class Filters extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       searchName: '',
//       searchChipset: '',
//       searchSocket: '',
//     };
//   }

//   handleSearchPhraseChange = (event) => {
//     this.setState({ searchName: event.target.value }
//     );
//   };

//   handleProductType = (event) => {
//     this.setState({ searchChipset: event.target.value },
//       () => this.filterProdukty()
//     );
//   };

//   handleSelectCategory = (event) => {
//     this.setState({ searchSocket: event.target.value }
//     );
//   };

//   filterProdukty = () => {
//     const { Motherboards } = this.props;
//     const { searchName, searchChipset, searchSocket } = this.state;

//     // odfiltrowanie zgodnych wyników
//     let filteredProducts = Motherboards.filter((Motherboards) =>
//       Motherboards.name.includes(searchName)
//     );

//     if (searchSocket) {
//       filteredProducts = filteredProducts.filter(
//         (Motherboards) => Motherboards.socket === searchSocket
//       );
//     }

//     if (searchChipset) {
//       filteredProducts = filteredProducts.filter(
//         (Motherboards) => Motherboards.chipset === searchChipset
//       );

//     }
//     console.log('sprawdzam aktualne filtry', filteredProducts);
//     // przekazanie wyfiltrowanego jedzenia do komponentu rodzica (App)

//     this.props.sendfilteredProductsToAppComponent(filteredProducts);
//   };

//   handleResetFilters = () => {
//     this.setState(
//       {
//         searchName: '',
//         searchChipset: '',
//         searchSocket: '',
//       },
//       () => {
//         this.filterProdukty();
//       }
//     );
//   };

//   getUniqueFoodCategory = () => {
//     const { Motherboards } = this.props;
//     const foodCategoryList = Motherboards.map((Motherboards) => Motherboards.socket);
//     const foodCategory = [...new Set(foodCategoryList)];
//     return foodCategory;
//   };


//   render() {
//     const uniqueFoodCategory = this.getUniqueFoodCategory();
//     const { searchName, searchChipset, searchSocket } = this.state;


//     return (
//       <div className={styles.ProductsFiltersWrapper}>
//         <p> Tylko produkty </p>
//         <input
//           value={searchName}
//           onChange={this.handleSearchPhraseChange}
//         ></input>

//         <p> Produkt Spożywczy </p>

//         <input
//           type="checkbox"
//           onChange={this.handleProductType}
//           value={searchChipset}
//         ></input>

//         <select
//           value={searchSocket}
//           onChange={this.handleSelectCategory}>
//           <option key={'all'} value={''}>
//             All Categories
//           </option>{uniqueFoodCategory.map((socket) => (
//             <option key={socket} value={socket}>
//               {socket}
//             </option>
//           ))}
//         </select>

//         <button onClick={this.filterProdukty}>Wyszukaj</button>
//         <button onClick={this.handleResetFilters}>Zresetuj filtry</button>
//       </div>
//     );
//   }
// }



// export default Filters;

import React from "react";
import styles from '../../common/styles/Columns.module.scss';


function Filters() {
  return (
    <div className={styles.Wrappper}>
      <p> Filters </p>
    </div>
  );
}

export default Filters;
