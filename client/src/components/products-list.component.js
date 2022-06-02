import React, { Component } from "react";
import ProductDataService from "../services/product.service";
import { Link } from "react-router-dom";

export default class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchName = this.onChangeSearchName.bind(this);
    this.onChangeFilterPrice = this.onChangeFilterPrice.bind(this);
    this.onChangeFilterFriendliness = this.onChangeFilterFriendliness.bind(this);
    this.retrieveProducts = this.retrieveProducts.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveProduct = this.setActiveProduct.bind(this);
    this.removeAllProducts = this.removeAllProducts.bind(this);
    this.searchName = this.searchName.bind(this);
    this.filterPrice = this.filterPrice.bind(this);
    this.filterFriendliness = this.filterFriendliness.bind(this);

    this.state = {
      products: [],
      currentProduct: null,
      currentIndex: -1,
      searchName: "",
      filterPrice: null,
      filterFriendliness: null
    };
  }

  componentDidMount() {
    this.retrieveProducts();
  }

  onChangeSearchName(e) {
    const searchName = e.target.value;

    this.setState({
      searchName: searchName
    });
  }

  onChangeFilterPrice(e){
    const filterPrice = e.target.value;

    this.setState({
      filterPrice: filterPrice
    });
  }

  onChangeFilterFriendliness(e){
    const filterFriendliness = e.target.value;
    this.setState({
      filterFriendliness: filterFriendliness
    });
    // console.log(filterFriendliness);
  }

  retrieveProducts() {
    ProductDataService.getAll()
      .then(response => {
        this.setState({
          products: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveProducts();
    this.setState({
      currentProduct: null,
      currentIndex: -1
    });
  }

  setActiveProduct(product, index) {
    this.setState({
      currentProduct: product,
      currentIndex: index
    });
  }

  removeAllProducts() {
    ProductDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchName() {
    this.setState({
      currentProduct: null,
      currentIndex: -1
    });

    ProductDataService.findByName(this.state.searchName)
      .then(response => {
        this.setState({
          products: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  filterPrice() {
    this.setState({
      currentProduct: null,
      currentIndex: -1
    });

    ProductDataService.filterByPrice(this.state.filterPrice)
      .then(response => {
        this.setState({
          products: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  filterFriendliness() {
    this.setState({
      currentProduct: null,
      currentIndex: -1
    });

    ProductDataService.filterByFriendly(this.state.filterFriendliness)
      .then(response => {
        this.setState({
          products: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { filterPrice, filterFriendliness, searchName, products, currentProduct, currentIndex } = this.state;

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search by Name"
              value={searchName}
              onChange={this.onChangeSearchName}
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={this.searchName}
            >
              Search
            </button>        
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="input-group">
            <input 
              type="number"
              className="form-control"
              placeholder="Filter by price"
              value={filterPrice}
              onChange={this.onChangeFilterPrice}
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={this.filterPrice}
            >
              Apply Price Filter
            </button>        
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="input-group">
            <div className="radiogroup">
              <input 
                id="friendly"
                type="radio" 
                name="group1"
                value="friendly"
                onChange={this.onChangeFilterFriendliness}
              />
              <label for="friendly">Pet and Children Friendly</label>
              <input 
                id="notfriendly"
                type="radio" 
                name="group1"
                value="notfriendly"
                onChange={this.onChangeFilterFriendliness}
              />
              <label for="notfriendly">Not Pet and Children Friendly</label>
            </div>
            
            <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={this.filterFriendliness}>
            Apply Friendliness Filter
            </button> 
        </div>
      </div>
    </div>
      

      <div className="row">
        <div className="col">
          <h4>Plants List</h4>
        <ul className="list-group">
          {products &&
            products.map((product, index) => (
              <li
                className={
                  "list-group-item " +
                  (index === currentIndex ? "active" : "")
                }
                onClick={() => this.setActiveProduct(product, index)}
                key={index}
              >
                {product.p_name}
              </li>
            ))}
        </ul>

          <button
            className="btn btn-outline-secondary"
            onClick={this.removeAllProducts}
          >
            Remove All
          </button>
        
      </div>
      
      <div className="col-md-4">
        {currentProduct ? (
          <div>
            <h4>Products</h4>
            <div>
              <label>
                <strong>Id:</strong>
              </label>{" "}
              {currentProduct.id}
            </div>
            <div>
              <label>
                <strong>Name:</strong>
              </label>{" "}
              {currentProduct.p_name}
            </div>
            <div>
              <label>
                <strong>Biological Name:</strong>
              </label>{" "}
              {currentProduct.p_othername}
            </div>
            <div>
              <label>
                <strong>Price:</strong>
              </label>{" "}
              {currentProduct.p_price}
            </div>

            <div>
              <label>
                <strong>Size:</strong>
              </label>{" "}
              {currentProduct.p_size}
            </div>
            <div>
              <label>
                <strong>Description:</strong>
              </label>{" "}
              {currentProduct.p_desc}
            </div>
            <div>
              <label>
                <strong>Description2:</strong>
              </label>{" "}
              {currentProduct.p_desc2}
            </div>
            <div>
              <label>
                <strong>Water:</strong>
              </label>{" "}
              {currentProduct.p_water}
            </div>
            <div>
              <label>
                <strong>Light:</strong>
              </label>{" "}
              {currentProduct.p_light}
            </div>
            <div>
              <label>
                <strong>Friendliness:</strong>
              </label>{" "}
              {currentProduct.p_pet ? "Pet and Children Friendly" : "NOT Pet and Children Friendly"}
            </div>
            <div>
              <label>
                <strong>Image Name:</strong>
              </label>{" "}
              {currentProduct.imagename}
            </div>

            <Link
              to={"/products/" + currentProduct.id}
              className="badge badge-warning"
            >
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Plant...</p>
          </div>
        )}
      </div>
      </div>
    </div>
  );
  }
}

