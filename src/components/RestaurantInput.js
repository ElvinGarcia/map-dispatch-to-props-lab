import React, { Component } from 'react';
import { addRestaurant } from '../actions/restaurants';
import { connect } from 'react-redux';

export class RestaurantInput extends Component {

  state = {
    name: '',
    location: ''
  }

  handleOnNameChange = event => {
    this.setState({
      name: event.target.value
    });
  }

  handleOnLocationChange = event => {
    this.setState({
      location: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    // add missing code
    // debugger
    console.log("adding restaturant -this.state", this.state)
    console.log("this.props.restaurants", this.props.restaurants)
    this.props.restaurant(this.state)
    this.setState(this.state)
  }

  render() {
    return(
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnNameChange(event)}
            id="name"
            placeholder="restaurant name" />
        </p>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnLocationChange(event)}
            id="location"
            placeholder="location" />
        </p>
        <input type="submit" />
      </form>
    );
  }
};

const mapStateToProps = state => {
  console.log("inside mapStateToProps -state", state)
  return { restaurants:[{
    name: state.name,
    location: state.location
  }]
  };
};

const mapDispatchToProps = dispatch => {
  console.log("inside mapDispatchToProps -dispatch", dispatch)
  return {
    restaurant: (restaurant) => {
      dispatch(addRestaurant(restaurant))
    }
  };
};

//connect this component by wrapping RestaurantInput below
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantInput);
