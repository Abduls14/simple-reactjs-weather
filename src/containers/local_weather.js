import React, { Component } from "react";
import { connect } from "react-redux";
import { getLocalWeather } from "../actions";
import OpenWeatherMap from "react-open-weather-map";

class LocalWeather extends Component {
  componentWillMount() {
    this.props.getLocalWeather();
  }

  renderLocalWeather = () => {
    if (this.props.localLoading) {
      return (
        <div>
          <span className="card-title">{}</span>
          <div className="progress">
            <div className="indeterminate" />
          </div>
        </div>
      );
    }
    return <OpenWeatherMap {...this.props.localWeather} />;
  };

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="card teal lighten-2">
            <div className="card-content white-text">
              {this.renderLocalWeather()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ weather: { localLoading, localWeather } }) => {
  return { localLoading, localWeather: { data: localWeather } };
};

export default connect(mapStateToProps, { getLocalWeather })(LocalWeather);
