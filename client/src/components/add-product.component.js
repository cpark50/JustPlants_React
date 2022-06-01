import React, { Component } from "react";
import ProductDataService from "../services/product.service";

export default class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeOthername = this.onChangeOthername.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeSize = this.onChangeSize.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDescription2 = this.onChangeDescription2.bind(this);
    this.onChangeWater = this.onChangeWater.bind(this);
    this.onChangeLight = this.onChangeLight.bind(this);
    this.uploadPicture = this.uploadPicture.bind(this);
    this.onChangeFriendly = this.onChangeFriendly.bind(this);
    this.saveProduct = this.saveProduct.bind(this);
    this.newProduct = this.newProduct.bind(this);

    this.state = {
      id: null,
      p_name: "",
      p_othername: "", 
      p_price: 20,
      p_desc: "",
      p_desc2: "",  
      p_water: "",
      p_light: "",
      p_pet: false,
      imagename: "", 
      submitted: false
    };
  }
  
  onChangeId(e) {
    this.setState({
      id: e.target.value
    });
  }

  onChangeName(e) {
    this.setState({
      p_name: e.target.value
    });
  }

  onChangeOthername(e) {
    this.setState({
      p_othername: e.target.value
    });
  }

  onChangePrice(e) {
    this.setState({
      p_price: e.target.value
    });
  }

  onChangeSize(e) {
    this.setState({
      p_size: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      p_desc: e.target.value
    });
  }

  onChangeDescription2(e) {
    this.setState({
      p_desc2: e.target.value
    });
  }

  onChangeWater(e) {
    this.setState({
      p_water: e.target.value
    });
  }

  onChangeLight(e) {
    this.setState({
      p_light: e.target.value
    });
  }

  onChangeFriendly(e) {
    this.setState({
      p_pet: e.target.value
    });
  }

  uploadPicture(e) {
    this.setState({
      picturePreview : URL.createObjectURL(e.target.files[0]),
      pictureAsFile : e.target.files[0]
    });
  }

  saveProduct() {
    var data = {
      id: this.state.id,
      p_name: this.state.p_name,
      p_othername: this.state.p_othername,
      p_price: this.state.p_price,
      p_size: this.state.p_size,
      p_desc: this.state.p_desc,
      p_desc2: this.state.p_desc2,
      p_water: this.state.p_water,
      p_light: this.state.p_light,
      p_pet: this.state.p_pet,
      imagename: this.state.imagename
    };

    ProductDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          p_name: response.data.p_name,
          p_othername: response.data.p_othername,
          p_price: response.data.p_price,
          p_size: response.data.p_size,
          p_desc: response.data.p_desc,
          p_desc2: response.data.p_desc2,
          p_water: response.data.p_water,
          p_light: response.data.p_light,
          p_pet: response.data.p_pet,
          imagename: response.data.imagename,
          
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
      p_name: "",
      p_othername: "",
      p_price: 20,
      p_size: "width * height * diameter",
      p_desc: "first 255 chars of description",
      p_desc2: "rest of the description (under 255 chars)",
      p_water: "",
      p_light: "",
      p_pet: false,
      imagename: "file name",
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
              <label htmlFor="id">id</label>
              <input
                type="number"
                className="form-control"
                id="id"
                required
                value={this.state.id}
                onChange={this.onChangeId}
                name="id"
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Plant Name</label>
              <input
                type="text"
                className="form-control"
                id="p_name"
                required
                value={this.state.p_name}
                onChange={this.onChangeName}
                name="p_name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="p_othername">Plant's Biological Name</label>
              <input
                type="text"
                className="form-control"
                id="p_othername"
                required
                value={this.state.p_othername}
                onChange={this.onChangeOthername}
                name="p_othername"
              />
            </div>
      
            <div className="form-group">
              <label htmlFor="p_price">Price (multiple of 5)</label>
              <input
                type="number"
                className="form-control"
                id="p_price"
                step="5"
                required
                value={this.state.p_price}
                onChange={this.onChangePrice}
                name="p_price"
              />
            </div>
            <div className="form-group">
              <label htmlFor="p_size">Size (width * height * diameter in cm)</label>
              <input
                type="text"
                className="form-control"
                id="p_size"
                required
                value={this.state.p_size}
                onChange={this.onChangeSize}
                name="p_size"
              />
            </div>

            <div className="form-group">
              <label htmlFor="p_desc">Description (first 255 characters)</label>
              <input
                type="text"
                className="form-control"
                id="p_desc"
                required
                value={this.state.p_desc}
                onChange={this.onChangeDescription}
                name="p_desc"
              />
            </div>
            <div className="form-group">
              <label htmlFor="p_desc2">Description (rest of  255 characters)</label>
              <input
                type="text"
                className="form-control"
                id="p_desc2"
                required
                value={this.state.p_desc2}
                onChange={this.onChangeDescription2}
                name="p_desc2"
              />
            </div>

            <div className="form-group">
              <label htmlFor="p_water">Water</label>
              <input
                type="text"
                className="form-control"
                id="p_water"
                required
                value={this.state.p_water}
                onChange={this.onChangeWater}
                name="p_water"
              />
            </div>

            <div className="form-group">
              <label htmlFor="p_light">Light</label>
              <input
                type="text"
                className="form-control"
                id="p_light"
                required
                value={this.state.p_light}
                onChange={this.onChangeLight}
                name="p_light"
              />
            </div>

            <div className="form-group">
              <label htmlFor="p_pet">Pet & Children Friendly?</label>
              <input
                type="radio"
                className="form-control"
                id="p_pet"
                required
                value={this.state.p_pet}
                onChange={this.onChangeFriendly}
                name="p_pet"
              />
            </div>
            {/* Find way to upload image & save the imagename into the db */}
            <div className="form-group">
              <label htmlFor="image">Product Image</label>
              <input
                type="file"
                className="form-control"
                onChange={this.uploadPicture}
                name="image"
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
