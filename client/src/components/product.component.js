import React, { Component } from "react";
import ProductDataService from "../services/product.service";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDescription2 = this.onChangeDescription2.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.getProduct = this.getProduct.bind(this);
    // this.updatePublished = this.updatePublished.bind(this);
    this.updateProduct = this.updateProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);

    this.state = {
      currentProduct: {
        id: null,
        p_name: "",
        p_price: null,
        p_size: "",
        p_desc: "",
        p_desc2: "",
        p_water: "",
        p_light: "",
        p_pet: false,
        imagename:""
        // published: false
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getProduct(this.props.match.params.id);
  }

  onChangeName(e) {
    const name = e.target.value;

    this.setState(function(prevState) {
      return {
        currentProduct: {
          ...prevState.currentProduct,
          p_name: name
        }
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;
    
    this.setState(prevState => ({
      currentProduct: {
        ...prevState.currentProduct,
        p_desc: description
      }
    }));
  }

  onChangeDescription2(e) {
    const description2 = e.target.value;
    
    this.setState(prevState => ({
      currentProduct: {
        ...prevState.currentProduct,
        p_desc2: description2
      }
    }));
  }

  onChangePrice(e) {
    const price = e.target.value;
    
    this.setState(prevState => ({
      currentProduct: {
        ...prevState.currentProduct,
        p_price: price
      }
    }));
  }

  getProduct(id) {
    ProductDataService.get(id)
      .then(response => {
        this.setState({
          currentProduct: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  // updatePublished(status) {
  //   var data = {
  //     id: this.state.currentProduct.id,
  //     title: this.state.currentProduct.title,
  //     description: this.state.currentProduct.description,
  //     published: status
  //   };
    updatePrice(price) {
      var data = {
        id: this.state.currentProduct.id,
        p_name: this.state.currentProduct.p_name,
        p_price: price,
        p_desc: this.state.currentProduct.p_desc,
        p_desc2: this.state.currentProduct.p_desc2,
        p_water: this.state.currentProduct.p_water,
        p_light: this.state.currentProduct.p_light,
        p_pet: this.state.currentProduct.p_pet,
        imagename: this.state.currentProduct.imagename
      };

    ProductDataService.update(this.state.currentProduct.id, data)
      .then(response => {
        this.setState(prevState => ({
          currentProduct: {
            ...prevState.currentProduct,
            published: price
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateProduct() {
    ProductDataService.update(
      this.state.currentProduct.id,
      this.state.currentProduct
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The Product was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteProduct() {    
    ProductDataService.delete(this.state.currentProduct.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/products')
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentProduct } = this.state;

    return (
      <div>
        {currentProduct ? (
          <div className="edit-form">
            <h4>Product</h4>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentProduct.p_name}
                  onChange={this.onChangeName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="price">Price</label>
                <input
                  type="number"
                  step="5"
                  className="form-control"
                  id="price"
                  value={currentProduct.p_price}
                  onChange={this.onChangePrice}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentProduct.p_desc}
                  onChange={this.onChangeDescription}
                />
              </div>          
              <div className="form-group">
                <label>
                  <strong>Pet & Child Friendliness: </strong>
                </label>
                {currentProduct.p_pet ? " Friendly" : " Not Friendly"}
              </div>
            </form>

            {/* {currentProduct.published ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(false)}
              >
                UnPublish
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(true)}
              >
                Publish
              </button>
            )} */}

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteProduct}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateProduct}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Product...</p>
          </div>
        )}
      </div>
    );
  }
}
