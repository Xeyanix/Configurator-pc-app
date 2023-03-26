import React from "react";
import styles from './Filters.module.scss';

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchPhrase: '',
      searchSocket: '',
      searchChipset: '',
    };
  }

  handleSearchPhraseChange = (event) => {
    this.setState({ searchPhrase: event.target.value }
    );
  };

  handleSelectCategory = (event) => {
    this.setState({ searchSocket: event.target.value }
    );
  };

  handleProductType = (event) => {
    this.setState({ searchChipset: event.target.value },
      () => this.filterProdukty()
    );
  };



  filterProdukty = () => {
    const { Motherboards } = this.props;
    const { searchPhrase, searchChipset, searchSocket } = this.state;

    // odfiltrowanie zgodnych wyników
    let filteredProducts = Motherboards.filter((Motherboards) =>
      Motherboards.name.includes(searchPhrase)
    );

    if (searchSocket) {
      filteredProducts = filteredProducts.filter(
        (Motherboards) => Motherboards.socket === searchSocket
      );
    }

    if (searchChipset) {
      filteredProducts = filteredProducts.filter((Motherboards) =>
        Motherboards.name.includes(searchChipset)
        // (Motherboards) => Motherboards.chipset === searchChipset
      );

    }
    console.log('sprawdzam aktualne filtry', filteredProducts);
    // przekazanie wyfiltrowanego jedzenia do komponentu rodzica (App)

    this.props.sendfilteredProductsToAppComponent(filteredProducts);
  };

  handleResetFilters = () => {
    this.setState(
      {
        searchPhrase: '',
        searchSocket: '',
        searchChipset: '',
      },
      () => {
        this.filterProdukty();
      }
    );
  };

  getUniqueFoodCategory = () => {
    const { Motherboards } = this.props;
    const foodCategoryList = Motherboards.map((Motherboards) => Motherboards.socket);
    const foodCategory = [...new Set(foodCategoryList)];
    return foodCategory;
  };


  render() {
    const uniqueFoodCategory = this.getUniqueFoodCategory();
    const { searchPhrase, searchChipset, searchSocket } = this.state;


    return (
      <div className={styles.ProductsFiltersWrapper}>
        Tylko produkty
        <input
          value={searchPhrase}
          onChange={this.handleSearchPhraseChange}
        ></input>
        Chipset
        <input
          value={searchChipset}
          onChange={this.handleProductType}
        ></input>
        <select
          value={searchSocket}
          onChange={this.handleSelectCategory}>

          <option key={'all'} value={''}>
            All Categories
          </option>{uniqueFoodCategory.map((socket) => (
            <option key={socket} value={socket}>
              {socket}
            </option>
          ))}
        </select>

        <button onClick={this.filterProdukty}>Wyszukaj</button>
        <button onClick={this.handleResetFilters}>Zresetuj filtry</button>

      </div>
    );
  }
}

export default Filters;
