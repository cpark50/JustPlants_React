import React, { Component } from "react";
import ProductDataService from "../services/product.service";

export default class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeWater = this.onChangeWater.bind(this);
    this.onChangeLight = this.onChangeLight.bind(this);
    this.onChangeFriendly = this.onChangeFriendly.bind(this);
    this.saveProduct = this.saveProduct.bind(this);
    this.newProduct = this.newProduct.bind(this);

    this.state = {
      id: null,
      name: "",
      price: 20,
      description: "", 
      water: "",
      light: "",
      pet: false,
      submitted: false
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangePrice(e) {
    this.setState({
      price: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeWater(e) {
    this.setState({
      water: e.target.value
    });
  }

  onChangeLight(e) {
    this.setState({
      light: e.target.value
    });
  }

  onChangeFriendly(e) {
    this.setState({
      pet: e.target.value
    });
  }

  saveProduct() {
    var data = {
      title: this.state.title,
      description: this.state.description
    };

    ProductDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          published: response.data.published,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newProduct() {
    this.setState({
      id: null,
      name: "",
      price: 20,
      description: "",
      water: "",
      light: "",
      pet: false,

      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newProduct}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="name">Plant Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={this.state.name}
                onChange={this.onChangeName}
                name="name"
              />
            </div>

            
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                className="form-control"
                id="price"
                step="5"
                required
                value={this.state.price}
                onChange={this.onChangePrice}
                name="price"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="description"
              />
            </div>

            <div className="form-group">
              <label htmlFor="water">Water</label>
              <input
                type="text"
                className="form-control"
                id="water"
                required
                value={this.state.water}
                onChange={this.onChangeWater}
                name="water"
              />
            </div>

            <div className="form-group">
              <label htmlFor="light">Light</label>
              <input
                type="text"
                className="form-control"
                id="light"
                required
                value={this.state.light}
                onChange={this.onChangeLight}
                name="light"
              />
            </div>

            <div className="form-group">
              <label htmlFor="pet">Pet & Children Friendly?</label>
              <input
                type="radio"
                className="form-control"
                id="pet"
                step="5"
                required
                value={this.state.pet}
                onChange={this.onChangeFriendly}
                name="pet"
              />
            </div>

            <button onClick={this.saveProduct} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
