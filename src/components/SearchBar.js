import React, { Component } from 'react';

export default class SearchBar extends Component{

  constructor(props){
      super(props);

      this.state = {
        term: ''
      }

      this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e){
      this.setState({ term: event.target.value });
  }

  render() {
    return(
      <form className="input-group">
        <input
          placeholder="Get five-day forecast in your favorite cities"
          className="form-control"
          value={ this.state.term }
          onChange={ this.onInputChange }
          />
        <span className="input-group-btn">
          <button type="Submit" className="btn btn-primary btn-sm">Submit</button>
        </span>
      </form>
    );
  }
}
