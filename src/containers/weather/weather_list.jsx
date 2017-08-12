import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../../components/chart';

class WeatherList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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
    const temps = weather.list.map(w => w.main.temp);
    const pressures = weather.list.map(w => w.main.pressure);
    const humidities = weather.list.map(w => w.main.humidity);

    return (
      <tr key={i}>
        <td>{weather.city.name}</td>
        <td><Chart color="orange" data={temps}/></td>
        <td><Chart color="purple" data={pressures}/></td>
        <td><Chart color="blue" data={humidities}/></td>
      </tr>
    );
  }

}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
