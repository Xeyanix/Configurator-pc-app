import React from "react";
import styles from '../../common/styles/Headers.module.scss';

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
      () => this.filterProdukty() //filtrowanie podczas wpisywania
    );
  };

  handleSearchKeyUp = (event) => {
    if (event.key === 'Enter') { //obsługa wcisniecia enter
      this.filterProdukty();
    }
  };


  filterProdukty = () => {
    const { Motherboards } = this.props;
    const { searchPhrase, searchChipset, searchSocket } = this.state;

    // odfiltrowanie zgodnych wyników
    let filteredProducts = Motherboards.filter((Motherboards) =>
      Motherboards.name.toLowerCase().includes(searchPhrase.toLowerCase())
    );


    if (searchChipset) {
      filteredProducts = filteredProducts.filter((Motherboards) =>
        Motherboards.name.toLowerCase().includes(searchChipset.toLowerCase()) ||
        Motherboards.chipset.toLowerCase() === searchChipset.toLowerCase()
      );
    }

    if (searchSocket) {
      filteredProducts = filteredProducts.filter((Motherboards) =>
        Motherboards.socket.toLowerCase() === searchSocket.toLowerCase()
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

  getUniqueCategory = () => {
    const { Motherboards } = this.props;
    const CategoryList = Motherboards.map((Motherboards) => Motherboards.socket);
    const motherboardCategory = [...new Set(CategoryList)];
    return motherboardCategory;
  };


  render() {
    const uniqueCategory = this.getUniqueCategory();
    const { searchPhrase, searchChipset, searchSocket } = this.state;


    return (
      <div className={styles.ProductsFiltersWrapper}>
        Płyta Główna
        <input
          value={searchPhrase}
          onChange={this.handleSearchPhraseChange}
        onKeyUp={this.handleSearchKeyUp}  //obsługa wcisniecia enter
        ></input>
        Chipset
        <input
          value={searchChipset}
          onChange={this.handleProductType}
        ></input>
        <select
          value={searchSocket}
          onChange={this.handleSelectCategory} >

          <option key={'all'} value={''}>
            All Categories
          </option>{uniqueCategory.map((socket) => (
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
