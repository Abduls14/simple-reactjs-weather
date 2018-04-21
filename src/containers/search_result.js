import React from "react";
import { connect } from "react-redux";
import OpenWeatherMap from "react-open-weather-map";

const SearchResult = ({ searchedWeather, searchLoading }) => {
  if (searchLoading) {
    return (
      <div className="col s10">
        <span className="card-title">{}</span>
        <div className="progress">
          <div className="indeterminate" />
        </div>
      </div>
    );
  } else if (searchedWeather.data) {
    return (
      <div className="col s10">
        <div className="card-panel grey lighten-5 z-depth-1">
          <div className="row valign-wrapper">
            <div className="col s12">
              <span className="black-text">
                <OpenWeatherMap {...searchedWeather} />
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <div />;
};
const mapStateToProps = ({ weather: { searchLoading, searchedWeather } }) => ({
  searchLoading,
  searchedWeather: { data: searchedWeather }
});

export default connect(mapStateToProps)(SearchResult);
