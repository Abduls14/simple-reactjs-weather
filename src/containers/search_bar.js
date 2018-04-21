import React, { Component } from "react";
import { connect } from "react-redux";
import { getCityWeather } from "../actions";

class SearchBar extends Component {
  state = { term: "" };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.getCityWeather(this.state.term);
    this.setState({ term: "" });
  };

  render() {
    return (
      <div className="row">
        <form onSubmit={this.onFormSubmit} className="col s12">
          <div className="row">
            <div className="input-field col s8">
              <input
                id="query"
                onChange={this.onInputChange}
                value={this.state.term}
                className="validate"
                type="text"
              />
              <label htmlFor="query">City</label>
            </div>
            <div className="input-field col s4">
              <button
                className="btn waves-effect waves-light"
                type="submit"
                name="action"
              >
                Get
                <i className="material-icons right">cloud</i>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { getCityWeather })(SearchBar);
