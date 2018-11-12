import React from 'react';
import './WeatherCard.css';
import '../../fonts/fonts.css';
import Sun from './img/sun.svg';
import { ReactComponent as Cloud} from './img/cloud.svg';
import { ReactComponent as RainStrong} from './img/rain-strong.svg';
import { ReactComponent as RainSun} from './img/rain-sun.svg';
import { ReactComponent as Rain} from './img/rain.svg';
import { ReactComponent as Snow} from './img/snow.svg';
import { ReactComponent as SnowStrong} from './img/snow-strong.svg';
import { ReactComponent as Humidity} from './img/humidity.svg';
import { ReactComponent as Wind} from './img/wind.svg';

const picts = {
  sun: Sun,
  cloud: <Cloud />,
  rain: <Rain />,
  rainStrong: <RainStrong />,
  rainSun: <RainSun />,
  snow: <Snow />,
  snowStrong: <SnowStrong />
}

function svgRendered(svg) {
  return(
    `<svg viewBox="${svg.viewBox}">
        <use xlink:href="#${svg.id}" />
    </svg>`
  );
}

class WeatherCard extends React.Component {

  render() {
    console.log('Sun: ' + Sun);
    console.log('Sun.id: ' + Sun.id);
    return(
      <article className="weather-card">
        <div className="weather-card__weekday">
          <span>
            {this.props.data.date.toLocaleString(this.props.locale, {weekday: 'short'})}
          </span>
        </div>
        <div className="weather-card__main">
          <div className="weather-card__pict">
            {svgRendered(picts[this.props.data.fallout])}
          </div>
          <div className="weather-card__temp">
            {this.props.data.temp}
          </div>
        </div>
        <div className="weather-card__delimeter"></div>
        <div className="weather-card__add">
          <div className="weather-card__wind">
            <Wind />
            {this.props.data.wind}
          </div>
          <div className="weather-card__humidity">
            <Humidity />
            {this.props.data.humidity}
          </div>
          <div className="weather-card__city">{this.props.city}</div>
          <div className="weather-card__date">
            {this.props.data.date.toLocaleString(this.props.locale, {month: 'short', day: 'numeric'})}
          </div>
        </div>
      </article>
      );
  }
}

export default WeatherCard;
