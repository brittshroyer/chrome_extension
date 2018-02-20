import React, { Component } from 'react';
import '../css/crypto.css';

class Ethereum extends Component {
  constructor(props) {
    super(props);

    this.state = {
      priceUSD: null,
      priceBTC: null,
      marketCapUSD: null,
      percentChange: null,
      volume24H: null,
      lastUpdated: null,
      timeFrames: ['1h', '24h', '7d'],
      active: '24h'
    };
  }

  // *TODO set interval to get updates every few minutes
  // limit number of api requests

  componentDidMount() {
    this.fetchData().then(response => {
      let info = response;
      this.setState({
        priceUSD: info.price_usd,
        priceBTC: info.price_btc,
        marketCapUSD: info.market_cap_usd,
        percentChange: info.percent_change_24h,
        volume24H: info['24h_volume_usd'],
        lastUpdated: info.last_updated
      });
    });
  }

  fetchData() {
    const baseURL = "https://api.coinmarketcap.com/v1/ticker/",
          fetchURL = baseURL + 'ethereum/';

    return fetch(fetchURL, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
      return json[0];
    });
  }

  changeTimeFrame(timeFrame) {
    let value;

    if (timeFrame === '1h') {
      value = 'percent_change_1h';
    } else if (timeFrame === '24h') {
      value = 'percent_change_24h';
    } else {
      value = 'percent_change_7d';
    }

    this.fetchData().then(response => {
      this.setState({
        percentChange: response[value],
        priceUSD: response.price_usd,
        marketCapUSD: response.market_cap_usd,
        lastUpdated: response.last_updated,
        active: timeFrame
      });
    });
  }

  render() {
    const timeFrames = this.state.timeFrames.map(timeFrame => {
      let activeTime = this.state.active,
          style;

      if (activeTime === timeFrame) {
        style = {color: '#03a9f4'};
      } else {
        style = {color: '#9ca3bc'};
      }
      return <li key={timeFrame} style={style} onClick={() => this.changeTimeFrame(timeFrame)} className="timeFrame-item data-label">{timeFrame}</li>;
    });

    return (
      <div className="data-points">
        <div className="data-point percent-change">
          <p>{this.state.percentChange}%</p>
          <p className="timeFrames">{timeFrames}</p>
        </div>
        <div className="data-point price">
          <p>${(Math.round(this.state.priceUSD * 100) / 100).toFixed(2)}</p>
        </div>
        <div className="data-point market-cap">
          <p>{(Math.round(this.state.marketCapUSD * 100) / Math.pow(10, 11)).toFixed(2)}B</p>
          <p className="data-label">Market Cap</p>
        </div>
      </div>
    );
  }
}

export default Ethereum;
