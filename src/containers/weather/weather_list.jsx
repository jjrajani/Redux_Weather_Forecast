import React, { Component } from 'react';

import { connect } from 'react-redux';

class WeatherList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.weather);
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }

  renderWeather(weather, i) {
    return (
      <tr key={i}>
        <td>{weather.city.name}</td>
      </tr>
    );
  }

}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
